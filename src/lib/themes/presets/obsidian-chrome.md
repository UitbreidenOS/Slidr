# Design System: Obsidian Chrome

> Category: Premium Dark
> Polished obsidian dark glass textures paired with sleek reflective chrome metallic typography and accents.

Source inspiration: Premium automotive dashboards, Vercel design systems

## 2. Color Palette & Roles

### Primary
- **Reflective Chrome** (`#e0e0e0`): CSS var `--palette-bg-primary`. Used for: header highlights.

### Secondary & Accent
- **Polished Silver** (`#c0c0c0`): CSS var `--palette-accent`. Used for: metallic buttons, accent borders.
- **Satin Gray** (`#a0a0a0`): CSS var `--palette-bg-secondary`. Used for: secondary highlights.

### Surface & Background
- **Pitch Obsidian** (`#0a0a0a`): CSS var `--palette-bg-background`. Used for: absolute dark backdrop.
- **Satin Glass** (`#171717cc`): CSS var `--palette-bg-surface`. Used for: obsidian cards.

### Neutrals & Text
- **Frost Silver** (`#d4d4d4`): CSS var `--palette-text`. Used for: body text.
- **Steel Gray** (`#737373`): Used for: captions.

### Gradient System
`linear-gradient(135deg, #171717 0%, #0a0a0a 100%)` — obsidian texture.

## 3. Typography Rules

### Font Family
- Heading: "Geist"
- Body: "Inter"
- Fallbacks: sans-serif

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- Floating obsidian cards have a metallic border stroke using polished silver colors

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.16,1,0.3,1)
- Duration: 200ms

## 6. Design Rules
- Obsidian textures require zero bright saturated neon highlights
- Chrome lines represent premium craftsmanship
- Typographic hierarchy must be crisp and clean
- Maintain black to steel grey gradients for metallic feels
