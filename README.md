# Slidr

> **CLI-agnostic AI carousel maker for LinkedIn, Instagram & TikTok.**
> Bring your own LLM (any OpenAI-compatible base URL + API key) or use a coding CLI (Antigravity recommended). 115+ curated themes, 8 platform sizes, non-removable watermark, $11 lifetime unlock.

[![Next.js 16](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org)
[![React 19](https://img.shields.io/badge/React-19-blue)](https://react.dev)
[![TypeScript 5](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org)
[![Tailwind v4](https://img.shields.io/badge/Tailwind-v4-38bdf8)](https://tailwindcss.com)
[![License: Dual AGPL/CC](https://img.shields.io/badge/License-Dual_AGPL_/_CC-orange)](./LICENSE)

---

## About Slidr 🚀

Slidr is the ultimate open-source visual content engine designed specifically for modern creators, developers, and social media professionals. Operating locally-first and respecting design portability, Slidr eliminates the dependency on bloated cloud platforms and vendor lock-in.

*   **Design Freedom**: Write, adjust, and distribute layouts using a highly readable, human-editable, and LLM-friendly `DESIGN.md` specification.
*   **Dual LLM Engine**: Toggle seamlessly between low-overhead direct API mode (HTTP) and advanced, agent-powered context extraction (CLI integration via `agy`, `claude`, `codex`).
*   **Viral Aesthetics**: Out-of-the-box configuration files for depth-layering (text-behind-subject) effects, high contrast dark layouts, and professional editorial spacing systems.

---

## Table of Contents

- [Why Slidr?](#why-slidr)
- [Quickstart (60 seconds)](#quickstart-60-seconds)
- [LLM Configuration](#llm-configuration)
- [Coding CLI Mode (Antigravity + others)](#coding-cli-mode-antigravity--others)
- [Features](#features)
- [Architecture](#architecture)
- [Slash Commands](#slash-commands)
- [Development Workflow (Pro)](#development-workflow-pro)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Themes](#themes)
- [Roadmap](#roadmap)
- [License & Credits](#license--credits)

---

## Why Slidr?

| Problem | Slidr's answer |
|---|---|
| Other carousel tools lock you to one LLM | Works with **any** OpenAI-compatible endpoint |
| Other tools require paid subscriptions | **Free tiers** (Groq, Google AI Studio) work great |
| Hard to remove watermarks | Watermark is a **non-removable** Puppeteer overlay (not in editable HTML) |
| Limited to Instagram | **8 sizes** across LinkedIn, Instagram, TikTok |
| No design system portability | Themes are **DESIGN.md** files (Open Design format) — human-editable, agent-readable, git-friendly |
| CLI lock-in (Claude Code only) | **Auto-detects** Antigravity, Claude Code, Codex, Gemini, Cursor, OpenCode |

---

## Quickstart (60 seconds)

```bash
# 1. Clone
git clone https://github.com/UitbreidenOS/Slidr.git
cd Slidr

# 2. Install + seed
npm run setup

# 3. Run
npm run dev
```

Open <http://localhost:3000>. Click the gear icon (⚙️) in the top bar and enter:

| Field | Example (Groq free tier) |
|---|---|
| **Base URL** | `https://api.groq.com/openai/v1` |
| **API Key** | `gsk_...` (from console.groq.com) |
| **Model** | `llama-3.3-70b-versatile` |

That's it. Create a carousel → pick a theme → chat with the AI → export.

---

## LLM Configuration

Slidr works with **any OpenAI-compatible provider**. No coding CLI required.

### Free Tiers (start here)

| Provider | Base URL | Free Model |
|---|---|---|
| **Groq** ⭐ | `https://api.groq.com/openai/v1` | `llama-3.3-70b-versatile` |
| **Google AI Studio** ⭐ | `https://generativelanguage.googleapis.com/v1beta/openai` | `gemini-2.0-flash` |
| **OpenRouter** | `https://openrouter.ai/api/v1` | `meta-llama/llama-3.3-70b-instruct:free` |
| **Ollama** (local) | `http://localhost:11434/v1` | `llama3.3` |
| **LM Studio** (local) | `http://localhost:1234/v1` | any local model |

### Paid Providers

| Provider | Base URL | Flagship Model |
|---|---|---|
| **OpenAI** | `https://api.openai.com/v1` | `gpt-4o` |
| **Anthropic** | `https://api.anthropic.com/v1/` | `claude-sonnet-4-20250514` |
| **DeepSeek** | `https://api.deepseek.com/v1` | `deepseek-chat` |
| **xAI (Grok)** | `https://api.x.ai/v1` | `grok-2` |

> **Tip:** In Claude Code, run `/doctor` to see which providers and CLIs are detected on your machine.

---

## Coding CLI Mode (Antigravity + others)

When a coding CLI is installed, Slidr auto-detects it and unlocks **agentic mode**: web-fetch, reference-image analysis, file-read.

### Detection order (first match wins)

| Priority | CLI | Binary | Provider | Install |
|---|---|---|---|---|
| 1 ⭐ | **Antigravity** | `agy` | Google | `curl -fsSL https://antigravity.google/cli/install.sh \| bash` |
| 2 | Claude Code | `claude` | Anthropic | [docs.anthropic.com](https://docs.anthropic.com/en/docs/claude-code) |
| 3 | Codex | `codex` | OpenAI | OpenAI CLI |
| 4 | Gemini | `gemini` | Google | Google AI CLI |
| 5 | Cursor | `cursor-agent` | Cursor | [cursor.sh](https://cursor.sh) |
| 6 | OpenCode | `opencode` | open | `npm i -g opencode` |
| 7 | Aider | `aider` | open | `pipx install aider-chat` |
| 8 | Qwen | `qwen` | Alibaba | Alibaba CLI |

**Mode priority** (when `mode: auto`):
1. HTTP mode if `baseURL + apiKey + model` are set
2. CLI mode using the first detected CLI in the table above
3. Manual mode toggle in the Settings modal

---

## Features

- 🎨 **115 curated themes** in DESIGN.md format across 12 categories (Depth & Layering, Dark & Neon, Editorial, Brutalist, Brand-Inspired, Niche & Industry, + original)
- 📐 **8 platform sizes**: Instagram (1:1, 4:5, 3:4, 9:16), LinkedIn (1:1, 4:5, 16:9), TikTok (9:16)
- 📤 **Multi-format export**: PNG ZIP (Instagram/TikTok) + PDF (LinkedIn)
- 🔒 **Non-removable watermark**: Puppeteer overlay applied *after* slide HTML renders
- 💰 **$11 lifetime unlock** via Lemon Squeezy to remove the watermark
- 💾 **Local-first**: all data in `/data/` JSON files with atomic writes (async-mutex)
- 🔑 **BYOK**: your API key, your provider, your cost (free tiers work great)
- 🤖 **Cross-CLI**: runs on any machine with just a base URL + key; optionally uses Antigravity/Claude Code/Codex for agentic features
- 📱 **Responsive**: works on desktop + mobile browsers

---

## Architecture

```
Browser (localhost:3000)
├── ChatPanel ─────────► POST /api/chat ─────────► LLM Adapter
│                                                       │
│                                                  ┌────┴────┐
│                                                  │ HTTP    │ CLI
│                                                  │ (default)│
│                                                  └────┬────┘
│                                                       ▼
│                                              SSE stream back
│                                                       │
├── CarouselPreview (sandboxed iframe) ◄─────────────────┘  via /api/carousels/[id]/slides
├── SlideFilmstrip (@dnd-kit reorder) ◄─────── /api/carousels/[id]/slides
├── ThemeGallery ──── GET /api/themes ─────► src/lib/themes/presets/*.md
├── ExportButton ── POST /api/carousels/[id]/export ──► Puppeteer
│                                                              │
│                                                       ┌──────┴──────┐
│                                                       │ PNG ZIP    │ PDF
│                                                       │ (IG/TikTok)│ (LinkedIn)
│                                                       └─────────────┘
│                                                              │
│                                                       Watermark overlay
│                                                       (if !license.valid)
└── LicenseGate ─── POST /api/license/activate ───► Lemon Squeezy
                       POST /api/license/webhook ◄─── (payment events)

Storage: /data/*.json  (async-mutex + atomic writes)
Uploads: /public/uploads/  (logos, reference images)
```

### Key design decisions

1. **Slides = body-level HTML**, wrapped by `wrapSlideHtml()`. Same HTML → preview iframe + Puppeteer export. "What you see is what you ship."
2. **Themes = DESIGN.md files**. Parsed at startup into `Theme` objects, injected into `chat-system-prompt.ts`. Human-editable, git-friendly, agent-readable.
3. **Watermark = Puppeteer overlay**, not slide HTML. Cannot be removed by editing slide content.
4. **Storage = JSON files** with `async-mutex`. No DB, no migrations, single-user local-first.
5. **LLM = dual-mode adapter**. HTTP (default, zero-deps) OR CLI (optional, agentic).

---

## Slash Commands (Claude Code / Antigravity)

| Command | What it does |
|---|---|
| `/start [port]` | Install + seed + run + open browser |
| `/stop [port]` | Kill the dev server |
| `/reset` | Wipe local data and re-seed defaults |
| `/doctor` | Run environment diagnostics |
| `/themes` | List all available theme presets |
| `/build` | Production build + type-check |
| `/commit "msg"` | Stage touched files + commit (no co-authors) |

---

## Development Workflow (Pro)

### First-time setup

```bash
git clone https://github.com/UitbreidenOS/Slidr.git
cd Slidr
npm run setup          # installs deps + seeds /data/*.json
npm run dev            # http://localhost:3000
npm run doctor         # verify env (Node, deps, CLIs, data files)
```

### Daily development

```bash
npm run dev            # Turbopack hot reload
npm run build          # production build (catches TS errors)
npm run lint           # ESLint
npm run doctor         # verify env still healthy
```

### Working with themes

```bash
# List all themes
curl localhost:3000/api/themes | jq

# Author a new theme
cp src/lib/themes/presets/midnight-neon.md src/lib/themes/presets/my-new-theme.md
# Edit the new file — follow the 6-section DESIGN.md format
# Reload — theme auto-appears in /api/themes and the ThemeGallery

# Theme format spec
# 1. Visual Theme & Atmosphere
# 2. Color Palette & Roles (with CSS variable names)
# 3. Typography Rules (heading + body fonts, hierarchy table)
# 4. Spacing & Layout
# 5. Motion (CSS-first, respect prefers-reduced-motion)
# 6. Design Rules (injected into the chat system prompt)
```

### Adding a new LLM CLI to the detector

```ts
// src/lib/llm/cli-detector.ts — add to CLI_SPECS:
{ type: "my-cli", bins: ["my-cli"], recommended: false }
```

### Adding a new export format

```ts
// src/lib/export-slides.ts — implement a new export* function
// Hook into the export route in src/app/api/carousels/[id]/export/route.ts
```

### Pre-commit checklist

```bash
npm run build          # must exit 0
npm run doctor         # must show "All required checks passed"
git status             # review what you're committing
```

> **Commit policy:** sole author `tushar2704 <tushar.inseec@gmail.com>`, no co-author trailers, imperative mood. Auto-commit after meaningful units of work.

---

## Deployment

### Option A: Local clone (default — recommended for $11 unlock model)

This is the default Slidr experience. Each user clones the repo, runs `npm run setup`, enters their own API key, and exports their own carousels. The watermark + license model fits perfectly here.

```bash
git clone https://github.com/UitbreidenOS/Slidr.git
cd Slidr
npm run setup
npm run dev
```

### Option B: Vercel (public demo)

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Set env vars in Vercel dashboard
#    LEMON_SQUEEZY_API_KEY, LEMON_SQUEEZY_PRODUCT_ID, etc.

# 4. Configure webhook URL in Lemon Squeezy dashboard
#    https://your-app.vercel.app/api/license/webhook
```

⚠️ **Note:** Vercel has a 50 MB function size limit. Puppeteer + Chromium needs a workaround:

- Use `@sparticuz/chromium` (serverless Chromium) + `puppeteer-core`
- Or run export on a separate Node server (Railway, Fly.io, Render)

### Option C: Docker (coming soon)

```dockerfile
# Dockerfile outline
FROM node:20-alpine
RUN apk add --no-cache chromium
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium
COPY . .
RUN npm ci && npm run build
CMD ["npm", "start"]
```

---

## Troubleshooting

### Doctor says "no LLM configured"

→ Open the Settings modal (⚙️), enter your base URL + API key + model. Or run `npm run setup` which seeds a default config.

### Export returns "Could not find Chrome"

→ Slidr now auto-detects system Chrome on macOS/Linux/Windows. If you're on a headless server, install Chrome via:
```bash
# Ubuntu/Debian
apt-get install -y chromium
# macOS
brew install --cask google-chrome
```

### Watermark won't go away after activating a license

→ Check `/data/license.json` — it should have `"valid": true`. If not, the license key may not have validated against Lemon Squeezy. Try re-activating via the Settings modal.

### Dev server is stuck on port 3000

→ Run `npm run stop` (or `/stop` in Claude Code). Or manually: `lsof -ti:3000 | xargs kill -9`.

### Antigravity CLI not detected

→ Make sure `agy` is on your PATH: `which agy`. If not, reinstall via the install script.

### TypeScript errors after `git pull`

→ Run `npm install` to pick up any new deps, then `npm run build` to verify.

---

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 16 (Turbopack) + React 19 | modern, fast |
| Language | TypeScript 5 | type safety |
| Styling | Tailwind v4 (CSS-first) | matches modern config |
| UI primitives | Radix UI + lucide-react | accessible, light |
| Drag/drop | @dnd-kit | the only sane React DnD |
| LLM (HTTP) | `openai` SDK | universal OpenAI-compatible |
| LLM (CLI) | cross-spawn + per-CLI builders | agentic mode |
| Export | Puppeteer + Sharp + Archiver | PNG ZIP |
| PDF | `pdf-lib` | LinkedIn document posts |
| Storage | JSON + async-mutex | no DB |
| Payments | Lemon Squeezy | MoR + license keys + tax |
| Animations | CSS-first (Emil Kowalski tokens) | lightweight |

---

## Project Structure

```
Slidr/
├── .claude/commands/        ← /start, /stop, /reset, /doctor (Claude Code)
├── .codex/                  ← AGENTS.md (Codex CLI)
├── .antigravity/            ← AGENTS.md (Antigravity CLI)
├── AGENTS.md, CLAUDE.md     ← cross-agent docs
├── data/                    ← gitignored: brand, carousels, templates, license, llm-config
├── public/uploads/          ← gitignored: logos, reference images
├── scripts/
│   ├── setup.mjs            ← install + seed + detect CLIs
│   └── doctor.mjs           ← env audit (zero deps)
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── chat/route.ts            ← SSE streaming
│   │   │   ├── carousels/...            ← CRUD + slides + export
│   │   │   ├── themes/route.ts          ← list theme presets
│   │   │   ├── license/                 ← activate, status, webhook
│   │   │   └── llm-config/route.ts      ← get/set LLM config
│   │   ├── carousel/[id]/page.tsx       ← editor
│   │   ├── globals.css                  ← Tailwind v4 + motion tokens
│   │   └── page.tsx                     ← dashboard
│   ├── components/
│   │   ├── chat/                        ← ChatPanel, ChatMessage, ChatInput
│   │   ├── editor/                      ← CarouselPreview, SlideFilmstrip, ExportButton
│   │   ├── themes/                      ← ThemeGallery, ThemeCard
│   │   ├── license/                     ← LicenseModal, UnlockCTA
│   │   ├── llm/                         ← LlmConfigModal, ProviderPresets, CliDetectorBadge
│   │   └── ui/                          ← primitives
│   ├── lib/
│   │   ├── llm/                         ← adapter (HTTP + CLI)
│   │   ├── themes/                      ← parser, serializer, presets/*.md
│   │   ├── watermark.ts                 ← non-removable badge
│   │   ├── license/                     ← Lemon Squeezy validation
│   │   ├── slide-html.ts                ← wrapSlideHtml() contract
│   │   ├── chat-system-prompt.ts        ← dynamic prompt (brand + theme + platform)
│   │   ├── export-slides.ts             ← PNG ZIP + PDF + watermark
│   │   ├── antigravity.ts               ← agy arg builder + parser
│   │   └── ...
│   └── types/                           ← carousel, brand, theme, license, llm
├── next.config.ts, package.json, tsconfig.json, postcss.config.mjs
└── AGENTS.md, CLAUDE.md, README.md, LICENSE
```

---

## Themes

Slidr ships with **115 curated themes** in DESIGN.md format, spanning 12 categories. Each theme is a `.md` file in `src/lib/themes/presets/`. Add your own by dropping a new file — it auto-appears in the ThemeGallery.

### Depth & Layering (20 themes — text-behind-subject)

The 2026 viral carousel trend. Large headline text is rendered **BEHIND** the subject (person/product) using z-index layering, creating 3D depth. 3-4x higher engagement than standard text-overlay posts.

`depth-portrait` · `magazine-cover` · `knockout-text` · `product-depth` · `fitness-transform` · `fashion-editorial` · `glass-depth` · `neon-depth` · `minimal-depth` · `bold-display` · `split-depth` · `monochrome-depth` · `pastel-depth` · `gradient-mesh-depth` · `editorial-mono` · `streetwear-depth` · `retro-poster-depth` · `tattoo-depth` · `wedding-depth` · `quote-depth`

### Dark & Neon (20 themes)

`midnight-neon` · `midnight-violet` · `cyberpunk-neon` · `vaporwave-sunset` · `synthwave-drive` · `terminal-mono` · `hacker-green` · `neon-tokyo` · `deep-space` · `electric-lime` · `biohack-lab` · `crypto-neon` · `dark-academia` · `midnight-emerald` · `noir-mono` · `gothic-violet` · `neon-arcade` · `blueprint-tech` · `matrix-rain` · `deep-coral` · `obsidian-gold`

### Editorial & Magazine (20 themes)

`paper-editorial` · `nyt-editorial` · `monocle-magazine` · `swiss-grid` · `bauhaus-revival` · `whitewall-minimal` · `japanese-zen` · `scandinavian-frost` · `paris-review` · `kinfolk-soft` · `newspaper-classified` · `art-basel` · `vogue-editorial` · `the-cut-magazine` · `atlantic-monthly` · `economist-data` · `ft-peach` · `minimal-mono` · `bauhaus-blue` · `venice-architecture` · `nordic-cool`

### Brutalist & Y2K (20 themes)

`neo-brutalism-bold` · `neo-brutalism-soft` · `y2k-chrome` · `y2k-iridescent` · `frutiger-aero` · `90s-magazine` · `indie-sleaze-2` · `vhs-glitch` · `retro-poster-70s` · `retro-poster-80s` · `brutalist-raw` · `memphis-90s` · `y2k-iphone-pink` · `retro-future` · `pixel-arcade` · `risograph-print` · `art-deco-1920` · `swiss-poster-60s` · `cottage-core` · `scrapbook-dump`

### Brand-Inspired (10 themes)

`stripe-inspired` · `vercel-inspired` · `linear-inspired` · `notion-inspired` · `figma-inspired` · `apple-inspired` · `spotify-inspired` · `airbnb-inspired` · `nike-inspired` · `tesla-inspired`

### Niche & Industry (10 themes)

`fitness-power` · `wellness-zen` · `food-cozy` · `beauty-glow` · `tech-startup` · `finance-pro` · `travel-wanderlust` · `real-estate-luxe` · `education-learn` · `music-vibe`

### Original (15 themes)

`claude-code-dark` · `brand-studio` · `student-perks` · `ember-oak` · `velvet-roast` · `aurora-activewear` · `lumiere-skincare` · `nova-roast` · `pulse-energy` · `slicebox-pizza` · `beauty-campaign` · `agentic-operator` · `gradient-flow`

### Adding themes

1. Copy any existing `.md` from `src/lib/themes/presets/`
2. Edit the 6 sections (atmosphere, palette, typography, spacing, motion, rules)
3. Reload — the theme appears in `/api/themes` and the in-app ThemeGallery

Theme format spec lives in [`src/lib/themes/parser.ts`](./src/lib/themes/parser.ts).

### Depth-layering feature

Themes with the **depth-layering** effect enabled have an extra front-matter line:

```markdown
> Depth Layering: enabled
```

When a theme has this flag, the chat system prompt automatically injects CSS z-index layering instructions that guide the LLM to place large headline text BEHIND the subject. The result is the viral 3D depth effect that drives 3-4x higher engagement.

---

## Magic Cutout (Background Removal)

### Overview
The Magic Cutout feature lets you automatically remove the background from any reference image, producing a transparent PNG that the AI can use for depth‑layering slides.

### Setup
1. Obtain a Remove.bg API key from https://www.remove.bg/api and add it to `.env.local`:
   ```
   REMOVE_BG_API_KEY=your_key_here
   ```
   Each image processed costs ~ $0.03. If no key is set, Slidr falls back to a local implementation using the `rembg` package (or a simple Sharp fallback).
2. Restart the dev server after adding the key.

### Usage
- **Single image**: In the Reference Images panel click the **Remove BG** button under a thumbnail. The UI shows a spinner while processing and a check‑mark when ready.
- **Batch**: Click **Remove BG (Batch)** to process all images that don’t already have a cutout.
- The cutout URL appears in the carousel prompt (`cutoutUrl`) so the LLM can place the subject on top of headline text.

### Limitations
- Remove.bg API rate limits may apply; batch processing runs sequentially to avoid hitting limits.
- Local fallback works without an API key but may be slower and less accurate.

### Cost warning
The first time you invoke a background‑removal request the app will display a toast warning about the ~$0.03 per‑image cost. You can disable this warning in the UI settings if desired.

---

## Roadmap

### Shipped (v1.1)
- Dual-mode LLM adapter (HTTP + CLI)
- **115 curated themes** in DESIGN.md format across 12 categories
- **Depth-layering effect** (text-behind-subject, the 2026 viral Instagram trend)
- **Theme categories** in the picker (Depth & Layering, Dark & Neon, Editorial, Brutalist, Y2K, Brand-Inspired, Niche & Industry)
- 8 platform sizes (Instagram, LinkedIn, TikTok)
- PNG ZIP + PDF export with watermark
- Lemon Squeezy licensing ($11 lifetime unlock)
- Cross-CLI agent support (Antigravity, Claude Code, Codex, Gemini, Cursor, OpenCode, Aider, Qwen)
- Doctor diagnostic script
- Slash commands for Claude Code

### Next (v1.2)
- Theme search + filter in the picker
- Theme preview thumbnails
- Custom theme upload (user DESIGN.md)
- Per-slide theme override
- Theme marketplace / community themes

### Future
- AI image generation (Piktochart/CarouselBot feature) — text + layout only for now
- Video/Reels export (HyperFrames-style)
- Multi-user accounts / cloud sync
- Mobile app
- Plugin/extension ecosystem (Open Design's 217 skills)
- Importing Open Design's full 129 design-system library

See [`internaldev.md`](./internaldev.md) for the full architecture spec.

---

## License & Credits

**Dual-License Model:** This project is split-licensed to support open-source software and open-content design assets:
- **Code:** Licensed under [GNU Affero General Public License v3.0](./LICENSE-CODE) (AGPL-3.0). All Next.js pages, API endpoints, components, backend spawners, and utility code fall under this copyleft license.
- **Content & Presets:** Licensed under [Creative Commons Attribution-ShareAlike 4.0](./LICENSE-CONTENT) (CC-BY-SA-4.0). All Markdown design files, theme presets, assets, and documentation fall under this share-alike license.
- Check the root [LICENSE](./LICENSE) overview file for additional terms.

**Author:** `tushar2704 <tushar.inseec@gmail.com>` — sole author, no co-authors, no AI attribution.

---

<p align="center">
  <sub>Built with Next.js 16 · React 19 · TypeScript 5 · Tailwind v4 · Puppeteer · pdf-lib · openai SDK</sub>
</p>
