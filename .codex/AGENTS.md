# Slidr — Codex CLI Instructions

This file is read by OpenAI Codex CLI when working on this repo.

## Project Overview

Slidr is a CLI-agnostic AI carousel maker for LinkedIn, Instagram, and TikTok. It does NOT depend on Codex — it works with any OpenAI-compatible LLM via base URL + API key (HTTP mode, default) or any coding CLI (CLI mode, optional).

## How Slidr Uses Codex

When `mode: "auto"` or `mode: "cli"` and `codex` is detected on PATH:
1. Slidr spawns `codex` in headless mode with the system prompt prepended
2. The system prompt (brand + theme + platform + slide rules) is injected as context
3. Streamed output is parsed and sent to the browser via SSE
4. Codex can use its native tool-calling to create slides via the local API

## Theme Format

Themes are DESIGN.md files in `src/lib/themes/presets/`. Each has:
- Section 2: Color palette with hex codes and CSS variable roles
- Section 3: Typography (heading/body fonts, weights, hierarchy)
- Section 6: Design rules injected into the system prompt

When editing themes, follow the existing format exactly.

## Key Rules for Working on This Repo

1. Never add `Co-authored-by` trailers — the author is always `tushar2704 <tushar.inseec@gmail.com>`
2. Run `npm run build` before committing — it must exit 0 with zero TypeScript errors
3. Run `npm run doctor` to verify the environment (Node ≥20, LLM config, CLI detection)
4. Slides are body-level HTML only — no `<html>`, `<head>`, or `<script>` tags
5. The watermark is injected by Puppeteer AFTER slide render — never add it in slide HTML
6. All data mutations go through `src/lib/data.ts` (never direct fs writes)
7. Components max ~300 lines per file; use `cn()` from `src/lib/utils.ts` for class merging
8. Themes are `.md` files (DESIGN.md format) — never hardcode theme palettes in code
9. iframe slides always use `sandbox=""` attribute (no JavaScript)

## Tech Stack

- Next.js 16 (Turbopack) + React 19 + TypeScript 5 + Tailwind v4
- `openai` SDK for HTTP mode LLM calls
- `cross-spawn` for CLI mode subprocess spawning
- `puppeteer` + `sharp` + `archiver` for PNG ZIP export
- `pdf-lib` for PDF export (LinkedIn)
- `async-mutex` for atomic JSON file writes
- JSON file storage in `/data/` (no database)
