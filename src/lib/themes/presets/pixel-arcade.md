# Design System: Pixel Arcade

> Category: Brutalist & Y2K
> 8-bit pixel fonts, CRT glow, dark space-blue background, magenta and cyan neon — the 1980s arcade cabinet aesthetic.

Source inspiration: 1981-1989 arcade cabinets (Galaga, Pac-Man, Donkey Kong), 8-bit demoscene, NES box art

## 2. Color Palette & Roles

### Primary
- **Arcade Magenta** (`#ff00ff`): CSS var `--palette-bg-primary`. Used for: hero hooks, pixel borders, brand marks.

### Secondary
- **Coin Yellow** (`#ffd700`): CSS var `--palette-bg-secondary`. Used for: score displays, secondary highlights.

### Accent
- **CRT Cyan** (`#00ffff`): CSS var `--palette-accent`. Used for: swipe arrows, data highlights, terminal text.

### Background
- **Space Black** (`#0a0a1f`): CSS var `--palette-bg-background`. Used for: default slide background.

### Surface
- **Pixel Purple** (`#1a1a3a`): CSS var `--palette-bg-surface`. Used for: cards, code blocks, inset panels.

### Text
- **Terminal White** (`#f0f0f0`): CSS var `--palette-text`. Used for: body text, secondary labels.

### Gradient System
`linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 50%, rgba(0,0,0,0.4) 100%)` — used for CRT scan-line overlay.
`linear-gradient(90deg, #ff00ff 0%, #00ffff 100%)` — used for hook text gradient fills.
`radial-gradient(ellipse at center, #1a1a3a 0%, #0a0a1f 70%, #000000 100%)` — used for CRT vignette.

## 3. Typography Rules

### Font Family
- Heading: "Press Start 2P"
- Body: "VT323"
- Fallbacks: monospace

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 56px | 400 | 1.2 |
| Heading | 32px | 400 | 1.25 |
| Subheading | 22px | 400 | 1.3 |
| Body | 22px | 400 | 1.4 |

## 4. Spacing & Layout
- Padding: 48-64px
- gap scale: 8/16/24/32px
- Grid-aligned to 8px multiples (true pixel grid)

## 5. Motion (CSS-first)
- Easing: steps(2) or steps(4) (frame-stepped, true retro feel)
- Duration: 240ms (one frame = ~80ms at 12fps)
- Pixel-perfect transitions only — no smooth interpolation; respect prefers-reduced-motion

## 6. Design Rules
- All text uses pixel/CRT fonts (Press Start 2P for hooks, VT323 for body) — NEVER modern sans
- Background must be space black (#0a0a1f) — never white, never gray
- Arcade magenta (#ff00ff) used for ONE element per slide max
- CRT scan-line overlay on every slide: repeating-linear-gradient at 4px intervals, 12% opacity
- CRT vignette: radial gradient darkening corners at 30% opacity
- Text-shadow glow on accent text: 0 0 8px currentColor at 60% opacity for CRT phosphor look
- Body text uses terminal white (#f0f0f0), 17:1+ contrast on space black
- Border-radius 0 — sharp pixel-perfect corners
- Optional: 8-bit starfield or pixel-coin decorative SVGs on hero slides
- Hook text rarely exceeds 6 words — pixel type is space-constrained
