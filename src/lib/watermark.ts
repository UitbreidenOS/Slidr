/**
 * Slidr watermark — non-removable badge composited onto exported slides.
 * Rendered as a Puppeteer overlay AFTER slide HTML renders, so it cannot
 * be removed by editing slide HTML.
 */

export interface WatermarkConfig {
  text: string;
  fontSize: number;
  opacity: number;
  bottomPadding: number;
  rightPadding: number;
  bgColor: string;
  textColor: string;
  borderRadius: number;
}

export const DEFAULT_WATERMARK: WatermarkConfig = {
  text: "⚡ Made with Slidr",
  fontSize: 18,
  opacity: 0.75,
  bottomPadding: 24,
  rightPadding: 24,
  bgColor: "#000000",
  textColor: "#ffffff",
  borderRadius: 8,
};

/**
 * Generate the watermark as an HTML overlay string for Puppeteer injection.
 * This is added as a fixed-position element AFTER the slide content renders.
 */
export function watermarkOverlayHtml(config: WatermarkConfig = DEFAULT_WATERMARK): string {
  return `<div style="
    position: fixed;
    bottom: ${config.bottomPadding}px;
    right: ${config.rightPadding}px;
    background: ${config.bgColor};
    color: ${config.textColor};
    padding: 8px 16px;
    border-radius: ${config.borderRadius}px;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    font-size: ${config.fontSize}px;
    font-weight: 600;
    opacity: ${config.opacity};
    letter-spacing: 0.02em;
    z-index: 99999;
    pointer-events: none;
    user-select: none;
  ">${config.text}</div>`;
}

/**
 * Generate a faint preview watermark for the editor iframe.
 * Lower opacity so users see it but it doesn't dominate the preview.
 */
export function previewWatermarkHtml(config: WatermarkConfig = DEFAULT_WATERMARK): string {
  return `<div style="
    position: fixed;
    bottom: ${config.bottomPadding}px;
    right: ${config.rightPadding}px;
    background: ${config.bgColor};
    color: ${config.textColor};
    padding: 6px 12px;
    border-radius: ${config.borderRadius}px;
    font-family: 'Inter', system-ui, sans-serif;
    font-size: ${config.fontSize - 2}px;
    font-weight: 600;
    opacity: 0.4;
    letter-spacing: 0.02em;
    z-index: 99999;
    pointer-events: none;
    user-select: none;
  ">${config.text}</div>`;
}

/**
 * Inject the watermark into a Puppeteer page after it has rendered.
 */
export async function injectWatermarkIntoPage(
  page: import("puppeteer").Page,
  licenseValid: boolean,
  config: WatermarkConfig = DEFAULT_WATERMARK
): Promise<void> {
  if (licenseValid) return;

  await page.addStyleTag({
    content: `
    .slidr-watermark {
      position: fixed;
      bottom: ${config.bottomPadding}px;
      right: ${config.rightPadding}px;
      background: ${config.bgColor};
      color: ${config.textColor};
      padding: 8px 16px;
      border-radius: ${config.borderRadius}px;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      font-size: ${config.fontSize}px;
      font-weight: 600;
      opacity: ${config.opacity};
      letter-spacing: 0.02em;
      z-index: 99999;
      pointer-events: none;
      user-select: none;
    }`,
  });

  await page.evaluate((text: string) => {
    const div = document.createElement("div");
    div.className = "slidr-watermark";
    div.textContent = text;
    document.body.appendChild(div);
  }, config.text);
}
