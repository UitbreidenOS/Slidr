# Design System: 90s Magazine

> Category: Brutalist & Y2K
> Bold condensed sans, electric primary colors, asymmetric grid — the Ray Gun / Emigre / David Carson era of magazine design.

Source inspiration: Ray Gun magazine, Emigre type specimens, David Carson layouts, Flaunt magazine, early Wired

## 2. Color Palette & Roles

### Primary
- **Safety Orange** (`#ff4500`): CSS var `--palette-bg-primary`. Used for: brand mark, oversized pull-quotes, CTA fills.

### Secondary
- **Dodger Blue** (`#1e90ff`): CSS var `--palette-bg-secondary`. Used for: secondary headings, accent blocks.

### Accent
- **Electric Yellow** (`#ffea00`): CSS var `--palette-accent`. Used for: highlight blocks, swipe indicators, sticker-like callouts.

### Background
- **Newsprint Cream** (`#fffaf0`): CSS var `--palette-bg-background`. Used for: default slide background.

### Surface
- **Bone White** (`#fff5e1`): CSS var `--palette-bg-surface`. Used for: cards, columns, inset panels.

### Text
- **Ink Black** (`#0a0a0a`): CSS var `--palette-text`. Used for: body text, headlines, masthead text.

### Gradient System
`linear-gradient(135deg, #ff4500 0%, #ffea00 100%)` — used for hero hooks and CTA gradients.
`linear-gradient(135deg, #1e90ff 0%, #ff4500 100%)` — used for secondary hook gradients.

## 3. Typography Rules

### Font Family
- Heading: "Bebas Neue"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 96px | 400 | 0.95 |
| Heading | 56px | 400 | 1.0 |
| Subheading | 28px | 700 | 1.2 |
| Body | 22px | 400 | 1.55 |

## 4. Spacing & Layout
- Padding: 48-64px (denser than other themes, magazine-style)
- gap scale: 4/8/16/24/32/48px
- Asymmetric grid — content breaks the column intentionally

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 240ms
- Entry uses @starting-style with slight translate-x offset; respect prefers-reduced-motion

## 6. Design Rules
- Bebas Neue at 400 weight, all-caps for hooks — magazine-masthead energy
- Background must be newsprint cream (#fffaf0) — never pure white
- Asymmetric layouts encouraged: text bleeding off the edge, partial overlaps
- Safety orange (#ff4500) used for ONE oversized element per slide max
- Italicize or rotate subheadings 2-4deg for editorial feel
- Use thin (1-2px) black rules/dividers between sections — newspaper masthead style
- Numbers can be oversized (88px+) in Bebas Neue with tight letter spacing (-0.02em)
- Dodger blue (#1e90ff) used for secondary elements, not primary
- Page numbers, drop caps, and pull-quotes encouraged as design motifs
- Body text justified or ragged-right, NEVER centered (except in rare pull-quotes)
