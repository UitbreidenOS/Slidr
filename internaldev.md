# Slidr — Internal Development Plan (full)

> **What:** A community, CLI-agnostic AI carousel maker for LinkedIn + Instagram + TikTok.
> **How:** Fork-and-evolve the open-carrusel architecture (Next.js 16 / React 19 / Tailwind v4 / Puppeteer), replace the hard Claude-CLI dependency with a dual-mode LLM adapter (OpenAI-compatible HTTP **or** any coding CLI), add a 15-theme gallery curated from promptbase.shop/carousels using Open Design's DESIGN.md format, support all platform sizes, and monetize via a non-removable watermark with a $11 lifetime Lemon Squeezy unlock.
> **Ship window:** 2 days, market-ready.

---

## PART A — Research summary (the evidence behind every decision)

### A1. open-carrusel — what we keep, what we change

Source: https://github.com/Hainrixz/open-carrusel (MIT, 346★, Next.js 16).

**Keep (proven architecture):**
- Next.js 16 (Turbopack) + React 19 + TypeScript 5 + Tailwind v4 (CSS-first config in `globals.css`)
- Radix UI + lucide-react primitives; `cn()` class merging; ≤300-line component rule
- `@dnd-kit` for drag-reorder filmstrip
- **Slides as body-level HTML**, wrapped by a single `wrapSlideHtml()` contract shared between the preview `<iframe sandbox="">` and the Puppeteer export path → "what you see is what you ship"
- JSON file storage with `async-mutex` + atomic (tmp-file + rename) writes — no DB
- Puppeteer → PNG ZIP export; Sharp for post-processing
- System prompt = "autonomous design engine": 8-slide narrative arc (hook → setup → value×3 → summary → CTA), posts slides via tool calls
- Brand config: name, 5-color palette, heading/body fonts, logo, style keywords
- Style presets saved as JSON (`name`, `designRules`, `exampleSlideHtml`, `aspectRatio`)
- `.claude/commands/` slash commands (`/start`, `/stop`, `/reset`, `/doctor`)

**Change (Slidr-specific):**
- ❌ Drop the hard `claude-path.ts` subprocess dependency in `/api/chat`
- ✅ Dual-mode LLM adapter (`src/lib/llm/`): **HTTP mode** (OpenAI SDK, default, needs only baseURL+key+model) + **CLI mode** (auto-detect Claude Code / Codex / Gemini / Cursor / **Antigravity** / OpenCode on PATH, optional)
- ✅ Expand `AspectRatio` to 8 sizes across 3 platforms (Instagram, LinkedIn, TikTok)
- ✅ Add **TikTok** support
- ✅ Add **PDF export** for LinkedIn (LinkedIn carousels = document posts; PNG won't work)
- ✅ Add a **15-theme gallery** (`src/lib/themes/`) curated from promptbase.shop/carousels, authored in Open Design's DESIGN.md format for portability
- ✅ Add a **watermark layer** in `wrapSlideHtml()` + Puppeteer export, gated by license
- ✅ Add a **license module** validating Lemon Squeezy keys
- ✅ Redesign UI around the "Claude Code Instagram" aesthetic (dark gradient, electric violet, oversized hooks, CSS-first motion)
- ✅ First-class **Antigravity CLI** (`agy`) adapter — Google's terminal-first agent, the one most people will use

### A2. CLI-agnostic LLM pattern (CONFIRMED viable)

Anthropic publishes an **OpenAI SDK compatibility layer** at `https://api.anthropic.com/v1/`. A single `openai` npm SDK with three knobs (`apiKey`, `baseURL`, `model`) speaks to every major provider:

| Provider | Base URL | Notes |
|---|---|---|
| OpenAI | `https://api.openai.com/v1` | gpt-4o, gpt-4.1, o-series |
| Anthropic | `https://api.anthropic.com/v1/` | claude-opus-4, claude-sonnet-4 (compat layer) |
| Groq | `https://api.groq.com/openai/v1` | **free tier**, ultra-fast Llama/Mixtral |
| OpenRouter | `https://openrouter.ai/api/v1` | aggregator, free models available |
| DeepSeek | `https://api.deepseek.com/v1` | cheap, strong code/design |
| Google AI Studio | `https://generativelanguage.googleapis.com/v1beta/openai/` | **free tier**, Gemini |
| Ollama (local) | `http://localhost:11434/v1` | fully offline, no key |
| LM Studio (local) | `http://localhost:1234/v1` | fully offline |

Streaming = SSE `stream:true`, `delta.content` — same shape everywhere. Tool-calling = OpenAI tool spec (common subset). **This is the differentiator**: open-carrusel requires the Claude CLI; Open Design requires a daemon+CLI; Slidr needs only base URL + key (runnable on free tiers).

### A3. Coding-CLI auto-detection (the optional agentic mode)

When a coding CLI *is* installed, Slidr auto-detects it and offers agentic mode (web-fetch, reference-image analysis, file-read). Detected binaries and probe order:

| CLI | Binary / probe | Provider | Why it matters |
|---|---|---|---|
| **Antigravity CLI** | `agy` (also `antigravity`) | Google | **"Tigravity" in the user's words** — Google's terminal-first agent (1.3K★, actively shipped). The one most people will use. Install: `curl -fsSL https://antigravity.google/cli/install.sh \| bash`. Multi-step reasoning, subagents, tool calling, persistent history. |
| Claude Code | `claude` | Anthropic | the open-carrusel original; `--output-format stream-json --include-partial-messages` |
| Codex | `codex` | OpenAI | OpenAI's CLI |
| Gemini CLI | `gemini` | Google | free-tier agentic |
| Cursor agent | `cursor-agent` | Cursor | popular IDE agent |
| OpenCode | `opencode` | open | TUI agent |
| Aider | `aider` | open | git-aware |
| Qwen | `qwen` | Alibaba | |

**Antigravity integration specifics:** `agy` accepts a prompt and runs multi-step reasoning with tool calling (Bash, file read/edit, web). Unlike Claude Code's `--append-system-prompt` + `--allowedTools` flags, Antigravity uses interactive TUI by default but supports headless invocation. Slidr will spawn `agy --print "<prompt>"` (non-interactive print mode) or fall back to piping via `agy`'s stdin protocol, parsing streamed output. The system prompt (brand + theme + platform) is injected the same way as for HTTP mode. Antigravity is a **first-class peer** of Claude Code in `cli-spawner.ts`, not an afterthought — it's the default-recommended CLI when present because of its free Gemini-backed reasoning and broad adoption.

**"Free Claude Code repo" interpretation:** a repo that, like Claude Code, runs autonomously without a paid Anthropic subscription. The OpenAI-compatible HTTP path with Groq/Google free tiers delivers this. When a CLI *is* installed (Antigravity recommended), Slidr uses it for agentic steps.

### A4. Competitive positioning

| Tool | Pricing | Source | LLM lock-in | Carousel focus | Slidr advantage |
|---|---|---|---|---|---|
| Claude Design (Anthropic, Apr 2026) | Pro/Max paid | closed, cloud | Anthropic only | general design | Open, BYOK, free-tier, carousel-specialist |
| Open Design (nexu-io) | free, Apache-2.0 | open, desktop daemon | 21 CLI adapters + BYOK | general design | **no daemon**, web-only, lighter, carousel-only, shippable in 2 days |
| aiCarousels.com | freemium SaaS | closed, hosted | their AI | carousel-specialist | self-hostable, BYOK, $11 lifetime vs monthly sub |
| open-carrusel | free, MIT | open, web | Claude CLI only | Instagram only | multi-platform, CLI-agnostic, theme engine, watermark monetization |
| CarouselBot | paid | closed | their AI | carousel-specialist | open, BYOK |
| **Slidr** | **free + $11 lifetime** | open | **any (base URL + key) + Antigravity** | LinkedIn + Instagram + TikTok | — |

### A5. Platform sizing specs (2026, verified)

| Platform | Format | Pixels | Aspect | Export | Notes |
|---|---|---|---|---|---|
| Instagram | Feed portrait (rec.) | 1080×1350 | 4:5 | PNG | max feed real estate |
| Instagram | Feed square | 1080×1080 | 1:1 | PNG | grid crop safe |
| Instagram | Feed new 3:4 | 1080×1440 | 3:4 | PNG | new grid |
| Instagram | Stories / Reels | 1080×1920 | 9:16 | PNG | full screen |
| LinkedIn | Carousel (rec.) | 1080×1350 | 4:5 | **PDF** | document post, 50–80px safe zone |
| LinkedIn | Carousel square | 1080×1080 | 1:1 | PDF | default |
| LinkedIn | Carousel landscape | 1920×1080 | 16:9 | PDF | less feed impact |
| TikTok | Photo carousel | 1080×1920 | 9:16 | PNG | vertical |

LinkedIn = PDF (max 100MB, 300 pages, target <10MB, RGB, optimal 7–12 slides). Instagram/TikTok = PNG image carousel. **Slidr exports both PNG ZIP and PDF.**

### A6. Watermark + $11 lifetime monetization (CONFIRMED viable)

**Lemon Squeezy** (Stripe-acquired, Merchant of Record):
- 5% + $0.50/transaction → on $11: ~$0.61 fee → **~$10.39 net per unlock**
- Handles global VAT/sales tax automatically (no 200-jurisdiction filing)
- Generates a license key per purchase; configurable activation limit + license length
- License API + webhooks for activation/validation
- Best fit for software/SaaS

Flow: user clicks "Remove watermark — $11 lifetime" → Lemon Squeezy checkout → webhook → `POST /api/license/activate` stores validated key in `/data/license.json` → on every export, watermark suppressed when `license.valid === true`. Offline-capable after first activation (key cached, re-validated every 7 days). Watermark = semi-transparent SVG badge composited *after* slide HTML renders (Puppeteer overlay, not editable HTML) → non-removable from output.

### A7. Modern "Claude Code Instagram" theme trends (2026)

From Scrolo, TheReframe, and template galleries:
- Seamless/panoramic carousels (visual flows across slides)
- Dark mode + electric violet gradients ("Midnight Neon" — `#0a0a0f` bg, violet accents)
- Oversized hooks — slide 1 headline max 8–9 words, 64–96px bold
- Mixed typography — display serif + clean sans
- One focal element per slide, high-contrast (>4.5:1)
- CSS-first motion (Emil Kowalski) — custom easings, `@starting-style`, `prefers-reduced-motion`
- Panoramic split layouts — elements bleed across slide boundaries

### A8. promptbase.shop/carousels — the 15-theme source

Fetched `https://promptbase.shop/data/carousels.json` (105 carousels, 6 categories). Categories: Claude AI (81), Student Perks (10), GPT Image (7), Beauty (4), 50-Series (2), Gemini Image (1). 13 are free. Each carousel has `id`, `title`, `category`, `slideCount`, `coverUrl`, `pdf`, `free`. Cover images are gated (HTTP 403 on direct fetch) — themes are derived from titles + category + the known promptbase visual style (bold typography, dark/gradient backgrounds, oversized numerals, editorial layouts). We curate **15 launch themes** spanning the visual range of the catalog (see Part C).

### A9. Open Design DESIGN.md theme format (interoperability)

Open Design (nexu-io/open-design, 71.4K★) ships 129+ design systems as Markdown files at `design-systems/<brand>/DESIGN.md`. Each file is a structured design spec: Visual Theme & Atmosphere → Color Palette & Roles (with CSS variables like `--palette-bg-primary-core`) → Typography Rules (family, weights, hierarchy table) → Spacing → Motion. This is a **portable, agent-readable format** — any coding CLI (Antigravity, Claude Code, Codex) can ingest it. Slidr adopts this format for its theme files so themes are (a) human-editable, (b) agent-injectable into the system prompt, (c) compatible with the broader open-design ecosystem. We parse DESIGN.md → `Theme` TS object → inject into `chat-system-prompt.ts`.

---

## PART B — Architecture

```
Browser :3000
├── ChatPanel (left) ──POST /api/chat──► LLM Adapter
│                                            ├── HTTP mode: openai SDK (baseURL+key+model)  ← DEFAULT, CLI-agnostic
│                                            └── CLI mode:  spawn agy|claude|codex|gemini|cursor  (auto-detected, optional)
│                                                  │  (Antigravity = default-recommended when present)
│                                                  ▼ SSE tokens + tool-call events
│                                            (stream back to ChatPanel)
│                                                  │
│                                            LLM calls tool: create_slide(html)
│                                                  │
├── CarouselPreview (center, sandboxed iframe) ◄──┘  via /api/carousels/[id]/slides
├── SlideFilmstrip (bottom, dnd-kit)  ◄───────────  reorder/undo
│
├── ThemeGallery ──GET /api/themes──► src/lib/themes/presets/*.md (DESIGN.md format)
│
├── ExportButton ──POST /api/carousels/[id]/export──► Puppeteer
│                                                         ├── screenshot each slide HTML at exact px
│                                                         ├── composite Watermark layer (if !license.valid)
│                                                         ├── Sharp post-process
│                                                         └── ZIP of PNGs  OR  PDF (LinkedIn)
│
└── LicenseGate ──POST /api/license/activate──► Lemon Squeezy License API

Storage: /data/*.json (async-mutex + atomic writes) — brand, carousels, templates, license, llm-config, theme-overrides
Uploads: /public/uploads/ (logos, reference images)
LLM config: /data/llm-config.json (mode, baseURL, apiKey, model, cli)
```

### B1. LLM adapter (the core differentiator)

```
src/lib/llm/
├── types.ts          # LlmConfig { mode:'http'|'cli'|'auto', baseURL, apiKey, model, cli? }, LlmMessage, LlmTool
├── http-client.ts    # openai SDK wrapper — chat.completions.create({stream:true, tools})
├── cli-detector.ts   # finds agy|claude|codex|gemini|cursor|opencode|aider|qwen on PATH (probe order: agy first)
├── cli-spawner.ts    # subprocess + stream parsing; per-CLI arg builders (agy --print, claude -p --stream-json, etc.)
├── adapter.ts        # generateStream(messages, tools, config) → routes to http|cli; Auto = cli if present else http
└── tools.ts          # tool schema: create_slide, update_slide, delete_slide, fetch_url, read_image, set_caption
```

**HTTP mode** (default, CLI-agnostic): uses `openai` npm SDK. Tool calls arrive as `delta.tool_calls`; Slidr executes them server-side (no `curl` to self — cleaner than open-carrusel). Streams assistant text + tool-call events back via SSE.

**CLI mode** (optional, agentic): when a coding CLI is detected AND user opts in (or `mode:'auto'`), spawn it. Per-CLI arg builders:
- **Antigravity** (`agy`): `agy --print "<prompt>"` headless mode; inject system prompt as a leading user/system message; parse streamed tokens. Subagents + tool calling handled by Antigravity natively.
- **Claude Code** (`claude`): `-p <msg> --output-format stream-json --include-partial-messages --append-system-prompt <sp> --allowedTools Bash WebFetch Read` (port from open-carrusel).
- **Codex** (`codex`), **Gemini** (`gemini`), **Cursor** (`cursor-agent`), **OpenCode**, **Aider**, **Qwen**: each gets a minimal arg builder; fall back to a generic `"<cli> --print"` contract where possible.

**Config UI**: settings modal with Base URL, API Key, Model fields + a "Detect installed CLI" button + mode toggle (Auto / HTTP / CLI). Provider preset dropdown (OpenAI, Anthropic, Groq, DeepSeek, OpenRouter, Google, Ollama, LM Studio). When a CLI is detected, a badge shows "Antigravity CLI detected — use for agentic mode?" with a one-click enable.

### B2. Theme engine (15 themes, DESIGN.md format)

```
src/lib/themes/
├── types.ts           # Theme { id, name, category, palette, fonts, spacing, motion, designRules, atmosphere }
├── parser.ts          # parseDesignMd(md) → Theme  (reads Open Design DESIGN.md format)
├── serializer.ts      # themeToPrompt(theme) → string (injects into chat-system-prompt)
├── auto-resize.ts     # token-based font scaling per aspect ratio (smart auto-resize à la aiCarousels)
├── presets/
│   ├── 01-midnight-neon.md
│   ├── 02-paper-editorial.md
│   ├── 03-claude-code-dark.md
│   ├── 04-brand-studio.md
│   ├── 05-student-perks.md
│   ├── 06-ember-oak.md
│   ├── 07-velvet-roast.md
│   ├── 08-aurora-activewear.md
│   ├── 09-lumiere-skincare.md
│   ├── 10-nova-roast.md
│   ├── 11-pulse-energy.md
│   ├── 12-slicebox-pizza.md
│   ├── 13-beauty-campaign.md
│   ├── 14-agentic-operator.md
│   └── 15-gradient-flow.md
└── index.ts           # listThemes(), getTheme(id), themesByCategory()
```

A theme injects: palette (5+ colors with CSS variable roles), font pair (heading/body + weights), spacing scale, motion tokens, and **design rules** that go into the system prompt. Smart auto-resize: a theme defines base font sizes at 4:5; the engine scales them proportionally for 1:1, 9:16, 3:4, 16:9 so text stays legible without manual tweaking. Themes are Markdown (DESIGN.md format) so they're (a) human-editable in any editor, (b) diff-friendly in git, (c) ingestible by any coding CLI including Antigravity.

### B3. Watermark + license

```
src/lib/watermark.ts        # renderWatermark(ctx, slide, license) — SVG badge composited in Puppeteer
src/lib/license/
├── lemon-squeezy.ts        # validateKey(key) → License API
├── store.ts                # /data/license.json { key, valid, activatedAt, lastChecked }
└── route.ts                # /api/license/activate (webhook), /api/license/status
```

Watermark = semi-transparent SVG badge ("⚡ Made with Slidr") composited as a Puppeteer overlay *after* the slide renders — not in editable slide HTML, so it cannot be removed by editing slide HTML. When `license.valid`, the overlay step is skipped. Preview iframe shows a faint version so users see what they're shipping.

### B4. Export pipeline

```
src/lib/export-slides.ts
├── exportPngZip(carousel)    # Puppeteer screenshot each slide → Sharp → Archiver → ZIP
├── exportPdf(carousel)       # LinkedIn: Puppeteer print-to-PDF or pdf-lib multi-page
└── compositeWatermark(page, license)  # SVG overlay if !license.valid
```

LinkedIn sizes → PDF (multi-page, one slide per page, RGB, target <10MB). Instagram/TikTok → PNG ZIP. Export format auto-selected by the carousel's platform.

---

## PART C — The 15 launch themes (curated from promptbase.shop/carousels)

Derived from the 105-carousel catalog. Each theme is a `DESIGN.md` file in `src/lib/themes/presets/`. Format mirrors Open Design (Visual Atmosphere → Color Palette with CSS vars → Typography → Spacing → Motion → Design Rules). Categories map to promptbase's taxonomy.

| # | Theme ID | Name | Source inspiration | Palette (bg / primary / accent) | Fonts | Vibe |
|---|---|---|---|---|---|---|
| 1 | `midnight-neon` | Midnight Neon | "Claude Code Instagram" trend + dark dev carousels | `#0a0a0f` / `#a78bfa` / `#22d3ee` | Space Grotesk + Inter | Electric violet, dark gradient, oversized hooks |
| 2 | `paper-editorial` | Paper Editorial | "Steal My Carousel System" editorial layouts | `#faf8f3` / `#1a1a1a` / `#c2410c` | Playfair Display + Inter | Magazine, warm cream, serif display |
| 3 | `claude-code-dark` | Claude Code Dark | Claude AI category (81 carousels) dominant style | `#0d1117` / `#d29922` / `#58a6ff` | JetBrains Mono + Inter | Terminal, monospace headings, code-block accents |
| 4 | `brand-studio` | Brand Studio | "Ember Oak Male Brand" / "Velvet Roast Female Brand" (20-slide brand decks) | `#1a1033` / `#f59e0b` / `#ec4899` | Bricolage Grotesque + Inter | Premium brand deck, warm-on-dark |
| 5 | `student-perks` | Student Perks | Student Perks category (Adobe, Notion, Figma education carousels) | `#ffffff` / `#2563eb` / `#f59e0b` | Sora + Inter | Clean, friendly, education/product highlight |
| 6 | `ember-oak` | Ember Oak | "Ember Oak Male Brand" | `#1c1410` / `#d97706` / `#fbbf24` | Fraunces + Inter | Earthy, masculine, warm-ember gradient |
| 7 | `velvet-roast` | Velvet Roast | "Velvet Roast Female Brand" | `#2d1b2e` / `#e879f9` / `#fda4af` | Cormorant Garamond + Inter | Luxe feminine, velvet plum, soft rose |
| 8 | `aurora-activewear` | Aurora Activewear | "AURORA Activewear" | `#08161a` / `#2dd4bf` / `#84cc16` | Archivo + Inter | Sporty, high-energy, teal-lime gradient |
| 9 | `lumiere-skincare` | Lumiere Skincare | "LUMIERE Skincare" | `#fdfbf7` / `#be9b6f` / `#d4a574` | Jost + Inter | Minimal beauty, soft gold, airy whitespace |
| 10 | `nova-roast` | Nova Roast | "NOVA ROAST Coffee" | `#1a120b` / `#c97b3f` / `#f0c987` | Recoleta + Inter | Coffee-house warmth, roasted browns |
| 11 | `pulse-energy` | Pulse Energy | "PULSE Energy Drink" | `#050510` / `#a3e635` / `#f43f5e` | Orbitron + Inter | High-voltage neon, electric lime-crimson |
| 12 | `slicebox-pizza` | Slicebox Pizza | "SLICEBOX Pizza" | `#fff8f0` / `#dc2626` / `#f59e0b` | Pacifico + Inter | Playful food brand, red-amber, rounded |
| 13 | `beauty-campaign` | Beauty Campaign | "Generate AI Beauty Campaigns" / "Lighting Camera Beauty Setups" | `#0c0c0c` / `#e5e5e5` / `#c084fc` | Bodoni Moda + Inter | Editorial beauty, high-contrast monochrome + violet |
| 14 | `agentic-operator` | Agentic Operator | "Claude MCP For Operators" / "Agent Skills Write Once" / Antigravity aesthetic | `#0b0f1a` / `#3b82f6` / `#22d3ee` | IBM Plex Mono + Inter | Operator/ops, blueprint grid, blue-cyan |
| 15 | `gradient-flow` | Gradient Flow | "Stop Paying 5K For Hero" / modern gradient mesh trend | `#0f172a` / `#818cf8` / `#f472b6` | Sora + Inter | Smooth gradient mesh, indigo-pink flow |

Each theme file (`src/lib/themes/presets/NN-name.md`) follows this structure (abridged):

```markdown
# Design System: <Name>

> Category: <Claude AI | Student Perks | GPT Image | Beauty | Agentic>
> <one-line atmosphere>

## 1. Visual Theme & Atmosphere
<2-3 sentences describing the mood, when to use it, what makes it recognizable>

## 2. Color Palette & Roles
### Primary
- **<Name>** (`#hex`): CSS var `--palette-bg-primary-core`. Used for: <roles>
### Secondary & Accent
- **<Name>** (`#hex`): `--palette-accent`. Used for: <roles>
### Surface & Background
- **<Name>** (`#hex`): `--palette-bg-surface`
### Neutrals & Text
- **<Name>** (`#hex`): `--palette-text-primary`
### Gradient System
`linear-gradient(<angle>, <stops>)` — used for <moment>

## 3. Typography Rules
### Font Family
- **<Heading>** (primary), **<Body>** (body). Fallbacks: <stack>
### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hook | 72px | 800 | 1.1 | -0.02em |
| Heading | 44px | 700 | 1.2 | -0.01em |
| Body | 24px | 400 | 1.5 | 0 |

## 4. Spacing & Layout
- Padding: 64–80px; gap scale: 8/16/24/32/48px
- One focal element per slide; 60-80px min padding

## 5. Motion (CSS-first)
- Easing: `cubic-bezier(0.22,1,0.36,1)` for entries
- `@starting-style` for fade-in; respect `prefers-reduced-motion`

## 6. Design Rules (injected into system prompt)
<bullet rules the LLM follows: contrast >4.5:1, hook ≤8 words, vary layouts, brand consistency, etc.>
```

`parser.ts` reads these files at startup into `Theme` objects; `serializer.ts` renders the rules section into the chat system prompt so the LLM generates on-theme slides.

---

## PART D — Tech stack (locked)

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 16 (Turbopack) + React 19 | matches open-carrusel |
| Language | TypeScript 5 | type safety |
| Styling | Tailwind v4 (CSS-first) | modern, matches |
| UI primitives | Radix UI + lucide-react + shadcn patterns | accessible, matches |
| Drag/drop | @dnd-kit | only sane React DnD |
| LLM (HTTP) | `openai` npm SDK | universal OpenAI-compatible client |
| LLM (CLI) | cross-spawn + per-CLI arg builders (agy, claude, codex, gemini, cursor) | agentic mode |
| Export | Puppeteer + Sharp + Archiver (PNG ZIP) | matches |
| PDF export | `pdf-lib` (multi-page) or Puppeteer print-to-PDF | LinkedIn needs PDF |
| Storage | JSON + async-mutex (atomic writes) | no DB |
| Payments | Lemon Squeezy (License API + webhooks) | MoR, tax handled, license keys |
| Animations | CSS-first (Emil Kowalski tokens) | lightweight, modern |
| Node | ≥20 | matches Next 16 |
| Themes | DESIGN.md (Open Design format) | portable, agent-readable |

**Only new deps over open-carrusel:** `openai` SDK + `pdf-lib` + Lemon Squeezy webhook handler. The theme files are Markdown — no parsing dep needed beyond a tiny marked-style reader.

---

## PART E — Project structure

```
Slidr/
├── .claude/commands/        ← /start, /stop, /reset, /doctor (work in Claude Code)
├── .codex/                   ← AGENTS.md so Codex CLI understands the repo
├── .antigravity/             ← AGENTS.md + skills for Antigravity CLI (agy)
├── AGENTS.md                 ← cross-CLI agent instructions (Claude Code, Codex, Cursor, Gemini, Antigravity)
├── CLAUDE.md                 ← architecture doc for AI assistants
├── data/                     ← gitignored: brand, carousels, templates, license, llm-config, theme-overrides
├── public/uploads/           ← gitignored: logos, reference images
├── scripts/
│   ├── setup.mjs             ← npm install + seed + LLM/CLI detection (agy first)
│   └── doctor.mjs            ← env audit (zero deps)
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── chat/route.ts              ← LLM adapter SSE (http | cli)
│   │   │   ├── carousels/...              ← CRUD + slides + export + caption
│   │   │   ├── themes/route.ts            ← list themes (parsed from presets/*.md)
│   │   │   ├── license/activate/route.ts ← Lemon Squeezy webhook + validate
│   │   │   ├── license/status/route.ts
│   │   │   ├── llm-config/route.ts        ← get/set baseURL+key+model+mode+cli
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
│   │   ├── llm/              ← LlmConfigModal, ProviderPresets, CliDetectorBadge
│   │   ├── layout/           ← TopBar
│   │   └── ui/               ← Button, Input, Badge, Dialog, etc.
│   ├── lib/
│   │   ├── llm/              ← adapter (http + cli), cli-detector, cli-spawner, tools
│   │   ├── themes/           ← parser, serializer, auto-resize, presets/*.md
│   │   ├── watermark.ts      ← SVG badge compositor
│   │   ├── license/          ← lemon-squeezy, store
│   │   ├── slide-html.ts     ← wrapSlideHtml (shared preview/export contract)
│   │   ├── chat-system-prompt.ts  ← dynamic prompt (brand + carousel + theme + platform)
│   │   ├── export-slides.ts  ← Puppeteer PNG ZIP + PDF + watermark
│   │   ├── platform-sizes.ts ← DIMENSIONS map (8 sizes × 3 platforms)
│   │   ├── carousels.ts, data.ts, brand.ts, templates.ts, fonts.ts, utils.ts
│   │   └── antigravity.ts    ← agy arg builder + stream parser
│   └── types/                ← carousel, brand, theme, license, llm
├── AGENTS.md, CLAUDE.md, README.md, LICENSE
├── next.config.ts, package.json, tsconfig.json, postcss.config.mjs, eslint.config.mjs
```

---

## PART F — Sizing & platform support

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

## PART G — Watermark & licensing flow

1. Every export (PNG or PDF) composites an SVG badge bottom-right: `⚡ Made with Slidr` (semi-transparent, brand-consistent).
2. Badge is a Puppeteer overlay applied *after* slide HTML renders → non-editable in slide HTML.
3. Preview iframe shows a faint badge so users see it before exporting.
4. "Remove watermark — $11 lifetime" CTA in top bar + export modal.
5. Click → Lemon Squeezy checkout (product: "Slidr Lifetime Unlock", $11, license keys enabled, activation limit 3, lifetime).
6. On payment: Lemon Squeezy webhook → `POST /api/license/activate` → validates key via License API → stores `{ key, valid: true, activatedAt }` in `/data/license.json`.
7. All subsequent exports skip the watermark overlay. License re-validated on app start + every 7 days (offline-capable in between).
8. Settings → "License" shows status + re-activate / transfer.

---

## PART H — Cross-CLI agent support

The user wants Slidr to "run on any cli like codex and claude code and any other cli." Two meanings — both satisfied:

**(a) Slidr the *product* runs CLI-agnostically:** the LLM adapter accepts base URL + API key (HTTP mode) so the app never depends on a specific CLI. Free tiers (Groq, Google AI Studio) make it runnable at $0. When a CLI is installed, Slidr auto-detects it (probe order: **Antigravity/agy first**, then Claude Code, Codex, Gemini, Cursor, OpenCode, Aider, Qwen) and offers agentic mode.

**(b) Slidr's *repo* is agent-friendly:** ship `AGENTS.md` (cross-CLI standard), `.claude/commands/` (Claude Code slash commands), `.codex/` (Codex), and `.antigravity/` (Antigravity skills + AGENTS.md) so every coding CLI can develop against the repo with the same context. This matches what open-carrusel + Open Design do.

### Antigravity CLI (`agy`) — first-class

Because the user specifically flagged it as "the one most people are going to be using":
- `src/lib/antigravity.ts`: builds `agy --print "<prompt>"` invocations, injects the system prompt (brand+theme+platform) as a leading context message, parses streamed output into SSE tokens for the ChatPanel.
- `.antigravity/AGENTS.md`: repo instructions tailored to `agy` — explains the slide-HTML contract, theme DESIGN.md format, export pipeline.
- `scripts/doctor.mjs` reports `agy` detection status alongside `claude`/`codex`.
- When `mode:'auto'` and `agy` is on PATH, Antigravity is the **default-recommended** CLI (free Gemini-backed reasoning, broad adoption, terminal-first). The LlmConfigModal shows: "✅ Antigravity CLI detected — recommended for agentic mode. [Enable]".
- Falls back gracefully: if `agy` is absent, tries `claude`; if all CLIs absent, uses HTTP mode.

---

## PART I — 2-day ship plan

> Each phase has a hard verification gate. Fork open-carrusel's proven base (saves ~60% of work) and layer the pivots.

### Day 1 — Foundation + AI core + editor

**Phase A — Scaffold & LLM adapter (morning)**
- Fork/copy open-carrusel into Slidr, rebrand, clean Instagram-only defaults
- Replace `claude-path.ts` with `src/lib/llm/` (http-client + cli-detector + cli-spawner + adapter + tools)
- Add `src/lib/antigravity.ts` (agy arg builder + stream parser) — **first-class**
- Add `src/lib/platform-sizes.ts` (8 sizes, 3 platforms)
- Expand `AspectRatio` types + `wrapSlideHtml()` to handle all sizes
- Add `LlmConfigModal` (base URL + key + model + provider presets + CLI detect + mode toggle)
- **Gate:** `npm run dev` → config modal saves baseURL/key → `/api/chat` returns a streamed token from the configured provider. With `agy` installed, CLI mode streams from Antigravity.

**Phase B — Theme engine + 15 themes + multi-platform editor (afternoon)**
- Build `src/lib/themes/` (parser, serializer, auto-resize) reading DESIGN.md files
- Author all **15 theme presets** in `src/lib/themes/presets/*.md` (see Part C)
- Add `ThemePicker` / `ThemeGallery` in the editor; inject theme rules into system prompt
- Add `SizeSelector` (platform + ratio dropdown); carousel pins to size
- Update `chat-system-prompt.ts` for multi-platform + theme awareness
- **Gate:** create a carousel at `li-4:5` with "Midnight Neon" theme → chat generates 5 slides → preview renders at 1080×1350 with theme palette. Switch theme to "Claude Code Dark" → regenerate → palette swaps.

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
- `README.md` (quickstart: base URL + key OR CLI — feature Antigravity), `AGENTS.md`, `.claude/commands/`, `.codex/`, `.antigravity/`
- `/doctor` audit (reports `agy`/`claude`/`codex` detection), production `npm run build` clean
- Deploy: Vercel (free) OR ship as a git repo users clone + `npm run setup`
- **Gate:** fresh clone → `npm run setup` → enter Groq free key → create + export a carousel end-to-end → watermark present; enter test license → watermark gone. With `agy` installed, agentic mode works for reference-image analysis.

---

## PART J — Success criteria (verifiable, for ship gate)

1. `npm run build` exits 0 with zero TypeScript errors.
2. `npm run doctor` passes — Node ≥20, LLM config present or CLI detected (reports `agy`/`claude`/`codex` status), data dirs seeded, port free.
3. With a **Groq free-tier** base URL + key + `llama-3.3-70b` model, creating a carousel via chat produces ≥5 slides that render in the preview iframe at the selected size.
4. With **Antigravity CLI** installed and `mode:'auto'`, `/api/chat` streams from `agy` and produces ≥5 slides (agentic mode works).
5. Exporting a LinkedIn-size carousel produces a **multi-page PDF**; exporting an Instagram-size carousel produces a **ZIP of PNGs**. Both at exact pixel dimensions (±0px).
6. Every exported slide (PNG and PDF page) contains the **Slidr watermark badge** when no license is active.
7. Activating a **Lemon Squeezy test license key** via `/api/license/activate` flips `/data/license.json` to `valid:true`, and the **next export omits the watermark**.
8. **All 15 themes** render correctly across 3 sizes (ig-4:5, li-4:5, tt-9:16) — verified by generating one carousel per theme.
9. The app runs with **no coding CLI installed** (HTTP mode only) — verified by testing on a PATH without `agy`/`claude`/`codex`.
10. `README.md` quickstart works on a fresh clone in ≤5 commands with a free Groq key.
11. Antigravity is detected and recommended when present; HTTP mode is the zero-dependency default when absent.

---

## PART K — Open questions for you (decision-blocking)

These materially change architecture/scope — please answer before we start:

1. **Lemon Squeezy product + webhook setup** — do you already have a Lemon Squeezy account + product created for the $11 lifetime unlock, or should the plan include creating it? (Affects whether Phase D can fully test the webhook or stubs it.)
2. **Company name + watermark text** — "Slidr" is assumed. What's the exact watermark text/logo? ("⚡ Made with Slidr" is the placeholder.) And is "Slidr" the final product name?
3. **Deploy target** — Vercel (hosted demo) vs. ship-as-cloneable-repo (users run locally) vs. both? (Affects whether we need a public landing page + multi-user license flow.)
4. **License** — MIT (like open-carrusel) or a custom license that restricts removing the watermark from the source? (The compiled-output watermark is enforced regardless; this is about the source code license.)

---

## PART L — Assumptions (safe defaults unless you say otherwise)

- **Node ≥20** available on dev + target machines.
- **Puppeteer's Chromium** download (~300MB) acceptable on first run (matches open-carrusel).
- **Single-user, local-first** app (no multi-tenant auth) — same as open-carrusel. Hosted multi-user is a follow-up.
- **Lemon Squeezy** chosen over Stripe/Gumroad for the $11 one-time unlock (MoR + license keys + tax). Swappable to Gumroad if preferred.
- **MIT license** for the source (matching open-carrusel) — the watermark + $11 unlock is a product-layer constraint, not a source-license restriction.
- The "Claude Code Instagram" aesthetic = dark gradient + electric violet + oversized hooks + mono/serif pairings, synthesized from 2026 trend research.
- **Antigravity CLI** (`agy`) = what the user meant by "Tigravity CLI"; it's Google's terminal-first agent (google-antigravity/antigravity-cli). Tigris (object storage) is unrelated and not integrated.
- **15 themes** curated from the 105-carousels promptbase catalog; visual specs derived from titles + category + known promptbase aesthetic since cover images are access-gated (HTTP 403).

---

## PART M — Out of scope for the 2-day ship

- Multi-user accounts / cloud sync
- AI image generation (Piktochart/CarouselBot feature) — text + layout only for v1
- Team collaboration / folders
- LinkedIn post generator, quote cards, infographics, headshots (aiCarousels bonus features)
- Video/Reels export (HyperFrames-style) — static carousels only
- Mobile app — web-only, responsive
- Plugin/extension ecosystem (Open Design's 217 skills)
- Importing Open Design's full 129 design-system library (we adopt the *format*, ship 15 carousel-specific themes; importing the broader library is a post-launch roadmap item)

These become the post-launch roadmap.

---

**Status:** Plan complete. Review Parts K (questions) — once answered, we begin Day 1.
