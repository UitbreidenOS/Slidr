# Design System: Venice Architecture

> Category: Editorial & Magazine
> Warm cream, terracotta, and deep teal — architectural drawing aesthetic, classical proportions.

Source inspiration: Domus magazine + Carlo Scarpa architectural drawings + Venice Biennale catalogues

## 2. Color Palette & Roles

### Primary
- **Architect Teal** (`#1a4f5c`): CSS var `--palette-bg-primary`. Used for: headings, body text, technical line work.

### Secondary & Accent
- **Venetian Terracotta** (`#b04a2f`): CSS var `--palette-accent`. Used for: ONE accent per slide (CTA, key stat, structural mark).
- **Warm Stone** (`#7a6a55`): CSS var `--palette-bg-secondary`. Used for: secondary text, captions, measurements.

### Surface & Background
- **Drawing Cream** (`#f5ede0`): CSS var `--palette-bg-background`. Used for: default slide background, drafting paper.
- **Soft Paper** (`#faf5e8`): CSS var `--palette-bg-surface`. Used for: inset frames, plan-view cards.

### Neutrals & Text
- **Deep Teal** (`#1a4f5c`): CSS var `--palette-text`. Used for: all body and heading copy.
- **Faint Tan** (`#a39580`): Used for: dimension lines, fine print, scale notations.

### Gradient System
`linear-gradient(180deg, #f5ede0 0%, #e6d8c0 100%)` — warm drafting paper tone.

## 3. Typography Rules

### Font Family
- Heading: "Lora"
- Body: "Inter"
- Fallbacks: Georgia, serif / sans-serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hook | 76px | 600 | 1.1 | -0.01em |
| Heading | 40px | 600 | 1.2 | 0 |
| Subheading | 22px | 500 | 1.35 | 0 |
| Body | 20px | 400 | 1.55 | 0 |
| Measurement | 14px | 500 | 1.3 | 0.04em |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48/64px
- Two-column split: drawing/plan left, prose right (architectural plate feel)
- Generous margins (80px+) — drafting-paper proportions

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22, 1, 0.36, 1)
- Duration: 400ms
- Line-drawing effect entrance for technical elements (stroke-dashoffset)
- @starting-style for fade-in; respect prefers-reduced-motion

## 6. Design Rules
- Background is always warm drawing cream — never pure white, never dark
- Lora for headings at moderate weights (500-600); Inter for body
- Terracotta used ONCE per slide — like a section mark on an architectural plate
- Imagery treated like architectural drawings — high contrast, technical
- Two-column layouts are signature: drawing left, prose right
- Hairline teal rules (1px) separate sections — drafting-line aesthetic
- Small measurement-style labels (14px, tracked 0.04em) for metadata
- Scale and proportion indicators rendered small and precise
- Body line-height 1.55 — measured, considered prose
- Contrast > 4.5:1 — teal on cream is ~9:1, comfortably safe
