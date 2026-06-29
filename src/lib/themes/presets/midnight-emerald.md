# Design System: Midnight Emerald

> Category: General
> Forest green velvet + polished gold + Art Deco geometry — the Gatsby ballroom at midnight.

Source inspiration: Art Deco posters + The Great Gatsby (2013) + casino carpet patterns

## 2. Color Palette & Roles

### Primary
- **Emerald Green** (`#0a6e4a`): CSS var `--palette-bg-primary`. Used for: headings, decorative frames, primary emphasis.

### Secondary & Accent
- **Polished Gold** (`#d4af37`): CSS var `--palette-accent`. Used for: CTAs, rules, decorative borders, swipe indicator.
- **Pine** (`#1a4d3a`): CSS var `--palette-bg-secondary`. Used for: secondary headings, gradient midstops.

### Surface & Background
- **Velvet Black** (`#08110d`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Forest Floor** (`#0f1f17`): CSS var `--palette-bg-surface`. Used for: panels, cards, inset frames.

### Neutrals & Text
- **Champagne** (`#f0e9d2`): CSS var `--palette-text`. Used for: body text (warm off-white).
- **Sage Gray** (`#6b8074`): Used for: captions, secondary labels.

### Gradient System
`linear-gradient(135deg, #08110d 0%, #0f1f17 50%, #1a4d3a 100%)` — emerald depth.
`linear-gradient(135deg, #d4af37 0%, #f0e9d2 100%)` — gold gradient for decorative elements.
`radial-gradient(circle at 50% 50%, #0a6e4a 0%, #08110d 70%)` — center spotlight for hero slides.

## 3. Typography Rules

### Font Family
- Heading: "Cinzel"
- Body: "Inter"
- Fallbacks: serif / sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 76px | 700 | 1.1 |
| Heading | 40px | 600 | 1.2 |
| Subheading | 26px | 500 | 1.3 |
| Body | 24px | 400 | 1.55 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- One focal element per slide; symmetric centered layout preferred
- Art Deco geometric frames: 1px gold borders with stepped corners (clip-path polygon)

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 360ms
- Use @starting-style for fade-in; respect prefers-reduced-motion
- Optional gold shimmer on heading: linear-gradient background-position animation, 6s loop

## 6. Design Rules
- Cinzel for ALL headings (its engraved-Roman feel is mandatory); Inter for body
- Emerald and gold are the canonical pair — no other accent colors allowed
- Art Deco geometric frames encouraged: stepped corners via clip-path, 1px gold borders
- Symmetrical centered composition is preferred over asymmetric layouts
- Decorative gold rules (1px, 60-80% width) separate sections, centered or full-bleed
- Optional radial spotlight gradient at slide center for hero/hook slides
- CTAs are pill buttons with gold gradient fill and 1px emerald border
- Slide 1 includes a "[ ENTER ]" or "→" swipe indicator in gold, bottom-right
- All-caps Cinzel for hooks (the engraved monumental feel demands it); Inter mixed case for body
- Contrast ratio ≥ 4.5:1: champagne #f0e9d2 on #08110d = 14.8:1 (WCAG AAA)
