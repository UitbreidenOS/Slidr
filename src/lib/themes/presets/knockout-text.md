# Design System: Knockout Text

> Category: Beauty
> Depth Layering: enabled
> Knockout type — large letters are cut out of an image, revealing the background photo behind the subject.

Source inspiration: Fashion week lookbook + 2026 "type as window" trend

## 2. Color Palette & Roles

### Primary
- **Bone White** (`#f5f1ea`): CSS var `--palette-bg-primary`. Used for: knockout type face.

### Secondary & Accent
- **Hot Pink** (`#ec4899`): CSS var `--palette-accent`. Used for: slide-1 hook, CTA.
- **Acid Lime** (`#a3e635`): CSS var `--palette-bg-secondary`. Used for: secondary accent, badge.

### Surface & Background
- **Smoke** (`#1f1d1a`): CSS var `--palette-bg-background`. Used for: photo backdrop.
- **Charcoal** (`#2a2724`): CSS var `--palette-bg-surface`. Used for: cards, panels.

### Neutrals & Text
- **Bone** (`#f5f1ea`): CSS var `--palette-text`. Used for: body.
- **Stone** (`#9ca3af`): Used for: metadata.

### Gradient System
`linear-gradient(135deg, #1f1d1a 0%, #2a2724 100%)` — moody base.
`radial-gradient(circle at 30% 40%, #ec4899 0%, transparent 60%)` — colour bleed on photo backdrops.

## 3. Typography Rules

### Font Family
- Heading: "Bodoni Moda"
- Body: "Inter"
- Fallbacks: serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Knockout | 200px | 900 | 0.95 | -0.04em |
| Heading | 52px | 800 | 1.05 | -0.02em |
| Body | 22px | 400 | 1.5 | 0 |
| Caption | 16px | 500 | 1.4 | 0.04em |

## 4. Spacing & Layout
- Padding: 48-72px
- gap scale: 12/24/40px
- Depth layering spacing: photo background fills 100% of canvas; knockout type sits centered horizontally, occupying 70% canvas width; subject overlays the middle of the type

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.83,0,0.17,1)
- Duration: 550ms
- Subject entry: opacity 0 → 1, scale 1.05 → 1
- Knockout entry: clip-path inset(0 0 100% 0) → inset(0 0 0 0), 700ms ease-out

## 6. Design Rules
- DEPTH LAYERING REQUIRED: .headline { position: relative; z-index: 1; mix-blend-mode: screen } .subject { position: relative; z-index: 2 }
- Background → Text → Subject (z-index order 0 → 1 → 2)
- Use `background-clip: text; color: transparent` to make text BE the photo
- Subject must be a high-contrast cutout (transparent background) so the knockout shows through naturally
- Knockout letters should be 180-240px on the hook slide
- Body copy and CTAs sit on dark overlay panels at 90% opacity
- Keep a single accent colour per slide (pink OR lime, not both)
- Photo backgrounds should have at least one bright highlight area so the knockout has visual range
