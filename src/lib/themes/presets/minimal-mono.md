# Design System: Minimal Mono

> Category: Editorial & Magazine
> Pure black, pure white, one warm gray — only Inter, no serifs, no decoration. The strictest minimalism.

Source inspiration: Dieter Rams design principles + monochrome Swiss editorial design

## 2. Color Palette & Roles

### Primary
- **Pure Black** (`#000000`): CSS var `--palette-bg-primary`. Used for: all typography, headlines, body text.

### Secondary & Accent
- **Warm Gray** (`#6b6b6b`): CSS var `--palette-accent`. Used for: single accent per slide (rule, label, divider).
- **Cool Gray** (`#9a9a9a`): CSS var `--palette-bg-secondary`. Used for: secondary text, captions, metadata.

### Surface & Background
- **Pure White** (`#ffffff`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Soft White** (`#fafafa`): CSS var `--palette-bg-surface`. Used for: subtle insets, image frames.

### Neutrals & Text
- **Black** (`#000000`): CSS var `--palette-text`. Used for: all body and heading copy.
- **Light Gray** (`#d4d4d4`): Used for: dividers, hairlines, registration marks.

### Gradient System
No gradients. Strict flatness — black, white, gray only.

## 3. Typography Rules

### Font Family
- Heading: "Inter"
- Body: "Inter"
- Fallbacks: "Helvetica Neue", Arial, sans-serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hook | 96px | 800 | 1.0 | -0.04em |
| Heading | 48px | 700 | 1.1 | -0.02em |
| Subheading | 24px | 500 | 1.3 | 0 |
| Body | 20px | 400 | 1.5 | 0 |
| Label | 13px | 500 | 1.3 | 0.08em uppercase |

## 4. Spacing & Layout
- Padding: 80-96px (very generous — let whitespace speak)
- gap scale: 8/16/24/32/48/80px
- Centered single-column for text-only slides
- At least 40% of every slide must be empty space

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
- Duration: 250ms (quick, decisive — no drama)
- Hard cuts and quick fades only; respect prefers-reduced-motion
- @starting-style for fade-in

## 6. Design Rules
- Background is always pure white #ffffff — never cream, never off-white
- Inter ONLY — no serifs, no display fonts, no monospace
- Warm Gray used ONCE per slide — a single rule, dot, or word
- NO color, NO images of people, NO decorative shapes — only type
- Hairline rules (1px black) separate sections — minimal and crisp
- Left-aligned typography only — never centered for body text
- Captions in 13px with 0.08em tracking — small and considered
- One focal element per slide — let everything else recede
- Whitespace is the loudest element — never fill more than 60% of slide
- Contrast > 4.5:1 — black on white is 21:1, maximum safety
