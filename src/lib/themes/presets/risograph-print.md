# Design System: Risograph Print

> Category: Brutalist & Y2K
> Limited 2-3 ink colors with halftone dots and slight misregistration — the analog Riso print aesthetic of zines, indie posters, and artist books.

Source inspiration: 2018-2025 risograph zine revival (Nieves, Maake, Loose Joints), Riso VIBGYOR inks, artist book fairs

## 2. Color Palette & Roles

### Primary
- **Riso Blue** (`#2e5090`): CSS var `--palette-bg-primary`. Used for: brand mark, primary shapes, headline strokes.

### Secondary
- **Riso Red** (`#d63a3a`): CSS var `--palette-bg-secondary`. Used for: secondary shapes, accent fills.

### Accent
- **Riso Yellow** (`#f4b942`): CSS var `--palette-accent`. Used for: highlight overlays, swipe arrows, swipe indicators.

### Background
- **Paper Cream** (`#f4f1e8`): CSS var `--palette-bg-background`. Used for: default slide background.

### Surface
- **Newsprint Tan** (`#ebe7d8`): CSS var `--palette-bg-surface`. Used for: cards, panels, inset containers.

### Text
- **Ink Black** (`#1a1a1a`): CSS var `--palette-text`. Used for: body text, secondary labels.

### Gradient System
No smooth gradients — Risograph discipline forbids them.
Halftone dot patterns (CSS radial-gradient with stepped colors) used for fills instead.

## 3. Typography Rules

### Font Family
- Heading: "Fraunces"
- Body: "Inter"
- Fallbacks: serif, sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 80px | 900 | 1.05 |
| Heading | 44px | 800 | 1.15 |
| Subheading | 26px | 600 | 1.3 |
| Body | 22px | 400 | 1.55 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- Off-center compositions encouraged; slight 2-4deg rotation on shapes OK

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 320ms
- Subtle 1-2px position-shift on entry to mimic Riso misregistration; respect prefers-reduced-motion

## 6. Design Rules
- Palette limited to 3 inks max: Riso blue (#2e5090), Riso red (#d63a3a), Riso yellow (#f4b942)
- Background must be paper cream (#f4f1e8) — never pure white
- Halftone dots used for fills: `background-image: radial-gradient(circle, currentColor 1px, transparent 1.5px); background-size: 6px 6px`
- Slight 2-3px misregistration on overlapping shapes (offset duplicates in second color)
- Riso blue (#2e5090) used for ONE primary shape per slide max
- Body text is ink black (#1a1a1a), 16:1+ contrast on paper cream
- Numbers can be oversized (88px+) in Fraunces with halftone fill
- Sharp 0-4px border-radius — geometric, not soft
- Optional: paper-fiber noise overlay at 5% opacity for that real-print feel
- Avoid pure RGB gradients — Risograph prints have stepped, dotted color transitions
