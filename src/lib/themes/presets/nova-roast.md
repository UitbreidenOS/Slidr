# Design System: Nova Roast

> Category: GPT Image
> Coffee-house warmth — roasted browns with golden amber accents. Cozy, artisanal, crafted coffee brand feel.

Source inspiration: "NOVA ROAST Coffee" (6-slide product carousel)

## 2. Color Palette & Roles

### Primary
- **Caramel** (`#c97b3f`): CSS var `--palette-bg-primary`. Used for: brand name, headings, key terms.

### Secondary & Accent
- **Golden Foam** (`#f0c987`): CSS var `--palette-accent`. Used for: CTAs, highlight numbers, steam/foam motifs.
- **Roast Brown** (`#8b4513`): CSS var `--palette-bg-secondary`. Used for: secondary headings, dividers.

### Surface & Background
- **Dark Espresso** (`#1a120b`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Coffee Bean** (`#2d1f14`): CSS var `--palette-bg-surface`. Used for: cards, product frames.

### Neutrals & Text
- **Cream Foam** (`#fdf6e3`): CSS var `--palette-text`. Used for: body text.
- **Muted Caramel** (`#a06834`): Used for: captions, secondary labels.

### Gradient System
`linear-gradient(135deg, #1a120b 0%, #2d1f14 50%, #3d2818 100%)` — roasted depth.
`linear-gradient(135deg, #c97b3f 0%, #f0c987 100%)` — warm accent for CTAs and stats.

## 3. Typography Rules

### Font Family
- Heading: "Recoleta"
- Body: "Inter"
- Fallbacks: Georgia, serif / sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 68px | 700 | 1.1 |
| Heading | 42px | 600 | 1.2 |
| Subheading | 28px | 500 | 1.3 |
| Body | 24px | 400 | 1.6 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 350ms

## 6. Design Rules
- Dark espresso background — warm, cozy, artisanal coffee-house feel
- Recoleta (rounded serif) for headings — friendly, crafted, approachable
- Caramel for brand name and primary headlines
- Golden foam for ONE accent per slide (CTA, stat, or decorative steam line)
- Coffee-bean surface (#2d1f14) for product showcase cards
- Rounded corners (16px) and warm shadows
- Stats/numbers oversized (64px+) in golden foam gradient
