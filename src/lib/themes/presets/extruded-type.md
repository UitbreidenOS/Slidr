# Design System: Extruded Type

> Category: 3D Typography
> Playful 3D retro poster design featuring extruded layered display typography and bold block drop shadows.

Source inspiration: Vintage 3D poster art, retro graphic design

## 2. Color Palette & Roles

### Primary
- **Paper Cream** (`#ffffff`): CSS var `--palette-bg-primary`. Used for: header text.

### Secondary & Accent
- **Amber Gold** (`#fbbf24`): CSS var `--palette-accent`. Used for: 3D extrusion offsets, CTA fills.
- **Indigo Block** (`#818cf8`): CSS var `--palette-bg-secondary`. Used for: subheadings.

### Surface & Background
- **Deep Indigo** (`#1e1b4b`): CSS var `--palette-bg-background`. Used for: background.
- **Medium Indigo** (`#312e81cc`): CSS var `--palette-bg-surface`. Used for: panels.

### Neutrals & Text
- **Pastel Blue** (`#e0e7ff`): CSS var `--palette-text`. Used for: body text.
- **Muted Indigo** (`#4f46e5`): Used for: secondary labels.

### Gradient System
`linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)` — base gradient.

## 3. Typography Rules

### Font Family
- Heading: "Clash Display"
- Body: "Inter"
- Fallbacks: sans-serif

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- Layout mimics bold poster art layouts with large display typography

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.34,1.56,0.64,1)
- Duration: 400ms

## 6. Design Rules
- Typography text-shadow is stacked multiple times to simulate a physical 3D extrusion look
- Fonts must be highly bold (Clash Display or similar sans-serif display fonts)
- Contrasts should look high-energy and pop out
- Card containers use thick solid borders (e.g. 3px) for retro block feel
