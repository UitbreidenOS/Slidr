# Design System: Retro Poster Depth

> Category: Agentic
> Depth Layering: enabled
> Vintage poster — distressed sans-serif type sits BEHIND a subject, worn textures, retro halftone.

Source inspiration: 1970s concert posters + 2026 nostalgic revival trend

## 2. Color Palette & Roles

### Primary
- **Burnt Orange** (`#ea580c`): CSS var `--palette-bg-primary`. Used for: hero headline, poster border.

### Secondary & Accent
- **Mustard** (`#ca8a04`): CSS var `--palette-accent`. Used for: secondary type, swash details.
- **Avocado** (`#4d7c0f`): CSS var `--palette-bg-secondary`. Used for: tertiary accent.

### Surface & Background
- **Cream Paper** (`#fef3c7`): CSS var `--palette-bg-background`. Used for: aged paper backdrop.
- **Sand** (`#fde68a`): CSS var `--palette-bg-surface`. Used for: caption strips.

### Neutrals & Text
- **Espresso** (`#451a03`): CSS var `--palette-text`. Used for: body.
- **Sepia** (`#92400e`): Used for: metadata.

### Gradient System
`linear-gradient(180deg, #fef3c7 0%, #fde68a 100%)` — aged paper.
`linear-gradient(135deg, #ea580c 0%, #ca8a04 100%)` — headline gradient fill.

## 3. Typography Rules

### Font Family
- Heading: "Bebas Neue"
- Body: "Special Elite"
- Fallbacks: serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hero poster | 220px | 400 | 0.9 | -0.02em |
| Heading | 52px | 400 | 1.0 | -0.01em |
| Body | 22px | 400 | 1.5 | 0 |
| Caption | 16px | 400 | 1.4 | 0.06em |

## 4. Spacing & Layout
- Padding: 48-72px
- gap scale: 12/24/40/64px
- Depth layering spacing: subject occupies 35-45% canvas, centred; distressed headline fills 90%+ of canvas width behind, with letters visibly cropped by the subject silhouette

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 500ms
- Subject entry: opacity 0 → 1, scale 0.95 → 1, 700ms
- Headline entry: opacity 0 → 1 with offset jitter (-1px → 0), 600ms — slight printing imperfection

## 6. Design Rules
- DEPTH LAYERING REQUIRED: .headline { position: relative; z-index: 1; text-transform: uppercase; letter-spacing: -0.02em } .subject { position: relative; z-index: 2 }
- Background → Text → Subject (z-index order 0 → 1 → 2)
- Apply a subtle distressed/grunge overlay to the headline: CSS background-blend-mode: multiply with a noise texture at 12% opacity
- Subject is a transparent-background PNG cutout; prefer duotone/sepia-tinted images
- Use Bebas Neue (or Anton) for headlines — ultra-condensed, ALL CAPS
- Add a thick 6-12px poster border in burnt orange on every slide
- Body copy in Special Elite (typewriter feel) for retro authenticity
- Use small sun-ray or starburst motifs (CSS radial-gradient or SVG) as corner accents
- Background paper texture: noise filter at 8% opacity, plus 2-3 coffee-stain-like radial gradients
