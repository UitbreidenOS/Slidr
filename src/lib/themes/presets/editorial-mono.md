# Design System: Editorial Mono

> Category: Agentic
> Depth Layering: enabled
> Newspaper-style — black serif italics sit BEHIND a reporter cutout, paper backdrop, hairline rules.

Source inspiration: NYT Opinion / The Atlantic feature layouts, 2026

## 2. Color Palette & Roles

### Primary
- **Newsprint Black** (`#1a1a1a`): CSS var `--palette-bg-primary`. Used for: headline fill.

### Secondary & Accent
- **Press Red** (`#b91c1c`): CSS var `--palette-accent`. Used for: kicker, drop cap, section labels.
- **Press Blue** (`#1e3a8a`): CSS var `--palette-bg-secondary`. Used for: secondary links.

### Surface & Background
- **Newsprint** (`#f5f1e8`): CSS var `--palette-bg-background`. Used for: paper backdrop.
- **Aged** (`#e7dfce`): CSS var `--palette-bg-surface`. Used for: caption strips.

### Neutrals & Text
- **Ink** (`#1a1a1a`): CSS var `--palette-text`. Used for: body.
- **Ash** (`#78716c`): Used for: metadata, bylines.

### Gradient System
`linear-gradient(180deg, #f5f1e8 0%, #e7dfce 100%)` — paper age gradient.
`linear-gradient(180deg, #f5f1e8 0%, #d6cfc0 100%)` — deeper aged paper.

## 3. Typography Rules

### Font Family
- Heading: "Playfair Display"
- Body: "Source Serif 4"
- Fallbacks: serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hero serif | 180px | 900 italic | 0.95 | -0.03em |
| Heading | 48px | 700 | 1.1 | -0.02em |
| Body | 22px | 400 | 1.6 | 0 |
| Kicker | 14px | 700 | 1.3 | 0.12em |
| Bylines | 16px | 500 italic | 1.4 | 0.02em |

## 4. Spacing & Layout
- Padding: 48-80px
- gap scale: 8/16/24/40px
- Depth layering spacing: subject (reporter cutout) occupies 35% canvas on one side; serif headline stretches across the full width behind, with letters visibly cropped by the subject silhouette

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 700ms
- Subject entry: opacity 0 → 1, scale 0.97 → 1, 800ms
- Headline entry: opacity 0 → 1, 800ms — slow, considered

## 6. Design Rules
- DEPTH LAYERING REQUIRED: .headline { position: relative; z-index: 1; font-style: italic } .subject { position: relative; z-index: 2 }
- Background → Text → Subject (z-index order 0 → 1 → 2)
- Headlines ALWAYS italic serif (Playfair Display), never upright
- Subject should be a transparent-background PNG cutout (BW or low-saturation photo)
- Use 1-2px hairline rules (--palette-accent) to divide sections
- Kicker text in ALL CAPS with 0.12em letter-spacing, in press red
- Apply a subtle paper-grain texture (CSS noise filter, opacity 0.05) to the background
- Body copy max 10 words per slide
- Use a small section letter (e.g. "I.", "II.") in press red as a numeric anchor
