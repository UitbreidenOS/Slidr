# Design System: Beauty Campaign

> Category: Beauty
> Editorial beauty — high-contrast monochrome with violet accents. Magazine-grade, luxe, fashion-forward.

Source inspiration: "Generate AI Beauty Campaigns" / "Lighting Camera Beauty Setups"

## 2. Color Palette & Roles

### Primary
- **Silver White** (`#e5e5e5`): CSS var `--palette-bg-primary`. Used for: headings on dark, primary text on light.

### Secondary & Accent
- **Violet** (`#c084fc`): CSS var `--palette-accent`. Used for: CTAs, accent lines, beauty product highlights.
- **Lavender** (`#a78bfa`): CSS var `--palette-bg-secondary`. Used for: gradient stops, secondary accents.

### Surface & Background
- **Obsidian** (`#0c0c0c`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Charcoal Surface** (`#171717`): CSS var `--palette-bg-surface`. Used for: product cards, beauty frames.

### Neutrals & Text
- **Pure White** (`#fafafa`): CSS var `--palette-text`. Used for: body text on dark.
- **Muted Gray** (`#737373`): Used for: captions, secondary labels.

### Gradient System
`linear-gradient(135deg, #0c0c0c 0%, #171717 50%, #1a0a2e 100%)` — editorial depth with violet hint.
`linear-gradient(135deg, #c084fc 0%, #a78bfa 100%)` — violet accent for beauty highlights.

## 3. Typography Rules

### Font Family
- Heading: "Bodoni Moda"
- Body: "Inter"
- Fallbacks: Georgia, serif / sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 80px | 700 | 1.05 |
| Heading | 48px | 600 | 1.1 |
| Subheading | 28px | 500 | 1.3 |
| Body | 24px | 400 | 1.6 |
| Quote | 36px | 400 italic | 1.3 |

## 4. Spacing & Layout
- Padding: 72-88px
- gap scale: 8/16/24/32/48px

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 450ms

## 6. Design Rules
- High-contrast monochrome — pure black/white with a single violet accent
- Bodoni Moda (high-contrast didone serif) for editorial fashion-magazine feel
- Silver white text on obsidian — dramatic, luxe, beauty-campaign aesthetic
- Violet for ONE accent per slide (CTA, thin line, or product highlight)
- Generous whitespace (72-88px) — fashion editorial breathes
- Product/beauty shots use charcoal surface frames with thin violet borders
- Quotes use italic Bodoni at 36px — magazine pull-quote style
- Minimal text — let the typography and contrast do the work
