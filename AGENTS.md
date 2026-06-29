# Slidr — Agent Instructions

This file is read by AI coding agents (Claude Code, Codex, Cursor, Gemini, Antigravity) working on this repo.

## What is Slidr?

Slidr is a CLI-agnostic AI carousel maker for LinkedIn, Instagram, and TikTok. Users bring their own LLM (any OpenAI-compatible base URL + API key) or use a coding CLI (Antigravity recommended). It ships with 115 themes, 8 platform sizes, non-removable watermark, and a $11 lifetime unlock via Lemon Squeezy.

## Architecture

- **Framework**: Next.js 16 (Turbopack) + React 19 + TypeScript 5 + Tailwind v4
- **LLM**: Dual-mode adapter — HTTP mode (OpenAI SDK, default) or CLI mode (agy/claude/codex/gemini)
- **Slides**: Body-level HTML wrapped by `wrapSlideHtml()` — shared between preview iframe and Puppeteer export
- **Storage**: JSON files in `/data/` with async-mutex + atomic writes
- **Export**: Puppeteer → PNG ZIP (Instagram/TikTok) or PDF (LinkedIn), with watermark overlay
- **Themes**: DESIGN.md files (Open Design format) in `src/lib/themes/presets/`

## Key Files

- `src/lib/llm/adapter.ts` — LLM routing (HTTP vs CLI mode)
- `src/lib/llm/types.ts` — LlmConfig, provider presets, CLI specs
- `src/lib/antigravity.ts` — Antigravity CLI (agy) spawner
- `src/lib/themes/parser.ts` — Parses DESIGN.md → Theme objects
- `src/lib/themes/serializer.ts` — Theme → CSS vars + font links
- `src/lib/chat-system-prompt.ts` — Dynamic prompt (brand + carousel + theme + platform)
- `src/lib/slide-html.ts` — `wrapSlideHtml()` shared preview/export contract
- `src/lib/watermark.ts` — Non-removable SVG badge (Puppeteer overlay)
- `src/lib/license/store.ts` — Lemon Squeezy license validation
- `src/lib/export-slides.ts` — PNG ZIP + PDF export with watermark
- `src/lib/platform-sizes.ts` (in `src/types/carousel.ts`) — 8 sizes × 3 platforms

## API Routes

- `POST /api/chat` — LLM adapter SSE streaming (HTTP or CLI)
- `GET/PUT /api/llm-config` — LLM config (baseURL, apiKey, model, mode, cli)
- `GET /api/themes` — List 115 theme presets
- `GET /api/license/status` — License validity
- `POST /api/license/activate` — Activate Lemon Squeezy key
- `POST /api/carousels/[id]/export` — Export PNG ZIP or PDF (auto-selected by platform)
- All other routes inherited from open-carrusel (carousels CRUD, slides, brand, templates, etc.)

## Conventions

- Components max ~300 lines per file
- Use `cn()` from `src/lib/utils.ts` for class merging
- Types in `src/types/`, libs in `src/lib/`, components in `src/components/`
- All data mutations go through `src/lib/data.ts` (never direct fs writes)
- iframe slides always use `sandbox=""` attribute (no JavaScript)
- Themes are `.md` files (DESIGN.md format) — never hardcode theme palettes in code
- Antigravity CLI (`agy`) is the recommended agentic backend — first-class in the CLI detector

## Platform Sizes

Instagram: ig-1:1 (1080×1080), ig-4:5 (1080×1350, recommended), ig-3:4 (1080×1440), ig-9:16 (1080×1920)
LinkedIn: li-1:1, li-4:5 (recommended), li-16:9 — export as PDF
TikTok: tt-9:16 (1080×1920, recommended)

## Git Policy

- Author: `tushar2704 <tushar.inseec@gmail.com>` — sole author, no co-author trailers
- Auto-commit after each phase
- Commit messages: imperative mood, concise
