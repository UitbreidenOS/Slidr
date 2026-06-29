# Design System: Retro Future

> Category: Brutalist & Y2K
> Atomic-age starbursts, boomerang shapes, and orbit motifs — the optimistic 1950s-1960s vision of tomorrow (Googie, Mid-Century Modern).

Source inspiration: Googie architecture, Mid-Century Modern, Saul Bass, 1957-1965 World's Fair, Eames era

## 2. Color Palette & Roles

### Primary
- **Atomic Red** (`#d32f2f`): CSS var `--palette-bg-primary`. Used for: starburst fills, headline strokes, brand marks.

### Secondary
- **Orbit Blue** (`#1976d2`): CSS var `--palette-bg-secondary`. Used for: orbit rings, secondary brand elements.

### Accent
- **Sun Yellow** (`#fbc02d`): CSS var `--palette-accent`. Used for: star cores, highlight fills, swipe arrows.

### Background
- **Warm Cream** (`#fff8e1`): CSS var `--palette-bg-background`. Used for: default slide background.

### Surface
- **Pale Peach** (`#ffecb3`): CSS var `--palette-bg-surface`. Used for: cards, panels, inset containers.

### Text
- **Cocoa Brown** (`#4a2c0a`): CSS var `--palette-text`. Used for: body text, secondary labels.

### Gradient System
`radial-gradient(circle, #fbc02d 0%, #f57f17 50%, #d32f2f 100%)` — used for sun/starburst motifs.
`linear-gradient(135deg, #d32f2f 0%, #1976d2 100%)` — used for hook text gradient fills.

## 3. Typography Rules

### Font Family
- Heading: "Major Mono Display"
- Body: "Inter"
- Fallbacks: monospace, sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 80px | 400 | 1.0 |
| Heading | 44px | 400 | 1.1 |
| Subheading | 26px | 600 | 1.3 |
| Body | 22px | 400 | 1.55 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- Generous space around starburst/orbit motifs; let them breathe

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 400ms
- Slow rotation (60s loop) on decorative starbursts; respect prefers-reduced-motion

## 6. Design Rules
- Headlines use Major Mono Display at 400 weight — chunky monospace, atomic-age feel
- Background must be warm cream (#fff8e1) — never pure white
- Decorative motifs encouraged: starbursts (alternating triangles), boomerangs, atomic orbits, dots
- Atomic red (#d32f2f) used for ONE starburst element per slide max
- Color palette: warm cream, atomic red, orbit blue, sun yellow, cocoa brown — no pastels, no neons
- Body text is cocoa brown (#4a2c0a), 12:1+ contrast on cream background
- Border-radius 0-4px — geometric mid-century shapes
- Numbers can be oversized (88px+) in Major Mono with starburst gradient fill
- Optional: tiny dot-pattern constellation in corners of slides
- Sharp vector shapes only — no gradients on body text
