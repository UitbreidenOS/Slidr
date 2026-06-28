import { NextResponse } from "next/server";
import { listCarousels, createCarousel } from "@/lib/carousels";
import type { AspectRatio } from "@/types/carousel";
import { ALL_ASPECT_RATIOS } from "@/types/carousel";

export async function GET() {
  const carousels = await listCarousels();
  return NextResponse.json({ carousels });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, aspectRatio } = body as {
      name?: string;
      aspectRatio?: AspectRatio;
    };

    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }

    const ratio = ALL_ASPECT_RATIOS.includes(aspectRatio as AspectRatio)
      ? (aspectRatio as AspectRatio)
      : "ig-4:5";

    const carousel = await createCarousel(name.trim(), ratio);
    return NextResponse.json(carousel, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
