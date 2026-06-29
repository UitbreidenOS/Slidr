import { NextResponse } from "next/server";
import sharp from "sharp";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "File is required" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    // In a full implementation, we'd use a background removal AI model here (e.g., rembg, fal.ai, remove.bg API).
    // For this demonstration, we'll simulate it or apply a basic image transformation if no API is available.
    // If the user has a BYOK API for image generation, they might have one for bg removal.
    // We'll use sharp to convert to PNG and ensure it has an alpha channel, which is required for transparency.
    // Actual background removal requires an AI model.

    const processedBuffer = await sharp(buffer)
      .ensureAlpha()
      // .threshold() // Mock processing
      .png()
      .toBuffer();

    const base64 = processedBuffer.toString("base64");
    const dataUrl = `data:image/png;base64,${base64}`;

    return NextResponse.json({ url: dataUrl });
  } catch (error: any) {
    console.error("Remove BG error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to remove background" },
      { status: 500 }
    );
  }
}
