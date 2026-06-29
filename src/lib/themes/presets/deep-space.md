# Design System: Deep Space

> Category: General
> Near-black void scattered with electric-blue starfield — the cosmic-quiet carousel aesthetic.

Source inspiration: Voyager Golden Record + Apollo mission posters + Interstellar (2014) title cards

## 2. Color Palette & Roles

### Primary
- **Electric Blue** (`#4d9fff`): CSS var `--palette-bg-primary`. Used for: headings, primary hooks, planet/sphere accents.

### Secondary & Accent
- **Ice Blue** (`#a8d0ff`): CSS var `--palette-accent`. Used for: CTAs, swipe indicator, star highlights, subtle borders.
- **Plasma Violet** (`#7b5cff`): CSS var `--palette-bg-secondary`. Used for: nebula gradients, secondary headings.

### Surface & Background
- **Void Black** (`#02030a`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Cosmic Indigo** (`#0d1230`): CSS var `--palette-bg-surface`. Used for: panels, data cards.

### Neutrals & Text
- **Starlight White** (`#eef2ff`): CSS var `--palette-text`. Used for: body text (slightly cool to match the cosmos).
- **Nebula Gray** (`#6b7390`): Used for: captions, scientific labels, secondary metadata.

### Gradient System
`linear-gradient(180deg, #02030a 0%, #0d1230 100%)` — slide background depth (top→bottom).
`radial-gradient(circle at 70% 20%, #7b5cff 0%, transparent 45%)` — violet nebula glow.
`radial-gradient(circle at 20% 80%, #4d9fff 0%, transparent 40%)` — blue nebula glow.
`linear-gradient(135deg, #4d9fff 0%, #a8d0ff 100%)` — hook text gradient fill.

## 3. Typography Rules

### Font Family
- Heading: "Space Grotesk"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 76px | 700 | 1.1 |
| Heading | 42px | 600 | 1.2 |
| Subheading | 26px | 500 | 1.3 |
| Body | 24px | 400 | 1.55 |
| Stat | 56px | 700 | 1.0 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- One focal element per slide; starfield as background layer
- Stars: tiny 1-2px dots in ice blue at 30-80% opacity, scattered pseudo-randomly

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 350ms
- Use @starting-style for fade-in; respect prefers-reduced-motion
- Optional slow star drift (translateY 8px over 20s, infinite alternate) — disabled under reduced motion
- Hook text glow: text-shadow with electric blue at 25% opacity, 20px blur

## 6. Design Rules
- Background must always include the starfield dots OR a nebula glow — never flat black
- Space Grotesk for headings; Inter for body — keep type calm, this is the cosmos, not a rave
- Stars render at varied sizes (1px, 1.5px, 2px) and opacities (30%, 60%, 100%) for parallax depth
- Optional single sphere/planet illustration (radial-gradient circle) encouraged as a focal point
- CTAs are pill buttons with electric-blue→ice-blue gradient, 24px border-radius
- Numbers/stats in electric blue at 56px+ with optional letter-spacing 0.05em
- Slide 1 includes a "TRANSMIT →" or "[∞]" swipe indicator in ice blue, bottom-right
- Body text always starlight white — never blue-tinted, or contrast fails
- Contrast ratio ≥ 4.5:1: starlight #eef2ff on #02030a = 18.2:1 (WCAG AAA)
