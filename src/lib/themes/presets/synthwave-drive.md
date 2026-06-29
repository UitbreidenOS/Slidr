# Design System: Synthwave Drive

> Category: General
> Magenta horizon, neon grid floor, an open cockpit at dusk — the midnight highway aesthetic.

Source inspiration: Outrun (1986) arcade game + Drive (2011) movie + retrowave posters

## 2. Color Palette & Roles

### Primary
- **Magenta** (`#ff2975`): CSS var `--palette-bg-primary`. Used for: sun/horizon, primary hooks, neon outlines.

### Secondary & Accent
- **Neon Pink** (`#ff77ff`): CSS var `--palette-accent`. Used for: highlights, grid intersections, badge fills.
- **Sunset Orange** (`#ff8c42`): CSS var `--palette-bg-secondary`. Used for: sun core, gradient midstop, warm accents.

### Surface & Background
- **Night Sky** (`#0d0221`): CSS var `--palette-bg-background`. Used for: sky area top half of slide.
- **Dark Indigo** (`#190b34`): CSS var `--palette-bg-surface`. Used for: ground / dashboard panels.

### Neutrals & Text
- **Laser White** (`#ffffff`): CSS var `--palette-text`. Used for: hook text on dark sky, body text.
- **Chrome Silver** (`#b8b3d1`): Used for: captions, metallic chrome text effect, secondary labels.

### Gradient System
`linear-gradient(180deg, #0d0221 0%, #240046 40%, #ff2975 75%, #ff77ff 100%)` — sky-to-horizon.
`linear-gradient(180deg, #190b34 0%, #0d0221 100%)` — ground fade.
`linear-gradient(90deg, #ff2975 0%, #ff77ff 50%, #00e0ff 100%)` — neon gradient for headings.

## 3. Typography Rules

### Font Family
- Heading: "Major Mono Display"
- Body: "Inter"
- Fallbacks: monospace / sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 82px | 400 | 1.05 |
| Heading | 42px | 500 | 1.15 |
| Subheading | 26px | 500 | 1.3 |
| Body | 23px | 400 | 1.55 |
| Mono Stat | 48px | 400 | 1.0 |

## 4. Spacing & Layout
- Padding: 60-76px
- gap scale: 8/16/24/32/48px
- Horizon line at 55% from top; one focal element per slide
- Ground perspective grid drawn in cyan #00e0ff, 1px, vanishing point on horizon

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 350ms
- Use @starting-style for fade-in; respect prefers-reduced-motion
- Ground grid scrolls toward viewer (10s linear loop); sun drifts slowly up/down (14s)
- Both animations disabled under prefers-reduced-motion

## 6. Design Rules
- Every slide shows the magenta→pink horizon line + cyan perspective grid below it
- Major Mono Display (lowercase, monospace) for hooks and stats — its retro-machine feel is required
- Sun is a circle with radial-gradient: #ff8c42 core → #ff2975 mid → transparent edge
- Inter for body and labels; never use Major Mono for body copy (legibility would suffer)
- Chrome silver text (#b8b3d1) with a 1px magenta drop-shadow evokes 80s car badges
- CTAs are pill buttons with the magenta→pink→cyan gradient, 2px solid white border
- Slide 1 includes a "► PLAY" indicator in neon pink, bottom-right
- No matrix code, no terminal prompts — this is the open road, not the hacker basement
- Contrast ratio ≥ 4.5:1: laser white on #0d0221 = 19.8:1 (WCAG AAA)
