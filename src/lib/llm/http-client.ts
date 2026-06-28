import OpenAI from "openai";
import type { LlmConfig, LlmMessage, LlmTool, LlmToolCall, LlmStreamEvent } from "./types";

/**
 * HTTP-mode LLM client using the OpenAI SDK against any OpenAI-compatible endpoint.
 * Works with OpenAI, Anthropic (compat layer), Groq, DeepSeek, OpenRouter, Google, Ollama, LM Studio.
 */
export class HttpClient {
  private client: OpenAI;

  constructor(config: LlmConfig) {
    this.client = new OpenAI({
      apiKey: config.apiKey || "dummy-key",
      baseURL: config.baseURL,
      dangerouslyAllowBrowser: false,
    });
  }

  async *stream(
    messages: LlmMessage[],
    tools: LlmTool[],
    model: string
  ): AsyncGenerator<LlmStreamEvent> {
    const openaiMessages = messages.map((m) => {
      if (m.role === "tool" && m.tool_call_id) {
        return { role: "tool" as const, content: m.content, tool_call_id: m.tool_call_id };
      }
      return { role: m.role as "system" | "user" | "assistant", content: m.content };
    });

    const openaiTools = tools.map((t) => ({
      type: "function" as const,
      function: {
        name: t.function.name,
        description: t.function.description,
        parameters: t.function.parameters,
      },
    }));

    const stream = await this.client.chat.completions.create({
      model,
      messages: openaiMessages,
      tools: openaiTools,
      stream: true,
    });

    const toolCallBuffers = new Map<number, { id: string; name: string; args: string }>();

    for await (const chunk of stream) {
      const delta = chunk.choices?.[0]?.delta;
      if (!delta) continue;

      // Text token
      if (delta.content) {
        yield { type: "token", text: delta.content };
      }

      // Tool call deltas
      if (delta.tool_calls) {
        for (const tc of delta.tool_calls) {
          const idx = tc.index ?? 0;
          if (!toolCallBuffers.has(idx)) {
            toolCallBuffers.set(idx, {
              id: tc.id || `call_${idx}`,
              name: tc.function?.name || "",
              args: "",
            });
          }
          const buf = toolCallBuffers.get(idx)!;
          if (tc.function?.name) buf.name = tc.function.name;
          if (tc.function?.arguments) buf.args += tc.function.arguments;
        }
      }
    }

    // Emit completed tool calls
    for (const [, buf] of toolCallBuffers) {
      let parsedArgs: Record<string, unknown> = {};
      try {
        parsedArgs = buf.args ? JSON.parse(buf.args) : {};
      } catch {
        parsedArgs = { _raw: buf.args };
      }
      const toolCall: LlmToolCall = { id: buf.id, name: buf.name, arguments: parsedArgs };
      yield { type: "tool_call", toolCall };
    }

    yield { type: "result" };
  }
}
