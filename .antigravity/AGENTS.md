# Slidr — Antigravity CLI Instructions

This file is read by Antigravity CLI (`agy`) when working on this repo.

## Project Overview

Slidr is a CLI-agnostic AI carousel maker. It does NOT depend on Antigravity — it works with any OpenAI-compatible LLM via base URL + API key. However, when you (agy) are present, Slidr uses you as the recommended agentic backend for web-fetch and reference-image analysis tasks.

## How Slidr Uses Antigravity

When `mode: "auto"` or `mode: "cli"` and `agy` is detected on PATH:
1. Slidr spawns `agy --print "<prompt>"` in headless mode
2. The system prompt (brand + theme + platform + slide rules) is prepended to the user message
3. Streamed output is parsed and sent to the browser via SSE
4. Antigravity can use its native tool-calling (Bash, WebFetch, Read) to:
   - Fetch web URLs when the user provides a link
   - Read reference images for style matching
   - Create slides by calling the local API via curl

## Theme Format

Themes are DESIGN.md files in `src/lib/themes/presets/`. Each has:
- Section 2: Color palette with hex codes
- Section 3: Typography (heading/body fonts)
- Section 6: Design rules injected into the system prompt

When editing themes, follow the existing format exactly.

## Key Rules for Working on This Repo

1. Never add `Co-authored-by` trailers — the author is always `tushar2704 <tushar.inseec@gmail.com>`
2. Run `npm run build` before committing — it must exit 0
3. Run `npm run doctor` to verify the environment
4. Slides are body-level HTML only — no `<html>`, `<head>`, or `<script>` tags
5. The watermark is injected by Puppeteer AFTER slide render — never add it in slide HTML
6. Antigravity is detected via `agy` or `antigravity` binary on PATH
