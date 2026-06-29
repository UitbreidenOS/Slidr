# Design System: Blueprint Tech

> Category: General
> Navy paper with cyan grid lines and white technical ink — the architect's blueprint aesthetic.

Source inspiration: Architectural blueprints + engineering schematics + isometric technical drawings

## 2. Color Palette & Roles

### Primary
- **Drafting White** (`#e8f4ff`): CSS var `--palette-bg-primary`. Used for: headings, primary text, technical labels.

### Secondary & Accent
- **Cyan Grid** (`#4dd0e1`): CSS var `--palette-accent`. Used for: grid lines, measurement marks, swipe indicator.
- **Warm Amber** (`#ffb74d`): CSS var `--palette-bg-secondary`. Used for: accent highlights, callouts, dimension lines.

### Surface & Background
- **Blueprint Navy** (`#0a2540`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Drafting Deep** (`#0d2f4f`): CSS var `--palette-bg-surface`. Used for: panels, diagram backgrounds.

### Neutrals & Text
- **Paper White** (`#f0f8ff`): CSS var `--palette-text`. Used for: body text.
- **Faded Cyan** (`#5a8aa3`): Used for: captions, secondary annotations.

### Gradient System
`linear-gradient(180deg, #0a2540 0%, #0d2f4f 100%)` — paper depth.
No chromatic gradients on background — blueprint paper is uniformly toned.
`linear-gradient(135deg, #e8f4ff 0%, #4dd0e1 100%)` — text gradient for headings only.

## 3. Typography Rules

### Font Family
- Heading: "JetBrains Mono"
- Body: "Space Grotesk"
- Fallbacks: monospace / sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 64px | 700 | 1.1 |
| Heading | 36px | 600 | 1.2 |
| Subheading | 24px | 500 | 1.3 |
| Body | 22px | 400 | 1.55 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- One focal element per slide; grid alignment is mandatory
- Blueprint grid: 40px x 40px cells, 1px cyan lines at 25% opacity as background

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.4,0,0.2,1)
- Duration: 280ms
- Use @starting-style for fade-in; respect prefers-reduced-motion
- Optional dimension-line draw: stroke-dasharray reveal keyframe on accent rules

## 6. Design Rules
- JetBrains Mono for ALL headings, dimensions, and numerical labels — its engineering feel is required
- Space Grotesk for body text — sans-serif keeps blueprint pages readable
- Blueprint grid (40px cells, 1px cyan at 25% opacity) is mandatory on every slide
- Dimension lines with arrowheads (▸) and tick marks (|) encouraged on diagrams
- Coordinates, measurements, and callouts in JetBrains Mono with cyan color
- Optional technical frame: 2px cyan border with corner crosshairs (┌ ┐ └ ┘)
- CTAs are pill buttons with cyan fill and 1px white border, blueprint-arrow style
- Slide 1 includes a "→ NEXT SHEET" or "[01/06]" swipe indicator in cyan, bottom-right
- All numbers render with units (mm, kg, %, etc.) — never bare figures
- Contrast ratio ≥ 4.5:1: paper white #f0f8ff on #0a2540 = 14.3:1 (WCAG AAA)
