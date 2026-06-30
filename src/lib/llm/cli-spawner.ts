import { spawn } from "child_process";
import crossSpawn from "cross-spawn";
import type { LlmStreamEvent } from "./types";

interface CliSpawnOptions {
  cliPath: string;
  cliType: string;
  message: string;
  systemPrompt: string;
  cwd: string;
}

/**
 * Generic CLI spawner for coding agents that support stream-json output.
 * Currently supports Claude Code's --output-format stream-json convention.
 * Antigravity uses its own spawner (antigravity.ts).
 */
export function spawnCli(
  opts: CliSpawnOptions,
  onEvent: (event: LlmStreamEvent) => void,
  onError: (err: Error) => void,
  onExit: (code: number | null) => void
): void {
  const { cliPath, cliType, message, systemPrompt, cwd } = opts;

  let args: string[];

  if (cliType === "claude") {
    args = [
      "-p", message,
      "--output-format", "stream-json",
      "--include-partial-messages",
      "--verbose",
      "--append-system-prompt", systemPrompt,
      "--allowedTools", "Bash",
      "--allowedTools", "WebFetch",
      "--allowedTools", "Read",
      "--max-budget-usd", "1.00",
      "--name", "slidr-chat",
    ];
  } else if (cliType === "codex") {
    // Codex CLI: simpler prompt-based interface
    args = ["--print", `${systemPrompt}\n\n---\n\nUser request:\n${message}`];
  } else if (cliType === "gemini") {
    args = ["--prompt", `${systemPrompt}\n\n---\n\nUser request:\n${message}`];
  } else {
    // Fallback: generic --print
    args = ["--print", `${systemPrompt}\n\n---\n\nUser request:\n${message}`];
  }

  const isWindowsShim =
    process.platform === "win32" && /\.(cmd|bat)$/i.test(cliPath);
  const spawner = isWindowsShim ? crossSpawn : spawn;

  const child = spawner(cliPath, args, {
    cwd,
    stdio: ["pipe", "pipe", "pipe"],
  });

  child.stdin?.end();

  let buffer = "";

  child.stdout?.on("data", (chunk: Buffer) => {
    buffer += chunk.toString();
    const lines = buffer.split("\n");
    buffer = lines.pop() ?? "";

    for (const line of lines) {
      if (!line.trim()) continue;
      if (cliType === "claude") {
        try {
          const event = JSON.parse(line);
          handleClaudeEvent(event, onEvent);
        } catch {
          // skip unparseable lines
        }
      } else {
        // Generic: emit as text token
        onEvent({ type: "token", text: line + "\n" });
      }
    }
  });

  let stderrBuf = "";
  const STDERR_CAP = 8192;
  child.stderr?.on("data", (chunk: Buffer) => {
    const text = chunk.toString();
    onEvent({ type: "verbose", verboseText: text });
    if (stderrBuf.length < STDERR_CAP) {
      stderrBuf = (stderrBuf + text).slice(-STDERR_CAP);
    }
  });

  child.on("error", (err) => {
    onError(new Error(`CLI error (${cliType}): ${err.message}`));
  });

  child.on("exit", (code) => {
    if (buffer.trim()) {
      if (cliType === "claude") {
        try {
          const event = JSON.parse(buffer);
          handleClaudeEvent(event, onEvent);
        } catch {
          // skip
        }
      } else {
        onEvent({ type: "token", text: buffer });
      }
    }
    if (code && code !== 0 && stderrBuf) {
      onError(new Error(`CLI exited with code ${code}: ${stderrBuf}`));
    }
    onExit(code);
  });
}

function handleClaudeEvent(
  event: Record<string, unknown>,
  onEvent: (event: LlmStreamEvent) => void
) {
  // Extract session ID from init event
  if (event.type === "system" && event.subtype === "init" && event.session_id) {
    onEvent({ type: "session", sessionId: event.session_id as string });
    return;
  }

  // Extract streaming text tokens
  if (event.type === "assistant" && event.message) {
    const msg = event.message as Record<string, unknown>;
    if (msg.type === "message" && Array.isArray(msg.content)) {
      for (const block of msg.content) {
        const b = block as Record<string, unknown>;
        if (b.type === "text" && typeof b.text === "string") {
          onEvent({ type: "token", text: b.text });
        }
        // Tool use blocks — in CLI mode the CLI executes these via curl
        if (b.type === "tool_use") {
          onEvent({
            type: "tool_call",
            toolCall: {
              id: b.id as string,
              name: b.name as string,
              arguments: b.input as Record<string, unknown>,
            },
          });
        }
      }
    }
    return;
  }

  // Extract result with session ID
  if (event.type === "result") {
    if (event.session_id) {
      onEvent({ type: "session", sessionId: event.session_id as string });
    }
    if (typeof event.result === "string" && event.result) {
      onEvent({ type: "result", text: event.result });
    } else {
      onEvent({ type: "result" });
    }
    return;
  }
}
