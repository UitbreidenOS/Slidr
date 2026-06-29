# Design System: Gothic Violet

> Category: General
> Black cathedral stone, deep plum shadows, bone-white inscriptions — the Gothic manuscript aesthetic.

Source inspiration: Medieval illuminated manuscripts + Blackletter type + cathedral architecture

## 2. Color Palette & Roles

### Primary
- **Bone White** (`#f4ecd8`): CSS var `--palette-bg-primary`. Used for: headings, primary text, decorative initials.

### Secondary & Accent
- **Royal Plum** (`#6b2d5c`): CSS var `--palette-accent`. Used for: CTAs, decorative rules, key emphasis.
- **Dim Violet** (`#4a1d4a`): CSS var `--palette-bg-secondary`. Used for: secondary headings, gradient stops.

### Surface & Background
- **Cathedral Black** (`#0a050d`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Stone Gray** (`#1a1019`): CSS var `--palette-bg-surface`. Used for: panels, manuscript frames.

### Neutrals & Text
- **Aged Parchment** (`#e8dcc4`): CSS var `--palette-text`. Used for: body text (warm, slightly yellowed).
- **Ash Plum** (`#5a4a5a`): Used for: captions, marginalia, footnotes.

### Gradient System
`linear-gradient(180deg, #0a050d 0%, #1a1019 100%)` — cathedral depth.
`radial-gradient(circle at 50% 0%, #4a1d4a 0%, transparent 40%)` — vault glow from above.
`linear-gradient(135deg, #f4ecd8 0%, #6b2d5c 100%)` — manuscript gradient for decorative elements.

## 3. Typography Rules

### Font Family
- Heading: "UnifrakturCook"
- Body: "Lora"
- Fallbacks: serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 72px | 700 | 1.15 |
| Heading | 40px | 600 | 1.2 |
| Subheading | 26px | 500 | 1.35 |
| Body | 23px | 400 | 1.6 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- One focal element per slide; centered or fully-justified alignment
- Optional 2px plum border frame around slide content (1-2px inset)

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.4,0,0.2,1)
- Duration: 400ms
- Use @starting-style for fade-in; respect prefers-reduced-motion
- Optional vault glow pulse: 4s opacity oscillation on the radial-gradient halo

## 6. Design Rules
- UnifrakturCook (blackletter) for ALL hooks and primary headings; Lora for body
- Blackletter is heavy and ornate — reserve it for hooks only, never body text
- Plum appears on decorative rules, drop caps, and ONE accent element per slide
- Optional 2px plum border frame around slide content evokes manuscript margins
- Drop caps at 72-96px in plum blackletter at the start of paragraphs are encouraged
- Hook slides feel like illuminated manuscript pages: ornate initial + serif body
- CTAs are pill buttons with plum gradient fill and 1px bone-white border
- Slide 1 includes an ornamental flourish "❦" or "→" indicator in plum, bottom-right
- Body text justified (text-align: justify) with hyphens auto — manuscript feel
- Contrast ratio ≥ 4.5:1: aged parchment #e8dcc4 on #0a050d = 15.7:1 (WCAG AAA)
