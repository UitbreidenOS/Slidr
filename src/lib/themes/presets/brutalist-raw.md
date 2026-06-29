# Design System: Brutalist Raw

> Category: Brutalist & Y2K
> Concrete gray, monospace type, sharp edges, no decoration — the raw architectural brutalism of Le Corbusier meets internet engineering culture.

Source inspiration: Le Corbusier, Bauhaus, raw exposed-concrete web design (Are.na, Christopher Truby, drudge report heritage)

## 2. Color Palette & Roles

### Primary
- **Black** (`#1c1917`): CSS var `--palette-bg-primary`. Used for: text, brand mark, dividers.

### Secondary
- **Concrete Gray** (`#78716c`): CSS var `--palette-bg-secondary`. Used for: secondary text, captions, metadata.

### Accent
- **Signal Red** (`#dc2626`): CSS var `--palette-accent`. Used for: ONE accent element per slide (CTA, underline, marker).

### Background
- **Light Concrete** (`#d6d3d1`): CSS var `--palette-bg-background`. Used for: default slide background.

### Surface
- **Dark Concrete** (`#a8a29e`): CSS var `--palette-bg-surface`. Used for: panels, code blocks, inset containers.

### Text
- **Charcoal** (`#1c1917`): CSS var `--palette-text`. Used for: all body text and headings.

### Gradient System
`linear-gradient(180deg, #d6d3d1 0%, #a8a29e 100%)` — used for atmospheric backgrounds.
No color gradients on text — brutalist discipline forbids them.

## 3. Typography Rules

### Font Family
- Heading: "Space Mono"
- Body: "JetBrains Mono"
- Fallbacks: monospace

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 72px | 700 | 1.1 |
| Heading | 40px | 700 | 1.2 |
| Subheading | 24px | 700 | 1.3 |
| Body | 20px | 400 | 1.6 |

## 4. Spacing & Layout
- Padding: 48-64px (denser, more architectural)
- gap scale: 8/16/24/32px
- Strong vertical alignment; minimal horizontal breathing room

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0,0,0.2,1)
- Duration: 200ms (mechanical, no bounce)
- No decorative animation — only functional entry fade; respect prefers-reduced-motion

## 6. Design Rules
- Monospace font throughout — Space Mono for headings, JetBrains Mono for body
- Background must be light concrete (#d6d3d1) or dark concrete (#a8a29e)
- No color gradients on text — brutalist discipline
- Sharp 0px border-radius on every container
- Use only black, white, gray, and ONE signal red (#dc2626) per slide
- Borders are 2-3px solid black or 4-6px for emphasis — no soft shadows
- Visible 1px grid baseline under text (optional) for architectural blueprint feel
- Headlines can be ALL-CAPS with tight letter-spacing (-0.02em)
- Numbers in tabular-figures (font-feature-settings: "tnum") for alignment
- Swipe indicator is plain text "→ NEXT" in Space Mono, no decoration
