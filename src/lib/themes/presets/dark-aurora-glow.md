# Design System: Dark Aurora Glow

> Category: Premium Dark
> Clean deep charcoal interfaces surrounded by beautiful aurora borealis neon light leak edge glows.

Source inspiration: GitHub Copilot, modern web glow aesthetics

## 2. Color Palette & Roles

### Primary
- **Active White** (`#f8fafc`): CSS var `--palette-bg-primary`. Used for: main headers.

### Secondary & Accent
- **Cyan Glow** (`#06b6d4`): CSS var `--palette-accent`. Used for: cyan neon leaks, tags.
- **Violet Glow** (`#a855f7`): CSS var `--palette-bg-secondary`. Used for: secondary highlights.

### Surface & Background
- **Deep Slate** (`#0d0d12`): CSS var `--palette-bg-background`. Used for: backdrop.
- **Dark Surface** (`#1a1a24cc`): CSS var `--palette-bg-surface`. Used for: cards.

### Neutrals & Text
- **Slate Gray** (`#e2e8f0`): CSS var `--palette-text`. Used for: body text.
- **Muted Steel** (`#475569`): Used for: captions.

### Gradient System
`radial-gradient(circle at 10% 10%, rgba(6,182,212,0.1) 0%, transparent 50%)` — top glow.

## 3. Typography Rules

### Font Family
- Heading: "Manrope"
- Body: "Inter"
- Fallbacks: sans-serif

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- Floating cards have dynamic neon border glow outlines

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.4,0,0.2,1)
- Duration: 300ms

## 6. Design Rules
- Glow effects are created using radial gradients placed under the cards
- Interface has modern, clean geometric structures (Manrope font)
- Accent colors should look like bright energy streams
- Keep background dark slate (#0d0d12) for glow contrast
