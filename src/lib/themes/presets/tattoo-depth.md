# Design System: Tattoo Depth

> Category: GPT Image
> Depth Layering: enabled
> Bold linework — high-contrast black-ink text sits BEHIND a portrait with line-art aesthetic.

Source inspiration: Traditional tattoo flash + 2026 linework carousel aesthetic

## 2. Color Palette & Roles

### Primary
- **Ink Black** (`#0a0a0a`): CSS var `--palette-bg-primary`. Used for: hero headline, line-art subject.

### Secondary & Accent
- **Blood Red** (`#991b1b`): CSS var `--palette-accent`. Used for: ONE keyword per slide.
- **Bone** (`#fafaf9`): CSS var `--palette-bg-secondary`. Used for: secondary text.

### Surface & Background
- **Parchment** (`#f5f1e8`): CSS var `--palette-bg-background`. Used for: aged paper backdrop.
- **Aged** (`#e7dfce`): CSS var `--palette-bg-surface`. Used for: caption strips.

### Neutrals & Text
- **Ink** (`#0a0a0a`): CSS var `--palette-text`. Used for: body.
- **Sepia** (`#78716c`): Used for: metadata.

### Gradient System
`linear-gradient(180deg, #f5f1e8 0%, #e7dfce 100%)` — aged paper.
`linear-gradient(180deg, #0a0a0a 0%, #991b1b 100%)` — inverted hero slide.

## 3. Typography Rules

### Font Family
- Heading: "UnifrakturCook"
- Body: "Special Elite"
- Fallbacks: serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hero linework | 200px | 700 | 0.9 | -0.02em |
| Heading | 48px | 700 | 1.0 | -0.01em |
| Body | 22px | 400 | 1.5 | 0 |
| Caption | 16px | 700 | 1.3 | 0.08em |

## 4. Spacing & Layout
- Padding: 48-80px
- gap scale: 12/24/40/64px
- Depth layering spacing: subject occupies 35-45% canvas, centred; linework headline stretches across the full width behind, with letters extending past the subject silhouette on both sides

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.65,0,0.35,1)
- Duration: 500ms
- Subject entry: opacity 0 → 1, scale 0.96 → 1, 700ms
- Headline entry: opacity 0 → 1 with stroke-dasharray drawing animation, 800ms

## 6. Design Rules
- DEPTH LAYERING REQUIRED: .headline { position: relative; z-index: 1; color: var(--palette-bg-primary); -webkit-text-stroke: 2px var(--palette-bg-primary); -webkit-text-fill-color: transparent } .subject { position: relative; z-index: 2; filter: contrast(1.3) saturate(0.4) }
- Background → Text → Subject (z-index order 0 → 1 → 2)
- Use outlined type (-webkit-text-stroke with transparent fill) for the linework aesthetic
- Subject should be a high-contrast transparent-background PNG cutout (line art or B&W photo)
- Apply filter: contrast(1.3) saturate(0.4) to the subject for ink-print feel
- One keyword per slide may use blood red — never more
- Background should be a single parchment tone or a 2-stop gradient
- Use small flash-motif ornaments (anchors, daggers, stars) as corner accents in ink
- Body copy in Special Elite (typewriter) for vintage authenticity
- Add a hairline 1px ink border around the entire slide
