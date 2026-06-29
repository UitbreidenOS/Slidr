# Design System: Monochrome Depth

> Category: Agentic
> Depth Layering: enabled
> Black, white, and a single accent — high-contrast monochrome with one coloured word behind the subject.

Source inspiration: Documentary film posters + 2026 noir carousel trend

## 2. Color Palette & Roles

### Primary
- **Pure Black** (`#000000`): CSS var `--palette-bg-primary`. Used for: hero headline fill.

### Secondary & Accent
- **Signal Red** (`#ef4444`): CSS var `--palette-accent`. Used for: the ONE coloured word behind the subject.
- **Pure White** (`#ffffff`): CSS var `--palette-bg-secondary`. Used for: secondary headline (when on black).

### Surface & Background
- **Bone** (`#fafafa`): CSS var `--palette-bg-background`. Used for: default slide backdrop.
- **Smoke** (`#f4f4f5`): CSS var `--palette-bg-surface`. Used for: caption strips.

### Neutrals & Text
- **Ink** (`#0a0a0a`): CSS var `--palette-text`. Used for: body.
- **Steel** (`#a1a1aa`): Used for: metadata.

### Gradient System
`linear-gradient(180deg, #fafafa 0%, #e4e4e7 100%)` — soft bone wash.
`linear-gradient(180deg, #000000 0%, #27272a 100%)` — inversion slide.

## 3. Typography Rules

### Font Family
- Heading: "Inter Tight"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hero mono | 200px | 900 | 0.9 | -0.05em |
| Accent word | 200px | 900 | 0.9 | -0.05em |
| Heading | 48px | 800 | 1.1 | -0.02em |
| Body | 22px | 400 | 1.5 | 0 |
| Caption | 16px | 500 | 1.4 | 0.04em |

## 4. Spacing & Layout
- Padding: 56-80px
- gap scale: 16/24/40/64px
- Depth layering spacing: subject occupies 35-45% canvas, centred; ONE coloured word (the most important one) sits BEHIND the subject in signal red, while the rest of the headline is black — this single-colour interruption is the depth effect

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 500ms
- Subject entry: opacity 0 → 1, scale 1.02 → 1, 700ms
- Headline entry: opacity 0 → 1, 500ms — accent word has a 200ms delay after the rest

## 6. Design Rules
- DEPTH LAYERING REQUIRED: .headline { position: relative; z-index: 1; color: var(--palette-bg-primary) } .accent { color: var(--palette-accent) } .subject { position: relative; z-index: 2 }
- Background → Text → Subject (z-index order 0 → 1 → 2)
- Strict palette: black, white, ONE accent (red). No greys except for metadata.
- The accent colour appears ONCE per slide — exactly one word or one element
- Subject must be a transparent-background PNG cutout
- Use black-on-white AND white-on-black slides alternating across the carousel for rhythm
- Body copy max 8 words per slide
- Hairline 1px rules for divisions, no thick borders
- Use a single grain/noise texture on the background at 5% opacity for film feel
