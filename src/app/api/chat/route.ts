import { NextRequest, NextResponse } from "next/server";
import { getBrand } from "@/lib/brand";
import { getCarousel } from "@/lib/carousels";
import { getPreset } from "@/lib/style-presets";
import { buildSystemPrompt } from "@/lib/chat-system-prompt";
import { generateStream, getLlmConfig, detectPreferredCli } from "@/lib/llm/adapter";
import { getTheme } from "@/lib/themes";
import type { LlmStreamEvent } from "@/lib/llm/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 300;

export async function POST(request: NextRequest) {
  let body: {
    message?: string;
    carouselId?: string;
    stylePresetId?: string;
    themeId?: string;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { message, carouselId, stylePresetId, themeId } = body;

  if (
    !message ||
    typeof message !== "string" ||
    !message.trim() ||
    message.length > 10000
  ) {
    return NextResponse.json({ error: "Invalid message" }, { status: 400 });
  }

  const config = await getLlmConfig();
  const cliInfo = detectPreferredCli();

  // Check if anything is configured
  const httpConfigured = !!(config.baseURL && config.apiKey && config.model);
  const cliConfigured = !!cliInfo;

  if (!httpConfigured && !cliConfigured) {
    return NextResponse.json(
      {
        error:
          "No LLM configured. Open Settings and enter a base URL + API key (e.g. free Groq or Google tier), or install a coding CLI like Antigravity.",
      },
      { status: 503 }
    );
  }

  // Build dynamic system prompt
  const brand = await getBrand();
  const carousel = carouselId ? await getCarousel(carouselId) : null;
  const stylePreset = stylePresetId ? await getPreset(stylePresetId) : null;
  const theme = themeId ? await getTheme(themeId) : (carousel?.themeId ? await getTheme(carousel.themeId) : null);

  // Determine effective mode for prompt formatting
  let effectiveMode: "http" | "cli" = "http";
  if (config.mode === "cli") {
    effectiveMode = "cli";
  } else if (config.mode === "http") {
    effectiveMode = "http";
  } else {
    // auto: prefer http if configured, else cli
    effectiveMode = httpConfigured ? "http" : "cli";
  }

  const systemPrompt = buildSystemPrompt(brand, carousel, stylePreset, theme, effectiveMode);

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      const onEvent = (event: LlmStreamEvent) => {
        try {
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify(event)}\n\n`)
          );
        } catch {
          // stream already closed
        }
      };

      try {
        await generateStream(
          carouselId || "",
          message,
          systemPrompt,
          config,
          onEvent
        );
      } catch (err) {
        controller.enqueue(
          encoder.encode(
            `data: ${JSON.stringify({
              type: "error",
              error: `Stream error: ${(err as Error).message}`,
            })}\n\n`
          )
        );
      } finally {
        try {
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({ type: "done" })}\n\n`
            )
          );
          controller.close();
        } catch {
          // already closed
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
