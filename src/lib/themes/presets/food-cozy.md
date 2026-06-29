# Design System: Food Cozy

> Category: Niche & Industry
> Warm orange and deep brown on cream — appetizing, rustic, kitchen-table hospitality. Bold recipe typography, sensory copy, generous plating.

Source inspiration: contemporary recipe, restaurant, and comfort-food content aesthetic

## 2. Color Palette & Roles

### Primary
- **Warm Orange** (`#e85d04`): CSS var `--palette-bg-primary`. Used for: primary headings, signature dish hooks, dominant accents.

### Secondary & Accent
- **Paprika Red** (`#c4320d`): CSS var `--palette-accent`. Used for: gradient stops, chili/spice indicators, urgency CTAs.
- **Honey Gold** (`#d4a373`): CSS var `--palette-bg-secondary`. Used for: secondary markers, honey/cheese accents.

### Surface & Background
- **Buttermilk Cream** (`#faedcd`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Linen Surface** (`#fefae0`): CSS var `--palette-bg-surface`. Used for: inset cards, recipe step blocks, ingredient panels.

### Neutrals & Text
- **Deep Cocoa** (`#3a2418`): CSS var `--palette-text`. Used for: body text, primary copy.
- **Bark Brown** (`#774936`): Used for: captions, secondary metadata, wood-tone accents.

### Gradient System
`linear-gradient(135deg, #e85d04 0%, #c4320d 100%)` — used for hero hooks and primary CTAs.
`linear-gradient(180deg, #faedcd 0%, #fefae0 100%)` — used for warm cream depth backgrounds.

## 3. Typography Rules

### Font Family
- Heading: "DM Serif Display"
- Body: "Inter"
- Fallbacks: serif / sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 80px | 700 | 1.05 |
| Heading | 44px | 700 | 1.15 |
| Subheading | 26px | 600 | 1.3 |
| Body | 22px | 400 | 1.55 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- One focal element per slide — a dish, ingredient, or step
- Generous corner radius on cards (12-20px) for the rustic feel

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 300ms
- Use @starting-style for fade-in; respect prefers-reduced-motion

## 6. Design Rules
- Background is always warm cream (#faedcd or #fefae0) — never cool, never dark
- Warm Orange is the signature — use for ONE dominant element per slide
- Body text in Deep Cocoa (#3a2418), never pure black — feels like ink on a recipe card
- Sensory, appetite-led copy: "crispy", "smoky", "melting", "caramelized"
- Recipe step numbers oversized (48px+) in Warm Orange — they're the heroes
- Ingredient lists in a quiet two-column layout with Honey Gold bullet dots
- Serif headings (DM Serif) for dish names; sans body for instructions and details
- Subtle warm shadows (rgba(58,36,24,0.08) at most) — feels like soft kitchen light
- Avoid photographic gradients on type — solid colors with strong contrast read better
- Wood-grain or linen textures in surfaces are OK if subtle (≤5% noise)
