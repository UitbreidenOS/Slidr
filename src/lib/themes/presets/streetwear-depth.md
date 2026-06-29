# Design System: Streetwear Depth

> Category: Agentic
> Depth Layering: enabled
> Y2K streetwear — chrome / liquid-metal text sits BEHIND a model wearing oversized gear.

Source inspiration: Chrome Hearts, Cactus Plant Flea Market, Y2K streetwear 2026

## 2. Color Palette & Roles

### Primary
- **Chrome** (`#cbd5e1`): CSS var `--palette-bg-primary`. Used for: chrome headline fill.

### Secondary & Accent
- **Hot Magenta** (`#d946ef`): CSS var `--palette-accent`. Used for: Y2K accent, CTA.
- **Lime** (`#bef264`): CSS var `--palette-bg-secondary`. Used for: secondary highlight.

### Surface & Background
- **Charcoal** (`#1c1917`): CSS var `--palette-bg-background`. Used for: street backdrop.
- **Onyx** (`#0c0a09`): CSS var `--palette-bg-surface`. Used for: cards.

### Neutrals & Text
- **Chalk** (`#fafaf9`): CSS var `--palette-text`. Used for: body.
- **Dim** (`#a8a29e`): Used for: metadata.

### Gradient System
`linear-gradient(135deg, #1c1917 0%, #292524 100%)` — street backdrop.
`linear-gradient(180deg, #fafaf9 0%, #94a3b8 30%, #475569 60%, #fafaf9 100%)` — chrome type fill.

## 3. Typography Rules

### Font Family
- Heading: "Archivo Black"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hero chrome | 200px | 900 | 0.9 | -0.04em |
| Heading | 52px | 900 | 1.0 | -0.02em |
| Body | 22px | 500 | 1.5 | 0 |
| Caption | 16px | 700 | 1.3 | 0.06em |

## 4. Spacing & Layout
- Padding: 48-72px
- gap scale: 12/24/40/64px
- Depth layering spacing: model occupies 40-50% canvas, centred or off-centre; chrome headline stretches across the full width behind, with letters extending well past the model on both sides

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.83,0,0.17,1)
- Duration: 400ms
- Subject entry: translateY 24px → 0, opacity 0 → 1, 600ms
- Headline entry: opacity 0 → 1 with chrome gradient sweep, 700ms

## 6. Design Rules
- DEPTH LAYERING REQUIRED: .headline { position: relative; z-index: 1; background: linear-gradient(180deg, #fafaf9 0%, #94a3b8 30%, #1c1917 60%, #fafaf9 100%); -webkit-background-clip: text; color: transparent } .subject { position: relative; z-index: 2 }
- Background → Text → Subject (z-index order 0 → 1 → 2)
- Chrome type uses a 4-stop gradient (light → mid → dark → light) to mimic reflective metal
- Model is a transparent-background PNG cutout, with hard edges (no soft shadows)
- Use one bold Y2K accent per slide (magenta OR lime, not both)
- Background should be a flat dark tone or a single-stop gradient — no busy patterns
- Body copy max 6 words per slide, in chalk
- Add a small star/diamond motif (SVG) as a corner accent on slides 1, 4, 7
- Drop the model with a hard 0 8px offset shadow at 30% opacity for grittiness
