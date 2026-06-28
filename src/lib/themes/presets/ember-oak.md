# Design System: Ember Oak

> Category: GPT Image
> Earthy, masculine brand identity — warm ember tones on dark walnut. Premium, grounded, crafted feel.

Source inspiration: "Ember Oak Male Brand" (20-slide brand deck)

## 2. Color Palette & Roles

### Primary
- **Ember Orange** (`#d97706`): CSS var `--palette-bg-primary`. Used for: brand name, primary headlines, key stats.

### Secondary & Accent
- **Amber Gold** (`#fbbf24`): CSS var `--palette-accent`. Used for: CTAs, highlight numbers, premium markers.
- **Burnt Sienna** (`#9a3412`): CSS var `--palette-bg-secondary`. Used for: secondary headings, dividers.

### Surface & Background
- **Dark Walnut** (`#1c1410`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Espresso** (`#292017`): CSS var `--palette-bg-surface`. Used for: cards, product frames, inset panels.

### Neutrals & Text
- **Warm Cream** (`#fef3c7`): CSS var `--palette-text`. Used for: body text.
- **Muted Brown** (`#78350f`): Used for: captions, secondary labels.

### Gradient System
`linear-gradient(135deg, #1c1410 0%, #292017 50%, #451a03 100%)` — warm ember gradient.
`linear-gradient(135deg, #d97706 0%, #fbbf24 100%)` — accent gradient for numbers and CTAs.

## 3. Typography Rules

### Font Family
- Heading: "Fraunces"
- Body: "Inter"
- Fallbacks: Georgia, serif / sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 76px | 800 | 1.1 |
| Heading | 44px | 700 | 1.2 |
| Subheading | 28px | 600 | 1.3 |
| Body | 24px | 400 | 1.5 |

## 4. Spacing & Layout
- Padding: 72-80px
- gap scale: 8/16/24/32/48px

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 350ms

## 6. Design Rules
- Dark walnut background with warm gradient — grounded, masculine feel
- Fraunces (serif) for headings gives a crafted, premium brand identity
- Ember orange for brand name and primary value props
- Amber gold for ONE accent per slide (stat, CTA, or badge)
- Textured feel: subtle noise or grain overlay is encouraged
- Brand showcase slides use centered layout on espresso surface
- Numbers/stats oversized (64px+) in amber-gold gradient
