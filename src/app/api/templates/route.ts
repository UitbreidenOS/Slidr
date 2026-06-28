import { NextResponse } from "next/server";
import { listTemplates, saveAsTemplate } from "@/lib/templates";
import { getCarousel } from "@/lib/carousels";

export async function GET() {
  const templates = await listTemplates();
  return NextResponse.json({ templates });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { carouselId, name, description } = body as {
      carouselId?: string;
      name?: string;
      description?: string;
    };

    if (!carouselId) {
      return NextResponse.json(
        { error: "carouselId is required" },
        { status: 400 }
      );
    }

    const carousel = await getCarousel(carouselId);
    if (!carousel) {
      return NextResponse.json(
        { error: "Carousel not found" },
        { status: 404 }
      );
    }

    const template = await saveAsTemplate(carousel, name, description);
    return NextResponse.json(template, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
