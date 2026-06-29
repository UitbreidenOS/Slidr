# Design System: Hacker Green

> Category: Claude AI
> Black + phosphor green + scan lines — the 1995 hacker film aesthetic, every slide a CRT.

Source inspiration: Hackers (1995) + WarGames + Mr. Robot title cards

## 2. Color Palette & Roles

### Primary
- **Phosphor Green** (`#00ff41`): CSS var `--palette-bg-primary`. Used for: headings, hooks, primary data, prompts.

### Secondary & Accent
- **Bright Lime** (`#7cff7c`): CSS var `--palette-accent`. Used for: highlighted tokens, swipe indicator, blinking cursor.
- **Dim Green** (`#008f1f`): CSS var `--palette-bg-secondary`. Used for: comments, secondary headings, dim labels.

### Surface & Background
- **Pure Black** (`#000000`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Terminal Dark** (`#0a140a`): CSS var `--palette-bg-surface`. Used for: code blocks, terminal frames.

### Neutrals & Text
- **Green Glow** (`#00ff41`): CSS var `--palette-text`. Used for: body text (unified with primary).
- **Forest Shadow** (`#1a3a1a`): Used for: scrollbar tracks, watermark text, very subtle borders.

### Gradient System
`linear-gradient(180deg, #000000 0%, #0a140a 100%)` — CRT vignette.
`linear-gradient(90deg, #00ff41 0%, #7cff7c 100%)` — green gradient for emphasized spans.
Background must remain near-pure-black — no chromatic gradients allowed.

## 3. Typography Rules

### Font Family
- Heading: "VT323"
- Body: "JetBrains Mono"
- Fallbacks: monospace

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 72px | 400 | 1.1 |
| Heading | 40px | 400 | 1.2 |
| Subheading | 26px | 400 | 1.35 |
| Body | 22px | 400 | 1.6 |
| Terminal | 20px | 400 | 1.5 |

## 4. Spacing & Layout
- Padding: 56-72px
- gap scale: 8/16/24/32/48px
- One focal element per slide; monospace column alignment
- CRT scanlines: repeating-linear-gradient at 5% opacity, horizontal 3px stripes

## 5. Motion (CSS-first)
- Easing: steps(8, end) for "type-on" text reveals
- Duration: 280ms
- Use @starting-style for fade-in; respect prefers-reduced-motion
- Optional blinking cursor (1.2s step-end); optional character-by-character text reveal

## 6. Design Rules
- ONLY green-on-black is allowed — never use any other hue, even for accents
- VT323 for ALL hooks and headings (its bitmap-pixel feel is the point); JetBrains Mono for body
- Optional scanline overlay across full slide at 5% opacity evokes a CRT monitor
- Code blocks framed with a green border at 30% opacity and `>` or `$` prompt prefix
- Headings glow softly: text-shadow #00ff41 at 25% opacity, 12px blur
- Slide 1 includes a `> ACCESS GRANTED` or `[ROOT] →` indicator bottom-right
- All caps for hooks and terminal labels; sentence case for body copy
- Numbers render in JetBrains Mono, never tabular figures — keep them raw and machine-like
- Contrast ratio ≥ 7:1: #00ff41 on #000000 = 15.3:1 (WCAG AAA, all sizes)
