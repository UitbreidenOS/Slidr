# Design System: Crypto Neon

> Category: General
> Iridescent gradients on obsidian black — the on-chain trading terminal aesthetic, sharp and metallic.

Source inspiration: Coinbase Advanced Trade + Hyperliquid + Rainbow wallet + Bloomberg Terminal

## 2. Color Palette & Roles

### Primary
- **Iridescent Cyan** (`#5ce1e6`): CSS var `--palette-bg-primary`. Used for: tickers, primary stats, brand emphasis.

### Secondary & Accent
- **Electric Violet** (`#a78bfa`): CSS var `--palette-accent`. Used for: CTAs, link highlights, swipe indicator.
- **Plasma Pink** (`#ff5fa2`): CSS var `--palette-bg-secondary`. Used for: gradient stops, bullish accent, badges.

### Surface & Background
- **Obsidian** (`#050507`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Onyx** (`#12121a`): CSS var `--palette-bg-surface`. Used for: ticker panels, stat cards, inset frames.

### Neutrals & Text
- **Pure White** (`#ffffff`): CSS var `--palette-text`. Used for: body text.
- **Cool Gray** (`#6b7280`): Used for: captions, secondary metadata.

### Gradient System
`linear-gradient(90deg, #5ce1e6 0%, #a78bfa 50%, #ff5fa2 100%)` — signature iridescent gradient (rare, use sparingly).
`linear-gradient(135deg, #050507 0%, #12121a 100%)` — slide background depth.
`linear-gradient(180deg, #12121a 0%, #050507 100%)` — inverse depth for alternating slides.

## 3. Typography Rules

### Font Family
- Heading: "Space Grotesk"
- Body: "JetBrains Mono"
- Fallbacks: sans-serif / monospace

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 76px | 700 | 1.05 |
| Heading | 40px | 600 | 1.15 |
| Subheading | 26px | 500 | 1.3 |
| Body | 22px | 400 | 1.5 |
| Ticker | 52px | 700 | 1.0 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- One focal element per slide; tabular numerals (font-feature-settings: "tnum")
- Optional 1px border in cyan at 20% opacity for ticker frames

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 240ms
- Use @starting-style for fade-in; respect prefers-reduced-motion
- Optional ticker scroll: translateX(0) → translateX(-50%), 20s linear infinite
- Optional price flash: background-color pulse (green/red) for 600ms on stat changes

## 6. Design Rules
- Space Grotesk for headings only; JetBrains Mono for ALL numbers, tickers, body
- The signature iridescent gradient (cyan→violet→pink) is reserved for ONE element per slide max
- Numbers always render with tabular figures (tnum) and currency/unit suffix in muted gray
- Optional ticker tape at top or bottom of any slide: scrolling JetBrains Mono at 16px
- "Up" values in cyan #5ce1e6, "down" values in pink #ff5fa2 — never red+green (color-blind safety)
- CTAs are sharp pills with the iridescent gradient, 0 border-radius, 1px white border
- Slide 1 includes a "↗ TRADE" or "[ ENTER ]" swipe indicator in violet, bottom-right
- Contrast ratio ≥ 4.5:1: white #ffffff on #050507 = 20.0:1 (WCAG AAA)
