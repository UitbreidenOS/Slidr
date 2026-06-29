# Design System: Electric Lime

> Category: General
> Black canvas, lime #ccff00 punches, magenta flares — the high-voltage sports broadcast aesthetic.

Source inspiration: Nike "Volt" colorway + F1 telemetry graphics + esports broadcast overlays

## 2. Color Palette & Roles

### Primary
- **Electric Lime** (`#ccff00`): CSS var `--palette-bg-primary`. Used for: hook text, primary stats, brand emphasis.

### Secondary & Accent
- **Magenta Flare** (`#ff0080`): CSS var `--palette-accent`. Used for: CTAs, swipe indicator, warning badges.
- **Acid Green** (`#88dd00`): CSS var `--palette-bg-secondary`. Used for: secondary headings, progress bars.

### Surface & Background
- **Track Black** (`#0a0a0a`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Carbon Gray** (`#1a1a1a`): CSS var `--palette-bg-surface`. Used for: stat panels, data cards, inset frames.

### Neutrals & Text
- **Pure White** (`#ffffff`): CSS var `--palette-text`. Used for: body text.
- **Ash** (`#666666`): Used for: captions, secondary metadata, axis labels.

### Gradient System
`linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)` — subtle track depth.
`linear-gradient(90deg, #ccff00 0%, #88dd00 100%)` — speed gradient for stats.
`linear-gradient(135deg, #ccff00 0%, #ff0080 100%)` — rare highlight gradient (use sparingly).

## 3. Typography Rules

### Font Family
- Heading: "Archivo Black"
- Body: "Archivo"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 88px | 900 | 1.0 |
| Heading | 44px | 800 | 1.1 |
| Subheading | 28px | 700 | 1.3 |
| Body | 24px | 500 | 1.5 |
| Stat | 96px | 900 | 1.0 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- One focal element per slide; angular diagonal cuts encouraged (clip-path polygons)
- Safe zone: 80% centered; corners may host angled accent strips

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.34,1.56,0.64,1)
- Duration: 260ms
- Use @starting-style for fade-in; respect prefers-reduced-motion
- Optional lime "speedline" sweep on entry (translateX -100% → 100%, 600ms, ease-out)
- Optional stat counter animation (overshoot easing on numbers)

## 6. Design Rules
- Lime is the hero color — it must appear on every slide (hook, stat, accent)
- Archivo Black (heavy display weight) for ALL hooks and stats — its condensed punch is the point
- Magenta is reserved for ONE element per slide max (CTA, warning, or swipe indicator)
- Angular diagonal cuts (clip-path) encouraged for sport/aggression — soft corners are forbidden
- Stats render at 96px in lime with the lime→acid-green gradient — oversized is mandatory
- Body copy in Archivo 500 (medium weight) for better legibility at 24px
- CTAs are sharp rectangles (0 border-radius) with magenta fill and 2px lime border
- Slide 1 includes a "GO →" or "▶ START" swipe indicator in magenta, bottom-right
- Contrast ratio ≥ 4.5:1: pure white #ffffff on #0a0a0a = 19.5:1 (WCAG AAA)
