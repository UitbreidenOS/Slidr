# Design System: Frutiger Aero

> Category: Brutalist & Y2K
> Glass bubbles, water droplets, fresh green and sky blue — the optimistic tech aesthetic of Windows Vista, Nokia, and 2007-2012 consumer electronics.

Source inspiration: Windows Vista "Aero" UI, Nokia N9, Sony Bravia ads, Toshiba "Regza" 2008, 2011 HTC Sense

## 2. Color Palette & Roles

### Primary
- **Teal** (`#00a8a8`): CSS var `--palette-bg-primary`. Used for: brand name, primary buttons, top of gradients.

### Secondary
- **Sky Blue** (`#4fc3f7`): CSS var `--palette-bg-secondary`. Used for: gradient fills, secondary accents, sky backgrounds.

### Accent
- **Leaf Green** (`#8bc34a`): CSS var `--palette-accent`. Used for: nature callouts, success indicators, swipe arrows.

### Background
- **Glacier Blue** (`#e0f7fa`): CSS var `--palette-bg-background`. Used for: default slide background.

### Surface
- **Frosted White** (`#ffffff`): CSS var `--palette-bg-surface`. Used for: glass panels, cards, inset containers.

### Text
- **Deep Teal** (`#003844`): CSS var `--palette-text`. Used for: body text, secondary labels.

### Gradient System
`linear-gradient(180deg, #4fc3f7 0%, #81d4fa 50%, #b2ebf2 100%)` — used for sky backgrounds.
`linear-gradient(135deg, #00a8a8 0%, #4fc3f7 100%)` — used for CTA and hook gradient fills.
`radial-gradient(circle at 30% 20%, rgba(255,255,255,0.6) 0%, transparent 50%)` — used for glass highlight on bubbles.

## 3. Typography Rules

### Font Family
- Heading: "Quicksand"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 72px | 700 | 1.1 |
| Heading | 42px | 600 | 1.2 |
| Subheading | 26px | 500 | 1.35 |
| Body | 22px | 400 | 1.55 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- Generous whitespace; let the "sky" breathe between elements

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 380ms
- Subtle floating animation on bubbles (translateY oscillation); respect prefers-reduced-motion

## 6. Design Rules
- Glass-morphism panels: `background: rgba(255,255,255,0.55); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.6)`
- Background is glacier blue (#e0f7fa) — never pure white or pure black
- Decorative water droplets and bubbles (SVG) as design motifs on hero slides
- Soft drop-shadows: rgba(0,168,168,0.15) at 12px offset — never black shadows
- Body text is deep teal (#003844), not black — keeps the "natural" feel
- Leaf green (#8bc34a) reserved for ONE nature accent per slide max
- Border-radius 12-20px on all containers — rounded, friendly
- Optional: subtle leaf or grass blade SVG silhouette at bottom edge of slides
- Numbers can use the teal-to-blue gradient fill
