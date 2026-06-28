import fs from "fs";
import { spawnSync } from "child_process";
import type { CliInfo, CliType } from "./types";

interface CliSpec {
  type: CliType;
  name: string;
  binaries: string[];
  recommended?: boolean;
}

// Probe order: Antigravity first (user requested it as the primary CLI)
const CLI_SPECS: CliSpec[] = [
  { type: "antigravity", name: "Antigravity CLI", binaries: ["agy", "antigravity"], recommended: true },
  { type: "claude", name: "Claude Code", binaries: ["claude"] },
  { type: "codex", name: "Codex CLI", binaries: ["codex"] },
  { type: "gemini", name: "Gemini CLI", binaries: ["gemini"] },
  { type: "cursor", name: "Cursor Agent", binaries: ["cursor-agent"] },
  { type: "opencode", name: "OpenCode", binaries: ["opencode"] },
  { type: "aider", name: "Aider", binaries: ["aider"] },
  { type: "qwen", name: "Qwen CLI", binaries: ["qwen"] },
];

function probeBinary(bin: string): string | null {
  try {
    const cmd = process.platform === "win32" ? "where" : "which";
    const result = spawnSync(cmd, [bin], {
      encoding: "utf-8",
      shell: process.platform === "win32",
      timeout: 2000,
    });
    if (result.status === 0 && result.stdout) {
      const first = result.stdout.split(/\r?\n/).find((l) => l.trim());
      if (first && fs.existsSync(first.trim())) return first.trim();
    }
  } catch {
    // ignore
  }
  return null;
}

export function detectClis(): CliInfo[] {
  const found: CliInfo[] = [];
  for (const spec of CLI_SPECS) {
    for (const bin of spec.binaries) {
      const path = probeBinary(bin);
      if (path) {
        found.push({
          type: spec.type,
          name: spec.name,
          path,
          recommended: spec.recommended,
        });
        break; // first binary found for this CLI type
      }
    }
  }
  return found;
}

export function detectPreferredCli(): CliInfo | null {
  const all = detectClis();
  // Prefer recommended (Antigravity) if present, else first found
  return all.find((c) => c.recommended) ?? all[0] ?? null;
}

export function detectCliByType(type: CliType): CliInfo | null {
  const all = detectClis();
  return all.find((c) => c.type === type) ?? null;
}

export function isCliAvailable(): boolean {
  return detectClis().length > 0;
}
