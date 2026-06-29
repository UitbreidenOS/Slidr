# Design System: Neon Tokyo

> Category: General
> Magenta + cyan over rain-slick asphalt — the Shibuya 2 AM alleyway aesthetic, with kanji flourishes.

Source inspiration: Tokyo at night photography + Akira (1988) + Ghost in the Shell + J-pop album covers

## 2. Color Palette & Roles

### Primary
- **Shibuya Magenta** (`#ff2d95`): CSS var `--palette-bg-primary`. Used for: hook text, primary CTAs, neon signage.

### Secondary & Accent
- **Kanda Cyan** (`#00d4ff`): CSS var `--palette-accent`. Used for: swipe indicators, secondary CTAs, link highlights.
- **Kanji Gold** (`#ffb627`): CSS var `--palette-bg-secondary`. Used for: accent kanji characters, badge fills, currency.

### Surface & Background
- **Rain Black** (`#0a0612`): CSS var `--palette-bg-background`. Used for: default slide background (wet asphalt).
- **Neon Smoke** (`#1a1424`): CSS var `--palette-bg-surface`. Used for: panels, cards, inset frames.

### Neutrals & Text
- **Paper White** (`#f7f4ec`): CSS var `--palette-text`. Used for: body text (slightly warm to feel like neon-light reflection).
- **Mist Gray** (`#8d8597`): Used for: captions, timestamps, secondary labels.

### Gradient System
`linear-gradient(135deg, #0a0612 0%, #1a1424 50%, #2a0f3a 100%)` — slide background depth.
`linear-gradient(90deg, #ff2d95 0%, #00d4ff 100%)` — sign gradient for hook text fills.
`radial-gradient(circle at 20% 30%, #ff2d95 0%, transparent 35%)` — ambient neon glow blob.
`radial-gradient(circle at 80% 70%, #00d4ff 0%, transparent 35%)` — secondary neon glow blob.

## 3. Typography Rules

### Font Family
- Heading: "M PLUS Rounded 1cd"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 80px | 900 | 1.1 |
| Heading | 44px | 800 | 1.2 |
| Subheading | 28px | 700 | 1.3 |
| Body | 24px | 400 | 1.55 |
| Kanji | 96px | 900 | 1.0 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- One focal element per slide; ambient neon blobs sit at corners (radial gradients)
- Optional kanji character at 96px in gold, top-right or behind hook text at 10% opacity

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 320ms
- Use @starting-style for fade-in; respect prefers-reduced-motion
- Optional neon flicker (random 80ms opacity drop) on heading text, max once per slide
- Optional "rain" effect: animated linear-gradient overlay with vertical stripes at 3% opacity

## 6. Design Rules
- Magenta and cyan are the canonical pair; kanji gold is reserved for ONE accent per slide
- M PLUS Rounded 1cd for ALL Latin headings (its rounded-grotesque feel matches Tokyo signage)
- Optional single kanji character at 96px in gold (#ffb627) at 10-20% opacity as a decorative anchor
- Two ambient neon glow blobs per slide (radial gradients at 30-40% opacity) for atmosphere
- CTAs are pill buttons with magenta→cyan gradient fill and 1px white border
- Wet-asphalt feel: optional subtle vertical "rain streak" overlay at 3% opacity
- Slide 1 includes a `[続く →]` ("continue" in Japanese) swipe indicator in cyan, bottom-right
- Body text must remain paper white (#f7f4ec) — never neon-tinted, or contrast suffers
- Contrast ratio ≥ 4.5:1: paper white on #1a1424 = 14.1:1 (WCAG AAA)
