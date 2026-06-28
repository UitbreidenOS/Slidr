# Slidr

**CLI-agnostic AI carousel maker for LinkedIn, Instagram & TikTok.**

Bring your own LLM (any OpenAI-compatible base URL + API key) or use a coding CLI (Antigravity recommended). 15 themes, 8 platform sizes, non-removable watermark, $11 lifetime unlock.

## Quickstart (60 seconds)

```bash
git clone https://github.com/UitbreidenOS/Slidr.git
cd Slidr
npm run setup    # installs deps + seeds data
npm run dev      # starts http://localhost:3000
```

Open the app, click the gear icon (⚙️) in the top bar, and enter:

- **Base URL**: e.g. `https://api.groq.com/openai/v1` (free tier)
- **API Key**: your provider key
- **Model**: e.g. `llama-3.3-70b-versatile`

That's it. Create a carousel, pick a theme, chat with the AI, export.

## LLM Configuration

Slidr works with **any OpenAI-compatible provider**. No coding CLI required.

### Free Tiers (recommended for trying it out)

| Provider | Base URL | Model |
|---|---|---|
| **Groq** (free) | `https://api.groq.com/openai/v1` | `llama-3.3-70b-versatile` |
| **Google AI Studio** (free) | `https://generativelanguage.googleapis.com/v1beta/openai` | `gemini-2.0-flash` |
| **OpenRouter** (free tier) | `https://openrouter.ai/api/v1` | `meta-llama/llama-3.3-70b-instruct:free` |

### Paid Providers

| Provider | Base URL | Model |
|---|---|---|
| OpenAI | `https://api.openai.com/v1` | `gpt-4o` |
| Anthropic | `https://api.anthropic.com/v1/` | `claude-sonnet-4-20250514` |
| DeepSeek | `https://api.deepseek.com/v1` | `deepseek-chat` |
| Ollama (local) | `http://localhost:11434/v1` | `llama3.3` |
| LM Studio (local) | `http://localhost:1234/v1` | `local-model` |

### Optional: Coding CLI Mode

If you have a coding CLI installed, Slidr auto-detects it and offers agentic mode (web-fetch, reference-image analysis):

| CLI | Binary | Install |
|---|---|---|
| **Antigravity** (recommended) | `agy` | `curl -fsSL https://antigravity.google/cli/install.sh \| bash` |
| Claude Code | `claude` | [docs.anthropic.com/claude-code](https://docs.anthropic.com/en/docs/claude-code) |
| Codex | `codex` | OpenAI CLI |
| Gemini | `gemini` | Google CLI |

When `mode: auto` (default), Slidr uses HTTP mode if base URL + key are configured, otherwise falls back to CLI mode.

## Features

- **15 themes** curated from modern carousel trends (Midnight Neon, Paper Editorial, Claude Code Dark, Brand Studio, and more)
- **8 platform sizes**: Instagram (1:1, 4:5, 3:4, 9:16), LinkedIn (1:1, 4:5, 16:9), TikTok (9:16)
- **Multi-format export**: PNG ZIP for Instagram/TikTok, PDF for LinkedIn
- **Watermark**: non-removable "⚡ Made with Slidr" badge on all exports
- **$11 lifetime unlock**: remove the watermark forever via Lemon Squeezy
- **Local-first**: all data in `/data/` JSON files, nothing sent to a cloud you don't control
- **BYOK**: your API key, your provider, your cost (free tiers work great)
- **Cross-CLI**: runs on any machine with just a base URL + key; optionally uses Antigravity/Claude Code/Codex for agentic features

## Slash Commands (in Claude Code)

| Command | What it does |
|---|---|
| `/start [port]` | Install + seed + run + open browser |
| `/stop [port]` | Kill the dev server |
| `/reset` | Wipe local data and re-seed defaults |
| `/doctor` | Run environment diagnostics |

## Tech Stack

- Next.js 16 + React 19 + TypeScript 5 + Tailwind v4
- Radix UI + lucide-react + @dnd-kit
- OpenAI SDK (universal OpenAI-compatible client)
- Puppeteer + Sharp + pdf-lib (export)
- Lemon Squeezy (license keys + payments)
- JSON file storage with async-mutex

## Project Structure

```
src/
├── app/api/          ← all backend routes
├── components/       ← chat, editor, themes, license, llm, ui
├── lib/
│   ├── llm/          ← dual-mode adapter (HTTP + CLI)
│   ├── themes/       ← parser, serializer, 15 presets
│   ├── license/      ← Lemon Squeezy validation
│   ├── antigravity.ts← agy spawner
│   ├── watermark.ts  ← non-removable badge
│   ├── slide-html.ts ← shared preview/export contract
│   └── ...
└── types/             ← carousel, brand, theme, license, llm
```

## License

MIT — do anything you want. The watermark + $11 unlock is a product-layer constraint, not a source-license restriction.

## Author

**tushar2704** — sole author, no co-authors.
