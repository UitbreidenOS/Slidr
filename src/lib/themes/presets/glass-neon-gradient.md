# Design System: Glass Neon Gradient

> Category: 3D & Glassmorphism
> Electric neon magenta and cyan accent flows underneath clean frosted glass cards.

Source inspiration: Dribbble glassmorphism, promptbase.shop

## 2. Color Palette & Roles

### Primary
- **Laser White** (`#ffffff`): CSS var `--palette-bg-primary`. Used for: heading text.

### Secondary & Accent
- **Electric Magenta** (`#ff2d95`): CSS var `--palette-accent`. Used for: neon borders, focal highlights.
- **Electric Cyan** (`#00d4ff`): CSS var `--palette-bg-secondary`. Used for: secondary highlights.

### Surface & Background
- **Cosmic Purple** (`#0f0520`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Deep Space** (`#1a0a3099`): CSS var `--palette-bg-surface`. Used for: panels (backdrop-filter: blur(25px)).

### Neutrals & Text
- **Frost Blue** (`#e2e8f0`): CSS var `--palette-text`. Used for: body text.
- **Mist Purple** (`#8b859e`): Used for: secondary captions.

### Gradient System
`linear-gradient(135deg, #ff2d95 0%, #00d4ff 100%)` — bright neon overlay elements.

## 3. Typography Rules

### Font Family
- Heading: "Outfit"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 76px | 800 | 1.1 |
| Heading | 42px | 700 | 1.2 |
| Subheading | 26px | 600 | 1.3 |
| Body | 22px | 400 | 1.5 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- Floating panels are frosted, elevated using 3D transform shadows

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.3,1,0.3,1)
- Duration: 350ms

## 6. Design Rules
- Frosted panels must stand out against deep purple cosmic backgrounds
- Backdrop blur: 25px minimum
- Glow details: apply box-shadow matching the magenta/cyan gradients
- Border highlight: 1.5px border matching gradient details
