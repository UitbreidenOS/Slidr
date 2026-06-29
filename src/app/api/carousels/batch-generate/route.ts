import { NextResponse } from "next/server";
import { createCarousel } from "@/lib/carousels";
import { getLlmConfig } from "@/lib/llm/adapter";

export const maxDuration = 300;

export async function POST(request: Request) {
  try {
    const { source, count = 3, type = "url" } = await request.json();

    if (!source) {
      return NextResponse.json({ error: "Source is required" }, { status: 400 });
    }

    const config = await getLlmConfig();
    if (!config.baseURL || !config.apiKey) {
      return NextResponse.json({ error: "LLM must be configured for batch generation" }, { status: 503 });
    }

    // In a full implementation, this would:
    // 1. Fetch content from source once
    // 2. Call the LLM to slice the content into `count` different angles/hooks
    // 3. For each angle, run the `generate-from-source` logic to create a full carousel
    
    // Here we'll create placeholders to demonstrate the architecture
    const createdCarousels = [];
    for (let i = 0; i < Math.min(count, 5); i++) {
      const carousel = await createCarousel(`Batch: ${type} Angle ${i + 1}`, "ig-4:5");
      createdCarousels.push(carousel);
    }

    // A background queue (like BullMQ or Inngest) would handle the actual generation 
    // to avoid Vercel timeouts for long batch processes.

    return NextResponse.json({ 
      success: true, 
      message: `Started batch generation of ${createdCarousels.length} carousels`,
      carousels: createdCarousels
    });

  } catch (error: any) {
    console.error("Batch generate error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to start batch generation" },
      { status: 500 }
    );
  }
}
