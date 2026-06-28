# Design System: Claude Code Dark

> Category: Claude AI
> Terminal-inspired dark with monospace headings and code-block accents. GitHub-dark aesthetic for developer content.

Source inspiration: Claude AI category dominant style (81 carousels in promptbase catalog)

## 2. Color Palette & Roles

### Primary
- **Amber** (`#d29922`): CSS var `--palette-bg-primary`. Used for: headings, key terms, file names in code blocks.

### Secondary & Accent
- **Blue** (`#58a6ff`): CSS var `--palette-accent`. Used for: links, CTAs, syntax-highlight keywords.
- **Green** (`#3fb950`): CSS var `--palette-bg-secondary`. Used for: success states, positive numbers, "added" lines.

### Surface & Background
- **GitHub Dark** (`#0d1117`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Code Block** (`#161b22`): CSS var `--palette-bg-surface`. Used for: code blocks, terminal windows, inset panels.

### Neutrals & Text
- **Off-white** (`#e6edf3`): CSS var `--palette-text`. Used for: body text.
- **Muted Gray** (`#7d8590`): Used for: comments, secondary text, line numbers.

### Gradient System
`linear-gradient(135deg, #0d1117 0%, #161b22 100%)` — subtle depth for backgrounds.

## 3. Typography Rules

### Font Family
- Heading: "JetBrains Mono"
- Body: "Inter"
- Fallbacks: monospace / sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 64px | 700 | 1.1 |
| Heading | 40px | 600 | 1.2 |
| Code Block | 22px | 400 | 1.6 |
| Body | 24px | 400 | 1.5 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.4,0,0.2,1)
- Duration: 250ms

## 6. Design Rules
- Monospace (JetBrains Mono) for ALL headings — Inter for body text only
- Code blocks use #161b22 surface with a 1px border in #30363d
- Terminal-style framing: optional title bar with traffic-light dots (red/yellow/green)
- Amber for primary terms, blue for keywords, green for added/positive
- Background is always dark (#0d1117) — never light
- Use `>` prefixes for "terminal command" styled text
- Numbers/stats in amber, oversized (56px+)
