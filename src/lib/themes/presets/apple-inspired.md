# Design System: Apple Inspired

> Category: Brand-Inspired
> Pure white with near-black ink and a single blue accent — premium, restrained, theatrical product-launch aesthetic. Massive typography, vast whitespace.

Source inspiration: contemporary consumer-tech launch visual language (typographic scale and restraint only — not a brand asset)

## 2. Color Palette & Roles

### Primary
- **Near-Black Ink** (`#1d1d1f`): CSS var `--palette-bg-primary`. Used for: primary headings, dominant hooks, signature type.

### Secondary & Accent
- **Signal Blue** (`#0071e3`): CSS var `--palette-accent`. Used for: primary CTAs, ONE key data point, link accents.
- **Light Mist** (`#86b5e0`): CSS var `--palette-bg-secondary`. Used for: gradient stops, hover states, soft highlights.

### Surface & Background
- **Pure White** (`#ffffff`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Off-White Surface** (`#f5f5f7`): CSS var `--palette-bg-surface`. Used for: inset cards, spec callouts, panels.

### Neutrals & Text
- **Body Black** (`#1d1d1f`): CSS var `--palette-text`. Used for: body text, primary copy.
- **Subtle Gray** (`#86868b`): Used for: captions, secondary metadata, fine print.

### Gradient System
`linear-gradient(180deg, #ffffff 0%, #f5f5f7 100%)` — barely-there floor gradient for cinematic depth.
`linear-gradient(180deg, #0071e3 0%, #4a9eff 100%)` — used for ONE signature CTA slide only.

## 3. Typography Rules

### Font Family
- Heading: "Inter Display"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 96px | 700 | 1.0 |
| Heading | 56px | 600 | 1.05 |
| Subheading | 32px | 500 | 1.2 |
| Body | 24px | 400 | 1.5 |

## 4. Spacing & Layout
- Padding: 80-120px (the most generous in this set — premium theatrical feel)
- gap scale: 8/16/32/48/80px
- One focal element per slide; central vertical axis alignment preferred

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 360ms (slower, more cinematic)
- Use @starting-style for fade-in; respect prefers-reduced-motion

## 6. Design Rules
- Background is ALWAYS pure white (#ffffff) — never cream, never gray
- Typography does the work — no icons, no illustrations, no decorative shapes
- One statement per slide, often the headline IS the slide
- Massive hook type (96px+) — biggest in the system; let it breathe
- Signal Blue reserved for ONE element per slide max (CTA or single data point)
- Body copy uses #1d1d1f, NEVER pure black (#000) — softer and more premium
- Subtle Gray (#86868b) for all secondary info; the eye should not notice it
- Product/spec callouts use #f5f5f7 surface with no border, just generous padding
- Negative space is a feature, not a bug — leave 40%+ of slide empty
