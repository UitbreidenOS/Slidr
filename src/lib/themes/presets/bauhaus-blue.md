# Design System: Bauhaus Blue

> Category: Editorial & Magazine
> Electric blue dominant, red accent, cream paper — Bauhaus geometry with a single color obsession.

Source inspiration: Yves Klein blue + Bauhaus geometric forms + constructivist editorial design

## 2. Color Palette & Roles

### Primary
- **Electric Blue** (`#0040ff`): CSS var `--palette-bg-primary`. Used for: hero hooks, dominant geometric forms, key headlines.

### Secondary & Accent
- **Construction Red** (`#dc2626`): CSS var `--palette-accent`. Used for: ONE secondary accent per slide (rule, circle, mark).
- **Cream Charcoal** (`#1a1a1a`): CSS var `--palette-bg-secondary`. Used for: body text, captions, secondary copy.

### Surface & Background
- **Bauhaus Cream** (`#f5f1e8`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Pure White** (`#ffffff`): CSS var `--palette-bg-surface`. Used for: inset frames, content panels.

### Neutrals & Text
- **Charcoal** (`#1a1a1a`): CSS var `--palette-text`. Used for: all body text and small details.
- **Stone Gray** (`#737373`): Used for: captions, axis labels, fine print.

### Gradient System
`linear-gradient(135deg, #0040ff 0%, #1e60ff 100%)` — used only for hero text fills, never body slides.

## 3. Typography Rules

### Font Family
- Heading: "Inter"
- Body: "Inter"
- Fallbacks: "Helvetica Neue", Arial, sans-serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hook | 104px | 900 | 0.95 | -0.04em |
| Heading | 52px | 800 | 1.05 | -0.03em |
| Subheading | 24px | 600 | 1.3 | 0 |
| Body | 20px | 400 | 1.5 | 0 |
| Label | 13px | 700 | 1.2 | 0.14em uppercase |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48/64px
- Asymmetric grid — blue circle/square anchors one corner, text the other
- 8pt baseline grid for all type and geometric forms

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22, 1, 0.36, 1)
- Duration: 300ms
- Geometric shapes enter with rotate or scale — never just fade
- @starting-style for fade-in; respect prefers-reduced-motion

## 6. Design Rules
- Background is always warm Bauhaus cream — never pure white, never dark
- Inter in heavy weights (800-900) for all display type
- Electric Blue is the hero color — used at scale, never as small detail
- Construction Red used sparingly — ONE red shape per slide maximum
- Geometric primitives (circles, squares, lines) define every slide
- One large geometric form (200px+) anchors every slide
- Two-column layouts: massive blue form left, type right (or vice versa)
- Body text is always charcoal — never blue, never red
- Small uppercase labels (13px, 0.14em) for section markers
- Contrast > 4.5:1 — charcoal on cream is ~16:1; blue on cream is ~8:1
