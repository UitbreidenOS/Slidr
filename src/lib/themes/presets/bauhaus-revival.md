# Design System: Bauhaus Revival

> Category: Editorial & Magazine
> Primary colors on warm cream — red, blue, yellow geometric primitives. Bauhaus-meets-2026 energy.

Source inspiration: Bauhaus Dessau (Itten, Albers, Klee) + contemporary editorial redesign

## 2. Color Palette & Roles

### Primary
- **Bauhaus Red** (`#dc2626`): CSS var `--palette-bg-primary`. Used for: hero hooks, primary headlines, dominant circles.

### Secondary & Accent
- **Bauhaus Blue** (`#1e40af`): CSS var `--palette-accent`. Used for: CTAs, accent squares, secondary callouts.
- **Bauhaus Yellow** (`#facc15`): CSS var `--palette-bg-secondary`. Used for: highlight blocks, tertiary accents, triangles.

### Surface & Background
- **Off-White** (`#f5f1e8`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Pure White** (`#ffffff`): CSS var `--palette-bg-surface`. Used for: inset frames, content panels.

### Neutrals & Text
- **Charcoal** (`#1a1a1a`): CSS var `--palette-text`. Used for: body text and small details.
- **Stone Gray** (`#737373`): Used for: captions, metadata, axis labels.

### Gradient System
`linear-gradient(135deg, #dc2626 0%, #facc15 100%)` — used only for hero hooks, never on body slides.

## 3. Typography Rules

### Font Family
- Heading: "Space Grotesk"
- Body: "Inter"
- Fallbacks: "Helvetica Neue", Arial, sans-serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hook | 96px | 800 | 1.0 | -0.04em |
| Heading | 48px | 700 | 1.1 | -0.02em |
| Subheading | 24px | 600 | 1.3 | 0 |
| Body | 22px | 400 | 1.5 | 0 |
| Label | 14px | 700 | 1.2 | 0.12em uppercase |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48/64px
- Asymmetric grid — content anchored to one corner, geometric block opposite
- 8pt baseline grid for all typography and spacing

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22, 1, 0.36, 1)
- Duration: 300ms
- Geometric shapes enter with rotate or scale, not fade
- @starting-style for entrance; respect prefers-reduced-motion

## 6. Design Rules
- Three Bauhaus primaries are the only colors used: red, blue, yellow
- Geometric primitives (circle, square, triangle) appear on every slide
- Off-white background — never pure white, never black
- Space Grotesk headings, Inter body — geometric sans throughout
- One primary per slide: pick red OR blue OR yellow as the dominant accent
- Hook slides can use oversized geometric forms (200px+ circles) as anchors
- No decorative ornaments — every shape serves layout or hierarchy
- 8pt baseline grid: snap all type, padding, and shapes to multiples of 8
- Two-column layouts encouraged: text left, geometric block right
- Contrast > 4.5:1 — black on cream for body, color on cream for accents
