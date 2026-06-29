# Design System: Product Depth

> Category: GPT Image
> Depth Layering: enabled
> Product photography — hero product on top of brand wordmark, hero SKU text bleeds beyond the product on both sides.

Source inspiration: DTC skincare / fragrance product drops, 2026

## 2. Color Palette & Roles

### Primary
- **Brand Fuchsia** (`#e11d48`): CSS var `--palette-bg-primary`. Used for: brand wordmark, hero SKU.

### Secondary & Accent
- **Champagne** (`#fbbf24`): CSS var `--palette-accent`. Used for: CTA, price badge.
- **Rose** (`#fb7185`): CSS var `--palette-bg-secondary`. Used for: secondary panels.

### Surface & Background
- **Linen** (`#fafaf9`): CSS var `--palette-bg-background`. Used for: studio backdrop.
- **Mist** (`#f5f5f4`): CSS var `--palette-bg-surface`. Used for: spec callouts.

### Neutrals & Text
- **Charcoal** (`#1c1917`): CSS var `--palette-text`. Used for: body.
- **Slate** (`#71717a`): Used for: fine print.

### Gradient System
`linear-gradient(180deg, #fafaf9 0%, #f5f5f4 100%)` — clean studio sweep.
`linear-gradient(135deg, #e11d48 0%, #fb7185 100%)` — brand mark fill.

## 3. Typography Rules

### Font Family
- Heading: "Archivo Black"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Brand wordmark | 180px | 900 | 1.0 | -0.05em |
| SKU | 64px | 800 | 1.0 | -0.02em |
| Heading | 44px | 800 | 1.1 | -0.02em |
| Body | 22px | 500 | 1.5 | 0 |
| Price | 36px | 800 | 1.0 | -0.01em |

## 4. Spacing & Layout
- Padding: 56-88px
- gap scale: 16/24/32/48px
- Depth layering spacing: product occupies 30-40% of canvas, centred; brand wordmark extends edge-to-edge behind it, with 2.5x wider than product mask

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 400ms
- Subject (product) entry: translateY 32px → 0, opacity 0 → 1, 600ms
- Brand entry: fade with 16px downward slide, 200ms before product

## 6. Design Rules
- DEPTH LAYERING REQUIRED: .headline { position: relative; z-index: 1 } .subject { position: relative; z-index: 2 }
- Background → Text → Subject (z-index order 0 → 1 → 2)
- Product image MUST be transparent-background PNG (cutout) so the wordmark shows through
- Wordmark text extends 2.5-3x wider than the product silhouette on both sides
- Use a soft drop-shadow under the product (offset 0 32px, blur 64px, opacity 0.16) to lift it above the type
- Price + SKU go in the lower-right corner, on a surface card (NOT in front of the product)
- Slide 1 uses the gradient brand mark fill; content slides use solid fuchsia
- Body copy never exceeds 12 words per slide
- Use 90px+ of empty negative space at the top of every slide for visual breathing
