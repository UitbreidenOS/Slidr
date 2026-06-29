# Design System: Y2K Chrome

> Category: Brutalist & Y2K
> Liquid chrome typography on deep purple — magenta and cyan laser accents, iridescent overlays. The Turbo era of 1997-2001 web design.

Source inspiration: 1997-2001 web (HotWired, DesignMF, Blue Flavor), AutoTrader "Turbo" ads, Bliss Windows XP

## 2. Color Palette & Roles

### Primary
- **Magenta** (`#ff00ff`): CSS var `--palette-bg-primary`. Used for: chrome highlight, neon strokes, gradient fills.

### Secondary
- **Chrome Silver** (`#c0c0c0`): CSS var `--palette-bg-secondary`. Used for: metallic surfaces, bevel highlights.

### Accent
- **Cyan** (`#00ffff`): CSS var `--palette-accent`. Used for: underlines, scan-line accents, swipe arrows.

### Background
- **Deep Purple** (`#1a0033`): CSS var `--palette-bg-background`. Used for: default slide background.

### Surface
- **Midnight Violet** (`#2d0066`): CSS var `--palette-bg-surface`. Used for: cards, panels, inset containers.

### Text
- **Off-white** (`#f5f5f5`): CSS var `--palette-text`. Used for: body text, secondary labels.

### Gradient System
`linear-gradient(180deg, #ffffff 0%, #c0c0c0 30%, #6b6b6b 50%, #c0c0c0 70%, #ffffff 100%)` — used for liquid chrome text fill.
`linear-gradient(135deg, #ff00ff 0%, #00ffff 100%)` — used for iridescent chrome accents on hooks.
`radial-gradient(ellipse at center, #2d0066 0%, #1a0033 70%, #0d0019 100%)` — used for cosmic slide backgrounds.

## 3. Typography Rules

### Font Family
- Heading: "Major Mono Display"
- Body: "Inter"
- Fallbacks: monospace, sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 88px | 400 | 1.0 |
| Heading | 44px | 700 | 1.1 |
| Subheading | 26px | 600 | 1.3 |
| Body | 22px | 400 | 1.55 |

## 4. Spacing & Layout
- Padding: 56-72px
- gap scale: 8/16/24/32/48px
- Chrome text dominates; other content fades into deep purple

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 400ms (slightly slower for "premium feel")
- Subtle gradient shift on chrome text via CSS animation; respect prefers-reduced-motion

## 6. Design Rules
- Headlines use liquid chrome effect: `background: linear-gradient(180deg, #fff, #c0c0c0 30%, #6b6b6b 50%, #c0c0c0 70%, #fff); -webkit-background-clip: text; color: transparent`
- Magenta (#ff00ff) and cyan (#00ffff) used together as a Y2K iridescent pair
- Background must be deep purple (#1a0033) — never white or light gray
- Text uses off-white (#f5f5f5) with 16:1+ contrast on background
- Beveled chrome borders: 2-3px highlight + 2-3px shadow to fake 3D metallic edge
- Translucent overlays (rgba(255,255,255,0.05)) on surfaces for glassy depth
- Numbers can glow with magenta or cyan text-shadow at 30% opacity
- Body text never chrome-treated — chrome is reserved for hooks and stat numbers
- Add 2-3% noise texture overlay for tactile 90s print feel
