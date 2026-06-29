# Design System: Stripe Inspired

> Category: Brand-Inspired
> Modern fintech aesthetic — soft purple-to-blue gradients on clean white surfaces. Confident, developer-friendly, premium.

Source inspiration: contemporary payment platform visual language (palette and gradient language only — not a brand asset)

## 2. Color Palette & Roles

### Primary
- **Iris Purple** (`#635bff`): CSS var `--palette-bg-primary`. Used for: headings, primary CTAs, brand marks, key data points.

### Secondary & Accent
- **Cyan Blue** (`#00d4ff`): CSS var `--palette-accent`. Used for: hover states, swipe indicators, secondary highlights, link underlines.
- **Deep Indigo** (`#0a2540`): CSS var `--palette-bg-secondary`. Used for: section anchors, dark surface blocks, subhead contrast.

### Surface & Background
- **Clean White** (`#ffffff`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Mist Surface** (`#f6f9fc`): CSS var `--palette-bg-surface`. Used for: inset cards, code blocks, soft panels.

### Neutrals & Text
- **Ink Black** (`#1a1f36`): CSS var `--palette-text`. Used for: body text, primary copy.
- **Slate Gray** (`#525f7f`): Used for: captions, secondary metadata, helper text.

### Gradient System
`linear-gradient(135deg, #635bff 0%, #00d4ff 100%)` — used for hero hooks and primary CTAs.
`linear-gradient(180deg, #ffffff 0%, #f6f9fc 100%)` — used for soft slide depth backgrounds.

## 3. Typography Rules

### Font Family
- Heading: "Sora"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 76px | 700 | 1.05 |
| Heading | 44px | 600 | 1.2 |
| Subheading | 26px | 500 | 1.3 |
| Body | 22px | 400 | 1.55 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px
- One focal element per slide; content centered in 80% safe zone

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 300ms
- Use @starting-style for fade-in; respect prefers-reduced-motion

## 6. Design Rules
- Default background is white (#ffffff) — never use a dark base
- Primary purple for ONE bold element per slide (hook or CTA, not both)
- Gradient fills (clip-path:text) on hook words when possible for the signature soft-glow look
- Code blocks use #f6f9fc surface with a 1px border in #e3e8ee
- Use Inter for body, Sora for headings — never mix display and body weights inconsistently
- Numbers and statistics oversized (56px+) in Iris Purple for fintech authority
- Slide 1 includes a subtle gradient mesh backdrop behind the hero hook
