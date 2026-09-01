import { NextRequest, NextResponse } from "next/server";
import { createCarousel, addSlide } from "@/lib/carousels";
import { marked } from "marked";
import type { AspectRatio } from "@/types/carousel";
import { getBrand } from "@/lib/brand";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const { source, name, aspectRatio } = await request.json();

    if (!source) {
      return NextResponse.json({ error: "Missing markdown source" }, { status: 400 });
    }

    const carouselName = name || "Imported Markdown";
    const ratio = (aspectRatio as AspectRatio) || "ig-4:5";
    const carousel = await createCarousel(carouselName, ratio);

    const brand = await getBrand();
    const bg = brand?.colors.background || "#0a0a0f";
    const fg = brand?.colors.surface === bg ? "#ffffff" : "#e2e8f0"; // Fallback foreground
    const primary = brand?.colors.primary || "#a78bfa";
    
    // Split the markdown by `---` (horizontal rule)
    const rawSlides = source.split(/\n---\n/);
    
    for (const rawSlide of rawSlides) {
      if (!rawSlide.trim()) continue;
      
      const htmlContent = await marked.parse(rawSlide.trim());
      
      // We inject some inline CSS to style the raw HTML nicely.
      // We also use flexbox to center the content vertically by default.
      const styledHtml = `
        <div style="display: flex; flex-direction: column; justify-content: center; height: 100%; padding: 80px; background-color: ${bg}; color: ${fg};">
          <div style="font-size: 36px; line-height: 1.4; color: ${fg};">
            <style>
              h1, h2, h3 { color: ${primary}; margin-bottom: 24px; font-weight: 800; line-height: 1.2; }
              h1 { font-size: 64px; }
              h2 { font-size: 52px; }
              h3 { font-size: 40px; }
              p { margin-bottom: 24px; }
              ul, ol { margin-bottom: 24px; padding-left: 40px; }
              li { margin-bottom: 12px; }
              strong { color: ${primary}; }
            </style>
            ${htmlContent}
          </div>
        </div>
      `;

      await addSlide(carousel.id, styledHtml.trim(), "Imported from markdown");
    }

    return NextResponse.json({ carousel });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
