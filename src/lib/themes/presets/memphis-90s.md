# Design System: Memphis 90s

> Category: Brutalist & Y2K
> Squiggles, dots, geometric shapes, pastel + primary palette — the Ettore Sottsass / Memphis Group design movement that defined late-80s/early-90s graphics.

Source inspiration: Memphis Group (Ettore Sottsass, Nathalie Du Pasquier), 1987-1991 MTV idents, Saved by the Bell opening, Lisa Frank

## 2. Color Palette & Roles

### Primary
- **Memphis Pink** (`#ff4081`): CSS var `--palette-bg-primary`. Used for: squiggles, brand fills, primary shapes.

### Secondary
- **Squiggle Cyan** (`#40c4ff`): CSS var `--palette-bg-secondary`. Used for: secondary shapes, dots, accent rectangles.

### Accent
- **Squiggle Yellow** (`#ffd740`): CSS var `--palette-accent`. Used for: zigzag fills, highlight blocks, swipe arrows.

### Background
- **Bone Cream** (`#fef9e7`): CSS var `--palette-bg-background`. Used for: default slide background.

### Surface
- **Peach Blush** (`#ffe5e5`): CSS var `--palette-bg-surface`. Used for: cards, panels, inset containers.

### Text
- **Ink Black** (`#1a1a1a`): CSS var `--palette-text`. Used for: body text, secondary labels.

### Gradient System
`linear-gradient(135deg, #ff4081 0%, #ffd740 100%)` — used for hero hooks and CTA fills.
`linear-gradient(135deg, #40c4ff 0%, #b388ff 100%)` — used for secondary hook gradient fills.
Decorative SVG shapes (squiggles, triangles, dots) overlay backgrounds, NOT gradients.

## 3. Typography Rules

### Font Family
- Heading: "Bungee"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 88px | 400 | 1.0 |
| Heading | 48px | 400 | 1.05 |
| Subheading | 28px | 700 | 1.2 |
| Body | 22px | 400 | 1.55 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- Shapes break the grid intentionally — overlap allowed on hero slides

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.34,1.56,0.64,1) (springy, playful)
- Duration: 320ms
- Shapes enter with slight rotation (5-15deg) for playful motion; respect prefers-reduced-motion

## 6. Design Rules
- Headlines use Bungee at 400 weight — chunky display, big personality
- Background must be bone cream (#fef9e7) — never white, never gray
- Decorative motifs encouraged: squiggles (SVG path), triangle confetti, dot grids, zigzags
- Memphis pink (#ff4081) used for ONE shape element per slide max
- Mix pastels (pink, cyan, yellow) with primary accents (red, blue) — no muddy earth tones
- Body text is ink black (#1a1a1a), 17:1+ contrast on cream background
- Numbers can be oversized (88px+) with playful rotation -3deg to +3deg
- Sharp 0-4px border-radius — geometric, not too rounded
- Optional: black-and-white checkerboard pattern as subtle background texture
- Border combinations: 3px solid black + offset shadow in a different pastel color
