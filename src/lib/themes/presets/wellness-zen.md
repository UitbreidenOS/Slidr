# Design System: Wellness Zen

> Category: Niche & Industry
> Sage green on warm cream — calm, mindful, breath-led aesthetic. Generous whitespace, slow pace, gentle serif accents.

Source inspiration: contemporary yoga, meditation, and slow-living content aesthetic

## 2. Color Palette & Roles

### Primary
- **Sage Green** (`#a8b89c`): CSS var `--palette-bg-primary`. Used for: primary headings, dominant hooks, breath cues.

### Secondary & Accent
- **Warm Beige** (`#c9b89c`): CSS var `--palette-accent`. Used for: secondary markers, grounding accents, sand-tone elements.
- **Soft Clay** (`#b89984`): CSS var `--palette-bg-secondary`. Used for: gradient stops, warm contrast.

### Surface & Background
- **Warm Cream** (`#f5ede0`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Linen Surface** (`#ede5d5`): CSS var `--palette-bg-surface`. Used for: inset cards, quote panels, breath count blocks.

### Neutrals & Text
- **Deep Olive** (`#3a4a35`): CSS var `--palette-text`. Used for: body text, primary copy.
- **Stone Gray** (`#8a8a78`): Used for: captions, secondary metadata, quiet fine print.

### Gradient System
`linear-gradient(180deg, #f5ede0 0%, #ede5d5 100%)` — barely-perceptible warm depth.
`linear-gradient(135deg, #a8b89c 0%, #c9b89c 100%)` — used for hero hooks and gentle accents.

## 3. Typography Rules

### Font Family
- Heading: "Cormorant Garamond"
- Body: "Manrope"
- Fallbacks: serif / sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 72px | 500 | 1.15 |
| Heading | 40px | 500 | 1.25 |
| Subheading | 24px | 400 | 1.4 |
| Body | 22px | 400 | 1.65 |

## 4. Spacing & Layout
- Padding: 80-96px (extra generous — slowness as design)
- gap scale: 16/24/32/48/64px
- Centered alignment preferred; symmetrical, balanced composition
- One focal element per slide; the slide should feel still

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.4,0,0.2,1)
- Duration: 600ms (slower, breath-paced)
- Use @starting-style for fade-in; respect prefers-reduced-motion

## 6. Design Rules
- Background is always warm cream (#f5ede0 or #ede5d5) — never stark white, never dark
- Sage Green is the primary mark — use for ONE element per slide, never as fill
- Body text in Deep Olive (#3a4a35), never pure black — softer, more natural
- Breath cues and step numbers presented like meditation prompts ("Inhale. Exhale.")
- One slow, large number per slide is OK (a breath count, day number, or stat)
- Serif headings (Cormorant) convey calm; sans body (Manrope) keeps it readable
- Avoid bold weights in body copy — 400 max for calmness
- Gentle circular shapes welcome (mandala-like, breath-circle, sun motif) — soft, low contrast
- Copy tone: second person, present tense, gentle imperative ("Notice. Allow. Return.")
- Generous line-height (1.6+) on body — let the eye breathe
