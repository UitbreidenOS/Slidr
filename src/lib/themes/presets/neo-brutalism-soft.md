# Design System: Neo-Brutalism Soft

> Category: Brutalist & Y2K
> Pastel-punk neo-brutalism — thick borders and hard shadows, but on a soft pastel palette. The Gumroad/Lemon Squeezy storefront look.

Source inspiration: Gumroad storefronts, Lemon Squeezy, indie SaaS landing pages 2024-2025

## 2. Color Palette & Roles

### Primary
- **Lavender** (`#a78bfa`): CSS var `--palette-bg-primary`. Used for: brand name, primary buttons, tag fills.

### Secondary
- **Mint Cream** (`#86efac`): CSS var `--palette-bg-secondary`. Used for: section backgrounds, secondary panels.

### Accent
- **Soft Yellow** (`#fde68a`): CSS var `--palette-accent`. Used for: stat fills, swipe indicators, highlight callouts.

### Background
- **Blush Pink** (`#fce7f3`): CSS var `--palette-bg-background`. Used for: default slide background.

### Surface
- **Cream White** (`#fff7ed`): CSS var `--palette-bg-surface`. Used for: cards, code blocks, inset panels.

### Text
- **Charcoal** (`#1f1f1f`): CSS var `--palette-text`. Used for: all body text, headings, border strokes.

### Gradient System
`linear-gradient(135deg, #fce7f3 0%, #ede9fe 50%, #dbeafe 100%)` — used for hero slide backgrounds.
`linear-gradient(135deg, #a78bfa 0%, #fde68a 100%)` — used for hook text gradient fills.

## 3. Typography Rules

### Font Family
- Heading: "Space Grotesk"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 80px | 800 | 1.05 |
| Heading | 44px | 700 | 1.15 |
| Subheading | 28px | 600 | 1.3 |
| Body | 24px | 500 | 1.5 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- Cards sit on top of a faint dot-grid background

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 280ms
- @starting-style for soft fade-in; respect prefers-reduced-motion

## 6. Design Rules
- Every visible block uses `border: 3px solid #1f1f1f` and `box-shadow: 6px 6px 0 #1f1f1f` (no blur, hard offset)
- Pastel palette: blush, lavender, mint, soft yellow — never saturated neons
- All text is charcoal (#1f1f1f), 4.5:1+ contrast on every pastel background
- Lavender (#a78bfa) used for ONE brand element per slide max
- Hover state: shadow shifts to `10px 10px 0 #1f1f1f`, element shifts -4px -4px
- Borders can be slightly rounded (4-6px radius) — friendlier than sharp neo-brutalism
- Cards get a subtle 1-2% dot-grid background pattern
- Swipe arrow uses soft yellow (#fde68a) with charcoal border
