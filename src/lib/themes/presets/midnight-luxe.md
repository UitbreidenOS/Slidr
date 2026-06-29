# Design System: Midnight Luxe

> Category: Premium Dark
> Deep luxurious void black matched with rich gold foil texturing and elegant serif typography.

Source inspiration: Luxury brands, Rolex watch aesthetics, boutique typography

## 2. Color Palette & Roles

### Primary
- **Luxury White** (`#f5f5f5`): CSS var `--palette-bg-primary`. Used for: headers.

### Secondary & Accent
- **Gold Foil** (`#c9a55a`): CSS var `--palette-accent`. Used for: golden foil headers, borders.
- **Satin Gold** (`#8b7340`): CSS var `--palette-bg-secondary`. Used for: secondary tags.

### Surface & Background
- **Midnight Void** (`#050505`): CSS var `--palette-bg-background`. Used for: backdrop.
- **Velvet Black** (`#111111cc`): CSS var `--palette-bg-surface`. Used for: text containers.

### Neutrals & Text
- **Champagne** (`#e5e5e5`): CSS var `--palette-text`. Used for: body text.
- **Muted Gold** (`#525252`): Used for: secondary text.

### Gradient System
`linear-gradient(135deg, #c9a55a 0%, #8b7340 100%)` — gold foil gradient.

## 3. Typography Rules

### Font Family
- Heading: "Cormorant Garamond"
- Body: "Inter"
- Fallbacks: sans-serif

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- Layout mimics luxury print catalog grids

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.25,1,0.5,1)
- Duration: 400ms

## 6. Design Rules
- Luxury theme: use elegant Cormorant Garamond for main hooks
- Gold accents must look clean and premium (use #c9a55a)
- Contrast: keep text color on dark backgrounds very high
- Borders are ultra-thin (0.75px) for high precision
