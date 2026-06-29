# Design System: FT Peach

> Category: Editorial & Magazine
> Salmon peach background, deep navy text, classical serif — the FT Weekend financial editorial.

Source inspiration: Financial Times weekend edition + FT Magazine long-form features

## 2. Color Palette & Roles

### Primary
- **FT Navy** (`#33302e`): CSS var `--palette-bg-primary`. Used for: all typography, headlines, body text.

### Secondary & Accent
- **Deep Salmon** (`#fcd0a1`): CSS var `--palette-accent`. Used for: highlight blocks, pull quote backgrounds, callouts.
- **Warm Slate** (`#5a4f47`): CSS var `--palette-bg-secondary`. Used for: secondary headings, captions, metadata.

### Surface & Background
- **FT Salmon** (`#fff1e5`): CSS var `--palette-bg-background`. Used for: default slide background, page surface.
- **Cream Paper** (`#fffaf2`): CSS var `--palette-bg-surface`. Used for: inset cards, quote frames.

### Neutrals & Text
- **Navy Charcoal** (`#33302e`): CSS var `--palette-text`. Used for: all body and heading copy.
- **Soft Brown** (`#8a7d70`): Used for: footnote text, page numbers, fine print.

### Gradient System
`linear-gradient(180deg, #fff1e5 0%, #f5d9bd 100%)` — warm salmon tonal shift for cover slides.

## 3. Typography Rules

### Font Family
- Heading: "Libre Baskerville"
- Body: "Inter"
- Fallbacks: Georgia, serif / sans-serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hook | 76px | 700 | 1.1 | -0.01em |
| Heading | 42px | 700 | 1.2 | -0.005em |
| Subheading | 24px | 600 | 1.3 | 0 |
| Body | 20px | 400 | 1.55 | 0 |
| Stat | 56px | 700 | 1.0 | -0.02em |

## 4. Spacing & Layout
- Padding: 56-72px
- gap scale: 8/16/24/32/48px
- Multi-column financial grid: chart left, commentary right
- Top headline band + bottom data band split (similar to FT print)

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22, 1, 0.36, 1)
- Duration: 350ms
- @starting-style for fade-in; respect prefers-reduced-motion
- Subtle chart-grow on data slides

## 6. Design Rules
- Background is always FT Salmon #fff1e5 — never pure white, never dark
- Libre Baskerville for headlines; Inter for body, charts, and metadata
- Deep Salmon used as highlight block, never as text color
- Financial data gets its own band — chart bottom, commentary top
- Two-column layouts: data left, analysis right (FT weekend spread feel)
- Stat numbers in Inter Bold (56-72px), serif reserved for prose
- All-caps small labels (12px, 0.14em) for chart categories
- Hairline rules (1px warm slate) separate sections — never use bold borders
- Imagery: muted financial photography, warm-toned, professional
- Contrast > 4.5:1 — navy on FT salmon is ~12:1, comfortably safe
