# Design System: Nordic Cool

> Category: Editorial & Magazine
> Pale gray, forest green, warm wood — Scandi minimalism with organic warmth. Calm, considered, lived-in.

Source inspiration: Apartamento magazine + Nordic interior design catalogues + FRAME magazine

## 2. Color Palette & Roles

### Primary
- **Forest Green** (`#2d4a3e`): CSS var `--palette-bg-primary`. Used for: all typography, headlines, body text.

### Secondary & Accent
- **Warm Wood** (`#b08968`): CSS var `--palette-accent`. Used for: ONE accent per slide (CTA, stat, decorative element).
- **Charcoal** (`#3d3d3d`): CSS var `--palette-bg-secondary`. Used for: secondary headings, captions, metadata.

### Surface & Background
- **Pale Gray** (`#e8e6e1`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Off-White Linen** (`#f4f1ec`): CSS var `--palette-bg-surface`. Used for: inset cards, image frames.

### Neutrals & Text
- **Deep Forest** (`#2d4a3e`): CSS var `--palette-text`. Used for: all body and heading copy.
- **Soft Stone** (`#8a8580`): Used for: footer text, fine print, page numbers.

### Gradient System
`linear-gradient(180deg, #e8e6e1 0%, #d8d4cc 100%)` — soft fog wash for cover slides.

## 3. Typography Rules

### Font Family
- Heading: "DM Sans"
- Body: "Inter"
- Fallbacks: -apple-system, "Helvetica Neue", Arial, sans-serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hook | 76px | 600 | 1.1 | -0.02em |
| Heading | 40px | 600 | 1.2 | -0.01em |
| Subheading | 22px | 500 | 1.35 | 0 |
| Body | 20px | 400 | 1.6 | 0 |
| Label | 13px | 600 | 1.3 | 0.1em uppercase |

## 4. Spacing & Layout
- Padding: 72-88px
- gap scale: 8/16/24/32/48/64px
- Two-column grid: image left, text right (interior-catalogue feel)
- Rounded corners on all image frames (12-16px) — soft, organic

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22, 1, 0.36, 1)
- Duration: 400ms
- Soft fade-up entrances; respect prefers-reduced-motion
- @starting-style for fade-in

## 6. Design Rules
- Background is always pale gray #e8e6e1 — never pure white, never dark
- DM Sans for headings; Inter for body, captions, metadata
- Warm Wood used ONCE per slide — single accent, never saturated
- Imagery: muted, natural light, organic textures — wood, linen, foliage
- Two-column layouts feel right: image left, text right (or vice versa)
- Rounded image frames (12-16px) — soften the strictness
- Forest Green is the only "color" — everything else is neutral or wood
- All-caps tracked labels (12-13px, 0.1em) for category markers
- Body line-height 1.6 — relaxed, breathable prose
- Contrast > 4.5:1 — forest green on pale gray is ~10:1, comfortably safe
