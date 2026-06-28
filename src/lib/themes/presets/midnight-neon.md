# Design System: Midnight Neon

> Category: Claude AI
> Electric violet on near-black — the "Claude Code Instagram" aesthetic. Dark gradient backgrounds, oversized hooks, glow accents.

Source inspiration: 2026 "Claude Code Instagram" trend + dark dev carousels

## 2. Color Palette & Roles

### Primary
- **Violet** (`#a78bfa`): CSS var `--palette-bg-primary`. Used for: headings, primary numbers, slide-1 hook text.

### Secondary & Accent
- **Cyan** (`#22d3ee`): CSS var `--palette-accent`. Used for: CTAs, swipe indicators, data highlights, underlines.
- **Soft Violet** (`#818cf8`): CSS var `--palette-bg-secondary`. Used for: secondary headings, icons.

### Surface & Background
- **Midnight** (`#0a0a0f`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Slate Surface** (`#16161f`): CSS var `--palette-bg-surface`. Used for: cards, code blocks, inset panels.

### Neutrals & Text
- **Off-white** (`#f4f4f5`): CSS var `--palette-text`. Used for: body text, labels.
- **Muted Gray** (`#71717a`): Used for: captions, secondary metadata.

### Gradient System
`linear-gradient(135deg, #0a0a0f 0%, #16161f 40%, #1a1033 100%)` — used for slide backgrounds.
`linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%)` — used for hook text gradient fills.

## 3. Typography Rules

### Font Family
- Heading: "Space Grotesk"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 80px | 800 | 1.1 |
| Heading | 44px | 700 | 1.2 |
| Subheading | 28px | 600 | 1.3 |
| Body | 24px | 400 | 1.5 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- One focal element per slide; content centered in 80% safe zone

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 300ms
- Use @starting-style for fade-in; respect prefers-reduced-motion

## 6. Design Rules
- Background must be dark (#0a0a0f or gradient) — never pure white
- Hook text uses gradient fill (clip-path or background-clip:text) when possible
- Accent cyan for ONE element per slide max (CTA, number, or underline)
- Glow effect on key elements: box-shadow with accent color at low opacity
- Slide 1 has a "swipe →" indicator in cyan, bottom-right
- Monospace accents (JetBrains Mono) for numbers/stats are encouraged
- Vary background between slides: solid #0a0a0f, gradient, or #16161f surface
