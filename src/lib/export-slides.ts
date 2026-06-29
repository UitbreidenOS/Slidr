import puppeteer, { type Browser } from "puppeteer";
import { readFile } from "fs/promises";
import path from "path";
import sharp from "sharp";
import { PDFDocument } from "pdf-lib";
import { wrapSlideHtml, extractFontFamilies } from "./slide-html";
import { getInlinedFontCSS } from "./fonts";
import { injectWatermarkIntoPage } from "./watermark";
import { isLicensed } from "./license";
import type { Slide, AspectRatio } from "@/types/carousel";
import { DIMENSIONS, getExportFormat } from "@/types/carousel";

// Singleton browser with lifecycle management
let browser: Browser | null = null;
let exportCount = 0;
const MAX_EXPORTS_BEFORE_RESTART = 50;

/**
 * Find a usable Chrome executable.
 * Prefers Puppeteer's bundled download, falls back to system Chrome/Chromium.
 */
function getChromeExecutablePath(): string | undefined {
  // Check common system Chrome locations (macOS, Linux, Windows)
  const candidates = [
    // macOS
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    // Linux
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
    // Windows
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  ];

  for (const candidate of candidates) {
    try {
      const { existsSync } = require("fs");
      if (existsSync(candidate)) return candidate;
    } catch {
      // ignore
    }
  }

  // Let Puppeteer use its own bundled download if no system Chrome found
  return undefined;
}

async function getBrowser(): Promise<Browser> {
  if (browser && exportCount >= MAX_EXPORTS_BEFORE_RESTART) {
    await browser.close().catch(() => {});
    browser = null;
    exportCount = 0;
  }
  if (!browser || !browser.isConnected()) {
    // Prefer system Chrome if Puppeteer's bundled download is missing/corrupt
    const executablePath = getChromeExecutablePath();
    browser = await puppeteer.launch({
      headless: true,
      executablePath,
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
    });
    exportCount = 0;
  }
  return browser;
}

/**
 * Inline all image references in slide HTML.
 * Replaces /uploads/xxx.png paths with data: URIs.
 */
async function inlineImages(html: string): Promise<string> {
  const uploadDir = path.resolve(process.cwd(), "public");
  const imgRegex = /(?:src=["']|url\(["']?)(\/uploads\/[^"'\s)]+)/g;
  const matches = [...html.matchAll(imgRegex)];

  let result = html;
  for (const match of matches) {
    const imgPath = match[1];
    try {
      const fullPath = path.join(uploadDir, imgPath);
      const buffer = await readFile(fullPath);
      const ext = path.extname(imgPath).toLowerCase();
      const mime =
        ext === ".png"
          ? "image/png"
          : ext === ".jpg" || ext === ".jpeg"
            ? "image/jpeg"
            : "image/webp";
      const base64 = buffer.toString("base64");
      result = result.replace(imgPath, `data:${mime};base64,${base64}`);
    } catch {
      // Keep original path — Puppeteer can fetch from localhost
    }
  }

  return result;
}

/**
 * Export a single slide to PNG buffer.
 * Composites the watermark overlay if the user is not licensed.
 */
export async function exportSlide(
  slide: Slide,
  aspectRatio: AspectRatio
): Promise<Buffer> {
  const { width, height } = DIMENSIONS[aspectRatio];

  // Get inlined font CSS
  const fontFamilies = extractFontFamilies(slide.html);
  const inlinedFontCss = await getInlinedFontCSS(fontFamilies);

  // Inline images
  const inlinedHtml = await inlineImages(slide.html);

  // Build self-contained HTML
  const fullHtml = wrapSlideHtml(inlinedHtml, aspectRatio, {
    inlineFontCss: inlinedFontCss,
  });

  // Check license
  const licensed = await isLicensed();

  const br = await getBrowser();
  const page = await br.newPage();

  try {
    await page.setViewport({ width, height, deviceScaleFactor: 1 });
    await page.setContent(fullHtml, { waitUntil: "domcontentloaded", timeout: 15000 });

    // Wait for fonts to be ready
    await page
      .waitForFunction(
        () =>
          document.fonts.ready.then(() =>
            [...document.fonts].every((f) => f.status === "loaded")
          ),
        { timeout: 10000 }
      )
      .catch(() => {
        // Font loading timeout — proceed with whatever loaded
      });

    // Inject watermark if not licensed
    await injectWatermarkIntoPage(page, licensed);

    const screenshotBuffer = await page.screenshot({
      type: "png",
      clip: { x: 0, y: 0, width, height },
    });

    exportCount++;

    // Post-process with Sharp: enforce sRGB
    const processed = await sharp(screenshotBuffer)
      .toColorspace("srgb")
      .png()
      .toBuffer();

    return processed;
  } finally {
    await page.close().catch(() => {});
  }
}

/**
 * Export all slides of a carousel to PNG buffers.
 * Processes up to 3 slides concurrently.
 */
export async function exportAllSlides(
  slides: Slide[],
  aspectRatio: AspectRatio,
  onProgress?: (current: number, total: number) => void
): Promise<{ name: string; buffer: Buffer }[]> {
  const results: { name: string; buffer: Buffer }[] = [];
  const CONCURRENCY = 3;

  for (let i = 0; i < slides.length; i += CONCURRENCY) {
    const batch = slides.slice(i, i + CONCURRENCY);
    const batchResults = await Promise.all(
      batch.map(async (slide, batchIdx) => {
        const idx = i + batchIdx;
        const buffer = await exportSlide(slide, aspectRatio);
        onProgress?.(idx + 1, slides.length);
        return { name: `slide-${idx + 1}.png`, buffer };
      })
    );
    results.push(...batchResults);
  }

  return results;
}

/**
 * Export all slides as a multi-page PDF (for LinkedIn carousels).
 * Each slide is screenshotted to PNG, then embedded as a PDF page.
 */
export async function exportSlidesAsPdf(
  slides: Slide[],
  aspectRatio: AspectRatio,
  onProgress?: (current: number, total: number) => void
): Promise<Buffer> {
  const { width, height } = DIMENSIONS[aspectRatio];
  const pdfDoc = await PDFDocument.create();

  // Export each slide to PNG, then embed in PDF
  for (let i = 0; i < slides.length; i++) {
    const pngBuffer = await exportSlide(slides[i], aspectRatio);
    const pngImage = await pdfDoc.embedPng(pngBuffer);
    const page = pdfDoc.addPage([width, height]);
    page.drawImage(pngImage, {
      x: 0,
      y: 0,
      width,
      height,
    });
    onProgress?.(i + 1, slides.length);
  }

  const pdfBytes = await pdfDoc.save();
  return Buffer.from(pdfBytes);
}

/**
 * Determine the export format for a given aspect ratio.
 */
export function getExportFormatForRatio(ratio: AspectRatio): "png" | "pdf" {
  return getExportFormat(ratio);
}
