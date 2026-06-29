# Design System: Terminal Mono

> Category: Claude AI
> Pure black canvas with phosphor amber text — the Sun-4 workstation aesthetic, JetBrains Mono everywhere.

Source inspiration: Vintage VT100 terminals + amber CRT phosphor + JetBrains Mono showcase reels

## 2. Color Palette & Roles

### Primary
- **Phosphor Amber** (`#ffb000`): CSS var `--palette-bg-primary`. Used for: all headings, hooks, primary text, prompts.

### Secondary & Accent
- **Bright Amber** (`#ffd966`): CSS var `--palette-accent`. Used for: highlighted words, swipe indicator, blinking cursor.
- **Dim Amber** (`#cc8800`): CSS var `--palette-bg-secondary`. Used for: secondary headings, comment blocks, scrollback.

### Surface & Background
- **Terminal Black** (`#000000`): CSS var `--palette-bg-background`. Used for: default slide background.
- **CRT Black** (`#0a0a0a`): CSS var `--palette-bg-surface`. Used for: terminal frames, code blocks, panels.

### Neutrals & Text
- **Amber Glow** (`#ffb000`): CSS var `--palette-text`. Used for: body text (same as primary for cohesion).
- **Smoke** (`#5a4a2e`): Used for: timestamps, line numbers, optional watermark.

### Gradient System
`linear-gradient(180deg, #000000 0%, #0a0a0a 100%)` — subtle CRT vignette.
`linear-gradient(90deg, #ffb000 0%, #ffd966 100%)` — amber gradient for highlighted spans.
No color gradients on background — terminal aesthetic forbids them.

## 3. Typography Rules

### Font Family
- Heading: "JetBrains Mono"
- Body: "JetBrains Mono"
- Fallbacks: monospace

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 72px | 700 | 1.1 |
| Heading | 38px | 700 | 1.2 |
| Subheading | 24px | 600 | 1.35 |
| Body | 22px | 400 | 1.6 |
| Prompt | 20px | 500 | 1.5 |

## 4. Spacing & Layout
- Padding: 56-72px
- gap scale: 8/16/24/32/48px
- One focal element per slide; monospace alignment means use literal column grids
- Optional CRT scanlines: repeating-linear-gradient at 4% opacity, horizontal 2px stripes

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.4,0,0.2,1)
- Duration: 220ms
- Use @starting-style for fade-in; respect prefers-reduced-motion
- Optional blinking cursor (1s step-end) on hook slide only
- Optional text "type-on" via CSS animation steps() — never JS-driven

## 6. Design Rules
- ONLY two colors on screen: #000000 background and #ffb000 (or its amber variants) — no exceptions
- JetBrains Mono for ALL text — headings, body, captions, numbers, everything
- Use `>` for terminal prompt prefix, `$` for shell, `#` for root/admin
- Optional CRT effects (scanlines, vignette, blinking cursor) are encouraged but never cover >10% opacity
- Text glow: text-shadow with #ffb000 at 30% opacity, 8px blur, on hooks and prompts
- Lines wrap at 64ch on body text; never let a paragraph exceed 72ch
- Slide 1 includes a `< READY >` or `[ENTER] →` indicator in bright amber, bottom-right
- Numbers render as ASCII-decimal only (e.g. "2,048") — no fancy symbols like ↑ or →
- Contrast ratio ≥ 7:1: #ffb000 on #000000 = 11.6:1 (WCAG AAA, all sizes)
