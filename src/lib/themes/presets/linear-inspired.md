# Design System: Linear Inspired

> Category: Brand-Inspired
> Dark indigo canvas with sharp violet gradients — the precise, calm, product-led aesthetic. Sharp edges, refined typography, considered detail.

Source inspiration: contemporary product-tool visual language (gradient signature and grid rigor only — not a brand asset)

## 2. Color Palette & Roles

### Primary
- **Linear Violet** (`#5e6ad2`): CSS var `--palette-bg-primary`. Used for: primary headings, brand marks, dominant hooks.

### Secondary & Accent
- **Bright Lilac** (`#9b8cff`): CSS var `--palette-accent`. Used for: secondary CTAs, gradient stops, focused highlights.
- **Hot Magenta** (`#e4572e`): CSS var `--palette-bg-secondary`. Used for: priority flags, status pills, "new" markers (rare).

### Surface & Background
- **Deep Indigo** (`#1a1b3a`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Elevated Panel** (`#262848`): CSS var `--palette-bg-surface`. Used for: inset cards, feature panels, code blocks.

### Neutrals & Text
- **Snow White** (`#fafafa`): CSS var `--palette-text`. Used for: primary body text, labels.
- **Lavender Gray** (`#a4a8c4`): Used for: secondary text, captions, metadata.

### Gradient System
`linear-gradient(135deg, #5e6ad2 0%, #2d2f6e 100%)` — used for hero backgrounds and gradient text fills.
`radial-gradient(circle at 80% 20%, #9b8cff33 0%, transparent 50%)` — subtle atmospheric glow.

## 3. Typography Rules

### Font Family
- Heading: "Inter Display"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 80px | 700 | 1.05 |
| Heading | 44px | 600 | 1.15 |
| Subheading | 26px | 500 | 1.3 |
| Body | 22px | 400 | 1.55 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- One focal element per slide; content centered in 80% safe zone

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 280ms
- Use @starting-style for fade-in; respect prefers-reduced-motion

## 6. Design Rules
- Default background is #1a1b3a deep indigo — never pure black, never light
- Violet (#5e6ad2) is the dominant primary; lilac (#9b8cff) supports it as gradient companion
- Gradient text fills (clip-path or background-clip:text) for hook words when possible
- Cards use #262848 surface with a 1px border in #2d2f6e
- Single accent color discipline: pick violet OR lilac per slide, not both
- Numbers/stats oversized (56px+) in #9b8cff lilac for visual hierarchy
- Subtle glow on the hook via box-shadow at low opacity (0.15-0.25) for depth
- Typography-driven hierarchy — avoid icons, decorative shapes, or noise
