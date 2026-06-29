# Design System: Kinfolk Soft

> Category: Editorial & Magazine
> Warm beige and a thin elegant serif — slow-living aesthetic, generous whitespace, considered restraint.

Source inspiration: Kinfolk magazine + Cereal magazine + Apartmento editorial

## 2. Color Palette & Roles

### Primary
- **Soft Sepia** (`#3d3027`): CSS var `--palette-bg-primary`. Used for: all typography, body text, headings.

### Secondary & Accent
- **Dusty Rose** (`#c4a896`): CSS var `--palette-accent`. Used for: single accent per slide (CTA, divider, mark).
- **Warm Clay** (`#a0846b`): CSS var `--palette-bg-secondary`. Used for: secondary text, captions.

### Surface & Background
- **Kinfolk Beige** (`#ebe3d2`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Soft Linen** (`#f8f3e8`): CSS var `--palette-bg-surface`. Used for: inset cards, photo overlays.

### Neutrals & Text
- **Espresso** (`#3d3027`): CSS var `--palette-text`. Used for: all body and heading copy.
- **Warm Stone** (`#8a7d6b`): Used for: footer text, fine print, page numbers.

### Gradient System
`linear-gradient(180deg, #ebe3d2 0%, #ddd2bc 100%)` — soft afternoon light wash.

## 3. Typography Rules

### Font Family
- Heading: "Playfair Display"
- Body: "Inter"
- Fallbacks: Georgia, serif / sans-serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hook | 80px | 400 | 1.05 | -0.01em |
| Heading | 42px | 500 | 1.2 | -0.005em |
| Subheading | 22px | 400 | 1.4 | 0 |
| Body | 20px | 400 | 1.7 | 0 |
| Caption | 13px | 500 | 1.4 | 0.1em uppercase |

## 4. Spacing & Layout
- Padding: 80-112px (very generous — slow-living breathing room)
- gap scale: 16/24/32/48/72/96px
- Centered single-column for text; full-bleed for lifestyle imagery
- At least 40% of every slide must be negative space

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.16, 1, 0.3, 1)
- Duration: 700ms (slow, contemplative)
- Single-element fade-up entrances; respect prefers-reduced-motion
- @starting-style for fade-in

## 6. Design Rules
- Background is always warm Kinfolk beige — never pure white or dark
- Playfair Display at LIGHT weights (400-500) — never bold
- Dusty Rose used ONCE per slide — quiet, never saturated
- Whitespace is the loudest element — empty space IS the design
- Captions in 13px uppercase with 0.1em tracking — slow, considered
- Imagery: muted, warm-toned, slightly desaturated lifestyle photography
- Body line-height 1.7 — relaxed, almost meditative
- No bright colors, no hard borders — everything softens
- Two-column layouts feel wrong here — prefer single-column centered
- Contrast > 4.5:1 — espresso on beige is ~11:1, comfortably safe
