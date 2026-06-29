# Design System: Wedding Depth

> Category: Beauty
> Depth Layering: enabled
> Elegant wedding — oversized serif "LOVE", "FOREVER", or initials sit BEHIND a couple on a soft cream backdrop.

Source inspiration: Save the date cards + 2026 luxury wedding editorial

## 2. Color Palette & Roles

### Primary
- **Champagne** (`#d4af37`): CSS var `--palette-bg-primary`. Used for: oversized "LOVE" headline.

### Secondary & Accent
- **Dusty Rose** (`#9f1239`): CSS var `--palette-accent`. Used for: single accent punctuation.
- **Sage** (`#84cc16`): CSS var `--palette-bg-secondary`. Used for: foliage accent.

### Surface & Background
- **Cream Silk** (`#fdf6ec`): CSS var `--palette-bg-background`. Used for: default backdrop.
- **Ivory** (`#fffaf0`): CSS var `--palette-bg-surface`. Used for: caption cards.

### Neutrals & Text
- **Espresso** (`#44403c`): CSS var `--palette-text`. Used for: body.
- **Taupe** (`#a8a29e`): Used for: metadata.

### Gradient System
`linear-gradient(180deg, #fdf6ec 0%, #fffaf0 100%)` — silk wash.
`linear-gradient(135deg, #d4af37 0%, #9f1239 100%)` — premium accent gradient.

## 3. Typography Rules

### Font Family
- Heading: "Cormorant Garamond"
- Body: "Inter"
- Fallbacks: serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hero "LOVE" | 240px | 500 | 0.9 | -0.02em |
| Couple names | 64px | 500 italic | 1.1 | 0 |
| Heading | 48px | 500 | 1.2 | -0.01em |
| Body | 22px | 400 | 1.5 | 0 |
| Caption | 16px | 500 | 1.4 | 0.08em |

## 4. Spacing & Layout
- Padding: 64-96px
- gap scale: 16/24/40/64px
- Depth layering spacing: couple cutout occupies 40-50% canvas, centred; "LOVE" or initials headline stretches across full width behind, with letters extending well past the couple silhouette on both sides

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 800ms
- Subject entry: opacity 0 → 1, scale 0.97 → 1, 1000ms — slow and romantic
- Headline entry: opacity 0 → 1, 800ms with 4px upward slide

## 6. Design Rules
- DEPTH LAYERING REQUIRED: .headline { position: relative; z-index: 1; font-style: italic; color: var(--palette-bg-primary) } .subject { position: relative; z-index: 2 }
- Background → Text → Subject (z-index order 0 → 1 → 2)
- Headline ALWAYS in italic serif (Cormorant Garamond) — never upright, never sans
- Use champagne or dusty rose for headlines, never pure black
- Couple should be a transparent-background PNG cutout (or two cutouts composed)
- Soft glow / drop-shadow under couple (offset 0 16px, blur 32px, opacity 0.10) for warmth
- Body copy in espresso (#44403c), never pure black
- Use small ornament motifs (laurel, monogram, divider) as corner accents in champagne
- Background should be a single cream tone or 2-stop silk gradient
- Add a hairline 1px champagne border around the entire slide for editorial feel
