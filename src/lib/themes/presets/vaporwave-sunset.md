# Design System: Vaporwave Sunset

> Category: General
> Purple-pink gradient horizon with a retro 80s perspective grid — the aesthetic sunset.

Source inspiration: Vaporwave / Outrun 1980s + Tokyo dusk + pastel neons

## 2. Color Palette & Roles

### Primary
- **Hot Magenta** (`#ff6ec7`): CSS var `--palette-bg-primary`. Used for: hook text, sun/horizon elements, primary headlines.

### Secondary & Accent
- **Electric Cyan** (`#7af8ff`): CSS var `--palette-accent`. Used for: grid lines, swipe indicators, CTAs.
- **Soft Lilac** (`#b388ff`): CSS var `--palette-bg-secondary`. Used for: secondary headings, sun halo, gradient stop.

### Surface & Background
- **Deep Purple** (`#1a0b3d`): CSS var `--palette-bg-background`. Used for: slide top / sky area.
- **Plum** (`#2d1454`): CSS var `--palette-bg-surface`. Used for: ground area, inset panels.

### Neutrals & Text
- **Cream White** (`#fff1f5`): CSS var `--palette-text`. Used for: body text, labels.
- **Dusty Rose** (`#c89bd9`): Used for: captions, secondary metadata.

### Gradient System
`linear-gradient(180deg, #1a0b3d 0%, #5b1d8b 35%, #ff6ec7 70%, #ffa1c5 100%)` — sunset sky-to-horizon gradient.
`linear-gradient(180deg, #2d1454 0%, #1a0b3d 100%)` — ground grid fade.
`linear-gradient(135deg, #ff6ec7 0%, #7af8ff 100%)` — sun gradient + CTA fills.

## 3. Typography Rules

### Font Family
- Heading: "Audiowide"
- Body: "Space Grotesk"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 86px | 700 | 1.05 |
| Heading | 42px | 700 | 1.15 |
| Subheading | 26px | 600 | 1.3 |
| Body | 23px | 400 | 1.55 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- One focal element per slide; horizon line at 60% from top
- Perspective grid: 1px cyan lines converging to vanishing point on horizon

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.25,1,0.5,1)
- Duration: 400ms
- Use @starting-style for fade-in; respect prefers-reduced-motion
- Sun has a slow vertical drift keyframe (8s loop); grid scrolls toward viewer (12s loop)
- Both animations disabled under prefers-reduced-motion

## 6. Design Rules
- Every slide must include the sunset gradient background — never a flat dark color
- Perspective grid lines (cyan #7af8ff at 30% opacity) converge to a single vanishing point
- Audiowide for hooks only; Space Grotesk for everything else (legibility first)
- A glowing sun/circle (radial-gradient #ff6ec7 → transparent) is encouraged on hook slides
- Cream white text sits ABOVE the horizon — never below it where the grid lives
- CTAs render as pill buttons with magenta→cyan gradient fill and 4px border-radius
- Slide 1 includes a retro "PLAY ►" or "→" indicator in cyan, bottom-right
- Contrast ratio ≥ 4.5:1: cream #fff1f5 on #5b1d8b passes AA at body sizes
- No Japanese kanji, no glitch effects — this is 1986 sunset, not 2077 dystopia
