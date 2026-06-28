import { spawn } from "child_process";
import type { LlmStreamEvent } from "./types";

/**
 * Antigravity CLI (agy) spawner.
 * Google's terminal-first agent — the default-recommended CLI.
 * Uses `agy --print` for non-interactive/headless mode.
 *
 * The system prompt is prepended to the user message since agy doesn't have
 * a dedicated --append-system-prompt flag like Claude Code.
 */
export function spawnAntigravity(
  agyPath: string,
  message: string,
  systemPrompt: string,
  cwd: string,
  onEvent: (event: LlmStreamEvent) => void,
  onError: (err: Error) => void,
  onExit: (code: number | null) => void
): void {
  const fullPrompt = systemPrompt
    ? `${systemPrompt}\n\n---\n\nUser request:\n${message}`
    : message;

  const child = spawn(agyPath, ["--print", fullPrompt], {
    cwd,
    stdio: ["pipe", "pipe", "pipe"],
    env: { ...process.env, NO_COLOR: "1", TERM: "dumb" },
  });

  child.stdin?.end();

  let buffer = "";

  child.stdout?.on("data", (chunk: Buffer) => {
    buffer += chunk.toString();
    // agy prints text; emit tokens line-by-line for smooth streaming
    const lines = buffer.split("\n");
    buffer = lines.pop() ?? "";
    for (const line of lines) {
      if (line.trim()) {
        // Try to parse as JSON (agy may emit structured output)
        try {
          const parsed = JSON.parse(line);
          if (parsed.text) {
            onEvent({ type: "token", text: parsed.text });
          } else if (parsed.type === "tool_call" && parsed.toolCall) {
            onEvent({ type: "tool_call", toolCall: parsed.toolCall });
          }
        } catch {
          // Plain text line — emit as token
          onEvent({ type: "token", text: line + "\n" });
        }
      }
    }
  });

  let stderrBuf = "";
  const STDERR_CAP = 8192;
  child.stderr?.on("data", (chunk: Buffer) => {
    if (stderrBuf.length < STDERR_CAP) {
      stderrBuf = (stderrBuf + chunk.toString()).slice(-STDERR_CAP);
    }
  });

  child.on("error", (err) => {
    onError(new Error(`Antigravity CLI error: ${err.message}`));
  });

  child.on("exit", (code) => {
    // Flush remaining buffer
    if (buffer.trim()) {
      onEvent({ type: "token", text: buffer });
    }
    if (code && code !== 0 && stderrBuf) {
      onError(new Error(`Antigravity CLI exited with code ${code}: ${stderrBuf}`));
    }
    onExit(code);
  });
}
