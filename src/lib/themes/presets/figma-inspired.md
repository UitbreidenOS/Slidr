# Design System: Figma Inspired

> Category: Brand-Inspired
> Playful multi-color blocks on white — geometric, collaborative, creative-tool energy. Color-coded, modular, expressive.

Source inspiration: contemporary collaborative design tool visual language (color-block discipline and geometric rigor only — not a brand asset)

## 2. Color Palette & Roles

### Primary
- **Fig Red** (`#f24e1e`): CSS var `--palette-bg-primary`. Used for: primary headings, dominant hooks, brand-colored callouts.

### Secondary & Accent
- **Fig Purple** (`#a259ff`): CSS var `--palette-accent`. Used for: secondary CTAs, gradient stops, focal pills.
- **Fig Blue** (`#1abcfe`): CSS var `--palette-bg-secondary`. Used for: tertiary highlights, link-style accents.

### Surface & Background
- **Canvas White** (`#ffffff`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Soft Gray Surface** (`#f5f5f5`): CSS var `--palette-bg-surface`. Used for: inset cards, code blocks, panels.

### Neutrals & Text
- **Charcoal Black** (`#1e1e1e`): CSS var `--palette-text`. Used for: body text, primary copy.
- **Mid Gray** (`#b3b3b3`): Used for: dividers, placeholders, secondary metadata.

### Additional Brand Accents (use sparingly, max one per slide)
- **Fig Pink** (`#ff7262`), **Fig Green** (`#0acf83`), **Fig Yellow** (`#ffbd2e`).

### Gradient System
`linear-gradient(90deg, #f24e1e 0%, #ff7262 33%, #a259ff 66%, #1abcfe 100%)` — signature multi-stop gradient for hero backgrounds.
`linear-gradient(135deg, #ffbd2e 0%, #0acf83 100%)` — secondary energy gradient.

## 3. Typography Rules

### Font Family
- Heading: "Bricolage Grotesque"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 80px | 800 | 1.0 |
| Heading | 44px | 700 | 1.15 |
| Subheading | 26px | 600 | 1.3 |
| Body | 22px | 400 | 1.55 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- One focal element per slide; content centered in 80% safe zone
- Geometric grid feel: align elements to 8px increments

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.34,1.56,0.64,1) (slight bounce for playful feel)
- Duration: 320ms
- Use @starting-style for fade-in; respect prefers-reduced-motion

## 6. Design Rules
- Background is white (#ffffff) — the canvas; color blocks sit ON the canvas
- Treat color as content: use 2-3 brand-color blocks per slide, never as decoration only
- Geometric shapes (circles, rounded squares, pill bars) welcome — play with scale
- The signature 4-color gradient is reserved for hero/hook backgrounds only
- Pick a SECONDARY accent per slide (one of purple/blue/pink/green/yellow) — avoid red on red
- Numbers/stats oversized (56px+) in Fig Red for emphasis
- No drop shadows on color blocks — flat is the aesthetic; use color contrast instead
- Small playful details OK: rotated labels, color-coded dots, mini-grid markers
