# Design System: Neon Tube Type

> Category: 3D Typography
> Vibrant neon lighting tube style display typography with dynamic outer glow shadows and deep obsidian backdrops.

Source inspiration: Las Vegas signage, neon glass tubes

## 2. Color Palette & Roles

### Primary
- **Laser Glow** (`#ffffff`): CSS var `--palette-bg-primary`. Used for: header text.

### Secondary & Accent
- **Lime Glow** (`#39ff14`): CSS var `--palette-accent`. Used for: neon text glows, active states.
- **Neon Pink** (`#ff6ec7`): CSS var `--palette-bg-secondary`. Used for: secondary highlights.

### Surface & Background
- **Void Obsidian** (`#0a0612`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Dark Surface** (`#150e20cc`): CSS var `--palette-bg-surface`. Used for: panel backing.

### Neutrals & Text
- **Light Gray** (`#d4d4d8`): CSS var `--palette-text`. Used for: body text.
- **Deep Muted** (`#27272a`): Used for: secondary text.

### Gradient System
`linear-gradient(135deg, #0a0612 0%, #150e20 100%)` — dark neon background.

## 3. Typography Rules

### Font Family
- Heading: "Space Grotesk"
- Body: "Inter"
- Fallbacks: sans-serif

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- Layout uses glowing neon outlines for boundaries

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.19,1,0.22,1)
- Duration: 350ms

## 6. Design Rules
- Main headers utilize stacked text-shadow styles to replicate glowing glass neon tube lights
- Use Lime Glow (#39ff14) and Neon Pink (#ff6ec7) as the main glowing segments
- Body text should remain non-glowing light gray (#d4d4d8) to maintain high contrast legibility
- Add ambient glow pools at the corners for dark neon atmospheric feels
