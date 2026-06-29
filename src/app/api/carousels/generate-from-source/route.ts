import { NextRequest, NextResponse } from "next/server";
import { YoutubeTranscript } from "youtube-transcript";
import * as cheerio from "cheerio";
const pdfParse = require("pdf-parse");
import { createCarousel, getCarousel } from "@/lib/carousels";
import { generateStream, getLlmConfig, detectPreferredCli } from "@/lib/llm/adapter";
import { getBrand } from "@/lib/brand";
import { getPreset } from "@/lib/style-presets";
import { getTheme } from "@/lib/themes";
import type { LlmStreamEvent } from "@/lib/llm/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 300;

export async function POST(request: NextRequest) {
  let body: {
    type: "url" | "youtube" | "pdf" | "text";
    source: string;
    name?: string;
    aspectRatio?: any;
    stylePresetId?: string;
    themeId?: string;
  };
  
  try {
    // For PDF, we might need to handle FormData or base64. Let's assume JSON with base64 for now, or just text if it's text.
    // If it's a FormData request, we handle it separately.
    const contentType = request.headers.get("content-type") || "";
    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      body = {
        type: formData.get("type") as "url" | "youtube" | "pdf" | "text",
        source: "", // handled below
        name: formData.get("name") as string,
        aspectRatio: formData.get("aspectRatio"),
        stylePresetId: formData.get("stylePresetId") as string,
        themeId: formData.get("themeId") as string,
      };
      
      if (body.type === "pdf") {
        const file = formData.get("file") as File;
        if (file) {
          const buffer = Buffer.from(await file.arrayBuffer());
          const pdfData = await pdfParse(buffer);
          body.source = pdfData.text;
        }
      } else {
        body.source = formData.get("source") as string;
      }
    } else {
      body = await request.json();
    }
  } catch (err) {
    return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
  }

  const { type, source, name, aspectRatio, stylePresetId, themeId } = body;

  if (!type || !source) {
    return NextResponse.json({ error: "Missing type or source" }, { status: 400 });
  }

  const config = await getLlmConfig();
  const cliInfo = detectPreferredCli();

  const httpConfigured = !!(config.baseURL && config.apiKey && config.model);
  const cliConfigured = !!cliInfo;

  if (!httpConfigured && !cliConfigured) {
    return NextResponse.json(
      { error: "No LLM configured." },
      { status: 503 }
    );
  }

  // 1. Extract raw content
  let extractedText = "";
  try {
    if (type === "url") {
      const resp = await fetch(source, { signal: AbortSignal.timeout(15000) });
      const html = await resp.text();
      const $ = cheerio.load(html);
      // Remove scripts, styles, etc.
      $("script, style, nav, footer, iframe, img, svg").remove();
      extractedText = $("body").text().replace(/\s+/g, " ").trim();
      extractedText = extractedText.substring(0, 15000); // Limit length
    } else if (type === "youtube") {
      // Extract video ID from URL
      const match = source.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
      if (match && match[1]) {
        const transcripts = await YoutubeTranscript.fetchTranscript(match[1]);
        extractedText = transcripts.map(t => t.text).join(" ").substring(0, 15000);
      } else {
        return NextResponse.json({ error: "Invalid YouTube URL" }, { status: 400 });
      }
    } else if (type === "pdf") {
      // If it came as JSON and source is base64
      if (source.startsWith("data:application/pdf;base64,")) {
        const b64 = source.split(",")[1];
        const buffer = Buffer.from(b64, "base64");
        const pdfData = await pdfParse(buffer);
        extractedText = pdfData.text.substring(0, 15000);
      } else {
        extractedText = source.substring(0, 15000);
      }
    } else if (type === "text") {
      extractedText = source.substring(0, 15000);
    }
  } catch (err) {
    return NextResponse.json({ error: `Extraction failed: ${(err as Error).message}` }, { status: 400 });
  }

  if (!extractedText) {
    return NextResponse.json({ error: "Could not extract text from source" }, { status: 400 });
  }

  // 2. Create Carousel
  const carouselName = name || `Repurposed ${type.charAt(0).toUpperCase() + type.slice(1)}`;
  const ratio = aspectRatio || "ig-4:5";
  const carousel = await createCarousel(carouselName, ratio);

  // 3. System Prompt for Repurposing
  const brand = await getBrand();
  const stylePreset = stylePresetId ? await getPreset(stylePresetId) : null;
  const theme = themeId ? await getTheme(themeId) : null;

  let effectiveMode: "http" | "cli" = "http";
  if (config.mode === "cli") {
    effectiveMode = "cli";
  } else if (config.mode === "http") {
    effectiveMode = "http";
  } else {
    effectiveMode = httpConfigured ? "http" : "cli";
  }

  const basePrompt = `You are an expert content creator. Your task is to extract the key value from the provided source material and structure it into a compelling social media carousel (5-10 slides).
Each slide MUST have a 'hook' or 'heading', some 'body' text, and use the 'create_slide' tool to save it.
The last slide MUST be a call to action.
Always generate slides sequentially.
Source Type: ${type.toUpperCase()}`;

  // We append standard brand/theme rules
  let systemPrompt = basePrompt;
  if (brand?.name) {
    systemPrompt += `\nBrand Voice: ${brand.name}`;
  }

  const userMessage = `Here is the source content:\n\n${extractedText}\n\nPlease generate a full carousel based on this content.`;

  // We will stream back the generation to the UI so it sees progress
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      // Send the newly created carousel ID immediately so UI can redirect/show it
      controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: "carousel_created", carousel })}\n\n`));

      const onEvent = (event: LlmStreamEvent) => {
        try {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(event)}\n\n`));
        } catch {
          // closed
        }
      };

      try {
        await generateStream(carousel.id, userMessage, systemPrompt, config, onEvent);
      } catch (err) {
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify({ type: "error", error: `Stream error: ${(err as Error).message}` })}\n\n`)
        );
      } finally {
        try {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: "done" })}\n\n`));
          controller.close();
        } catch {
          // closed
        }
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
