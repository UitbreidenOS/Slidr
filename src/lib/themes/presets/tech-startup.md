# Design System: Tech Startup

> Category: Niche & Industry
> Deep navy with electric blue and a lime spark — modern B2B SaaS, data-driven, product-led growth aesthetic. Monospace stats, sharp charts, dense info.

Source inspiration: contemporary B2B SaaS dashboard and PLG content aesthetic

## 2. Color Palette & Roles

### Primary
- **Electric Blue** (`#2978ff`): CSS var `--palette-bg-primary`. Used for: primary headings, CTAs, chart bars, key metrics.

### Secondary & Accent
- **Lime Spark** (`#b6f500`): CSS var `--palette-accent`. Used for: ONE highlight per slide — a +growth stat, an MRR jump, a conversion win.
- **Soft Cyan** (`#5dd5ff`): CSS var `--palette-bg-secondary`. Used for: gradient stops, secondary chart lines.

### Surface & Background
- **Deep Navy** (`#0a1f44`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Navy Surface** (`#162a52`): CSS var `--palette-bg-surface`. Used for: inset cards, dashboard tiles, code blocks.

### Neutrals & Text
- **Bright White** (`#ffffff`): CSS var `--palette-text`. Used for: body text, primary copy.
- **Cool Gray** (`#a8b5cf`): Used for: captions, secondary metadata, helper text.

### Gradient System
`linear-gradient(135deg, #2978ff 0%, #5dd5ff 100%)` — used for hero hooks and primary CTA fills.
`linear-gradient(180deg, #0a1f44 0%, #162a52 100%)` — used for slide depth backgrounds.

## 3. Typography Rules

### Font Family
- Heading: "Space Grotesk"
- Body: "Inter"
- Fallbacks: monospace / sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 80px | 700 | 1.05 |
| Heading | 44px | 600 | 1.15 |
| Subheading | 26px | 500 | 1.3 |
| Body | 22px | 400 | 1.55 |
| Stat (mono) | 64px | 600 | 1.0 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- Asymmetric data layouts OK — left-aligned data with right-side commentary
- One focal metric per slide; supporting chart/bar as visual support

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 260ms
- Use @starting-style for fade-in; respect prefers-reduced-motion

## 6. Design Rules
- Background is always deep navy (#0a1f44) — never pure black, never light
- Electric Blue drives hierarchy — CTAs, chart bars, primary data
- Lime Spark reserved for ONE breakthrough stat per slide — restraint makes it pop
- Monospace (JetBrains Mono) for ALL numeric stats, growth percentages, version numbers
- MRR, ARR, MAU, NPS — present metrics like a dashboard, not prose
- Before/after comparisons as bar pairs: gray for "before", Electric Blue for "after"
- Tone: data-led, specific, peer-to-peer — "we grew 3.2x in 90 days", not "growth"
- Cards use #162a52 surface with 1px border in #1f3563 — sharp, clean
- Use ↑ ↓ → arrows and trend markers freely for data communication
- Avoid decorative imagery — the chart IS the slide
