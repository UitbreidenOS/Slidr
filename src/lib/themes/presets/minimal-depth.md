# Design System: Minimal Depth

> Category: Agentic
> Depth Layering: enabled
> Premium minimal — small subject occupies ~25% of canvas, oversized type dominates behind, lots of negative space.

Source inspiration: Apple, Aesop, and Byredo product cards, 2026

## 2. Color Palette & Roles

### Primary
- **Ink Black** (`#0a0a0a`): CSS var `--palette-bg-primary`. Used for: hero headline.

### Secondary & Accent
- **Burnt Sienna** (`#9a3412`): CSS var `--palette-accent`. Used for: single punctuation accent.
- **Slate** (`#475569`): CSS var `--palette-bg-secondary`. Used for: secondary headings.

### Surface & Background
- **Linen** (`#fafaf9`): CSS var `--palette-bg-background`. Used for: slide backdrop.
- **Stone** (`#f5f5f4`): CSS var `--palette-bg-surface`. Used for: caption strips.

### Neutrals & Text
- **Charcoal** (`#1f1f1f`): CSS var `--palette-text`. Used for: body.
- **Ash** (`#737373`): Used for: metadata.

### Gradient System
`linear-gradient(180deg, #fafaf9 0%, #f5f5f4 100%)` — soft linen wash.
`linear-gradient(180deg, #0a0a0a 0%, #475569 100%)` — type gradient for slide 1.

## 3. Typography Rules

### Font Family
- Heading: "Cormorant Garamond"
- Body: "Inter"
- Fallbacks: serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hero | 280px | 500 | 0.9 | -0.05em |
| Heading | 52px | 500 | 1.1 | -0.02em |
| Body | 22px | 400 | 1.6 | 0 |
| Caption | 16px | 500 | 1.4 | 0.04em |

## 4. Spacing & Layout
- Padding: 80-120px
- gap scale: 24/40/64/96px
- Depth layering spacing: subject occupies ONLY 20-30% of canvas, placed off-centre (rule of thirds); hero headline extends edge-to-edge, with 70%+ of headline letters visible (not occluded)

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 700ms
- Subject entry: opacity 0 → 1, translateY 20px → 0, 900ms
- Headline entry: opacity 0 → 1, 1200ms — slow and considered

## 6. Design Rules
- DEPTH LAYERING REQUIRED: .headline { position: relative; z-index: 1; color: var(--palette-bg-primary) } .subject { position: relative; z-index: 2; max-width: 30% }
- Background → Text → Subject (z-index order 0 → 1 → 2)
- Subject must be SMALL — under 30% canvas width
- Massive negative space: minimum 80px padding, prefer 120px
- No drop-shadow on subject; let size and placement do the work
- Single accent colour used ONCE per slide (a period, a button, a divider)
- Body copy max 8 words per slide
- Hairline rules (1px, --palette-accent at 30% opacity) for divisions
- Background should be a single tone or a 2-stop gradient — never busy
