# Design System: Gradient Flow

> Category: Claude AI
> Smooth gradient mesh — indigo to pink on dark navy. Modern, fluid, eye-catching with seamless color transitions.

Source inspiration: "Stop Paying 5K For Hero" / modern gradient mesh trend 2026

## 2. Color Palette & Roles

### Primary
- **Indigo** (`#818cf8`): CSS var `--palette-bg-primary`. Used for: headings, primary text, brand terms.

### Secondary & Accent
- **Pink** (`#f472b6`): CSS var `--palette-accent`. Used for: CTAs, highlight numbers, gradient endpoints.
- **Violet** (`#a78bfa`): CSS var `--palette-bg-secondary`. Used for: gradient midpoints, secondary headings.

### Surface & Background
- **Dark Navy** (`#0f172a`): CSS var `--palette-bg-background`. Used for: default slide background with gradient mesh.
- **Glass Surface** (`#1e293b`): CSS var `--palette-bg-surface`. Used for: glassmorphic cards, inset panels.

### Neutrals & Text
- **Light Indigo** (`#e0e7ff`): CSS var `--palette-text`. Used for: body text.
- **Muted Indigo** (`#818cf8`): Used for: captions, secondary labels at lower opacity.

### Gradient System
`linear-gradient(135deg, #0f172a 0%, #1e1b4b 30%, #312e81 60%, #1e1b4b 100%)` — deep mesh base.
`linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #f472b6 100%)` — primary gradient for text and CTAs.
`radial-gradient(circle at 20% 80%, #818cf840 0%, transparent 50%), radial-gradient(circle at 80% 20%, #f472b640 0%, transparent 50%)` — mesh glow overlay.

## 3. Typography Rules

### Font Family
- Heading: "Sora"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 80px | 800 | 1.05 |
| Heading | 46px | 700 | 1.15 |
| Subheading | 28px | 600 | 1.3 |
| Body | 24px | 400 | 1.5 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 350ms

## 6. Design Rules
- Background features a smooth gradient mesh — indigo to pink, never flat
- Sora (geometric sans) for modern, clean, fluid headings
- Indigo for primary text, pink for gradient endpoints and CTAs
- Gradient text fills (background-clip:text) for hook headlines
- Glassmorphic cards on #1e293b with backdrop-blur and semi-transparent borders
- Radial gradient glows in corners add depth — indigo bottom-left, pink top-right
- Smooth, fluid shapes — no hard angles, everything feels in motion
- Vary mesh positions between slides to create visual rhythm
