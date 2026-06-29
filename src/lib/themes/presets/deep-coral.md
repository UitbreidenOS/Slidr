# Design System: Deep Coral

> Category: General
> Dark navy evening with coral-red sunset gradient — the seaside dusk aesthetic, warm and grounded.

Source inspiration: Sunset photography + Wes Anderson palettes + coral reef color theory

## 2. Color Palette & Roles

### Primary
- **Coral Red** (`#ff6b5b`): CSS var `--palette-bg-primary`. Used for: hook text, primary CTAs, sun accents.

### Secondary & Accent
- **Warm Peach** (`#ffa07a`): CSS var `--palette-accent`. Used for: highlights, swipe indicator, soft emphasis.
- **Dusty Rose** (`#d9756b`): CSS var `--palette-bg-secondary`. Used for: secondary headings, gradient stops.

### Surface & Background
- **Deep Navy** (`#0d1830`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Dusk Indigo** (`#1a2545`): CSS var `--palette-bg-surface`. Used for: panels, stat cards.

### Neutrals & Text
- **Cream White** (`#fef7f0`): CSS var `--palette-text`. Used for: body text (warm off-white).
- **Faded Mauve** (`#8a7a8a`): Used for: captions, secondary metadata.

### Gradient System
`linear-gradient(180deg, #0d1830 0%, #1a2545 50%, #4a2540 100%)` — dusk-to-sunset vertical gradient.
`radial-gradient(circle at 50% 75%, #ff6b5b 0%, #ffa07a 30%, transparent 60%)` — sun at horizon.
`linear-gradient(135deg, #ff6b5b 0%, #ffa07a 100%)` — coral gradient for headings and CTAs.

## 3. Typography Rules

### Font Family
- Heading: "Fraunces"
- Body: "Space Grotesk"
- Fallbacks: serif / sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 80px | 700 | 1.05 |
| Heading | 42px | 600 | 1.15 |
| Subheading | 26px | 500 | 1.3 |
| Body | 24px | 400 | 1.55 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- One focal element per slide; optional sun-circle at horizon line
- Generous whitespace — coral needs breathing room to read as warm, not loud

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 360ms
- Use @starting-style for fade-in; respect prefers-reduced-motion
- Optional slow sun pulse: scale 1 → 1.04 → 1 over 6s, infinite (disabled under reduced motion)

## 6. Design Rules
- Coral red and peach are the canonical pair; dusty rose is the soft gradient stop
- Fraunces (variable serif) for headings — its range from thin to bold gives emotional range
- Optional sun-circle (radial gradient) at horizon line on hero/hook slides
- Hook slides feature the full dusk-to-sunset vertical gradient as background
- Secondary slides use solid #0d1830 or #1a2545 surface for variety
- CTAs are pill buttons with coral→peach gradient fill and 1px white border
- Slide 1 includes a "→ NEXT" or "[ SUNSET ]" swipe indicator in peach, bottom-right
- Body text always cream white (#fef7f0) — never blue-tinted, even on the navy background
- Contrast ratio ≥ 4.5:1: cream #fef7f0 on #1a2545 = 13.6:1 (WCAG AAA)
