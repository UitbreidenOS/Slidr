# Design System: Gradient Mesh Sunset

> Category: Cinematic & Gradient
> Warm sunset gradients of orange, pink, and gold creating a cinematic golden hour photography aesthetic.

Source inspiration: Golden hour photography, Instagram aesthetic

## 2. Color Palette & Roles

### Primary
- **Solar White** (`#ffffff`): CSS var `--palette-bg-primary`. Used for: header text.

### Secondary & Accent
- **Solar Orange** (`#f97316`): CSS var `--palette-accent`. Used for: active highlights, focus rings.
- **Solar Pink** (`#ec4899`): CSS var `--palette-bg-secondary`. Used for: tags, secondary highlights.

### Surface & Background
- **Deep Bronze** (`#1a0a00`): CSS var `--palette-bg-background`. Used for: background.
- **Dusty Rose** (`#2d1810cc`): CSS var `--palette-bg-surface`. Used for: text backing cards.

### Neutrals & Text
- **Warm Gold** (`#fef3c7`): CSS var `--palette-text`. Used for: body text.
- **Earth Muted** (`#a78bfa`): Used for: secondary text.

### Gradient System
`linear-gradient(135deg, #1a0a00 0%, #2d1810 100%)` — sunset gradient.

## 3. Typography Rules

### Font Family
- Heading: "Cabinet Grotesk"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 76px | 800 | 1.1 |
| Heading | 42px | 700 | 1.2 |
| Subheading | 26px | 600 | 1.3 |
| Body | 22px | 400 | 1.5 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.25,1,0.5,1)
- Duration: 300ms

## 6. Design Rules
- Gradients simulate sunset glows fading to deep twilight shadows
- Font choice has high geometric weight for display hooks
- Earth colors keep the feeling warm and inviting
- Limit high-contrast elements to maintain golden hour atmosphere
