# Design System: Scandinavian Frost

> Category: Editorial & Magazine
> Pale off-white, frost blue, warm gray — IKEA-adjacent calm. Soft, livable, undecorated.

Source inspiration: Kinfolk / Cereal magazine + Scandinavian furniture catalogue aesthetics

## 2. Color Palette & Roles

### Primary
- **Charcoal Slate** (`#2d2d2d`): CSS var `--palette-bg-primary`. Used for: headings, body text, structural lines.

### Secondary & Accent
- **Frost Blue** (`#7ba7c4`): CSS var `--palette-accent`. Used for: one accent per slide (CTA, stat, hyperlink).
- **Warm Stone** (`#6b6b6b`): CSS var `--palette-bg-secondary`. Used for: secondary text, captions, axis labels.

### Surface & Background
- **Snow Off-White** (`#f8f7f4`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Bright White** (`#ffffff`): CSS var `--palette-bg-surface`. Used for: cards, product frames, inset panels.

### Neutrals & Text
- **Slate Black** (`#2d2d2d`): CSS var `--palette-text`. Used for: all body and heading copy.
- **Mist Gray** (`#a3a3a3`): Used for: fine print, dividers, captions.

### Gradient System
`linear-gradient(180deg, #f8f7f4 0%, #eef0ec 100%)` — soft morning light wash for cover slides.

## 3. Typography Rules

### Font Family
- Heading: "DM Sans"
- Body: "DM Sans"
- Fallbacks: -apple-system, "Helvetica Neue", Arial, sans-serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hook | 72px | 600 | 1.1 | -0.02em |
| Heading | 40px | 600 | 1.2 | -0.01em |
| Subheading | 22px | 500 | 1.35 | 0 |
| Body | 20px | 400 | 1.6 | 0 |
| Label | 13px | 500 | 1.3 | 0.08em uppercase |

## 4. Spacing & Layout
- Padding: 72-88px
- gap scale: 8/16/24/32/48/64px
- Two- and three-column layouts — IKEA-catalogue calm grid
- Rounded corners on all image frames (12-16px radius)

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22, 1, 0.36, 1)
- Duration: 350ms
- Soft fade-up entrances; respect prefers-reduced-motion
- @starting-style for fade-in

## 6. Design Rules
- Background is always snow off-white — never pure white, never dark
- DM Sans throughout — single family, varied weights for hierarchy
- Frost Blue used sparingly: one CTA or one key data point per slide
- Soft rounded corners (12-16px) on all image and card frames
- Warm Stone for secondary text, never pure black for metadata
- Two-column split is the default: image left, text right (or vice versa)
- No drop shadows — depth comes from spacing and tone, not effects
- Body line-height 1.6 — relaxed, breathable Scandi prose
- Imagery tone: muted, slightly desaturated, natural light
- Contrast > 4.5:1 — slate on off-white easily exceeds 12:1
