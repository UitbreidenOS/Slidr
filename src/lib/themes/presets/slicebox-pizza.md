# Design System: Slicebox Pizza

> Category: GPT Image
> Playful food brand — warm red and amber on cream. Friendly, appetizing, rounded shapes for a casual pizza brand.

Source inspiration: "SLICEBOX Pizza" (6-slide product carousel)

## 2. Color Palette & Roles

### Primary
- **Pizza Red** (`#dc2626`): CSS var `--palette-bg-primary`. Used for: brand name, headlines, key terms.

### Secondary & Accent
- **Amber Cheese** (`#f59e0b`): CSS var `--palette-accent`. Used for: CTAs, prices, highlight numbers.
- **Tomato Orange** (`#ea580c`): CSS var `--palette-bg-secondary`. Used for: secondary headings, dividers.

### Surface & Background
- **Cream Dough** (`#fff8f0`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Warm Surface** (`#fff4e6`): CSS var `--palette-bg-surface`. Used for: menu cards, product frames.

### Neutrals & Text
- **Charcoal** (`#1c1917`): CSS var `--palette-text`. Used for: body text.
- **Muted Brown** (`#78716c`): Used for: captions, secondary labels.

### Gradient System
`linear-gradient(135deg, #fff8f0 0%, #fff4e6 100%)` — warm, appetizing background.
`linear-gradient(135deg, #dc2626 0%, #ea580c 100%)` — red-orange for CTAs and headers.

## 3. Typography Rules

### Font Family
- Heading: "Pacifico"
- Body: "Inter"
- Fallbacks: cursive / sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 72px | 400 | 1.1 |
| Heading | 40px | 700 | 1.2 |
| Subheading | 28px | 600 | 1.3 |
| Body | 24px | 400 | 1.5 |
| Price | 64px | 800 | 1.1 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.34,1.56,0.64,1)
- Duration: 300ms

## 6. Design Rules
- Light cream background — warm, appetizing, food-friendly
- Pacifico (handwritten script) for brand name and hooks — playful, casual
- Inter (sans) for body text and subheadings — keeps it readable
- Pizza red for brand name and primary headlines
- Amber cheese for prices and ONE accent per slide (CTA, badge, or number)
- Rounded corners (20-24px) everywhere — friendly, approachable
- Menu/product cards on warm surface with soft shadows
- Prices oversized (64px+) in amber — appetizing and prominent
- Emoji and playful icons encouraged (🍕, ⭐, 📍) in moderation
