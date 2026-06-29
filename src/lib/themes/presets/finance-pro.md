# Design System: Finance Pro

> Category: Niche & Industry
> Forest green with cream and gold — trustworthy, premium, generational-wealth aesthetic. Serif authority, conservative spacing, polished.

Source inspiration: contemporary personal-finance and wealth-management content aesthetic

## 2. Color Palette & Roles

### Primary
- **Forest Green** (`#1a4d3a`): CSS var `--palette-bg-primary`. Used for: primary headings, dominant trust marks, key CTAs.

### Secondary & Accent
- **Antique Gold** (`#c9a96e`): CSS var `--palette-accent`. Used for: signature premium highlights, "verified", "$" marks, swipes.
- **Sage Mist** (`#7a8f6e`): CSS var `--palette-bg-secondary`. Used for: gradient stops, secondary trust signals.

### Surface & Background
- **Cream Parchment** (`#f8f4e8`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Soft Linen** (`#f1ebd9`): CSS var `--palette-bg-surface`. Used for: inset cards, account summary panels, comparison blocks.

### Neutrals & Text
- **Deep Ink** (`#2d2d2d`): CSS var `--palette-text`. Used for: body text, primary copy.
- **Stone Gray** (`#7d7d72`): Used for: captions, secondary metadata, fine print disclaimers.

### Gradient System
`linear-gradient(135deg, #1a4d3a 0%, #0f2e22 100%)` — used for reverse hero backgrounds.
`linear-gradient(90deg, #c9a96e 0%, #e6cf9a 100%)` — used for signature gold underlines and accents.

## 3. Typography Rules

### Font Family
- Heading: "DM Serif Display"
- Body: "Inter"
- Fallbacks: serif / sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 76px | 700 | 1.05 |
| Heading | 42px | 600 | 1.2 |
| Subheading | 26px | 500 | 1.3 |
| Body | 22px | 400 | 1.55 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- Centered, balanced composition; symmetrical trust
- One focal number or comparison per slide

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 280ms
- Use @starting-style for fade-in; respect prefers-reduced-motion

## 6. Design Rules
- Background is always cream parchment (#f8f4e8 or #f1ebd9) — never stark white, never dark
- Forest Green is the trust mark — use for ONE dominant element per slide
- Currency values oversized (56px+) in Forest Green with Antique Gold $ mark
- Comparison framing: "before / after", "debt / equity", "now / later" — paired columns
- Serif headings (DM Serif) for authority; sans body for clarity and readability
- Body text in Deep Ink (#2d2d2d), never pure black — softer, more editorial
- Tone: calm, authoritative, second-person — "you", "your portfolio", "your future"
- Avoid hype language; favor measured, specific claims ("8.4% annualized")
- Subtle 1px hairline dividers in Stone Gray; no heavy borders, no drop shadows
- Antique Gold reserved for premium accents — never as background fill
