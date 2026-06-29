# Design System: Neon Arcade

> Category: General
> Pixel grid, magenta + cyan, 8-bit sprites — the 1986 arcade cabinet aesthetic reborn.

Source inspiration: Pac-Man + Galaga + Tron (1982) + retro pixel art

## 2. Color Palette & Roles

### Primary
- **Arcade Magenta** (`#ff00aa`): CSS var `--palette-bg-primary`. Used for: hook text, primary sprites, coin icons.

### Secondary & Accent
- **CRT Cyan** (`#00f0ff`): CSS var `--palette-accent`. Used for: CTAs, swipe indicator, power-up highlights.
- **Coin Gold** (`#ffcc00`): CSS var `--palette-bg-secondary`. Used for: stars, score numbers, badges.

### Surface & Background
- **Cabinet Black** (`#08001a`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Pixel Purple** (`#1a0040`): CSS var `--palette-bg-surface`. Used for: panels, score cards.

### Neutrals & Text
- **Pixel White** (`#f0f0f0`): CSS var `--palette-text`. Used for: body text (slightly warm).
- **Shadow Gray** (`#3a2a5a`): Used for: captions, secondary metadata.

### Gradient System
`linear-gradient(135deg, #08001a 0%, #1a0040 100%)` — cabinet depth.
`linear-gradient(90deg, #ff00aa 0%, #00f0ff 100%)` — neon gradient for headings and CTAs.
No chromatic gradients on backgrounds — pixel art uses solid blocks.

## 3. Typography Rules

### Font Family
- Heading: "Press Start 2P"
- Body: "VT323"
- Fallbacks: monospace

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 56px | 400 | 1.3 |
| Heading | 32px | 400 | 1.3 |
| Subheading | 24px | 400 | 1.4 |
| Body | 24px | 400 | 1.5 |

## 4. Spacing & Layout
- Padding: 56-72px
- gap scale: 8/16/24/32/48px (8px increments preferred — pixel-aligned)
- One focal element per slide; pixel grid background (16px x 16px cells)
- Borders are 2-4px solid — never 1px (would not read as pixel art)

## 5. Motion (CSS-first)
- Easing: steps(4, end) for pixel-jump animations
- Duration: 300ms
- Use @starting-style for fade-in; respect prefers-reduced-motion
- Optional 4-frame sprite "blink" on hook (opacity steps) — never smooth fades

## 6. Design Rules
- Press Start 2P for ALL headings and hooks (its bitmap-pixel feel is mandatory)
- VT323 for body and labels — never use proportional sans-serif (breaks the spell)
- Borders are 2-4px solid blocks, never 1px — pixel art is chunky by definition
- Pixel grid background: 16px x 16px cells, 1px lines in magenta at 10% opacity
- 8-bit icons (16x16 or 32x32 pixel sprites) encouraged over modern iconography
- CTAs are rectangular buttons (0 border-radius) with magenta fill and cyan border
- Numbers/stats render in Press Start 2P at 32-48px — never tabular figures
- Slide 1 includes a "PRESS START →" or "▶ PLAY" swipe indicator in cyan, bottom-right
- Avoid gradients on backgrounds; flat solid colors are the pixel-art rule
- Contrast ratio ≥ 4.5:1: pixel white #f0f0f0 on #08001a = 18.5:1 (WCAG AAA)
