# Slidr

CLI-agnostic AI carousel maker for LinkedIn, Instagram, and TikTok. Next.js 16 + React 19 + TypeScript + Tailwind v4.

## Architecture

- **Frontend**: React app at localhost:3000 with chat panel (left), carousel preview (center), slide filmstrip (bottom)
- **LLM Adapter**: Dual-mode — HTTP (OpenAI SDK, default) or CLI (agy/claude/codex/gemini, optional). SSE streaming.
- **Storage**: JSON files in `/data/` with async-mutex locking and atomic writes
- **Export**: Puppeteer screenshots HTML slides to PNG (ZIP for Instagram/TikTok) or PDF (LinkedIn) at exact dimensions
- **Slides**: Full HTML documents rendered in sandboxed iframes. `wrapSlideHtml()` is the shared rendering contract between preview and export.
- **Themes**: DESIGN.md files (Open Design format) in `src/lib/themes/presets/`, parsed at runtime
- **Watermark**: Non-removable SVG badge composited by Puppeteer after slide render, gated by license state

## Key Files

- `src/lib/llm/adapter.ts` — Dual-mode LLM routing (HTTP vs CLI) + tool execution
- `src/lib/llm/types.ts` — LlmConfig, provider presets, CLI specs
- `src/lib/antigravity.ts` — Antigravity CLI (agy) spawner
- `src/lib/themes/parser.ts` — Parses DESIGN.md → Theme objects
- `src/lib/themes/serializer.ts` — Theme → CSS vars + font links + auto-resize
- `src/lib/chat-system-prompt.ts` — Dynamic prompt (brand + carousel + theme + platform)
- `src/lib/slide-html.ts` — `wrapSlideHtml()` shared preview/export contract
- `src/lib/watermark.ts` — SVG badge compositor (Puppeteer overlay)
- `src/lib/license/store.ts` — Lemon Squeezy license validation
- `src/lib/export-slides.ts` — PNG ZIP + PDF export with watermark injection
- `src/types/carousel.ts` — 8 AspectRatio types + DIMENSIONS map + platform helpers

## API Routes

- `POST /api/chat` — LLM adapter SSE streaming (HTTP or CLI)
- `GET/PUT /api/llm-config` — LLM config (baseURL, apiKey, model, mode, cli)
- `GET /api/themes` — List 15 theme presets
- `GET /api/license/status` — License validity
- `POST /api/license/activate` — Activate Lemon Squeezy key
- `POST /api/carousels/[id]/export` — Export PNG ZIP or PDF (auto-selected by platform)
- All other routes from open-carrusel (carousels CRUD, slides, brand, templates, etc.)

## Conventions

- Components max ~300 lines per file
- Use `cn()` from `src/lib/utils.ts` for class merging
- Types in `src/types/`, libs in `src/lib/`, components in `src/components/`
- All data mutations go through `src/lib/data.ts`
- iframe slides always use `sandbox=""` attribute (no JavaScript)
- Themes are `.md` files — never hardcode theme palettes in components
- Antigravity CLI (`agy`) is the recommended agentic backend

## Platform Sizes

Instagram: ig-1:1, ig-4:5 (recommended), ig-3:4, ig-9:16 — PNG ZIP export
LinkedIn: li-1:1, li-4:5 (recommended), li-16:9 — PDF export
TikTok: tt-9:16 (recommended) — PNG ZIP export

## Git Policy

- Author: `tushar2704 <tushar.inseec@gmail.com>` — sole author, no co-author trailers
- Auto-commit after each phase
