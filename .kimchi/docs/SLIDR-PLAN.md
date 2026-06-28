# Slidr — Community Carousel Maker · Full Plan

> **Status:** DRAFT v1 (post deep-research) — awaiting your sign-off before we ship in 2 days.
> **Goal:** Ship a lightweight, modern, CLI-agnostic AI carousel maker for **LinkedIn + Instagram (TikTok-ready)** that runs on any machine with just a **base URL + API key** (or any installed coding CLI), produces on-brand, scroll-stopping carousels like the "Claude Code Instagram" aesthetic, and monetizes via a **non-removable company watermark** with a **$11 lifetime unlock**.

---

## 0. Executive summary

Slidr is a **fork-and-evolve** of the open-carrusel architecture (Next.js 16 + React 19 + Tailwind v4 + Puppeteer PNG export), rebuilt around three pivots the reference repo does not do:

1. **CLI-agnostic LLM core.** Replace the hard dependency on the Claude CLI subprocess with a **dual-mode adapter**: (a) a direct **OpenAI-compatible Chat Completions** HTTP client (`baseURL` + `apiKey` + `model`) — the universal dialect spoken by OpenAI, Anthropic (via its compatibility layer at `https://api.anthropic.com/v1/`), Groq, DeepSeek, OpenRouter, Together, Mistral, Ollama, LM Studio, and any free-tier provider; (b) an **optional CLI-detector** that shells out to Claude Code / Codex / Gemini / Cursor when present for agentic web-fetch + file-read. **No CLI install is ever required** — base URL + key is enough.
2. **Multi-platform sizing + theme system.** Instagram, LinkedIn, and TikTok formats (1:1, 4:5, 9:16, 3:4, 16:9) with an **aiCarousels-style theme engine** — handpicked palettes, font pairings, smart auto-resize, and a "Midnight Neon / Claude Code" modern preset gallery.
3. **Built-in monetization.** A **non-removable Slidr watermark** baked into every exported slide (PNG + PDF), removable only by validating a **Lemon Squeezy license key** purchased for **$11 lifetime**. License validation is offline-capable after first activation.

The result: lighter than Open Design (no 200MB desktop daemon, no 21 adapters), more focused than Claude Design (carousel-only, local-first, BYOK), and more modern/open than aiCarousels (self-hostable, CLI-optional, MIT-adjacent).

---

## 1. Research findings (the evidence behind the plan)

### 1.1 open-carrusel — what we keep, what we change

**Keep (proven architecture):**
- Next.js 16 (Turbopack) + React 19 + TypeScript 5 + Tailwind v4 (CSS-first)
- Radix UI + lucide-react primitives; `cn()` class merging; ≤300-line component rule
- `@dnd-kit` for the drag-reorder filmstrip
- **Slides as body-level HTML**, wrapped by a single `wrapSlideHtml()` contract shared between the preview `<iframe sandbox="">` and the Puppeteer export path → "what you see is what you ship"
- JSON file storage with `async-mutex` + atomic (tmp-file + rename) writes — no DB needed for single-user local app
- Puppeteer → PNG ZIP export; Sharp for image post-processing
- System prompt as an "autonomous design engine" that builds an 8-slide narrative arc (hook → setup → value × 3 → summary → CTA) and posts slides via `curl` to local API routes
- Brand config: name, 5-color palette, heading/body fonts, logo, style keywords
- Style presets saved as JSON (`name`, `designRules`, `exampleSlideHtml`, `aspectRatio`)
- `.claude/commands/` slash commands (`/start`, `/stop`, `/reset`, `/doctor`)

**Change (Slidr-specific):**
- ❌ Drop the hard `claude-path.ts` subprocess dependency in `/api/chat`
- ✅ Add a **dual-mode LLM adapter** (`src/lib/llm/`): `http-mode` (OpenAI SDK, default) + `cli-mode` (auto-detected coding CLIs, optional)
- ✅ Expand `AspectRatio` enum to 5 sizes (LinkedIn + Instagram + TikTok)
- ✅ Add **TikTok** alongside LinkedIn + Instagram
- ✅ Add **PDF export** for LinkedIn (LinkedIn carousels are document posts — PNG won't work there)
- ✅ Add a **theme engine** (`src/lib/themes/`) with handpicked palette/font presets + smart auto-resize token system
- ✅ Add a **watermark layer** in `wrapSlideHtml()` + Puppeteer export, gated by license state
- ✅ Add a **license module** (`src/lib/license/`) validating Lemon Squeezy keys
- ✅ Redesign the UI around a modern "Claude Code Instagram" aesthetic (dark gradient, electric violet, oversized hooks, CSS-first motion)

### 1.2 The CLI-agnostic LLM pattern (CONFIRMED viable)

Anthropic itself publishes an **OpenAI SDK compatibility layer** at `https://api.anthropic.com/v1/` — you swap the base URL, use a Claude API key, and call Claude models through the OpenAI SDK. This means a **single `openai` npm SDK** with three config knobs (`apiKey`, `baseURL`, `model`) speaks to every major provider:

| Provider | Base URL | Notes |
|---|---|---|
| OpenAI | `https://api.openai.com/v1` | gpt-4o, gpt-4.1, o-series |
| Anthropic | `https://api.anthropic.com/v1/` | claude-opus-4, claude-sonnet-4 (compat layer) |
| Groq | `https://api.groq.com/openai/v1` | **free tier**, ultra-fast Llama/Mixtral |
| OpenRouter | `https://openrouter.ai/api/v1` | aggregator, has free models |
| DeepSeek | `https://api.deepseek.com/v1` | cheap, strong code/design |
| Google AI Studio | `https://generativelanguage.googleapis.com/v1beta/openai/` | **free tier**, Gemini |
| Ollama (local) | `http://localhost:11434/v1` | fully offline, no key |
| LM Studio (local) | `http://localhost:1234/v1` | fully offline |

**Streaming:** SSE with `stream: true`, `delta.content` tokens — same shape across all providers.
**Tool/function calling:** OpenAI tool-calling spec is the common subset (Anthropic compat supports it).
**This is the differentiator.** Open-carrusel *requires* the Claude CLI; Open Design *requires* a local daemon + CLI; Slidr needs only **base URL + API key** — runnable on any laptop, Codex box, or cloud shell, with free tiers.

**"Free Claude Code repo" interpretation:** the user wants a repo that, like Claude Code, can run autonomously without a paid Anthropic subscription. The OpenAI-compatible HTTP path with Groq/Google free tiers delivers exactly this. When a coding CLI *is* installed, Slidr auto-detects it (Claude Code → `claude` binary; Codex → `codex`; Gemini → `gemini`; Cursor → `cursor-agent`) and uses it for agentic steps (web fetch, reference-image analysis), falling back to HTTP mode otherwise.

### 1.3 Competitive positioning

| Tool | Pricing | Source | LLM lock-in | Carousel focus | Slidr advantage |
|---|---|---|---|---|---|
| **Claude Design** (Anthropic, Apr 2026) | Pro/Max paid | closed, cloud | Anthropic only | general design (carousels are one output) | Open, BYOK, free-tier capable, carousel-specialist |
| **Open Design** (nexu-io) | free, Apache-2.0 | open, desktop daemon | 21 CLI adapters + BYOK | general design (slides, prototypes, video) | **no daemon**, web-only, lighter, carousel-only, simpler to ship in 2 days |
| **aiCarousels.com** | freemium SaaS | closed, hosted | their AI | carousel-specialist | self-hostable, BYOK, $11 lifetime vs their monthly sub |
| **open-carrusel** | free, MIT | open, web | Claude CLI only | Instagram only | multi-platform, CLI-agnostic, theme engine, watermark monetization |
| **CarouselBot** | paid | closed | their AI | carousel-specialist | open, BYOK |
| **Slidr** | **free + $11 lifetime unlock** | open (MIT-ish) | **any (base URL + key)** | LinkedIn + Instagram + TikTok | — |

**The pitch:** "Claude Design's quality, Open Design's openness, aiCarousels' focus, open-carrusel's local-first simplicity — but it runs on *any* CLI or just a base URL + key, and costs $11 once, forever."

### 1.4 Platform sizing specs (2026, verified)

| Platform | Format | Pixels | Aspect | Export | Notes |
|---|---|---|---|---|---|
| Instagram | Feed portrait (recommended) | 1080×1350 | 4:5 | PNG | max feed real estate |
| Instagram | Feed square | 1080×1080 | 1:1 | PNG | grid crop safe |
| Instagram | Feed new 3:4 | 1080×1440 | 3:4 | PNG | new grid |
| Instagram | Stories / Reels | 1080×1920 | 9:16 | PNG | full screen |
| LinkedIn | Carousel (recommended) | 1080×1350 | 4:5 | **PDF** | document post, 50–80px safe zone |
| LinkedIn | Carousel square | 1080×1080 | 1:1 | PDF | default |
| LinkedIn | Carousel landscape | 1920×1080 | 16:9 | PDF | less feed impact |
| TikTok | Photo carousel | 1080×1920 | 9:16 | PNG | vertical |

LinkedIn = PDF (max 100MB, 300 pages, target <10MB, RGB, optimal 7–12 slides). Instagram/TikTok = PNG image carousel. **Slidr must export both PNG ZIP and PDF.**

### 1.5 Watermark + $11 lifetime monetization (CONFIRMED viable)

**Lemon Squeezy** (Stripe-acquired, Merchant of Record):
- 5% + $0.50 per transaction → on $11: ~$0.61 fee → **~$10.39 net per unlock**
- Handles **global VAT/sales tax** automatically (critical — you don't want to file taxes in 200 jurisdictions)
- Generates a **license key per purchase** with configurable activation limit + license length
- **License API** + **webhooks** for activation/validation
- Best fit for software/SaaS

Pattern: user clicks "Remove watermark — $11 lifetime" → Lemon Squeezy checkout → on payment, webhook → `POST /api/license/activate` stores the validated key in `/data/license.json` → on every export, the watermark layer is suppressed when `license.valid === true`. **Offline-capable after first activation** (key cached locally, re-validated periodically).

The watermark itself: a small, semi-transparent "Made with Slidr" badge bottom-right of every slide, rendered both in the preview iframe (so users see it) and baked into the Puppeteer export PNG/PDF (so it's non-removable from the output). Non-removable = the badge is composited *after* the slide HTML renders, as a Puppeteer overlay, not in the editable slide HTML.

### 1.6 Modern "Claude Code Instagram" theme trends (2026)

From research on Scrolo, TheReframe, and template galleries:
- **Seamless/panoramic carousels** — visual flows across slides (gamifies swiping)
- **Dark mode + electric violet gradients** ("Midnight Neon" — `#0a0a0f` bg, violet accents)
- **Oversized hooks** — slide 1 headline max 8–9 words, 64–96px bold
- **Mixed typography** — pairing a display serif with a clean sans
- **One focal element per slide** — minimal, high-contrast (>4.5:1)
- **CSS-first motion** (Emil Kowalski philosophy) — custom easings, `@starting-style`, `prefers-reduced-motion`
- **Panoramic split layouts** — elements bleed across slide boundaries

Slidr ships a curated **Theme Gallery** (`src/lib/themes/presets/`) with at least 6 launch themes: Midnight Neon, Paper Editorial, Warm Sunset, Mono Bold, Gradient Flow, Code Terminal.

---

## 2. Architecture

```
Browser :3000
├── ChatPanel (left) ──POST /api/chat──► LLM Adapter
│                                            ├── HTTP mode: openai SDK (baseURL+key+model)  ← DEFAULT
│                                            └── CLI mode:  spawn claude|codex|gemini (auto-detected, optional)
│                                                  │
│                                                  ▼ SSE tokens
│                                            (stream back to ChatPanel)
│                                                  │
│                                            LLM calls tool: create_slide(html)
│                                                  │
├── CarouselPreview (center, sandboxed iframe) ◄──┘  via fetch /api/carousels/[id]/slides
├── SlideFilmstrip (bottom, dnd-kit)  ◄───────────  reorder/undo
│
├── ExportButton ──POST /api/carousels/[id]/export──► Puppeteer
│                                                         ├── screenshot each slide HTML at exact px
│                                                         ├── composite Watermark layer (if !license.valid)
│                                                         ├── Sharp post-process
│                                                         └── ZIP of PNGs  OR  PDF (LinkedIn)
│
├── ThemeGallery ──GET /api/themes──► src/lib/themes/presets/*.ts
│
└── LicenseGate ──POST /api/license/activate──► Lemon Squeezy License API

Storage: /data/*.json (async-mutex + atomic writes) — brand, carousels, templates, license, settings
Uploads: /public/uploads/ (logos, reference images)
LLM config: /data/llm-config.json (baseURL, apiKey, model, mode)
```

### 2.1 LLM adapter (the core differentiator)

```
src/lib/llm/
├── types.ts          # LlmConfig { mode, baseURL, apiKey, model }, LlmMessage, LlmTool
├── http-client.ts    # openai SDK wrapper — chat.completions.create({stream:true})
├── cli-detector.ts   # finds claude/codex/gemini/cursor binaries on PATH
├── cli-spawner.ts    # subprocess + stream-json parsing (port from open-carrusel)
├── adapter.ts        # generateStream(messages, tools) → routes to http|cli
└── tools.ts          # tool schema: create_slide, update_slide, fetch_url, read_image
```

**HTTP mode** (default, CLI-agnostic): uses `openai` npm SDK. Tool calls arrive as `delta.tool_calls`; Slidr executes them server-side (no `curl` to self — cleaner than open-carrusel's approach). Streams assistant text + tool-call events back via SSE.

**CLI mode** (optional, agentic): when a coding CLI is detected AND the user opts in, spawn it with `--allowedTools Bash WebFetch Read` and let it `curl` the local API (open-carrusel's proven pattern). Best for reference-image analysis and live web research.

**Config UI**: a settings modal with three fields — Base URL, API Key, Model — plus a "Detect installed CLI" button and a mode toggle (Auto / HTTP / CLI). Preset dropdown for common providers (OpenAI, Anthropic, Groq, DeepSeek, OpenRouter, Ollama).

### 2.2 Theme engine

```
src/lib/themes/
├── types.ts           # Theme { id, name, palette, fonts, spacing, motion, rules }
├── presets/
│   ├── midnight-neon.ts
│   ├── paper-editorial.ts
│   ├── warm-sunset.ts
│   ├── mono-bold.ts
│   ├── gradient-flow.ts
│   └── code-terminal.ts
├── index.ts           # listThemes(), getTheme(id)
└── auto-resize.ts     # token-based font scaling per aspect ratio
```

A theme injects: palette (5 colors), font pair (heading/body), spacing scale, motion tokens, and **design rules** that go into the system prompt. Smart auto-resize: a theme defines base font sizes at 4:5; the engine scales them proportionally for 1:1, 9:16, 3:4, 16:9 so text stays legible without manual tweaking (the aiCarousels feature).

### 2.3 Watermark + license

```
src/lib/watermark.ts     # renderWatermark(ctx, slide, license) — SVG badge composited in Puppeteer
src/lib/license/
├── lemon-squeezy.ts    # validateKey(key) → License API
├── store.ts            # /data/license.json { key, valid, activatedAt, lastChecked }
└── route.ts            # /api/license/activate, /api/license/status
```

Watermark is a semi-transparent SVG badge ("⚡ Made with Slidr") composited as a Puppeteer overlay *after* the slide renders — not in the editable HTML, so it cannot be removed by editing slide HTML. When `license.valid`, the overlay step is skipped. Preview iframe shows a faint version so users see what they're shipping.

---

## 3. Tech stack (locked)

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 16 (Turbopack) + React 19 | matches open-carrusel; fast dev |
| Language | TypeScript 5 | type safety |
| Styling | Tailwind v4 (CSS-first) | matches; modern |
| UI primitives | Radix UI + lucide-react + shadcn patterns | matches; accessible |
| Drag/drop | @dnd-kit | matches; only sane React DnD |
| LLM (HTTP) | `openai` npm SDK | universal OpenAI-compatible client |
| LLM (CLI) | cross-spawn + stream-json parse | agentic mode |
| Export | Puppeteer + Sharp + Archiver (PNG ZIP) | matches |
| PDF export | `pdf-lib` or Puppeteer print-to-PDF | LinkedIn needs PDF |
| Storage | JSON + async-mutex (atomic writes) | matches; no DB |
| Payments | Lemon Squeezy (License API + webhooks) | MoR, tax handled, license keys |
| Animations | CSS-first (Emil Kowalski tokens) | modern, lightweight |
| Node | ≥20 | matches Next 16 |

**No new heavy deps.** `openai` SDK + `pdf-lib` + Lemon Squeezy webhook handler are the only additions over open-carrusel's `package.json`.

---

## 4. Project structure

```
Slidr/
├── .claude/commands/        ← /start, /stop, /reset, /doctor (work in Claude Code)
├── .codex/                  ← AGENTS.md so Codex CLI understands the repo
├── AGENTS.md                ← cross-CLI agent instructions (Claude Code, Codex, Cursor, Gemini)
├── data/                    ← gitignored: brand, carousels, templates, license, llm-config
├── public/uploads/          ← gitignored: logos, reference images
├── scripts/
│   ├── setup.mjs           ← npm install + seed + LLM/CLI detection
│   └── doctor.mjs          ← env audit (zero deps)
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── chat/route.ts              ← LLM adapter SSE (http | cli)
│   │   │   ├── carousels/...              ← CRUD + slides + export + caption
│   │   │   ├── themes/route.ts            ← list themes
│   │   │   ├── license/activate/route.ts  ← Lemon Squeezy webhook + validate
│   │   │   ├── license/status/route.ts
│   │   │   ├── llm-config/route.ts        ← get/set baseURL+key+model+mode
│   │   │   ├── upload/route.ts
│   │   │   └── fonts/route.ts
│   │   ├── carousel/[id]/page.tsx         ← editor
│   │   ├── globals.css                    ← Tailwind v4 + motion tokens
│   │   └── page.tsx                       ← dashboard
│   ├── components/
│   │   ├── chat/             ← ChatPanel, ChatMessage, ChatInput, ReferenceImages
│   │   ├── editor/           ← CarouselPreview, SlideFilmstrip, ExportButton, SizeSelector, ThemePicker
│   │   ├── brand/            ← BrandSetup, ColorPicker, FontSelector, LogoUpload
│   │   ├── themes/           ← ThemeGallery, ThemeCard
│   │   ├── license/          ← LicenseModal, UnlockCTA
│   │   ├── llm/              ← LlmConfigModal, ProviderPresets
│   │   ├── layout/           ← TopBar
│   │   └── ui/               ← Button, Input, Badge, Dialog, etc.
│   ├── lib/
│   │   ├── llm/              ← adapter (http + cli), cli-detector, tools
│   │   ├── themes/           ← presets + auto-resize
│   │   ├── watermark.ts      ← SVG badge compositor
│   │   ├── license/          ← lemon-squeezy, store
│   │   ├── slide-html.ts     ← wrapSlideHtml (shared preview/export contract)
│   │   ├── chat-system-prompt.ts  ← dynamic prompt (brand + carousel + theme + platform)
│   │   ├── export-slides.ts ← Puppeteer PNG ZIP + PDF
│   │   ├── carousels.ts, data.ts, brand.ts, templates.ts, fonts.ts, utils.ts
│   │   └── platform-sizes.ts ← DIMENSIONS map (5 ratios × 3 platforms)
│   └── types/                ← carousel, brand, theme, license, llm
├── AGENTS.md, CLAUDE.md, README.md, LICENSE
├── next.config.ts, package.json, tsconfig.json, postcss.config.mjs, eslint.config.mjs
```

---

## 5. Sizing & platform support

```ts
// src/lib/platform-sizes.ts
export const DIMENSIONS = {
  // Instagram
  "ig-1:1":  { width: 1080, height: 1080, platform: "instagram", label: "Instagram Square" },
  "ig-4:5":  { width: 1080, height: 1350, platform: "instagram", label: "Instagram Portrait", recommended: true },
  "ig-3:4":  { width: 1080, height: 1440, platform: "instagram", label: "Instagram 3:4 Grid" },
  "ig-9:16": { width: 1080, height: 1920, platform: "instagram", label: "Instagram Story/Reel" },
  // LinkedIn
  "li-1:1":  { width: 1080, height: 1080, platform: "linkedin", label: "LinkedIn Square" },
  "li-4:5":  { width: 1080, height: 1350, platform: "linkedin", label: "LinkedIn Portrait", recommended: true },
  "li-16:9": { width: 1920, height: 1080, platform: "linkedin", label: "LinkedIn Landscape" },
  // TikTok
  "tt-9:16": { width: 1080, height: 1920, platform: "tiktok", label: "TikTok Vertical", recommended: true },
} as const;
```
Each carousel pins to one size. Export format auto-selected: LinkedIn → PDF, Instagram/TikTok → PNG ZIP.

---

## 6. Theme gallery (launch set)

| Theme | Palette (bg / primary / accent) | Fonts | Vibe |
|---|---|---|---|
| **Midnight Neon** | `#0a0a0f` / `#a78bfa` / `#22d3ee` | Space Grotesk + Inter | "Claude Code Instagram" dark |
| **Paper Editorial** | `#faf8f3` / `#1a1a1a` / `#c2410c` | Playfair Display + Inter | magazine, warm |
| **Warm Sunset** | `#1a1033` / `#fb923c` / `#f43f5e` | Bricolage Grotesque + Inter | gradient, cozy |
| **Mono Bold** | `#ffffff` / `#000000` / `#ef4444` | Archivo + Inter | brutalist, high-contrast |
| **Gradient Flow** | `#0f172a` / `#818cf8` / `#f472b6` | Sora + Inter | smooth gradient mesh |
| **Code Terminal** | `#0d1117` / `#58a6ff` / `#3fb950` | JetBrains Mono + Inter | dev/hacker aesthetic |

Each theme ships as a TS file exporting palette, fonts, spacing, motion tokens, and `designRules` (injected into the system prompt). Smart auto-resize scales fonts per aspect ratio.

---

## 7. Watermark & licensing flow

1. Every export (PNG or PDF) composites an SVG badge bottom-right: `⚡ Made with Slidr` (semi-transparent, brand-consistent).
2. Badge is a Puppeteer overlay applied *after* slide HTML renders → non-editable in slide HTML.
3. Preview iframe shows a faint badge so users see it before exporting.
4. "Remove watermark — $11 lifetime" CTA in the top bar + export modal.
5. Click → Lemon Squeezy checkout (product: "Slidr Lifetime Unlock", $11, license keys enabled, activation limit 3, lifetime).
6. On payment: Lemon Squeezy webhook → `POST /api/license/activate` → validates key via License API → stores `{ key, valid: true, activatedAt }` in `/data/license.json`.
7. All subsequent exports skip the watermark overlay. License re-validated on app start + every 7 days (offline-capable in between).
8. Settings → "License" shows status + re-activate / transfer.

---

## 8. Cross-CLI agent support

The user wants Slidr to "run on any cli like codex and claude code and any other cli." Two meanings — both satisfied:

**(a) Slidr the *product* runs CLI-agnostically:** the LLM adapter accepts base URL + API key (HTTP mode) so the app itself never depends on a specific CLI. Free tiers (Groq, Google AI Studio) make it runnable at $0.

**(b) Slidr's *repo* is agent-friendly:** ship `AGENTS.md` (cross-CLI standard), `.claude/commands/` (Claude Code slash commands), and a `.codex/` config so Codex/Cursor/Gemini CLIs can develop against the repo with the same context. This matches what open-carrusel + Open Design do.

---

## 9. 2-day ship plan

> **Constraint:** ship in 2 days, market-ready. We fork open-carrusel's proven base (saves ~60% of the work) and layer the three pivots. Each phase has a hard verification gate.

### Day 1 — Foundation + AI core + editor

**Phase A — Scaffold & LLM adapter (morning)**
- Fork/copy open-carrusel into Slidr, rebrand, clean Instagram-only defaults
- Replace `claude-path.ts` with `src/lib/llm/` (http-client + cli-detector + adapter + tools)
- Add `src/lib/platform-sizes.ts` (8 sizes, 3 platforms)
- Expand `AspectRatio` types + `wrapSlideHtml()` to handle all sizes
- Add `LlmConfigModal` (base URL + key + model + provider presets)
- **Gate:** `npm run dev` → config modal saves baseURL/key → `/api/chat` returns a streamed token from the configured provider.

**Phase B — Theme engine + multi-platform editor (afternoon)**
- Build `src/lib/themes/` with 6 presets + auto-resize
- Add `ThemePicker` in the editor; inject theme rules into system prompt
- Add `SizeSelector` (platform + ratio dropdown); carousel pins to size
- Update `chat-system-prompt.ts` for multi-platform + theme awareness
- **Gate:** create a carousel at `li-4:5` with "Midnight Neon" theme → chat generates 5 slides → preview renders at 1080×1350 with theme palette.

### Day 2 — Export, monetization, polish, ship

**Phase C — Export (PNG ZIP + PDF) + watermark (morning)**
- Extend `export-slides.ts`: LinkedIn sizes → PDF (`pdf-lib`), others → PNG ZIP
- Add `src/lib/watermark.ts` (SVG badge Puppeteer overlay)
- Watermark on by default; faint badge in preview iframe
- **Gate:** export a `li-4:5` carousel → produces a multi-page PDF with watermark; export `ig-4:5` → ZIP of PNGs with watermark.

**Phase D — Licensing + Lemon Squeezy (afternoon)**
- `src/lib/license/lemon-squeezy.ts` (License API validate)
- `/api/license/activate` (webhook handler) + `/api/license/status`
- `LicenseModal` + top-bar CTA + settings page
- Test the full flow on Lemon Squeezy test mode
- **Gate:** enter a test license key → `/data/license.json` flips `valid:true` → next export has no watermark.

**Phase E — Polish & ship (evening)**
- Redesign dashboard + editor UI to "Midnight Neon" aesthetic
- CSS-first animations (custom easings, `@starting-style`)
- `README.md` (quickstart: base URL + key OR CLI), `AGENTS.md`, `.claude/commands/`, `.codex/`
- `/doctor` audit, production `npm run build` clean
- Deploy: Vercel (free) OR ship as a git repo users clone + `npm run setup`
- **Gate:** fresh clone → `npm run setup` → enter Groq free key → create + export a carousel end-to-end → watermark present; enter test license → watermark gone.

---

## 10. Success criteria (verifiable, for ship gate)

1. `npm run build` exits 0 with zero TypeScript errors.
2. `npm run doctor` passes — Node ≥20, LLM config present or CLI detected, data dirs seeded, port free.
3. With a **Groq free-tier** base URL + key + `llama-3.3-70b` model, creating a carousel via chat produces ≥5 slides that render in the preview iframe at the selected size.
4. Exporting a LinkedIn-size carousel produces a **multi-page PDF**; exporting an Instagram-size carousel produces a **ZIP of PNGs**. Both at exact pixel dimensions (±0px).
5. Every exported slide (PNG and PDF page) contains the **Slidr watermark badge** when no license is active.
6. Activating a **Lemon Squeezy test license key** via `/api/license/activate` flips `/data/license.json` to `valid:true`, and the **next export omits the watermark**.
7. At least **3 themes** (Midnight Neon, Paper Editorial, Code Terminal) render correctly across 3 sizes (ig-4:5, li-4:5, tt-9:16).
8. The app runs with **no coding CLI installed** (HTTP mode only) — verified by `npx env -u PATH` style isolation test (or just not having claude/codex on PATH).
9. `README.md` quickstart works on a fresh clone in ≤5 commands with a free Groq key.

---

## 11. Open questions for you (decision-blocking)

These materially change architecture/scope — please answer before we start:

1. **Lemon Squeezy product + webhook setup** — do you already have a Lemon Squeezy account + product created for the $11 lifetime unlock, or should the plan include creating it? (Affects whether Phase D can fully test the webhook or stubs it.)
2. **Company name + watermark text** — "Slidr" is assumed. What's the exact watermark text/logo? ("⚡ Made with Slidr" is the placeholder.) And is "Slidr" the final product name?
3. **Deploy target** — Vercel (hosted demo) vs. ship-as-cloneable-repo (users run locally) vs. both? (Affects whether we need a public landing page + the watermark/license flow must handle multi-user.)
4. **License** — MIT (like open-carrusel) or a custom license that restricts removing the watermark from the source? (The compiled output watermark is enforced regardless; this is about the source code license.)

---

## 12. Assumptions (safe defaults unless you say otherwise)

- **Node ≥20** available on dev + target machines.
- **Puppeteer's Chromium** download (~300MB) is acceptable on first run (matches open-carrusel).
- **Single-user, local-first** app (no multi-tenant auth) — same as open-carrusel. If you later want a hosted multi-user version, that's a follow-up.
- **Lemon Squeezy** chosen over Stripe/Gumroad for the $11 one-time unlock (MoR + license keys + tax handled). Swappable to Gumroad if you prefer its 10% flat simplicity.
- **MIT license** for the source (matching open-carrusel) — the watermark + $11 unlock is a product-layer constraint, not a source-license restriction.
- The "Claude Code Instagram" aesthetic = dark gradient + electric violet + oversized hooks + mono/serif pairings, as synthesized from 2026 trend research.

---

## 13. What's explicitly OUT of scope for the 2-day ship

- Multi-user accounts / cloud sync
- AI image generation (Piktochart/CarouselBot feature) — text + layout only for v1
- Team collaboration / folders
- LinkedIn post generator, quote cards, infographics, headshots (aiCarousels bonus features)
- Video/Reels export (HyperFrames-style) — static carousels only
- Mobile app — web-only, responsive
- Plugin/extension ecosystem (Open Design's 217 skills)

These become the post-launch roadmap.

---

**Ready when you are.** Review the plan, answer the 4 questions in §11, and we'll start building on Day 1.
