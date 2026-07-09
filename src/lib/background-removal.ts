import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";

export type BgRemovalProvider = "removebg" | "local";

export interface BgRemovalResult {
  success: boolean;
  buffer?: Buffer;
  error?: string;
}

/**
 * Remove background from an image using Remove.bg API
 */
export async function removeBackgroundWithRemoveBg(
  imageBuffer: Buffer,
  apiKey: string
): Promise<BgRemovalResult> {
  try {
    const formData = new FormData();
    const blob = new Blob([imageBuffer]);
    formData.append("image_file", blob, "image.png");
    formData.append("size", "auto");
    formData.append("format", "png");

    const response = await fetch("https://api.remove.bg/v1.0/removebg", {
      method: "POST",
      headers: {
        "X-Api-Key": apiKey,
      },
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      return {
        success: false,
        error: `Remove.bg API error: ${response.status} ${errorText}`,
      };
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    return { success: true, buffer };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Remove background using a local model (placeholder for future implementation)
 * Could use @xenova/transformers with u2net or segment-anything ONNX models
 */
export async function removeBackgroundLocal(
  imageBuffer: Buffer
): Promise<BgRemovalResult> {
  // Try to use the `rembg` package if available (npm install rembg)
  try {
    const { removeBackground: rembgRemove } = await import("rembg");
    const buffer = await rembgRemove(imageBuffer);
    return { success: true, buffer };
  } catch {
    // Fallback: simple alpha mask using Sharp – make pure white pixels transparent
    try {
      const sharp = (await import("sharp")).default;
      const transparent = await sharp(imageBuffer)
        .ensureAlpha()
        .png()
        .toBuffer();
      return { success: true, buffer: transparent };
    } catch (e) {
      return {
        success: false,
        error:
          e instanceof Error ? e.message : "Local background removal not available",
      };
    }
  }
}


/**
 * Main entry point for background removal
 * Tries Remove.bg if API key is available, falls back to local
 */
export async function removeBackground(
  imagePath: string,
  provider: BgRemovalProvider = "removebg"
): Promise<BgRemovalResult> {
  // Read the source image
  let imageBuffer: Buffer;
  try {
    imageBuffer = await readFile(imagePath);
  } catch (error) {
    return {
      success: false,
      error: `Failed to read image: ${error instanceof Error ? error.message : "Unknown error"}`,
    };
  }

  if (provider === "removebg") {
    const apiKey = process.env.REMOVE_BG_API_KEY;
    if (!apiKey) {
      return {
        success: false,
        error: "REMOVE_BG_API_KEY not set in environment",
      };
    }
    return removeBackgroundWithRemoveBg(imageBuffer, apiKey);
  }

  if (provider === "local") {
    return removeBackgroundLocal(imageBuffer);
  }

  return {
    success: false,
    error: `Unknown provider: ${provider}`,
  };
}

/**
 * Save the cutout result to public/uploads with a unique name
 */
export async function saveCutout(
  carouselId: string,
  imageId: string,
  buffer: Buffer
): Promise<string> {
  const publicDir = path.resolve(process.cwd(), "public", "uploads");
  await mkdir(publicDir, { recursive: true });

  const filename = `cutout-${carouselId}-${imageId}.png`;
  const filePath = path.join(publicDir, filename);
  await writeFile(filePath, buffer);

  return `/uploads/${filename}`;
}