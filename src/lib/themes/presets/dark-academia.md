# Design System: Dark Academia

> Category: General
> Deep brown library walls, gold candlelight, serif type — the Oxford-at-midnight study aesthetic.

Source inspiration: Dark academia Pinterest boards + The Secret History + Oxford library photos

## 2. Color Palette & Roles

### Primary
- **Antique Gold** (`#d4af37`): CSS var `--palette-bg-primary`. Used for: headings, primary titles, decorative rules.

### Secondary & Accent
- **Warm Cream** (`#f0e6d2`): CSS var `--palette-accent`. Used for: CTAs, body emphasis, swipe indicator.
- **Burnished Bronze** (`#a07840`): CSS var `--palette-bg-secondary`. Used for: secondary headings, drop caps, divider lines.

### Surface & Background
- **Library Brown** (`#1a1208`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Walnut** (`#2a1d10`): CSS var `--palette-bg-surface`. Used for: panels, quote cards, inset frames.

### Neutrals & Text
- **Parchment** (`#ece4d2`): CSS var `--palette-text`. Used for: body text (warm off-white, never pure white).
- **Dusty Sepia** (`#7a6a55`): Used for: captions, footnotes, secondary metadata.

### Gradient System
`linear-gradient(180deg, #1a1208 0%, #2a1d10 100%)` — candlelit depth.
`radial-gradient(circle at 50% 0%, #d4af37 0%, transparent 50%)` — candle flame glow from top.
`linear-gradient(135deg, #d4af37 0%, #f0e6d2 100%)` — gold gradient for headings and decorative rules.

## 3. Typography Rules

### Font Family
- Heading: "Cormorant Garamond"
- Body: "Cormorant Garamond"
- Fallbacks: Georgia, serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 76px | 600 | 1.1 |
| Heading | 42px | 500 | 1.2 |
| Subheading | 28px | 500 | 1.35 |
| Body | 24px | 400 | 1.6 |
| Drop Cap | 96px | 700 | 0.9 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- One focal element per slide; centered in 80% safe zone
- Optional 1px gold divider rule (72px wide, centered) above subheads

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.4,0,0.2,1)
- Duration: 380ms
- Use @starting-style for fade-in; respect prefers-reduced-motion
- Optional candlelight flicker: 2% opacity oscillation on the radial-gradient halo, 4s loop

## 6. Design Rules
- Cormorant Garamond for ALL text (body and headings) — mixing fonts breaks the literary spell
- Antique gold reserved for: headings, decorative rules, drop caps, ONE accent per slide
- Drop caps (96px gold serif) at the start of body paragraphs are encouraged but not required
- Optional candle-flame radial gradient at top center, fading into the brown background
- Decorative 1px gold horizontal rules (centered, 60-72px wide) separate sections
- Quote blocks: 4px left border in bronze, italicized, parchment text
- Slide 1 includes a "❦" or "→ continue" indicator in cream, bottom-right
- Body text must remain parchment (#ece4d2) — never pure white, which feels sterile
- Contrast ratio ≥ 4.5:1: parchment #ece4d2 on #1a1208 = 13.4:1 (WCAG AAA)
