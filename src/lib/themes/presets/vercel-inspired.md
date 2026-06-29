# Design System: Vercel Inspired

> Category: Brand-Inspired
> Pure monochrome with a single electric accent — ultra-minimal developer-platform aesthetic. Generous whitespace, sharp edges, geometric.

Source inspiration: contemporary infrastructure platform visual language (typography and grid discipline only — not a brand asset)

## 2. Color Palette & Roles

### Primary
- **Pure White** (`#ffffff`): CSS var `--palette-bg-primary`. Used for: headings on dark, primary CTAs, inverted surfaces.

### Secondary & Accent
- **Electric Green** (`#00dc82`): CSS var `--palette-accent`. Used for: status dots, key data, deployment indicators, ONE accent per slide.
- **Link Blue** (`#0070f3`): CSS var `--palette-bg-secondary`. Used for: hyperlinks, secondary markers, breadcrumbs.

### Surface & Background
- **Pure Black** (`#000000`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Carbon Surface** (`#111111`): CSS var `--palette-bg-surface`. Used for: inset code blocks, terminal panels, cards.

### Neutrals & Text
- **Paper White** (`#ededed`): CSS var `--palette-text`. Used for: body text on dark backgrounds.
- **Mid Gray** (`#888888`): Used for: captions, secondary metadata, dividers.

### Gradient System
`linear-gradient(180deg, #000000 0%, #0a0a0a 100%)` — subtle dark depth for backgrounds.
`linear-gradient(90deg, #ffffff 0%, #a0a0a0 100%)` — used sparingly for inverted gradient text.

## 3. Typography Rules

### Font Family
- Heading: "Geist"
- Body: "Geist"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 88px | 600 | 1.0 |
| Heading | 48px | 500 | 1.1 |
| Subheading | 28px | 400 | 1.3 |
| Body | 22px | 400 | 1.55 |

## 4. Spacing & Layout
- Padding: 80-96px (extra generous for the ultra-minimal look)
- gap scale: 8/16/24/48/64px
- One focal element per slide; extreme negative space preferred

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 240ms (snappier than typical)
- Use @starting-style for fade-in; respect prefers-reduced-motion

## 6. Design Rules
- Background is ALWAYS pure black (#000000) — never gray, never gradient-heavy
- White type on black with NO gradients on body text
- Electric Green reserved for ONE element per slide max (status dot, number, or single CTA)
- Typography does the heavy lifting — minimal decoration, no shadows, no glow
- Use Geist for everything (single-family discipline); bold weight = heading emphasis
- Code blocks use #111111 surface with 1px #222222 border and Geist Mono
- Numbers/stats oversized (64px+) in white, never green
- Generous letter-spacing on small labels (-0.01em to -0.02em)
