# Design System: Neon Depth

> Category: Claude AI
> Depth Layering: enabled
> Cyberpunk neon — glowing type sits BEHIND a silhouette, neon outlines extend past the figure on both sides.

Source inspiration: Cyberpunk 2077 promo art + 2026 neon-cyber carousels

## 2. Color Palette & Roles

### Primary
- **Neon Magenta** (`#ff00aa`): CSS var `--palette-bg-primary`. Used for: hero headline glow.

### Secondary & Accent
- **Cyan** (`#00f0ff`): CSS var `--palette-accent`. Used for: outline glow, CTA.
- **Violet** (`#a855f7`): CSS var `--palette-bg-secondary`. Used for: gradient stop.

### Surface & Background
- **Blackout** (`#050505`): CSS var `--palette-bg-background`. Used for: backdrop.
- **Carbon** (`#0f0f14`): CSS var `--palette-bg-surface`. Used for: card panels.

### Neutrals & Text
- **Plasma White** (`#f4f4f5`): CSS var `--palette-text`. Used for: body.
- **Dim** (`#71717a`): Used for: metadata.

### Gradient System
`linear-gradient(135deg, #050505 0%, #1a0a1f 50%, #0a0a1a 100%)` — dark cyber stage.
`linear-gradient(135deg, #ff00aa 0%, #a855f7 50%, #00f0ff 100%)` — neon sweep.

## 3. Typography Rules

### Font Family
- Heading: "Orbitron"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hero glow | 180px | 900 | 0.95 | -0.02em |
| Heading | 48px | 800 | 1.05 | -0.01em |
| Subheading | 26px | 700 | 1.3 | 0.02em |
| Body | 22px | 400 | 1.5 | 0 |
| Mono label | 16px | 700 | 1.3 | 0.12em |

## 4. Spacing & Layout
- Padding: 56-80px
- gap scale: 16/24/40/64px
- Depth layering spacing: silhouette occupies 45% canvas centred; neon headline stretches edge-to-edge behind it, glowing outward 24px+

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.65,0,0.35,1)
- Duration: 450ms
- Subject entry: opacity 0 → 1, scale 1.04 → 1, 700ms with glow pulse
- Headline entry: opacity 0 → 1 with text-shadow flicker (0 → 60px magenta) over 600ms

## 6. Design Rules
- DEPTH LAYERING REQUIRED: .headline { position: relative; z-index: 1; text-shadow: 0 0 24px var(--palette-bg-primary), 0 0 64px var(--palette-bg-primary) } .subject { position: relative; z-index: 2; filter: drop-shadow(0 0 32px var(--palette-accent)) }
- Background → Text → Subject (z-index order 0 → 1 → 2)
- Use ALL-CAPS Orbitron for headlines, mono labels in monospace fallback
- Headline must have a multi-layer text-shadow: inner glow + outer glow (magenta + cyan)
- Subject silhouette should be a hard-edged transparent PNG (no soft edges)
- Add a 1-2px cyan outline on the silhouette (filter: drop-shadow) for cyber definition
- Background should have subtle scanlines or noise texture (CSS gradient repeating-linear-gradient, opacity < 0.08)
- Avoid more than 2 neon colours per slide; let the dark backdrop carry the rest
