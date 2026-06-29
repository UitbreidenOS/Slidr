# Design System: Glass Panel Dark

> Category: 3D & Glassmorphism
> Frosted glass panels floating over deep black — the promptbase.shop aesthetic. Refracted light edges, subtle backdrop blur, premium dark.

Source inspiration: promptbase.shop, Apple Vision Pro, glassmorphism.com

## 2. Color Palette & Roles

### Primary
- **Ice White** (`#ffffff`): CSS var `--palette-bg-primary`. Used for: heading text, primary CTAs.

### Secondary & Accent
- **Electric Cyan** (`#00e5ff`): CSS var `--palette-accent`. Used for: accent lines, swipe indicators, focus rings.
- **Ghost Lavender** (`#8b5cf6`): CSS var `--palette-bg-secondary`. Used for: secondary highlights, tags, badges.

### Surface & Background
- **Void Black** (`#0a0a0f`): CSS var `--palette-bg-background`. Used for: slide background.
- **Glass Surface** (`#ffffff0f`): CSS var `--palette-bg-surface`. Used for: frosted panels (with backdrop-filter: blur(20px)).

### Neutrals & Text
- **Snow** (`#f1f5f9`): CSS var `--palette-text`. Used for: body text.
- **Smoke** (`#64748b`): Used for: captions, secondary labels.

### Gradient System
`linear-gradient(135deg, #0a0a0f 0%, #0f1a2e 50%, #0a0a0f 100%)` — subtle depth gradient for slide bg.
`linear-gradient(135deg, rgba(0,229,255,0.15), rgba(139,92,246,0.15))` — glass panel border glow.

## 3. Typography Rules

### Font Family
- Heading: "Inter"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 72px | 800 | 1.05 |
| Heading | 40px | 700 | 1.15 |
| Subheading | 24px | 600 | 1.3 |
| Body | 20px | 400 | 1.6 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- Glass panels have 1px border rgba(255,255,255,0.08) + backdrop-filter: blur(20px)
- Content floats in center of glass panel with generous internal padding (32-48px)

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 350ms
- Glass panels fade in with slight upward translate (12px)
- Respect prefers-reduced-motion
- Optional subtle light refraction shimmer on panel edges (CSS animation)

## 6. Design Rules
- Glass panels MUST use backdrop-filter: blur(20px) + rgba(255,255,255,0.06) background
- 1px border with rgba(255,255,255,0.08) on all glass surfaces for edge definition
- Maximum 2 glass panels per slide — do not over-layer
- Electric cyan is the ONLY accent color — never mix with warm tones
- Body text stays snow white (#f1f5f9) — never reduce below 60% opacity
- Contrast ratio ≥ 4.5:1: snow on void black = 17.8:1 (WCAG AAA)
- One ambient glow blob (radial gradient, 20% opacity) per slide for depth
- Hook text may use a subtle text-shadow glow: 0 0 40px rgba(0,229,255,0.3)
