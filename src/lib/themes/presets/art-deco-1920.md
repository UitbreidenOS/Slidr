# Design System: Art Deco 1920s

> Category: Brutalist & Y2K
> Gold + black + cream with geometric sunbursts, chevrons, and stepped ornament — the Gatsby-era, Chrysler Building, and Great Gatsby aesthetic.

Source inspiration: Chrysler Building, Chrysler radiator caps, 1925 Paris Exposition, Great Gatsby era art, Cassandre posters

## 2. Color Palette & Roles

### Primary
- **Antique Gold** (`#d4af37`): CSS var `--palette-bg-primary`. Used for: decorative borders, headline strokes, brand marks.

### Secondary
- **Champagne Gold** (`#b8860b`): CSS var `--palette-bg-secondary`. Used for: secondary borders, accent motifs.

### Accent
- **Cream Pearl** (`#f5e6c0`): CSS var `--palette-accent`. Used for: highlight fills, swipe arrows, decorative panels.

### Background
- **Midnight Black** (`#0f0f0f`): CSS var `--palette-bg-background`. Used for: default slide background.

### Surface
- **Obsidian** (`#1f1f1f`): CSS var `--palette-bg-surface`. Used for: cards, panels, inset containers.

### Text
- **Champagne Cream** (`#f5e6c0`): CSS var `--palette-text`. Used for: body text, secondary labels.

### Gradient System
`linear-gradient(135deg, #d4af37 0%, #f5e6c0 50%, #b8860b 100%)` — used for gold leaf text fills and decorative borders.
`radial-gradient(circle, #f5e6c0 0%, #d4af37 50%, #b8860b 100%)` — used for Art Deco sunburst motifs.

## 3. Typography Rules

### Font Family
- Heading: "DM Serif Display"
- Body: "Cormorant Garamond"
- Fallbacks: serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 80px | 400 | 1.05 |
| Heading | 44px | 400 | 1.15 |
| Subheading | 26px | 600 | 1.3 |
| Body | 22px | 400 | 1.6 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- Strong vertical symmetry; centered axes; ornamental frames around content

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 400ms (deliberate, luxurious pacing)
- Very subtle gold-foil shimmer animation on hero slides (opacity 0.8 to 1.0, 6s loop); respect prefers-reduced-motion

## 6. Design Rules
- Headlines use DM Serif Display — high-contrast modern serif with Gatsby-era geometry
- Background must be midnight black (#0f0f0f) — never white, never gray
- Decorative motifs encouraged: sunbursts, chevrons, stepped pyramids, fan motifs, lotus shapes
- Gold (#d4af37) used for borders and ornament — body text uses cream (#f5e6c0)
- Body text is champagne cream (#f5e6c0), 15:1+ contrast on black background
- Decorative double-line gold borders (3px gold + 1px gold offset 6px) frame hero slides
- Numbers can use the gold-gradient fill and oversized (88px+) serif treatment
- Border-radius 0 — strictly geometric, no rounded corners
- Symmetry: content mirrored on vertical axis where possible
- Cormorant Garamond italic encouraged for pull-quotes and captions
