# Design System: Noir Mono

> Category: General
> Pure black and white with a single drop of red — the film-noir detective aesthetic, maximum drama.

Source inspiration: Sin City (2005) + classic noir posters + Schindler's List red coat

## 2. Color Palette & Roles

### Primary
- **Pure White** (`#ffffff`): CSS var `--palette-bg-primary`. Used for: headings, primary hooks, focal text.

### Secondary & Accent
- **Blood Red** (`#dc143c`): CSS var `--palette-accent`. Used for: ONE element per slide (a single word, a line, a shape).
- **Ash Gray** (`#3a3a3a`): CSS var `--palette-bg-secondary`. Used for: secondary text, dim labels, dividers.

### Surface & Background
- **Pure Black** (`#000000`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Charcoal** (`#0d0d0d`): CSS var `--palette-bg-surface`. Used for: panels, inset frames, letterbox bars.

### Neutrals & Text
- **Paper White** (`#f5f5f5`): CSS var `--palette-text`. Used for: body text (slightly off pure white for warmth).
- **Smoke Gray** (`#666666`): Used for: captions, secondary metadata.

### Gradient System
`linear-gradient(180deg, #000000 0%, #0d0d0d 100%)` — subtle frame depth.
`linear-gradient(90deg, #ffffff 0%, #dc143c 100%)` — rare transition gradient for hook text (use sparingly).
No chromatic gradients on background — noir forbids them.

## 3. Typography Rules

### Font Family
- Heading: "Fraunces"
- Body: "Inter"
- Fallbacks: serif / sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 96px | 900 | 1.0 |
| Heading | 48px | 800 | 1.1 |
| Subheading | 28px | 600 | 1.3 |
| Body | 24px | 400 | 1.55 |

## 4. Spacing & Layout
- Padding: 72-96px (more generous — noir is restrained, never cramped)
- gap scale: 8/16/24/32/48px
- One focal element per slide; large empty space is part of the design
- Letterbox bars (32px black) optional at top and bottom for cinematic feel

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.65,0,0.35,1)
- Duration: 500ms (slower than most — drama takes its time)
- Use @starting-style for fade-in; respect prefers-reduced-motion
- Optional fade-from-black entry: opacity 0 → 1 over 800ms ease-out

## 6. Design Rules
- ONLY three colors on screen: black, white, red — any other hue breaks the noir spell
- Red appears on exactly ONE element per slide (a single word, a single line, a single shape)
- Fraunces (variable serif) for headings; its range from thin to black is mandatory for dramatic hooks
- Lots of empty space — at least 30% of each slide should be intentional negative space
- Hook slides feature ONE dramatic sentence centered, often with one word in red
- Optional letterbox bars (32px black) at top and bottom evoke cinematic framing
- CTAs render as plain text links in red, underlined — never buttons or pills
- Slide 1 includes a "—" or "[ REDACTED ]" swipe indicator in red, bottom-right
- Body text alignment is always centered or fully justified — never left-aligned
- Contrast ratio ≥ 7:1: white #f5f5f5 on #000000 = 18.8:1 (WCAG AAA, all sizes)
