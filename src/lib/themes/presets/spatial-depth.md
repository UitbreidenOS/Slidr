# Design System: Spatial Depth

> Category: 3D & Glassmorphism
> Apple Vision Pro inspired spatial layout with high elevation layers, real-time light refraction, and dark glass panels.

Source inspiration: VisionOS, spatial computing, Apple design systems

## 2. Color Palette & Roles

### Primary
- **Studio White** (`#ffffff`): CSS var `--palette-bg-primary`. Used for: header text.

### Secondary & Accent
- **Sky Blue** (`#0ea5e9`): CSS var `--palette-accent`. Used for: active indicators, highlights.
- **Electric Violet** (`#7c3aed`): CSS var `--palette-bg-secondary`. Used for: secondary highlights.

### Surface & Background
- **Deep Space Black** (`#000000`): CSS var `--palette-bg-background`. Used for: slide background.
- **Glass Panel** (`#1a1a2e99`): CSS var `--palette-bg-surface`. Used for: spatial card layers.

### Neutrals & Text
- **Slate Light** (`#f8fafc`): CSS var `--palette-text`. Used for: body text.
- **Slate Muted** (`#64748b`): Used for: secondary tags.

### Gradient System
`radial-gradient(circle at 50% 50%, #1e1e38 0%, #000000 100%)` — space background glow.

## 3. Typography Rules

### Font Family
- Heading: "Inter"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 80px | 900 | 1.05 |
| Heading | 44px | 800 | 1.15 |
| Subheading | 26px | 600 | 1.3 |
| Body | 22px | 400 | 1.6 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- Floating spatial cards stack with z-index offsets and subtle rotation

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.16,1,0.3,1)
- Duration: 400ms

## 6. Design Rules
- Floating cards must simulate real-world physical layers in a 3D environment
- Blur: 30px backdrop blur
- Refraction edges: 1px border with light opacity changes based on focus
- Background is absolute pitch black with subtle gradient glow spheres
