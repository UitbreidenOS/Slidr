# Design System: Nike Inspired

> Category: Brand-Inspired
> Pure black with kinetic italic display type — athletic, fearless, "just do it" energy. Massive type, brutalist whitespace, one word hooks.

Source inspiration: contemporary athletic brand visual language (italic display discipline and monochrome boldness only — not a brand asset)

## 2. Color Palette & Roles

### Primary
- **Pure Black** (`#111111`): CSS var `--palette-bg-primary`. Used for: dominant type, reversed hooks on light, primary mark.

### Secondary & Accent
- **Fire Red** (`#fa5400`): CSS var `--palette-accent`. Used for: ONE kinetic accent per slide — a single underscore, a stat, or a CTA.
- **Volt Yellow** (`#d6ff3f`): CSS var `--palette-bg-secondary`. Used for: rare speed/highlight bursts (use sparingly, max once per carousel).

### Surface & Background
- **Pure White** (`#ffffff`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Concrete Gray** (`#f5f5f5`): CSS var `--palette-bg-surface`. Used for: inset panels, image placeholders, content blocks.

### Neutrals & Text
- **Jet Black** (`#111111`): CSS var `--palette-text`. Used for: body text, primary copy on light.
- **Cool Gray** (`#7a7a7a`): Used for: captions, secondary metadata, microcopy.

### Gradient System
`linear-gradient(135deg, #111111 0%, #2a2a2a 100%)` — used for reverse slides and hero backgrounds.
`linear-gradient(90deg, #fa5400 0%, #d6ff3f 100%)` — used sparingly for kinetic energy moment.

## 3. Typography Rules

### Font Family
- Heading: "Bebas Neue"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 120px | 900 | 0.95 |
| Heading | 64px | 800 | 1.0 |
| Subheading | 32px | 600 | 1.2 |
| Body | 22px | 400 | 1.5 |

## 4. Spacing & Layout
- Padding: 80-96px
- gap scale: 16/24/48/64/96px
- Asymmetric, off-axis layouts preferred — diagonal energy, not centered
- Hook slides: single word, oversized, off-center

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 280ms
- Use @starting-style for fade-in; respect prefers-reduced-motion

## 6. Design Rules
- Hook text MUST be italic OR ultra-condensed — vertical, kinetic, forward-leaning
- Hook slide = ONE word (or 2 max), 100px+ — "RUN", "MOVE", "WIN", "BUILD"
- Background alternates: half white, half black across the carousel for rhythm
- Fire Red reserved for ONE element per slide max — restraint makes it powerful
- Body text always Inter at 22px; never condensed body type (legibility)
- Slanted divider lines (15-30deg) welcome for kinetic feel
- Numbers/stats oversized (80px+) in italic Bebas — they're verbs, not data
- No drop shadows, no gradients on body — flat, direct, immediate
- Volt Yellow is the "explosion" — use it once, maybe twice, across an entire carousel
