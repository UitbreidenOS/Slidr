# Design System: Glass Depth

> Category: GPT Image
> Depth Layering: enabled
> Glassmorphism + depth layering — frosted, blurred type sits behind a subject on a tinted glass card.

Source inspiration: Apple Vision Pro / Linear UI 2026 + carousel trends

## 2. Color Palette & Roles

### Primary
- **Electric Violet** (`#8b5cf6`): CSS var `--palette-bg-primary`. Used for: backdrop wash, frosted headline glow.

### Secondary & Accent
- **Aqua** (`#22d3ee`): CSS var `--palette-accent`. Used for: glass borders, focus rings.
- **Lavender** (`#c4b5fd`): CSS var `--palette-bg-secondary`. Used for: gradient overlays.

### Surface & Background
- **Midnight** (`#0f0f1a`): CSS var `--palette-bg-background`. Used for: backdrop.
- **Frosted Glass** (`#1f1f2e`): CSS var `--palette-bg-surface`. Used for: glass cards (50% opacity + 24px backdrop-blur).

### Neutrals & Text
- **Frost White** (`#f8fafc`): CSS var `--palette-text`. Used for: body copy.
- **Mist** (`#94a3b8`): Used for: metadata.

### Gradient System
`linear-gradient(135deg, #0f0f1a 0%, #1e1b4b 60%, #312e81 100%)` — cosmic backdrop.
`linear-gradient(135deg, #8b5cf6 0%, #22d3ee 100%)` — headline gradient fill.

## 3. Typography Rules

### Font Family
- Heading: "Sora"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hero frosted | 160px | 800 | 0.95 | -0.04em |
| Heading | 48px | 700 | 1.1 | -0.02em |
| Subheading | 28px | 600 | 1.3 | 0 |
| Body | 22px | 400 | 1.5 | 0 |
| Caption | 16px | 500 | 1.4 | 0.04em |

## 4. Spacing & Layout
- Padding: 56-80px
- gap scale: 12/24/40/56px
- Depth layering spacing: subject occupies 40% canvas, centred; frosted headline bleeds across full width behind, with letters visibly blurred where they pass behind the subject

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 500ms
- Subject entry: scale 0.96 → 1, opacity 0 → 1, 600ms
- Headline entry: opacity 0 → 1 with backdrop-filter blur(40px) ramping from 0 to 24px

## 6. Design Rules
- DEPTH LAYERING REQUIRED: .headline { position: relative; z-index: 1; backdrop-filter: blur(20px); background: rgba(255,255,255,0.08); padding: 0.2em 0.4em } .subject { position: relative; z-index: 2 }
- Background → Text → Subject (z-index order 0 → 1 → 2)
- Headline should look FROSTED — apply backdrop-filter: blur(20-32px) on the text container
- Add a 1px glass border (rgba(255,255,255,0.18)) to the headline container for edge definition
- Subject should be a transparent-background PNG cutout (or shape)
- Always use 2-3 large blurred orbs (CSS box-shadow / filter blur) in the background for depth
- Body copy lives on a glass card behind nothing else — never overlay the subject
- Aquas for CTAs and focus rings; violets for headlines and gradients
