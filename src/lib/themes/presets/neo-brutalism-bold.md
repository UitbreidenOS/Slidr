# Design System: Neo-Brutalism Bold

> Category: Brutalist & Y2K
> Neo-brutalist with thick black borders, hard offset shadows, and neon green hits — the Figma/Gumroad/Linear aesthetic.

Source inspiration: 2024-2026 neo-brutalism wave (Gumroad, Linear, Vercel marketing, Figma Config 2025)

## 2. Color Palette & Roles

### Primary
- **Neon Green** (`#76ff03`): CSS var `--palette-bg-primary`. Used for: section markers, tag fills, highlight callouts.

### Secondary
- **Hot Pink** (`#ff0080`): CSS var `--palette-bg-secondary`. Used for: CTA fills, hot accent rectangles.

### Accent
- **Sunshine Yellow** (`#fde047`): CSS var `--palette-accent`. Used for: stat highlights, swipe indicators, underline bars.

### Background
- **Pale Yellow** (`#fef9c3`): CSS var `--palette-bg-background`. Used for: default slide background.

### Surface
- **Pure White** (`#ffffff`): CSS var `--palette-bg-surface`. Used for: cards, code blocks, inset panels.

### Text
- **Pure Black** (`#000000`): CSS var `--palette-text`. Used for: all body text, headings, border strokes.

### Gradient System
`linear-gradient(135deg, #fef9c3 0%, #fde047 100%)` — used for hero slides and CTA panels.
`linear-gradient(135deg, #76ff03 0%, #fde047 100%)` — used for hook text gradient fills.

## 3. Typography Rules

### Font Family
- Heading: "Archivo Black"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 88px | 900 | 1.0 |
| Heading | 48px | 900 | 1.05 |
| Subheading | 28px | 700 | 1.2 |
| Body | 24px | 500 | 1.5 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- Every block is a rectangle with 4-6px solid black border

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.34,1.56,0.64,1)
- Duration: 200ms (snappy, almost mechanical)
- @starting-style for entry fade; respect prefers-reduced-motion

## 6. Design Rules
- Every visible block uses `border: 4px solid #000000` and `box-shadow: 8px 8px 0 #000000` (no blur, hard offset)
- Neon green (#76ff03) used for ONE element per slide max
- Background must be pale yellow (#fef9c3) — never white-on-white
- All text is pure black (#000000) for maximum contrast
- Hot pink (#ff0080) reserved for CTAs and swipe arrows
- Hover state: shadow shifts to `12px 12px 0 #000000`, element shifts -4px -4px (translation interaction)
- Borders are NEVER rounded — sharp 90-degree corners only
- No gradients on body text — gradients reserved for hero hooks only
- Numbers and stats get oversized (96px+) in Archivo Black
