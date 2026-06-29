# Design System: Pastel Depth

> Category: Beauty
> Depth Layering: enabled
> Soft pastels — cream-coloured serif type slips behind a subject on a blush/lilac/mint backdrop.

Source inspiration: Glossier, Laneige, and 2026 skincare "soft serve" palette

## 2. Color Palette & Roles

### Primary
- **Blush** (`#fbcfe8`): CSS var `--palette-bg-primary`. Used for: slide background.

### Secondary & Accent
- **Lilac** (`#c4b5fd`): CSS var `--palette-accent`. Used for: secondary slides, panels.
- **Mint** (`#a7f3d0`): CSS var `--palette-bg-secondary`. Used for: gradient stop, badges.

### Surface & Background
- **Cream** (`#fef3c7`): CSS var `--palette-bg-background`. Used for: alternate backdrop.
- **Vanilla** (`#fff7ed`): CSS var `--palette-bg-surface`. Used for: caption cards.

### Neutrals & Text
- **Espresso** (`#44403c`): CSS var `--palette-text`. Used for: body.
- **Mauve** (`#a8a29e`): Used for: metadata.

### Gradient System
`linear-gradient(135deg, #fbcfe8 0%, #c4b5fd 60%, #a7f3d0 100%)` — pastel sweep.
`linear-gradient(180deg, #fff7ed 0%, #fbcfe8 100%)` — cream wash.

## 3. Typography Rules

### Font Family
- Heading: "Fraunces"
- Body: "Inter"
- Fallbacks: serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hero cream | 180px | 700 | 0.95 | -0.03em |
| Heading | 48px | 700 | 1.1 | -0.02em |
| Body | 22px | 400 | 1.5 | 0 |
| Caption | 16px | 500 | 1.4 | 0.04em |

## 4. Spacing & Layout
- Padding: 64-96px
- gap scale: 16/24/40/64px
- Depth layering spacing: subject occupies 35-45% canvas, centred; cream-coloured serif headline extends edge-to-edge behind, with 60%+ of headline visible (not occluded)

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 600ms
- Subject entry: opacity 0 → 1, scale 0.96 → 1, 700ms
- Headline entry: opacity 0 → 1 with 16px downward slide, 400ms

## 6. Design Rules
- DEPTH LAYERING REQUIRED: .headline { position: relative; z-index: 1; color: #fff7ed } .subject { position: relative; z-index: 2 }
- Background → Text → Subject (z-index order 0 → 1 → 2)
- Cream/off-white type on pastel backdrops only — never black headlines
- Subject should be a transparent-background PNG cutout
- Use ONLY soft pastels — no saturated colours, no pure black
- Add a soft glow / drop-shadow under the subject (offset 0 20px, blur 40px, opacity 0.12)
- Body copy in espresso (#44403c), never pure black
- Caption strips in vanilla with 1px lilac border
- One subtle texture: paper grain at 5% opacity
