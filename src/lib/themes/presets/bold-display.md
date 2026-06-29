# Design System: Bold Display

> Category: GPT Image
> Depth Layering: enabled
> Massive sans-serif (Anton / Impact / Druk style) sits behind a person — letters are huge, person interrupts the type boldly.

Source inspiration: 2026 hypebeast / sportswear social campaigns

## 2. Color Palette & Roles

### Primary
- **Acid Yellow** (`#fde047`): CSS var `--palette-bg-primary`. Used for: hero display type.

### Secondary & Accent
- **Jet Black** (`#0a0a0a`): CSS var `--palette-accent`. Used for: outline / contrast text on yellow.
- **Power Red** (`#dc2626`): CSS var `--palette-bg-secondary`. Used for: secondary callouts.

### Surface & Background
- **Concrete** (`#525252`): CSS var `--palette-bg-background`. Used for: industrial backdrop.
- **Asphalt** (`#262626`): CSS var `--palette-bg-surface`. Used for: panels.

### Neutrals & Text
- **Chalk** (`#fafafa`): CSS var `--palette-text`. Used for: body.
- **Steel** (`#a3a3a3`): Used for: metadata.

### Gradient System
`linear-gradient(135deg, #525252 0%, #262626 100%)` — industrial backdrop.
`linear-gradient(90deg, #fde047 0%, #facc15 100%)` — display type fill.

## 3. Typography Rules

### Font Family
- Heading: "Anton"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Display | 260px | 400 | 0.85 | -0.03em |
| Heading | 56px | 800 | 0.95 | -0.02em |
| Body | 24px | 700 | 1.4 | 0 |
| Caption | 16px | 700 | 1.3 | 0.08em |

## 4. Spacing & Layout
- Padding: 40-64px
- gap scale: 12/24/40/64px
- Depth layering spacing: subject occupies 45% canvas, off-centre; display type fills 90%+ of canvas width, top-aligned, with letters extending well past the subject on both sides

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.83,0,0.17,1)
- Duration: 400ms
- Subject entry: translateY 24px → 0, opacity 0 → 1, 600ms
- Display entry: clip-path inset(0 100% 0 0) → inset(0 0 0 0), 500ms ease-out with bounce

## 6. Design Rules
- DEPTH LAYERING REQUIRED: .headline { position: relative; z-index: 1; text-transform: uppercase; -webkit-text-stroke: 2px var(--palette-accent) } .subject { position: relative; z-index: 2 }
- Background → Text → Subject (z-index order 0 → 1 → 2)
- Display type MUST be ALL CAPS, ultra-condensed (Anton), and 200px+
- Use -webkit-text-stroke for outlined display type when on dark backdrops
- Subject should be a transparent-background PNG cutout
- Hard, fast transitions — avoid soft fades
- One single accent per slide (red OR yellow, not both)
- Body copy in chalk or jet, max 6 words
- Add a 2px horizontal rule in acid yellow across slides 2-7 for rhythm
