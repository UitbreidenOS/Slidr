# Design System: Y2K Iridescent

> Category: Brutalist & Y2K
> Holographic gradients shifting pink-blue-green — the Butterfly 2001 / Opal / CD-ROM aesthetic. Soft and dreamy but unmistakably Y2K.

Source inspiration: Butterfly 2001, holographic trading cards, MySpace 2005, Opal art prints

## 2. Color Palette & Roles

### Primary
- **Hot Pink** (`#ff6ec7`): CSS var `--palette-bg-primary`. Used for: hook text, brand marks, top of iridescent gradient.

### Secondary
- **Sky Cyan** (`#6ee7ff`): CSS var `--palette-bg-secondary`. Used for: gradient midpoint, secondary brand accents.

### Accent
- **Mint Green** (`#b8ff9f`): CSS var `--palette-accent`. Used for: gradient endpoint, swipe arrows, data highlights.

### Background
- **Pearl Lavender** (`#f5e6ff`): CSS var `--palette-bg-background`. Used for: default slide background.

### Surface
- **Soft Pink** (`#fff0fa`): CSS var `--palette-bg-surface`. Used for: cards, panels, inset containers.

### Text
- **Plum** (`#2a1f3d`): CSS var `--palette-text`. Used for: body text, secondary labels.

### Gradient System
`linear-gradient(135deg, #ff6ec7 0%, #c89cff 25%, #6ee7ff 50%, #b8ff9f 75%, #ffe07a 100%)` — used for holographic text fills and hero backgrounds.
`linear-gradient(45deg, #fff0fa 0%, #f5e6ff 100%)` — used for default slide background.

## 3. Typography Rules

### Font Family
- Heading: "DM Serif Display"
- Body: "Inter"
- Fallbacks: serif, sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 80px | 400 | 1.0 |
| Heading | 42px | 400 | 1.15 |
| Subheading | 26px | 500 | 1.3 |
| Body | 22px | 400 | 1.55 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- Soft edges; rounded corners (16-24px) on cards

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 450ms (slow, dreamy shifts)
- Iridescent gradient shifts angle on hover via CSS @property animation; respect prefers-reduced-motion

## 6. Design Rules
- Headlines use holographic gradient: `background: linear-gradient(135deg, #ff6ec7, #6ee7ff, #b8ff9f); background-clip: text; color: transparent`
- Pearl/lavender background (#f5e6ff) — never pure white
- Translucent overlays (rgba(255,255,255,0.4)) for glassy frosted layers
- Soft drop-shadows in pink (#ff6ec7 at 20% opacity) — never black shadows
- Border-radius 16-24px on all containers — soft, rounded, butterfly-like
- Body text is plum (#2a1f3d), not black — keeps the dreamy Y2K tone
- Numbers can use full iridescent gradient fill
- Add 3-5% holographic foil noise via SVG turbulence filter for that CD-ROM shimmer
- Optional: white sparkle stars (SVG) as decorative accents on hero slides
