import { NextResponse } from "next/server";
import OpenAI from "openai";
import { getLlmConfig } from "@/lib/llm/adapter";

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    const config = await getLlmConfig();
    
    // We need a valid API key for image generation.
    // DALL-E 3 is the default, but if the user has a custom baseURL for image generation, we'll try to use it.
    if (!config.apiKey) {
      return NextResponse.json(
        { error: "Image generation requires an API key in settings." },
        { status: 403 }
      );
    }

    const openai = new OpenAI({
      apiKey: config.apiKey,
      baseURL: config.baseURL || "https://api.openai.com/v1",
    });

    const response = await openai.images.generate({
      model: "dall-e-3", // Default to DALL-E 3
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "url", // or b64_json
    });

    const imageUrl = response.data?.[0]?.url;

    if (!imageUrl) {
      throw new Error("Failed to generate image.");
    }

    return NextResponse.json({ url: imageUrl });
  } catch (error: any) {
    console.error("Image generation error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to generate image" },
      { status: 500 }
    );
  }
}
