# Design System: Midnight Violet

> Category: General
> Deep indigo field with electric violet glow — the late-night "build in the dark" carousel aesthetic.

Source inspiration: 2026 dark-violet dev carousels + midnight coding aesthetics

## 2. Color Palette & Roles

### Primary
- **Electric Violet** (`#9b5cff`): CSS var `--palette-bg-primary`. Used for: headings, primary hooks, slide-1 title text.

### Secondary & Accent
- **Lilac** (`#c4a3ff`): CSS var `--palette-accent`. Used for: CTAs, swipe indicators, underlines, key numbers.
- **Indigo** (`#5b3bd6`): CSS var `--palette-bg-secondary`. Used for: secondary headings, panel borders, icon strokes.

### Surface & Background
- **Deep Indigo** (`#0b0a1f`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Twilight** (`#161433`): CSS var `--palette-bg-surface`. Used for: cards, code blocks, inset panels.

### Neutrals & Text
- **Lavender White** (`#f1ecff`): CSS var `--palette-text`. Used for: body text, labels, headings when no gradient.
- **Muted Plum** (`#7d7596`): Used for: captions, secondary metadata, axis labels.

### Gradient System
`linear-gradient(140deg, #0b0a1f 0%, #161433 45%, #221a4d 100%)` — used for slide backgrounds.
`linear-gradient(135deg, #9b5cff 0%, #c4a3ff 100%)` — used for hook text gradient fills.
`linear-gradient(90deg, #9b5cff 0%, #5b3bd6 100%)` — used for divider lines and progress bars.

## 3. Typography Rules

### Font Family
- Heading: "Bricolage Grotesque"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 84px | 800 | 1.05 |
| Heading | 46px | 700 | 1.15 |
| Subheading | 28px | 600 | 1.3 |
| Body | 24px | 400 | 1.55 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- One focal element per slide; content centered in 80% safe zone
- Vertical rhythm: 48px between heading and first body line

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 320ms
- Use @starting-style for fade-in; respect prefers-reduced-motion
- Optional violet glow pulse on the hook slide: box-shadow keyframe at 8% opacity

## 6. Design Rules
- Background must always be deep indigo (#0b0a1f or gradient) — never light or pure white
- Hook text uses gradient fill (#9b5cff → #c4a3ff) via background-clip:text
- Lilac accent appears on ONE element per slide max (CTA, key stat, or underline)
- Bricolage Grotesque is mandatory for headings; Inter is mandatory for body
- Glow effect on hook text: text-shadow with #9b5cff at 30% opacity, 24px blur
- Slide 1 includes a violet "swipe →" indicator bottom-right
- Alternate slide backgrounds: solid #0b0a1f, gradient, or #161433 surface — never two solids back-to-back
- Contrast ratio ≥ 4.5:1 for every text element (off-white #f1ecff on indigo passes WCAG AAA)
