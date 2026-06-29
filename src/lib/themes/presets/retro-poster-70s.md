# Design System: Retro Poster 70s

> Category: Brutalist & Y2K
> Earth tones, bold sans, sunburst motifs, and vintage travel-poster vibes — the optimistic 1970s graphic design revival.

Source inspiration: 1970s travel posters (Charley Harper, David Klein), Saul Bass, vintage National Parks posters

## 2. Color Palette & Roles

### Primary
- **Burnt Orange** (`#c2410c`): CSS var `--palette-bg-primary`. Used for: sunburst fills, headline strokes, brand marks.

### Secondary
- **Forest Green** (`#15803d`): CSS var `--palette-bg-secondary`. Used for: secondary panels, foliage motifs, mountain silhouettes.

### Accent
- **Mustard Yellow** (`#ca8a04`): CSS var `--palette-accent`. Used for: sun core, swipe arrows, highlight fills.

### Background
- **Aged Cream** (`#f5e6d3`): CSS var `--palette-bg-background`. Used for: default slide background.

### Surface
- **Sand Beige** (`#f0d9b5`): CSS var `--palette-bg-surface`. Used for: cards, panels, inset containers.

### Text
- **Deep Brown** (`#2d1810`): CSS var `--palette-text`. Used for: body text, secondary labels.

### Gradient System
`radial-gradient(circle at 50% 100%, #fde047 0%, #f59e0b 30%, #c2410c 60%, #7c2d12 100%)` — used for sunburst/sunset motifs.
`linear-gradient(135deg, #c2410c 0%, #ca8a04 100%)` — used for hook text gradient fills.

## 3. Typography Rules

### Font Family
- Heading: "Anton"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 88px | 400 | 1.0 |
| Heading | 48px | 400 | 1.1 |
| Subheading | 28px | 700 | 1.25 |
| Body | 22px | 400 | 1.55 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- Generous space for sunburst/mountain silhouettes; let artwork breathe

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 360ms
- Sunburst rays have very slow rotation on hero slides (40s loop); respect prefers-reduced-motion

## 6. Design Rules
- Headlines use Anton at 400 weight, all-caps — poster-masthead energy
- Background must be aged cream (#f5e6d3) — never pure white, never modern gray
- Sunburst motifs (alternating mustard + burnt orange triangles from a center point) encouraged on hero slides
- Earth-tone palette: cream, burnt orange, mustard, forest green, deep brown — no neons, no pastels
- Body text is deep brown (#2d1810), 11:1+ contrast on background
- Numbers can be oversized (96px+) in Anton with sunburst gradient fill
- Decorative dot/circle clusters optional as 1970s pattern accent
- Border-radius 0 — sharp, poster-print corners only
- Optional: subtle paper-texture noise (3-5% opacity) on every slide
