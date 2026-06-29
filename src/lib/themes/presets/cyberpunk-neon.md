# Design System: Cyberpunk Neon

> Category: General
> Hot pink and electric cyan over a glitching matrix grid — the 2077 night-market aesthetic.

Source inspiration: Cyberpunk 2077 + Blade Runner 2049 + glitch/CRT design trends

## 2. Color Palette & Roles

### Primary
- **Hot Pink** (`#ff2e88`): CSS var `--palette-bg-primary`. Used for: hook text, primary CTAs, headline emphasis.

### Secondary & Accent
- **Cyber Cyan** (`#00f0ff`): CSS var `--palette-accent`. Used for: swipe indicators, secondary CTAs, terminal prompts.
- **Magenta** (`#d000ff`): CSS var `--palette-bg-secondary`. Used for: gradient stops, glitch shadow offset, badge outlines.

### Surface & Background
- **Void Black** (`#05060d`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Carbon** (`#11121e`): CSS var `--palette-bg-surface`. Used for: code blocks, terminal frames, data panels.

### Neutrals & Text
- **Bone White** (`#f5f3ff`): CSS var `--palette-text`. Used for: body text, terminal output.
- **Ash Gray** (`#7c7c8a`): Used for: comments, line numbers, muted metadata.

### Gradient System
`linear-gradient(135deg, #05060d 0%, #11121e 50%, #1a0a2e 100%)` — slide background depth.
`linear-gradient(90deg, #ff2e88 0%, #00f0ff 100%)` — hook text gradient (signature cyberpunk split).
`linear-gradient(135deg, #d000ff 0%, #ff2e88 100%)` — accent gradient for badges and pills.

## 3. Typography Rules

### Font Family
- Heading: "Orbitron"
- Body: "JetBrains Mono"
- Fallbacks: monospace

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 88px | 900 | 1.0 |
| Heading | 44px | 800 | 1.1 |
| Subheading | 26px | 700 | 1.3 |
| Body | 22px | 400 | 1.5 |
| Terminal | 20px | 400 | 1.6 |

## 4. Spacing & Layout
- Padding: 56-72px
- gap scale: 8/16/24/32/48px
- One focal element per slide; content centered in 80% safe zone
- Grid lines: 1px #00f0ff at 8% opacity, 32px x 32px cells, drawn as background-image

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.16,1,0.3,1)
- Duration: 280ms
- Use @starting-style for fade-in; respect prefers-reduced-motion
- Optional glitch effect on hook: 2px chromatic-aberration via text-shadow in pink + cyan
- Scanline overlay: repeating-linear-gradient at 4% opacity, animated y-position

## 6. Design Rules
- Hot pink + cyan is the canonical pair — never pair pink with green or yellow
- Orbitron 900 for ALL hooks and headings; JetBrains Mono for body and code
- Background must include the cyan grid lines (8% opacity) or remain #05060d — never blank
- Glitch text effect (1-2px pink/cyan offset shadows) allowed on hook slides only
- CTAs render as sharp rectangular pills with 0 border-radius and 2px cyan border
- Terminal-style framing: `>` prompts in cyan, output in bone white, comments in ash gray
- Slide 1 includes a "jack in →" swipe indicator in cyan, bottom-right
- Numbers and stats render in Orbitron 800 with cyan glow, oversized (64px+)
- Contrast ratio ≥ 4.5:1: bone white #f5f3ff on #05060d = 19.2:1 (WCAG AAA)
