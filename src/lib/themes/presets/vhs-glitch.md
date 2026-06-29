# Design System: VHS Glitch

> Category: Brutalist & Y2K
> Scan lines, RGB color split, distorted type, tracking-error artifacts — the retro-tech aesthetic of worn VHS tapes and cathode-ray TVs.

Source inspiration: 1990s VHS tracking errors, bootleg anime subs, cyberpunk UI, CRT monitor distortion, Hotline Miami

## 2. Color Palette & Roles

### Primary
- **Signal Red** (`#ff003c`): CSS var `--palette-bg-primary`. Used for: hook text, RGB-split red channel, error highlights.

### Secondary
- **Scan Blue** (`#00b8ff`): CSS var `--palette-bg-secondary`. Used for: RGB-split blue channel, secondary headings.

### Accent
- **CRT Green** (`#00ff9f`): CSS var `--palette-accent`. Used for: terminal-style text, monochrome monitor glow, swipe arrows.

### Background
- **Tape Black** (`#0d0014`): CSS var `--palette-bg-background`. Used for: default slide background.

### Surface
- **Signal Purple** (`#1a0028`): CSS var `--palette-bg-surface`. Used for: code blocks, panels, inset containers.

### Text
- **Static Gray** (`#e0e0e0`): CSS var `--palette-text`. Used for: body text, terminal-style labels.

### Gradient System
`linear-gradient(90deg, #ff003c 0%, #00b8ff 100%)` — used for chromatic aberration / RGB-split text effect.
`linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)` — used for scan-line overlay.
`radial-gradient(ellipse at center, #1a0028 0%, #0d0014 70%, #000000 100%)` — used for CRT vignette on backgrounds.

## 3. Typography Rules

### Font Family
- Heading: "VT323"
- Body: "Inter"
- Fallbacks: monospace, sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 88px | 400 | 1.0 |
| Heading | 44px | 400 | 1.1 |
| Subheading | 26px | 500 | 1.3 |
| Body | 22px | 400 | 1.5 |

## 4. Spacing & Layout
- Padding: 56-72px
- gap scale: 8/16/24/32/48px
- Text columns deliberately cut or interrupted by glitch bars

## 5. Motion (CSS-first)
- Easing: steps(4) for abrupt, non-smooth motion (true VHS feel)
- Duration: 280ms
- Occasional 1-frame "tracking error" jitter on entrance; respect prefers-reduced-motion

## 6. Design Rules
- Apply CRT scan-line overlay to every slide: repeating-linear-gradient with 2-3px spacing at 8% opacity
- Hook text uses RGB-split effect: red+blue duplicates offset 2-4px via absolute positioning
- Background must be tape black (#0d0014) — never white, never mid-gray
- Text uses static gray (#e0e0e0) on background, 15:1+ contrast
- Signal red (#ff003c) used for ONE glitch element per slide max
- CRT green (#00ff9f) for terminal-style data displays and code blocks
- Slight text-shadow glow on accent text: 0 0 8px currentColor at 40% opacity
- Tracking-error bars (horizontal red/blue stripes) used as dividers, NOT borders
- Body text uses Inter — VT323 reserved for hooks and monospace data only
- Numbers can flicker on entry (opacity 0.3 to 1.0 step keyframe)
