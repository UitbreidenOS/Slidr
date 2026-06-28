# Design System: Aurora Activewear

> Category: GPT Image
> Sporty, high-energy activewear brand — dark with teal-lime gradient. Athletic, bold, performance-driven.

Source inspiration: "AURORA Activewear" (6-slide product carousel)

## 2. Color Palette & Roles

### Primary
- **Teal** (`#2dd4bf`): CSS var `--palette-bg-primary`. Used for: brand name, primary headlines, performance stats.

### Secondary & Accent
- **Lime** (`#84cc16`): CSS var `--palette-accent`. Used for: CTAs, energy markers, highlight numbers.
- **Cyan** (`#06b6d4`): CSS var `--palette-bg-secondary`. Used for: gradient stops, secondary headings.

### Surface & Background
- **Deep Teal** (`#08161a`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Athletic Slate** (`#0f2027`): CSS var `--palette-bg-surface`. Used for: product cards, stat panels.

### Neutrals & Text
- **Ice White** (`#f0fdfa`): CSS var `--palette-text`. Used for: body text.
- **Muted Teal** (`#5eead4`): Used for: captions, secondary labels.

### Gradient System
`linear-gradient(135deg, #08161a 0%, #0f2027 50%, #134e4a 100%)` — athletic depth.
`linear-gradient(135deg, #2dd4bf 0%, #84cc16 100%)` — energy gradient for stats and CTAs.

## 3. Typography Rules

### Font Family
- Heading: "Archivo"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 80px | 900 | 1.05 |
| Heading | 46px | 800 | 1.1 |
| Subheading | 28px | 700 | 1.3 |
| Body | 24px | 500 | 1.5 |
| Stat | 88px | 900 | 1.0 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.34,1.56,0.64,1)
- Duration: 250ms

## 6. Design Rules
- Dark athletic background — performance, energy, motion
- Archivo at 900 weight for punchy, bold headlines — condensed feel
- Teal for brand and primary, lime for ONE energy accent per slide
- Stats and performance numbers are oversized (88px+) in gradient fill
- Angular shapes and diagonal cuts are encouraged — dynamic feel
- Product showcase uses centered card on athletic slate surface
- Swipe indicator styled as a "play" or "go" arrow in lime
