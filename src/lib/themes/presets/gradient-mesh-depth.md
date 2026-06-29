# Design System: Gradient Mesh Depth

> Category: GPT Image
> Depth Layering: enabled
> Mesh gradient background — huge sans-serif type sits BEHIND a subject, gradient bleeds through the headline fill.

Source inspiration: Stripe / Linear / Arc browser 2026 marketing

## 2. Color Palette & Roles

### Primary
- **Violet 600** (`#7c3aed`): CSS var `--palette-bg-primary`. Used for: hero headline, mesh centre.

### Secondary & Accent
- **Pink 500** (`#ec4899`): CSS var `--palette-accent`. Used for: mesh highlight, CTA.
- **Cyan 400** (`#22d3ee`): CSS var `--palette-bg-secondary`. Used for: mesh edge, secondary.

### Surface & Background
- **Slate 950** (`#020617`): CSS var `--palette-bg-background`. Used for: dark backdrop.
- **Slate 900** (`#0f172a`): CSS var `--palette-bg-surface`. Used for: card panels.

### Neutrals & Text
- **White** (`#ffffff`): CSS var `--palette-text`. Used for: body.
- **Slate 400** (`#94a3b8`): Used for: metadata.

### Gradient System
`radial-gradient(at 20% 30%, #7c3aed 0px, transparent 50%), radial-gradient(at 80% 70%, #ec4899 0px, transparent 50%), radial-gradient(at 50% 50%, #22d3ee 0px, transparent 60%), #020617` — mesh gradient.
`linear-gradient(135deg, #7c3aed 0%, #ec4899 50%, #22d3ee 100%)` — headline gradient fill.

## 3. Typography Rules

### Font Family
- Heading: "Sora"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hero mesh | 200px | 800 | 0.95 | -0.05em |
| Heading | 48px | 700 | 1.1 | -0.02em |
| Body | 22px | 400 | 1.5 | 0 |
| Caption | 16px | 500 | 1.4 | 0.04em |

## 4. Spacing & Layout
- Padding: 64-96px
- gap scale: 16/24/40/64px
- Depth layering spacing: subject occupies 35% canvas, off-centre to one side; hero headline fills 90%+ of canvas width, with letters visibly cropped by the subject silhouette

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 600ms
- Subject entry: opacity 0 → 1, scale 0.95 → 1, 700ms
- Mesh entry: gradient stops animate via CSS @property animation over 8s loop
- Headline entry: opacity 0 → 1, 600ms with gradient sweep

## 6. Design Rules
- DEPTH LAYERING REQUIRED: .headline { position: relative; z-index: 1; background: linear-gradient(135deg, #7c3aed, #ec4899, #22d3ee); -webkit-background-clip: text; color: transparent } .subject { position: relative; z-index: 2 }
- Background → Text → Subject (z-index order 0 → 1 → 2)
- Background MUST be a mesh gradient (3+ radial-gradient layers), not a flat tone
- Headline text uses gradient fill via background-clip: text; color: transparent
- Subject is a transparent-background PNG cutout
- Use the same gradient palette on background and headline fill for visual unity
- No drop-shadows — let the mesh + gradient fill create depth
- Background mesh should drift slowly (8-12s animation loop) for subtle motion
- Body copy max 8 words per slide, in pure white
