import { NextResponse } from "next/server";
import { getLlmConfig, detectClis, detectPreferredCli } from "@/lib/llm/adapter";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const config = await getLlmConfig();
  const detectedClis = detectClis();
  const preferredCli = detectPreferredCli();

  const httpConfigured = !!(config.baseURL && config.apiKey && config.model);
  const cliConfigured = detectedClis.length > 0;
  const isConfigured = httpConfigured || cliConfigured;

  return NextResponse.json({
    isConfigured,
    httpConfigured,
    cliConfigured,
    mode: config.mode,
    detectedClis: detectedClis.map((c) => ({ type: c.type, name: c.name, recommended: c.recommended })),
    preferredCli: preferredCli
      ? { type: preferredCli.type, name: preferredCli.name, recommended: preferredCli.recommended }
      : null,
  });
}
