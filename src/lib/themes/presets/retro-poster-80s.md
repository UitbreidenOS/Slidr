# Design System: Retro Poster 80s

> Category: Brutalist & Y2K
> Hot pink + teal + black with neon grids and palm tree silhouettes — the synthwave/Miami Vice/VHS-cover aesthetic.

Source inspiration: Miami Vice title cards, Synthwave album covers, 1985-1989 movie posters, Ferrari Testarossa ads

## 2. Color Palette & Roles

### Primary
- **Hot Pink** (`#ff10f0`): CSS var `--palette-bg-primary`. Used for: hook text, neon grid strokes, sunset core.

### Secondary
- **Neon Teal** (`#14b8a6`): CSS var `--palette-bg-secondary`. Used for: secondary panels, accent blocks, palm-tree silhouettes.

### Accent
- **Sun Yellow** (`#facc15`): CSS var `--palette-accent`. Used for: highlights, swipe arrows, data callouts.

### Background
- **Midnight Indigo** (`#0a0e27`): CSS var `--palette-bg-background`. Used for: default slide background.

### Surface
- **Deep Navy** (`#14193d`): CSS var `--palette-bg-surface`. Used for: cards, panels, inset containers.

### Text
- **Cream White** (`#fef3c7`): CSS var `--palette-text`. Used for: body text, secondary labels.

### Gradient System
`linear-gradient(180deg, #0a0e27 0%, #2d1b69 40%, #ff10f0 70%, #facc15 100%)` — used for synthwave sunset backgrounds.
`linear-gradient(135deg, #ff10f0 0%, #14b8a6 100%)` — used for hook text gradient fills.
`radial-gradient(circle, rgba(255,16,240,0.4) 0%, transparent 70%)` — used for pink neon glow behind text.

## 3. Typography Rules

### Font Family
- Heading: "Bebas Neue"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 96px | 400 | 0.95 |
| Heading | 52px | 400 | 1.05 |
| Subheading | 28px | 700 | 1.2 |
| Body | 22px | 400 | 1.55 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- Hero slides feature horizon line at 60% height (ground/sky split)

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 320ms
- Neon grid uses subtle perspective scroll on entry; respect prefers-reduced-motion

## 6. Design Rules
- Headlines use Bebas Neue at 400 weight, all-caps, tight letter-spacing (-0.02em)
- Background must be midnight indigo (#0a0e27) — never white or modern gray
- Synthwave grid (perspective pink/cyan lines receding to horizon) on hero slides
- Palm tree silhouettes in neon teal (#14b8a6) as decorative motif on sunset slides
- Hot pink (#ff10f0) used for ONE neon element per slide max
- Body text is cream white (#fef3c7), 16:1+ contrast on dark backgrounds
- Text-shadow glow on accent text: 0 0 16px currentColor at 50% opacity
- Sun-on-horizon gradient (yellow → pink → purple → indigo) for hero hooks
- Sharp 0px border-radius — pure 80s geometric
- Numbers can be oversized (96px+) with pink-to-teal gradient fill
