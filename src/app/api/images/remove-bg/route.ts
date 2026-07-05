import { NextRequest, NextResponse } from "next/server";
import { getCarousel } from "@/lib/carousels";
import { updateReferenceImageCutout } from "@/lib/carousels";
import { removeBackground, saveCutout } from "@/lib/background-removal";
import path from "path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60; // Background removal can take time

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { carouselId, imageId } = body;

    if (!carouselId || !imageId) {
      return NextResponse.json(
        { error: "carouselId and imageId are required" },
        { status: 400 }
      );
    }

    // Fetch carousel and find the reference image
    const carousel = await getCarousel(carouselId);
    if (!carousel) {
      return NextResponse.json({ error: "Carousel not found" }, { status: 404 });
    }

    const refImage = carousel.referenceImages?.find((img) => img.id === imageId);
    if (!refImage) {
      return NextResponse.json(
        { error: "Reference image not found" },
        { status: 404 }
      );
    }

    // Update status to pending
    await updateReferenceImageCutout(carouselId, imageId, "", "pending");

    // Get absolute path to the source image
    const sourcePath = path.resolve(process.cwd(), "public", refImage.url);

    // Perform background removal
    const result = await removeBackground(sourcePath);

    if (!result.success || !result.buffer) {
      // Update status to failed
      await updateReferenceImageCutout(carouselId, imageId, "", "failed");
      return NextResponse.json(
        { error: result.error || "Background removal failed" },
        { status: 500 }
      );
    }

    // Save the cutout
    const cutoutUrl = await saveCutout(carouselId, imageId, result.buffer);

    // Update the reference image with cutout URL and ready status
    await updateReferenceImageCutout(carouselId, imageId, cutoutUrl, "ready");

    return NextResponse.json({ cutoutUrl });
  } catch (error) {
    console.error("Background removal error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}