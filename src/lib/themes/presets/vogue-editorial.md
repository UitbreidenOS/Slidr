# Design System: Vogue Editorial

> Category: Editorial & Magazine
> Deep black, white serif, oversized numerals, champagne accent — high-fashion editorial drama.

Source inspiration: Vogue Italia / Vogue Paris covers and editorial spreads

## 2. Color Palette & Roles

### Primary
- **Bone White** (`#f5f5f0`): CSS var `--palette-bg-primary`. Used for: all typography on dark slides, editorial body text.

### Secondary & Accent
- **Champagne Gold** (`#c9a961`): CSS var `--palette-accent`. Used for: numerals, issue marks, single accent line.
- **Smoke Gray** (`#8a8a8a`): CSS var `--palette-bg-secondary`. Used for: secondary text, captions.

### Surface & Background
- **Vogue Black** (`#0a0a0a`): CSS var `--palette-bg-background`. Used for: default slide background, editorial canvas.
- **Charcoal** (`#1a1a1a`): CSS var `--palette-bg-surface`. Used for: inset cards, quote frames, image overlays.

### Neutrals & Text
- **Bone** (`#f5f5f0`): CSS var `--palette-text`. Used for: all body and heading copy.
- **Dim Gray** (`#525252`): Used for: footer text, copyright, fine metadata.

### Gradient System
`linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)` — runway lighting depth.
`linear-gradient(135deg, #c9a961 0%, #f5f5f0 100%)` — champagne gradient for hook text fills.

## 3. Typography Rules

### Font Family
- Heading: "DM Serif Display"
- Body: "Inter"
- Fallbacks: Georgia, serif / sans-serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hook | 120px | 400 | 0.95 | -0.02em |
| Numeral | 180px | 400 | 0.9 | -0.03em |
| Heading | 52px | 400 | 1.1 | -0.01em |
| Subheading | 24px | 500 | 1.3 | 0 |
| Body | 20px | 400 | 1.55 | 0 |

## 4. Spacing & Layout
- Padding: 72-96px
- gap scale: 16/24/32/48/72px
- Centered single-column for cover slides; two-column for editorial spreads
- Oversized numerals (160-200px) for issue/feature numbers

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.16, 1, 0.3, 1)
- Duration: 600ms (slow, dramatic — let elements emerge)
- Numerals enter with slight scale; text fades up; respect prefers-reduced-motion
- @starting-style for fade-in

## 6. Design Rules
- Background is always Vogue Black #0a0a0a — never light, never white
- DM Serif Display at light weight (400) — Didot-style elegance, not bold
- Champagne Gold reserved for one element: numeral, line, or word
- Issue numbers and page numbers rendered as MASSIVE numerals (160-200px)
- All-caps small tracked labels (0.16em) for designer credits and credits
- Image treatments: high contrast, often desaturated, runway lighting
- Hook slides can use oversized serif words at 96-120px as visual anchors
- Two-column layouts feel right: editorial spread composition
- Whitespace is dramatic — leave whole zones black for breathing
- Contrast > 4.5:1 — bone white on Vogue Black is ~19:1, dramatic-safe
