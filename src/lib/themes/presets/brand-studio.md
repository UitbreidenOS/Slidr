# Design System: Brand Studio

> Category: GPT Image
> Premium brand-deck aesthetic — warm-on-dark with bold display type. For brand identity and product showcase carousels.

Source inspiration: "Ember Oak Male Brand" / "Velvet Roast Female Brand" (20-slide brand decks)

## 2. Color Palette & Roles

### Primary
- **Gold** (`#f59e0b`): CSS var `--palette-bg-primary`. Used for: brand name, primary headlines, premium markers.

### Secondary & Accent
- **Pink** (`#ec4899`): CSS var `--palette-accent`. Used for: CTAs, highlight badges, accent shapes.
- **Deep Purple** (`#7c3aed`): CSS var `--palette-bg-secondary`. Used for: gradient stops, section dividers.

### Surface & Background
- **Dark Plum** (`#1a1033`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Elevated Surface** (`#241647`): CSS var `--palette-bg-surface`. Used for: cards, product frames.

### Neutrals & Text
- **Warm White** (`#fef3c7`): CSS var `--palette-text`. Used for: body text.
- **Muted Gold** (`#92400e`): Used for: secondary labels, captions.

### Gradient System
`linear-gradient(135deg, #1a1033 0%, #241647 50%, #312e81 100%)` — rich brand gradient.
`linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)` — accent gradient for CTA buttons.

## 3. Typography Rules

### Font Family
- Heading: "Bricolage Grotesque"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 84px | 800 | 1.05 |
| Heading | 48px | 700 | 1.2 |
| Subheading | 28px | 600 | 1.3 |
| Body | 24px | 400 | 1.5 |

## 4. Spacing & Layout
- Padding: 72-80px
- gap scale: 8/16/24/32/48/64px

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.34,1.56,0.64,1)
- Duration: 400ms

## 6. Design Rules
- Dark plum background with rich gradient — premium feel
- Gold for the brand name and primary value props, never overused
- Pink accent for ONE CTA or badge per slide
- Oversized headlines (84px+) on hook slide — make it feel like a brand campaign
- Use generous spacing — premium brands breathe
- Product/brand showcase slides use a centered card on elevated surface (#241647)
- Vary between full-bleed gradient slides and structured card layouts
