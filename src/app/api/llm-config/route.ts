import { NextRequest, NextResponse } from "next/server";
import { getLlmConfig, saveLlmConfig, detectClis, detectPreferredCli } from "@/lib/llm/adapter";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const config = await getLlmConfig();
  const detectedClis = detectClis();
  const preferredCli = detectPreferredCli();

  // Don't expose the API key in full — mask it
  const maskedConfig = {
    ...config,
    apiKey: config.apiKey
      ? config.apiKey.substring(0, 4) + "..." + config.apiKey.slice(-4)
      : "",
  };

  return NextResponse.json({
    config: maskedConfig,
    hasApiKey: !!config.apiKey,
    detectedClis,
    preferredCli,
    httpConfigured: !!(config.baseURL && config.apiKey && config.model),
    cliConfigured: detectedClis.length > 0,
  });
}

export async function PUT(request: NextRequest) {
  let body: {
    mode?: string;
    baseURL?: string;
    apiKey?: string;
    model?: string;
    cli?: string | null;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const current = await getLlmConfig();
  const updated = {
    mode: (body.mode as "auto" | "http" | "cli") || current.mode,
    baseURL: body.baseURL !== undefined ? body.baseURL : current.baseURL,
    apiKey: body.apiKey !== undefined ? body.apiKey : current.apiKey,
    model: body.model !== undefined ? body.model : current.model,
    cli: body.cli !== undefined ? (body.cli as "antigravity" | "claude" | "codex" | "gemini" | "cursor" | "opencode" | "aider" | "qwen" | null) : current.cli,
  };

  await saveLlmConfig(updated);

  return NextResponse.json({ success: true, config: { ...updated, apiKey: updated.apiKey ? "***" : "" } });
}
