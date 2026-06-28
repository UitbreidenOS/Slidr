# Design System: Velvet Roast

> Category: GPT Image
> Luxe feminine brand — velvet plum with soft rose accents and elegant serif type. Sophisticated, warm, intimate.

Source inspiration: "Velvet Roast Female Brand" (20-slide brand deck)

## 2. Color Palette & Roles

### Primary
- **Fuchsia** (`#e879f9`): CSS var `--palette-bg-primary`. Used for: brand name, primary headlines, key terms.

### Secondary & Accent
- **Soft Rose** (`#fda4af`): CSS var `--palette-accent`. Used for: CTAs, highlights, decorative shapes.
- **Deep Plum** (`#86198f`): CSS var `--palette-bg-secondary`. Used for: secondary headings, dividers.

### Surface & Background
- **Velvet Plum** (`#2d1b2e`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Lilac Surface** (`#3d2a3e`): CSS var `--palette-bg-surface`. Used for: cards, product frames.

### Neutrals & Text
- **Rose White** (`#fdf2f8`): CSS var `--palette-text`. Used for: body text.
- **Muted Mauve** (`#9d4edd`): Used for: captions, secondary labels.

### Gradient System
`linear-gradient(135deg, #2d1b2e 0%, #3d2a3e 50%, #4c1d40 100%)` — velvet depth.
`linear-gradient(135deg, #e879f9 0%, #fda4af 100%)` — accent gradient for CTAs.

## 3. Typography Rules

### Font Family
- Heading: "Cormorant Garamond"
- Body: "Inter"
- Fallbacks: Georgia, serif / sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 72px | 600 | 1.1 |
| Heading | 44px | 500 | 1.2 |
| Subheading | 28px | 500 | 1.3 |
| Body | 24px | 400 | 1.6 |
| Quote | 34px | 400 italic | 1.4 |

## 4. Spacing & Layout
- Padding: 72-80px
- gap scale: 8/16/24/32/48px

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.25,0.46,0.45,0.94)
- Duration: 400ms

## 6. Design Rules
- Velvet plum background — luxe, intimate, feminine
- Cormorant Garamond (serif) at lighter weights (500-600) for elegance
- Fuchsia for brand name and primary headlines
- Soft rose for ONE accent per slide — decorative, never heavy
- Quotes use italic Cormorant at 34px with a left border in soft rose
- Rounded corners (20px+) and soft shadows for a gentle, premium feel
- Decorative elements: thin lines, dots, or subtle floral-inspired shapes
