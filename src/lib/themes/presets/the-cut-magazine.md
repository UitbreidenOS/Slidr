# Design System: The Cut Magazine

> Category: Editorial & Magazine
> Off-white with hot pink accent — opinion-driven, bold serif headlines, unapologetic.

Source inspiration: The Cut (New York Magazine) + opinion-editorial digital-first design

## 2. Color Palette & Roles

### Primary
- **Pure Black** (`#0a0a0a`): CSS var `--palette-bg-primary`. Used for: all typography, headlines, body text.

### Secondary & Accent
- **Hot Pink** (`#ff3d8b`): CSS var `--palette-accent`. Used for: ONE signature element per slide (CTA, quote bar, underline).
- **Cool Gray** (`#525252`): CSS var `--palette-bg-secondary`. Used for: secondary text, captions, metadata.

### Surface & Background
- **Off-White** (`#faf7f2`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Pure White** (`#ffffff`): CSS var `--palette-bg-surface`. Used for: inset cards, pull quote frames.

### Neutrals & Text
- **Ink** (`#0a0a0a`): CSS var `--palette-text`. Used for: all body and heading copy.
- **Muted Gray** (`#737373`): Used for: footer text, fine print, timestamps.

### Gradient System
`linear-gradient(135deg, #ff3d8b 0%, #ff6ba8 100%)` — hot pink gradient for CTA backgrounds only.

## 3. Typography Rules

### Font Family
- Heading: "Playfair Display"
- Body: "Inter"
- Fallbacks: Georgia, serif / sans-serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hook | 88px | 800 | 1.0 | -0.03em |
| Heading | 48px | 700 | 1.1 | -0.02em |
| Subheading | 24px | 600 | 1.3 | 0 |
| Body | 22px | 400 | 1.5 | 0 |
| Pull Quote | 32px | 600 | 1.3 | 0 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48/64px
- Two-column editorial split: bold headline left, body or quote right
- Hot pink horizontal bar (4-8px) can act as section divider

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22, 1, 0.36, 1)
- Duration: 350ms
- @starting-style for fade-up; respect prefers-reduced-motion
- Hot pink elements enter with quick slide-in from the side

## 6. Design Rules
- Background is always off-white #faf7f2 — never pure white, never dark
- Playfair Display for opinion-driven headlines — bold, declarative
- Hot Pink is THE accent — used once per slide, never as fill on body text
- Hot pink horizontal bars (4-8px) separate major sections
- Pull quotes get a hot pink left border (6px) — signature style
- All-caps small labels (12-14px, tracked 0.12em) for category tags
- Headlines can break into 2-3 lines for emphasis — line-height 1.0
- Two-column layouts feel right: punchy headline left, supporting copy right
- Captions and metadata in cool gray, never colored
- Contrast > 4.5:1 — black on off-white is ~19:1, opinion-safe
