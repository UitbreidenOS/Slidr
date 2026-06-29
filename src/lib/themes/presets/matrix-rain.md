# Design System: Matrix Rain

> Category: Claude AI
> Pure black with a cascading green glyph rain — the 1999 cyberpunk-occult aesthetic, minimalist now.

Source inspiration: The Matrix (1999) opening titles + terminal-as-art + binary visuals

## 2. Color Palette & Roles

### Primary
- **Matrix Green** (`#00ff66`): CSS var `--palette-bg-primary`. Used for: headings, primary text, prompt characters.

### Secondary & Accent
- **Bright Lime** (`#7cffa6`): CSS var `--palette-accent`. Used for: CTAs, swipe indicator, blinking cursor.
- **Deep Green** (`#006633`): CSS var `--palette-bg-secondary`. Used for: secondary headings, faint glyphs, scrollback.

### Surface & Background
- **Pure Black** (`#000000`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Terminal Dark** (`#0a0f0a`): CSS var `--palette-bg-surface`. Used for: code blocks, terminal frames.

### Neutrals & Text
- **Green Glow** (`#00ff66`): CSS var `--palette-text`. Used for: body text (unified with primary).
- **Shadow** (`#1a2e1a`): Used for: very faint grid lines, watermark text.

### Gradient System
`linear-gradient(180deg, #000000 0%, #0a0f0a 100%)` — terminal vignette.
`linear-gradient(180deg, #7cffa6 0%, #00ff66 50%, #006633 100%)` — vertical glyph fade.
No chromatic gradients on background — terminal aesthetic forbids them.

## 3. Typography Rules

### Font Family
- Heading: "Share Tech Mono"
- Body: "JetBrains Mono"
- Fallbacks: monospace

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 72px | 700 | 1.15 |
| Heading | 36px | 600 | 1.2 |
| Subheading | 24px | 500 | 1.35 |
| Body | 22px | 400 | 1.6 |
| Glyph | 18px | 400 | 1.4 |

## 4. Spacing & Layout
- Padding: 56-72px
- gap scale: 8/16/24/32/48px
- One focal element per slide; content centered in 80% safe zone
- Optional glyph rain background: columns of randomly-cycling katakana/glyphs at 10-15% opacity

## 5. Motion (CSS-first)
- Easing: steps(20, end) for glyph column scrolling
- Duration: 300ms (for fades); 8-12s for glyph rain (slow)
- Use @starting-style for fade-in; respect prefers-reduced-motion
- Optional vertical glyph rain: columns of single characters scrolling down at varied speeds
- Optional blinking cursor (1.2s step-end) on hook slide

## 6. Design Rules
- ONLY green-on-black is allowed — never use any other hue, even for accents
- JetBrains Mono for ALL text — headings, body, captions, numbers, everything
- Optional vertical glyph rain background at 10-15% opacity evokes the Matrix
- Text glow: text-shadow with #00ff66 at 25% opacity, 12px blur on hooks
- Glyph columns use a mix of katakana, numerals, and Latin letters at varied speeds
- Code blocks framed with a green border at 30% opacity and `>` or `$` prompt prefix
- Slide 1 includes a `> WAKE UP` or "[ FOLLOW ]" swipe indicator in bright lime, bottom-right
- All caps for hooks; sentence case for body — terminal convention
- Contrast ratio ≥ 7:1: #00ff66 on #000000 = 14.6:1 (WCAG AAA, all sizes)
