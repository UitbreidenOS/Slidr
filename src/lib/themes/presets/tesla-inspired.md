# Design System: Tesla Inspired

> Category: Brand-Inspired
> Pure black + chrome white with a single Tesla-red spark — ultra-modern, EV-era, performance aesthetic. Centered geometric precision, sans everything.

Source inspiration: contemporary electric vehicle brand visual language (centered geometric layouts and monochrome restraint only — not a brand asset)

## 2. Color Palette & Roles

### Primary
- **Pure White** (`#ffffff`): CSS var `--palette-bg-primary`. Used for: dominant type on dark, primary CTAs, hero numbers.

### Secondary & Accent
- **Ignition Red** (`#e31937`): CSS var `--palette-accent`. Used for: ONE single kinetic accent per slide — a spec, a CTA, a divider.
- **Chrome Steel** (`#c0c0c0`): CSS var `--palette-bg-secondary`. Used for: gradient stops, metallic edges, subtle highlights.

### Surface & Background
- **Carbon Black** (`#000000`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Carbon Surface** (`#0e0e0e`): CSS var `--palette-bg-surface`. Used for: inset panels, spec sheets, content blocks.

### Neutrals & Text
- **Pearl White** (`#f4f4f4`): CSS var `--palette-text`. Used for: body text on dark backgrounds.
- **Steel Gray** (`#8a8a8a`): Used for: captions, secondary metadata, fine print.

### Gradient System
`linear-gradient(180deg, #000000 0%, #0e0e0e 100%)` — used for subtle dark depth backgrounds.
`linear-gradient(180deg, #ffffff 0%, #c0c0c0 100%)` — chrome gradient for reversed hero type only.

## 3. Typography Rules

### Font Family
- Heading: "Inter Display"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 88px | 700 | 1.0 |
| Heading | 48px | 600 | 1.1 |
| Subheading | 28px | 500 | 1.25 |
| Body | 22px | 400 | 1.55 |

## 4. Spacing & Layout
- Padding: 80-100px
- gap scale: 16/24/32/48/64px
- Strict vertical-center alignment — symmetrical, balanced, architectural
- One focal element per slide; composition feels like a product spec page

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 320ms (slower, deliberate, premium)
- Use @starting-style for fade-in; respect prefers-reduced-motion

## 6. Design Rules
- Background is ALWAYS carbon black (#000000) — never lighter, never warmer
- Symmetrical, centered layouts — every element on a vertical axis, never off-center
- Ignition Red reserved for ONE element per slide max — typically a single spec number or CTA
- Type uses the lightest weight that still reads — 500-600 for body, never bold for body
- Massive negative space — let the slide feel empty; restraint is the message
- Numbers/stats oversized (64px+) in white with optional Chrome Steel underline
- No drop shadows, no glow, no decorative shapes — the slide IS the design
- Spec-sheet aesthetic: numbers presented like data, not decoration ("0-60 in 3.1s" style)
- Chrome gradient reserved for ONE signature hero slide only across the carousel
