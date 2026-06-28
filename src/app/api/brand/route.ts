import { NextResponse } from "next/server";
import { getBrand, updateBrand } from "@/lib/brand";

export async function GET() {
  const brand = await getBrand();
  return NextResponse.json(brand);
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const updated = await updateBrand(body);
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
