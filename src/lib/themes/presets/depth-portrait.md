# Design System: Depth Portrait

> Category: Agentic
> Depth Layering: enabled
> Personal brand, fitness, lifestyle — clean subject cutout floating on a gradient stage with oversized type behind.

Source inspiration: 2026 Instagram "text-behind-person" portrait trend

## 2. Color Palette & Roles

### Primary
- **Iris** (`#7c3aed`): CSS var `--palette-bg-primary`. Used for: oversized background headline fill.

### Secondary & Accent
- **Coral** (`#fb7185`): CSS var `--palette-accent`. Used for: subject glow, CTA micro-text.
- **Sky** (`#38bdf8`): CSS var `--palette-bg-secondary`. Used for: gradient stop, secondary overlay text.

### Surface & Background
- **Cream** (`#fdf6ec`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Sand** (`#f1e7d3`): CSS var `--palette-bg-surface`. Used for: caption cards, behind-subject halos.

### Neutrals & Text
- **Ink** (`#0f172a`): CSS var `--palette-text`. Used for: body copy, small captions.
- **Stone** (`#64748b`): Used for: metadata, fine print.

### Gradient System
`linear-gradient(135deg, #fdf6ec 0%, #f1e7d3 50%, #fce7f3 100%)` — soft daylight stage.
`linear-gradient(180deg, #7c3aed 0%, #38bdf8 100%)` — headline gradient fill.

## 3. Typography Rules

### Font Family
- Heading: "Fraunces"
- Body: "Inter"
- Fallbacks: serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hook | 140px | 900 | 1.0 | -0.04em |
| Heading | 56px | 800 | 1.05 | -0.02em |
| Subheading | 30px | 600 | 1.3 | 0 |
| Body | 24px | 400 | 1.5 | 0 |
| Caption | 18px | 500 | 1.4 | 0.02em |

## 4. Spacing & Layout
- Padding: 64-96px
- gap scale: 12/24/40/64px
- Depth layering spacing: leave 40-50% of canvas width as subject-safe zone in the centre; oversized headline extends edge-to-edge

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 450ms
- Subject entry: scale 0.95 → 1, opacity 0 → 1, over 500ms
- Text entry: fade with 12px upward slide, 80ms behind subject

## 6. Design Rules
- DEPTH LAYERING REQUIRED: .headline { position: relative; z-index: 1 } .subject { position: relative; z-index: 2 }
- Background → Text → Subject (z-index order 0 → 1 → 2)
- Headline must extend BEYOND the subject on both sides (2-3x wider than subject mask)
- Subject should be a transparent-background PNG/WebP cutout (or CSS clip-path)
- Headline contrast > 4.5:1 against background; use gradient fill for hero slides
- One subject per slide; centred horizontally, anchored to lower 60% of canvas
- Use a soft drop-shadow on the subject (offset 0 24px, blur 48px, opacity 0.18) to anchor it above the text
- Caption and small body copy goes below or beside the subject, NEVER in front of it
- Vary which letters the subject occludes between slides for visual rhythm
