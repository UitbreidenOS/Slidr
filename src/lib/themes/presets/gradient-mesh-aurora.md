# Design System: Gradient Mesh Aurora

> Category: Cinematic & Gradient
> Ethereal northern lights gradient backdrop shifting dynamically beneath clean modern typography.

Source inspiration: Aurora Borealis, digital art, Stripe

## 2. Color Palette & Roles

### Primary
- **Starlight White** (`#ffffff`): CSS var `--palette-bg-primary`. Used for: headers.

### Secondary & Accent
- **Aurora Teal** (`#34d399`): CSS var `--palette-accent`. Used for: icons, active states.
- **Aurora Purple** (`#a78bfa`): CSS var `--palette-bg-secondary`. Used for: secondary highlights.

### Surface & Background
- **Midnight Void** (`#0c0118`): CSS var `--palette-bg-background`. Used for: backdrop base.
- **Fog Gray** (`#1a0533cc`): CSS var `--palette-bg-surface`. Used for: text overlay boxes.

### Neutrals & Text
- **Slate Ice** (`#e2e8f0`): CSS var `--palette-text`. Used for: body text.
- **Nebula Gray** (`#94a3b8`): Used for: secondary captions.

### Gradient System
`linear-gradient(135deg, #0c0118 0%, #1a0533 50%, #030008 100%)` — base space backdrop.

## 3. Typography Rules

### Font Family
- Heading: "Satoshi"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 74px | 800 | 1.1 |
| Heading | 40px | 700 | 1.2 |
| Subheading | 26px | 600 | 1.3 |
| Body | 20px | 400 | 1.5 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 350ms

## 6. Design Rules
- Animated neon gradient aurora glows flow across the corners
- Keep text overlays clean and transparent
- White typography provides clean stark readability against the dark aurora mesh
- One aurora flow shape per slide is sufficient
