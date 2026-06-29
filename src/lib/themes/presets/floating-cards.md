# Design System: Floating Cards

> Category: 3D & Glassmorphism
> Clean dark developer aesthetic with high contrast card components, dramatic drop shadows, and modern typography.

Source inspiration: Linear, Vercel, ShadCN

## 2. Color Palette & Roles

### Primary
- **High White** (`#ffffff`): CSS var `--palette-bg-primary`. Used for: header text.

### Secondary & Accent
- **Amber Gold** (`#f59e0b`): CSS var `--palette-accent`. Used for: action prompts, icons.
- **Electric Indigo** (`#6366f1`): CSS var `--palette-bg-secondary`. Used for: code blocks, accent lines.

### Surface & Background
- **Slate Dark** (`#111827`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Card Surface** (`#1f2937`): CSS var `--palette-bg-surface`. Used for: float containers.

### Neutrals & Text
- **Slate White** (`#f9fafb`): CSS var `--palette-text`. Used for: body text.
- **Slate Muted** (`#9ca3af`): Used for: secondary text.

### Gradient System
`linear-gradient(180deg, #1f2937 0%, #111827 100%)` — card backdrop.

## 3. Typography Rules

### Font Family
- Heading: "Plus Jakarta Sans"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 70px | 800 | 1.1 |
| Heading | 38px | 700 | 1.2 |
| Subheading | 24px | 600 | 1.3 |
| Body | 20px | 400 | 1.5 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- Floating panels are raised via shadow: 0 20px 40px rgba(0,0,0,0.3)

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 250ms

## 6. Design Rules
- Interface resembles clean, professional dashboard frameworks
- Cards have a 1px border using rgba(255,255,255,0.06)
- Code elements look highlighted using modern fonts
- One main card container per page is best
