import { NextResponse } from "next/server";
import { duplicateCarousel } from "@/lib/carousels";

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const duplicate = await duplicateCarousel(id);
    if (!duplicate) {
      return NextResponse.json({ error: "Carousel not found" }, { status: 404 });
    }
    return NextResponse.json(duplicate, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to duplicate" }, { status: 500 });
  }
}
