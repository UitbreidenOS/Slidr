# Design System: Split Depth

> Category: Agentic
> Depth Layering: enabled
> Subject on one side, headline bleeding horizontally from the opposite side — type reads across the canvas.

Source inspiration: Editorial split layouts + 2026 carousel cropping trends

## 2. Color Palette & Roles

### Primary
- **Cobalt** (`#1d4ed8`): CSS var `--palette-bg-primary`. Used for: hero headline fill (left half).

### Secondary & Accent
- **Marigold** (`#f59e0b`): CSS var `--palette-accent`. Used for: CTA, divider, period punctuation.
- **Steel** (`#475569`): CSS var `--palette-bg-secondary`. Used for: secondary copy.

### Surface & Background
- **Ivory** (`#fefefe`): CSS var `--palette-bg-background`. Used for: slide backdrop.
- **Mist** (`#f1f5f9`): CSS var `--palette-bg-surface`. Used for: caption panel.

### Neutrals & Text
- **Charcoal** (`#0f172a`): CSS var `--palette-text`. Used for: body.
- **Ash** (`#64748b`): Used for: metadata.

### Gradient System
`linear-gradient(135deg, #fefefe 0%, #f1f5f9 100%)` — clean editorial sweep.
`linear-gradient(90deg, #1d4ed8 0%, #3b82f6 100%)` — type gradient.

## 3. Typography Rules

### Font Family
- Heading: "Söhne" (fallback: Inter Tight)
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hero | 180px | 800 | 0.9 | -0.04em |
| Heading | 48px | 700 | 1.1 | -0.02em |
| Body | 22px | 400 | 1.5 | 0 |
| Caption | 16px | 500 | 1.4 | 0.04em |

## 4. Spacing & Layout
- Padding: 64-96px
- gap scale: 16/24/40/64px
- Depth layering spacing: subject occupies 40-50% of canvas, biased LEFT or RIGHT (one side); hero headline starts on the opposite side and bleeds ACROSS, with 30%+ of headline extending behind/past the subject

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 550ms
- Subject entry: translateX (from off-side) 80px → 0, opacity 0 → 1, 700ms
- Headline entry: opacity 0 → 1, 600ms — subject arrives 100ms after headline starts

## 6. Design Rules
- DEPTH LAYERING REQUIRED: .headline { position: relative; z-index: 1 } .subject { position: relative; z-index: 2 }
- Background → Text → Subject (z-index order 0 → 1 → 2)
- Subject must be biased to one side (left OR right) — never centred
- Headline starts on the OPPOSITE side from the subject and bleeds across the canvas
- Use a vertical 1px rule (marigold) at the canvas midpoint to anchor the split
- Subject cutout must be transparent-background PNG
- Body copy sits in the opposite quadrant from the subject, never overlapping
- Slide 1 has a swipe arrow on the trailing edge (subject side) in marigold
- Use only 2 colours per slide (cobalt + marigold OR cobalt + slate)
