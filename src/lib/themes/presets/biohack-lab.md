# Design System: Biohack Lab

> Category: General
> Dark teal chamber lit by fluorescent green readouts — the quantified-self dashboard aesthetic.

Source inspiration: Bryan Johnson Blueprint UI + medical telemetry screens + lab notebook sketches

## 2. Color Palette & Roles

### Primary
- **Fluorescent Green** (`#39ff7a`): CSS var `--palette-bg-primary`. Used for: vital signs, primary stats, "in range" indicators.

### Secondary & Accent
- **Bio Teal** (`#00d9c0`): CSS var `--palette-accent`. Used for: CTAs, swipe indicator, chart strokes.
- **Signal Cyan** (`#5eead4`): CSS var `--palette-bg-secondary`. Used for: secondary headings, badges, icon strokes.

### Surface & Background
- **Lab Black** (`#03110f`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Chamber Dark** (`#0a1f1c`): CSS var `--palette-bg-surface`. Used for: panels, stat cards, data windows.

### Neutrals & Text
- **Clinical White** (`#ecfeff`): CSS var `--palette-text`. Used for: body text, labels.
- **Muted Seafoam** (`#6b8a85`): Used for: captions, axis labels, secondary metadata.

### Gradient System
`linear-gradient(135deg, #03110f 0%, #0a1f1c 100%)` — lab chamber depth.
`linear-gradient(90deg, #39ff7a 0%, #00d9c0 100%)` — bio gradient for stats and CTAs.
`radial-gradient(circle at 80% 20%, #39ff7a 0%, transparent 30%)` — ambient lab glow.

## 3. Typography Rules

### Font Family
- Heading: "IBM Plex Mono"
- Body: "IBM Plex Sans"
- Fallbacks: monospace / sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 64px | 700 | 1.1 |
| Heading | 38px | 600 | 1.2 |
| Subheading | 24px | 500 | 1.3 |
| Body | 22px | 400 | 1.55 |
| Data | 56px | 700 | 1.0 |

## 4. Spacing & Layout
- Padding: 56-72px
- gap scale: 8/16/24/32/48px
- One focal element per slide; data renders in monospace columns
- Optional thin 1px grid in signal cyan at 15% opacity (technical feel)

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 280ms
- Use @starting-style for fade-in; respect prefers-reduced-motion
- Optional vital-sign pulse on key stat (scale 1 → 1.03 → 1, 2s, infinite)
- Optional chart line draw via stroke-dasharray keyframe

## 6. Design Rules
- Fluorescent green is reserved for "in range" / positive / optimal values only
- IBM Plex Mono for ALL headings, stats, and data; IBM Plex Sans for body and labels
- Numbers render as `##.#` with unit suffix in signal cyan (e.g. "72.4 bpm")
- Optional thin cyan grid lines (15% opacity) evoke a clinical dashboard
- "Out of range" values render in red #ff5c5c; never lime or teal
- CTAs are pill buttons with teal→green gradient, 2px white border at 30% opacity
- Slide 1 includes a "▸ NEXT READING" or "[● REC]" swipe indicator in teal, bottom-right
- Bars and charts use 4-8px stroke width; never thinner (clinic-monitor visibility)
- Contrast ratio ≥ 4.5:1: clinical white #ecfeff on #03110f = 17.9:1 (WCAG AAA)
