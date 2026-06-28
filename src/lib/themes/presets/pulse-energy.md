# Design System: Pulse Energy

> Category: GPT Image
> High-voltage energy drink — electric lime on near-black with crimson danger accents. Aggressive, bold, kinetic.

Source inspiration: "PULSE Energy Drink" (6-slide product carousel)

## 2. Color Palette & Roles

### Primary
- **Electric Lime** (`#a3e635`): CSS var `--palette-bg-primary`. Used for: brand name, headlines, energy markers.

### Secondary & Accent
- **Crimson** (`#f43f5e`): CSS var `--palette-accent`. Used for: CTAs, warning stats, urgency badges.
- **Yellow** (`#facc15`): CSS var `--palette-bg-secondary`. Used for: secondary highlights, caution tape motifs.

### Surface & Background
- **Void Black** (`#050510`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Carbon** (`#0d0d1a`): CSS var `--palette-bg-surface`. Used for: product cards, stat panels.

### Neutrals & Text
- **White** (`#ffffff`): CSS var `--palette-text`. Used for: body text.
- **Muted Gray** (`#6b7280`): Used for: captions, secondary labels.

### Gradient System
`linear-gradient(135deg, #050510 0%, #0d0d1a 50%, #1a1a2e 100%)` — void depth.
`linear-gradient(135deg, #a3e635 0%, #facc15 100%)` — energy gradient.
`linear-gradient(90deg, #facc15 0%, #f43f5e 100%)` — danger/urgency gradient.

## 3. Typography Rules

### Font Family
- Heading: "Orbitron"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 88px | 900 | 1.0 |
| Heading | 48px | 800 | 1.1 |
| Subheading | 28px | 700 | 1.2 |
| Body | 24px | 500 | 1.5 |
| Stat | 96px | 900 | 0.95 |

## 4. Spacing & Layout
- Padding: 56-72px (tighter for energy feel)
- gap scale: 8/16/24/32/48px

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.34,1.56,0.64,1)
- Duration: 200ms (fast, punchy)

## 6. Design Rules
- Near-black void background — high-contrast, aggressive, kinetic
- Orbitron (futuristic, geometric) at 900 weight for maximum impact
- Electric lime for brand and primary — glows on dark
- Crimson for ONE danger/urgency accent per slide (CTA, stat, warning)
- Stats are MASSIVE (96px+) — energy drink numbers should hit hard
- Angular shapes, diagonal cuts, and lightning-bolt motifs are encouraged
- Glow effects: box-shadow with lime at 40% opacity
- Tighter padding (56px) for a more intense, packed layout
