# Design System: Fashion Editorial

> Category: Beauty
> Depth Layering: enabled
> High-fashion — oversized serif italic slips behind a model cutout, hands and accessories interrupt the type.

Source inspiration: Vogue Italia / Acne Studios campaign art direction, 2026

## 2. Color Palette & Roles

### Primary
- **Bone** (`#f5efe6`): CSS var `--palette-bg-primary`. Used for: oversized headline fill.

### Secondary & Accent
- **Cinnabar** (`#dc2626`): CSS var `--palette-accent`. Used for: brand mark, single accent punctuation.
- **Olive** (`#65a30d`): CSS var `--palette-bg-secondary`. Used for: secondary accent.

### Surface & Background
- **Eggshell** (`#f9f5ee`): CSS var `--palette-bg-background`. Used for: studio sweep.
- **Stone** (`#e7e2d6`): CSS var `--palette-bg-surface`. Used for: spec panels.

### Neutrals & Text
- **Espresso** (`#1c1917`): CSS var `--palette-text`. Used for: body.
- **Sand** (`#a8a29e`): Used for: metadata, fine print.

### Gradient System
`linear-gradient(180deg, #f9f5ee 0%, #e7e2d6 100%)` — soft sweep.
`linear-gradient(135deg, #1c1917 0%, #7f1d1d 100%)` — moody accent gradient.

## 3. Typography Rules

### Font Family
- Heading: "Bodoni Moda"
- Body: "Inter"
- Fallbacks: serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hero serif | 200px | 900 italic | 0.95 | -0.04em |
| Heading | 48px | 700 | 1.1 | -0.02em |
| Caption | 18px | 400 | 1.4 | 0.04em |
| Body | 22px | 400 | 1.5 | 0 |

## 4. Spacing & Layout
- Padding: 48-72px
- gap scale: 12/24/40/64px
- Depth layering spacing: model cutout 50% canvas, biased right; serif headline occupies left 60% and bleeds right behind the model; minimum 30% headline extends past model edge

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.65,0,0.35,1)
- Duration: 700ms
- Subject entry: translateY 40px → 0, opacity 0 → 1, 900ms
- Headline entry: opacity 0 → 1 with 8px horizontal slide, 200ms before subject

## 6. Design Rules
- DEPTH LAYERING REQUIRED: .headline { position: relative; z-index: 1 } .subject { position: relative; z-index: 2 }
- Background → Text → Subject (z-index order 0 → 1 → 2)
- Headlines ALWAYS in italic serif Bodoni — never upright, never sans
- Model must be a transparent-background cutout; hands and accessories may overlap headline freely
- Allow headline letters to be visually interrupted by the model silhouette — this is the depth effect
- Use one cinnabar accent period or comma in the headline for punctuation drama
- Captions in lowercase, generous letter-spacing (0.04em+)
- No drop-shadows on the model — keep editorial flatness
- Background should be a single soft gradient or flat tone, NEVER busy
