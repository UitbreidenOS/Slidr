# Design System: Glass Morphism Light

> Category: 3D & Glassmorphism
> Clean cream frosted glass panels floating with soft drop shadows and airy light backdrops.

Source inspiration: Apple HIG, Figma, glassmorphism.com

## 2. Color Palette & Roles

### Primary
- **Slate Dark** (`#1e293b`): CSS var `--palette-bg-primary`. Used for: heading text, main highlights.

### Secondary & Accent
- **Indigo Glow** (`#6366f1`): CSS var `--palette-accent`. Used for: accent icons, active markers.
- **Soft Lavender** (`#a78bfa`): CSS var `--palette-bg-secondary`. Used for: tags, secondary highlights.

### Surface & Background
- **Soft Cream** (`#fafaf8`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Frosted Light** (`#f0f0f5cc`): CSS var `--palette-bg-surface`. Used for: frosted panels (with backdrop-filter: blur(15px)).

### Neutrals & Text
- **Slate Gray** (`#334155`): CSS var `--palette-text`. Used for: body text.
- **Cool Gray** (`#94a3b8`): Used for: secondary text.

### Gradient System
`linear-gradient(135deg, #fafaf8 0%, #f1f5f9 100%)` — clean light background gradient.

## 3. Typography Rules

### Font Family
- Heading: "Inter"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 64px | 800 | 1.1 |
| Heading | 38px | 700 | 1.2 |
| Subheading | 24px | 600 | 1.35 |
| Body | 20px | 400 | 1.55 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- Floating panels have border: 1px solid rgba(255,255,255,0.6) + box-shadow: 0 10px 30px rgba(0,0,0,0.03)

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.25,0.8,0.25,1)
- Duration: 300ms

## 6. Design Rules
- Light theme: keep text dark (#334155) for high legibility
- High contrast: contrast ratio is at least 6.2:1
- Backdrops must have backdrop-filter: blur(15px) for the frost effect
- Keep margins generous to create an open, airy feeling
