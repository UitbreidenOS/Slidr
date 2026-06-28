import { readDataSafe, writeData } from "@/lib/data";
import { generateId } from "@/lib/utils";
import type { LlmConfig, LlmMessage, LlmTool, LlmStreamEvent, CliInfo } from "./types";
import { DEFAULT_CONFIG } from "./types";
import { HttpClient } from "./http-client";
import { detectPreferredCli, detectCliByType } from "./cli-detector";
import { spawnCli } from "./cli-spawner";
import { spawnAntigravity } from "@/lib/antigravity";
import { SLIDE_TOOLS } from "./tools";
import { addSlide, updateSlide, deleteSlide, updateCarousel, getCarousel } from "@/lib/carousels";

const CONFIG_FILE = "llm-config.json";

export async function getLlmConfig(): Promise<LlmConfig> {
  return readDataSafe<LlmConfig>(CONFIG_FILE, DEFAULT_CONFIG);
}

export async function saveLlmConfig(config: LlmConfig): Promise<void> {
  await writeData(CONFIG_FILE, config);
}

export function getTools(): LlmTool[] {
  return SLIDE_TOOLS;
}

/**
 * Execute a tool call server-side (HTTP mode).
 * In CLI mode, the CLI handles this via curl to the API routes directly.
 */
export async function executeToolCall(
  carouselId: string,
  name: string,
  args: Record<string, unknown>
): Promise<{ success: boolean; message: string; data?: unknown }> {
  try {
    switch (name) {
      case "create_slide": {
        const html = args.html as string;
        const notes = (args.notes as string) || "";
        if (!html || typeof html !== "string") {
          return { success: false, message: "Missing required 'html' parameter" };
        }
        const slide = await addSlide(carouselId, html, notes);
        return { success: true, message: `Created slide ${slide.id}`, data: slide };
      }
      case "update_slide": {
        const slideId = args.slideId as string;
        const html = args.html as string;
        if (!slideId || !html) {
          return { success: false, message: "Missing slideId or html" };
        }
        await updateSlide(carouselId, slideId, { html });
        return { success: true, message: `Updated slide ${slideId}` };
      }
      case "delete_slide": {
        const slideId = args.slideId as string;
        if (!slideId) {
          return { success: false, message: "Missing slideId" };
        }
        await deleteSlide(carouselId, slideId);
        return { success: true, message: `Deleted slide ${slideId}` };
      }
      case "set_caption": {
        const caption = args.caption as string;
        const hashtags = (args.hashtags as string[]) || [];
        await updateCarousel(carouselId, { caption, hashtags });
        return { success: true, message: "Caption saved" };
      }
      case "fetch_url": {
        const url = args.url as string;
        if (!url) return { success: false, message: "Missing url" };
        try {
          const resp = await fetch(url, { signal: AbortSignal.timeout(15000) });
          const text = await resp.text();
          // Strip HTML tags for a clean summary
          const clean = text.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
          return {
            success: true,
            message: `Fetched ${url}`,
            data: { url, content: clean.substring(0, 8000) },
          };
        } catch (err) {
          return { success: false, message: `Fetch failed: ${(err as Error).message}` };
        }
      }
      default:
        return { success: false, message: `Unknown tool: ${name}` };
    }
  } catch (err) {
    return { success: false, message: `Tool execution error: ${(err as Error).message}` };
  }
}

/**
 * Generate a chat response using the configured LLM.
 * Routes to HTTP mode or CLI mode based on config.
 */
export async function generateStream(
  carouselId: string,
  userMessage: string,
  systemPrompt: string,
  config: LlmConfig,
  onEvent: (event: LlmStreamEvent) => void
): Promise<void> {
  const messages: LlmMessage[] = [
    { role: "system", content: systemPrompt },
    { role: "user", content: userMessage },
  ];

  // Determine effective mode
  let effectiveMode = config.mode;
  let cliInfo: CliInfo | null = null;

  if (effectiveMode === "auto") {
    if (config.cli) {
      cliInfo = detectCliByType(config.cli);
    }
    if (!cliInfo) {
      cliInfo = detectPreferredCli();
    }
    // Use CLI if detected AND no HTTP config is set; use HTTP if baseURL+key are configured
    if (config.baseURL && config.apiKey && config.model) {
      effectiveMode = "http";
    } else if (cliInfo) {
      effectiveMode = "cli";
    } else if (config.baseURL && config.apiKey && config.model) {
      effectiveMode = "http";
    } else {
      onEvent({ type: "error", error: "No LLM configured. Set a base URL + API key in settings, or install a coding CLI (Antigravity recommended)." });
      return;
    }
  } else if (effectiveMode === "cli") {
    if (config.cli) {
      cliInfo = detectCliByType(config.cli);
    }
    if (!cliInfo) {
      cliInfo = detectPreferredCli();
    }
    if (!cliInfo) {
      onEvent({ type: "error", error: "No coding CLI detected. Install Antigravity (recommended) or switch to HTTP mode with a base URL + API key." });
      return;
    }
  } else {
    // http mode
    if (!config.baseURL || !config.apiKey || !config.model) {
      onEvent({ type: "error", error: "HTTP mode requires base URL, API key, and model. Configure in settings." });
      return;
    }
  }

  if (effectiveMode === "http") {
    await generateHttp(config, messages, carouselId, onEvent);
  } else if (cliInfo) {
    await generateCli(cliInfo, userMessage, systemPrompt, onEvent);
  }
}

async function generateHttp(
  config: LlmConfig,
  messages: LlmMessage[],
  carouselId: string,
  onEvent: (event: LlmStreamEvent) => void
): Promise<void> {
  try {
    const client = new HttpClient(config);
    const tools = getTools();

    // Multi-turn: stream, execute tool calls, continue
    let currentMessages = [...messages];
    const MAX_TOOL_ROUNDS = 15;

    for (let round = 0; round < MAX_TOOL_ROUNDS; round++) {
      let hadToolCalls = false;

      for await (const event of client.stream(currentMessages, tools, config.model)) {
        if (event.type === "token" && event.text) {
          onEvent(event);
        } else if (event.type === "tool_call" && event.toolCall) {
          hadToolCalls = true;
          // Execute the tool server-side
          const result = await executeToolCall(
            carouselId,
            event.toolCall.name,
            event.toolCall.arguments
          );

          // Notify the UI that a slide was created/updated
          onEvent({
            type: "tool_call",
            toolCall: {
              id: event.toolCall.id,
              name: event.toolCall.name,
              arguments: { ...event.toolCall.arguments, _result: result },
            },
          });

          // Add assistant message + tool result to conversation for next round
          currentMessages.push({
            role: "assistant",
            content: "", // In OpenAI streaming, tool calls come as deltas
            tool_call_id: event.toolCall.id,
          });
          currentMessages.push({
            role: "tool",
            content: JSON.stringify(result),
            tool_call_id: event.toolCall.id,
          });
        } else if (event.type === "result") {
          // Stream complete for this round
        }
      }

      if (!hadToolCalls) break;
    }

    onEvent({ type: "result" });
  } catch (err) {
    onEvent({ type: "error", error: `HTTP LLM error: ${(err as Error).message}` });
  }
}

async function generateCli(
  cliInfo: CliInfo,
  userMessage: string,
  systemPrompt: string,
  onEvent: (event: LlmStreamEvent) => void
): Promise<void> {
  return new Promise((resolve) => {
    let resolved = false;
    const finish = () => {
      if (!resolved) {
        resolved = true;
        resolve();
      }
    };

    if (cliInfo.type === "antigravity") {
      spawnAntigravity(
        cliInfo.path,
        userMessage,
        systemPrompt,
        process.cwd(),
        (event) => onEvent(event),
        (err) => {
          onEvent({ type: "error", error: err.message });
          finish();
        },
        () => {
          onEvent({ type: "result" });
          finish();
        }
      );
    } else {
      spawnCli(
        {
          cliPath: cliInfo.path,
          cliType: cliInfo.type,
          message: userMessage,
          systemPrompt,
          cwd: process.cwd(),
        },
        (event) => onEvent(event),
        (err) => {
          onEvent({ type: "error", error: err.message });
          finish();
        },
        () => {
          onEvent({ type: "result" });
          finish();
        }
      );
    }
  });
}

// Re-export for convenience
export { detectPreferredCli, detectClis } from "./cli-detector";
export { PROVIDER_PRESETS, DEFAULT_CONFIG } from "./types";
export type { LlmConfig, LlmMode, CliInfo, CliType, LlmStreamEvent } from "./types";
