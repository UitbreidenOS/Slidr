# Design System: Lumiere Skincare

> Category: Beauty
> Minimal beauty brand — soft gold on airy white. Clean, luxurious, skincare-aesthetic with generous whitespace.

Source inspiration: "LUMIERE Skincare" (6-slide product carousel)

## 2. Color Palette & Roles

### Primary
- **Soft Gold** (`#be9b6f`): CSS var `--palette-bg-primary`. Used for: brand name, headings, premium markers.

### Secondary & Accent
- **Champagne** (`#d4a574`): CSS var `--palette-accent`. Used for: CTAs, highlight numbers, decorative lines.
- **Taupe** (`#a89968`): CSS var `--palette-bg-secondary`. Used for: secondary headings, dividers.

### Surface & Background
- **Airy White** (`#fdfbf7`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Cream Surface** (`#f9f6f0`): CSS var `--palette-bg-surface`. Used for: product cards, inset panels.

### Neutrals & Text
- **Warm Charcoal** (`#3d3929`): CSS var `--palette-text`. Used for: body text.
- **Muted Gold** (`#9c8a5e`): Used for: captions, secondary labels.

### Gradient System
`linear-gradient(180deg, #fdfbf7 0%, #f9f6f0 100%)` — subtle warmth.
`linear-gradient(135deg, #be9b6f 0%, #d4a574 100%)` — gold accent for premium elements.

## 3. Typography Rules

### Font Family
- Heading: "Jost"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 64px | 600 | 1.15 |
| Heading | 40px | 500 | 1.2 |
| Subheading | 26px | 500 | 1.3 |
| Body | 24px | 400 | 1.6 |

## 4. Spacing & Layout
- Padding: 80-96px
- gap scale: 8/16/24/32/48px
- Extra-generous whitespace — beauty brands breathe

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.25,0.46,0.45,0.94)
- Duration: 500ms

## 6. Design Rules
- Light, airy background — never dark, always soft and warm
- Jost (geometric sans) at lighter weights (500-600) for elegance
- Soft gold for brand and headings — refined, not flashy
- Champagne for ONE accent per slide (CTA, number, or thin line)
- Maximum whitespace — 80-96px padding, don't crowd
- Product/benefit slides use cream surface cards with soft shadows
- Thin decorative lines (1px) in gold for section dividers
- Rounded corners (16-24px) for a gentle, premium feel
