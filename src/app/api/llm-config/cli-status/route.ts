import { NextResponse } from "next/server";
import { spawnSync } from "child_process";
import { detectPreferredCli } from "@/lib/llm/cli-detector";

export async function GET() {
  const cliInfo = detectPreferredCli();
  if (!cliInfo) {
    return NextResponse.json({
      installed: false,
      working: false,
      models: [],
      error: "No coding CLI detected in PATH"
    });
  }

  try {
    // 1. Test if the CLI is working by checking help command
    const testRes = spawnSync(cliInfo.path, ["--help"], {
      encoding: "utf-8",
      timeout: 3000,
    });

    const working = testRes.status === 0;
    if (!working) {
      return NextResponse.json({
        installed: true,
        working: false,
        models: [],
        error: `CLI returned exit code ${testRes.status}. Stderr: ${testRes.stderr}`
      });
    }

    // 2. Query models from CLI with a short timeout
    const modelsRes = spawnSync(cliInfo.path, ["models"], {
      encoding: "utf-8",
      timeout: 3000,
    });

    let modelsList = [
      "gemini-3.5-flash",
      "gemini-3.5-pro",
      "gemini-2.5-flash",
      "gemini-2.0-pro-exp",
      "gemini-2.0-flash"
    ];

    if (modelsRes.status === 0 && modelsRes.stdout) {
      // Parse output. Typically it lists one model per line or standard format.
      const parsed = modelsRes.stdout
        .split(/\r?\n/)
        .map(line => line.trim())
        .filter(line => line && !line.startsWith("Usage") && !line.includes("available"));
      if (parsed.length > 0) {
        modelsList = parsed;
      }
    }

    return NextResponse.json({
      installed: true,
      working: true,
      cliType: cliInfo.type,
      cliName: cliInfo.name,
      models: modelsList
    });

  } catch (error) {
    return NextResponse.json({
      installed: true,
      working: false,
      models: [],
      error: (error as Error).message || "Failed to query CLI status"
    });
  }
}
