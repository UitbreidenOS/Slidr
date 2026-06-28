import { NextResponse } from "next/server";
import archiver from "archiver";
import { getCarousel } from "@/lib/carousels";
import { exportAllSlides, exportSlidesAsPdf, getExportFormatForRatio } from "@/lib/export-slides";
import { getExportFormat } from "@/types/carousel";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 120;

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const carousel = await getCarousel(id);

  if (!carousel) {
    return NextResponse.json({ error: "Carousel not found" }, { status: 404 });
  }

  if (carousel.slides.length === 0) {
    return NextResponse.json({ error: "No slides to export" }, { status: 400 });
  }

  // Check if the request wants a specific format (via query param)
  const url = new URL(request.url);
  const requestedFormat = url.searchParams.get("format");
  const platformFormat = getExportFormat(carousel.aspectRatio);
  const exportFormat = requestedFormat === "png" || requestedFormat === "pdf"
    ? requestedFormat
    : platformFormat;

  const safeName = carousel.name.replace(/[^a-zA-Z0-9-_]/g, "_");

  try {
    if (exportFormat === "pdf") {
      // Export as PDF (LinkedIn carousels)
      const pdfBuffer = await exportSlidesAsPdf(
        carousel.slides,
        carousel.aspectRatio
      );

      return new Response(new Uint8Array(pdfBuffer), {
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": `attachment; filename="carousel-${safeName}.pdf"`,
        },
      });
    } else {
      // Export as PNG ZIP (Instagram/TikTok carousels)
      const pngBuffers = await exportAllSlides(
        carousel.slides,
        carousel.aspectRatio
      );

      const zipBuffer = await new Promise<Buffer>((resolve, reject) => {
        const archive = archiver("zip", { zlib: { level: 5 } });
        const chunks: Buffer[] = [];

        archive.on("data", (chunk: Buffer) => chunks.push(chunk));
        archive.on("end", () => resolve(Buffer.concat(chunks)));
        archive.on("error", (err) => reject(err));

        try {
          for (const { name, buffer } of pngBuffers) {
            archive.append(buffer, { name });
          }
          archive.finalize();
        } catch (err) {
          archive.destroy();
          reject(err);
        }
      });

      return new Response(new Uint8Array(zipBuffer), {
        headers: {
          "Content-Type": "application/zip",
          "Content-Disposition": `attachment; filename="carousel-${safeName}.zip"`,
        },
      });
    }
  } catch (error) {
    console.error("Export error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Export failed: ${message}` },
      { status: 500 }
    );
  }
}
