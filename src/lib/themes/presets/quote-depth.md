# Design System: Quote Depth

> Category: Agentic
> Depth Layering: enabled
> Quote graphic — large italic quote sits BEHIND a speaker cutout, attribution and context frame the canvas.

Source inspiration: Podcast promo graphics + 2026 quote-card carousel trend

## 2. Color Palette & Roles

### Primary
- **Deep Indigo** (`#312e81`): CSS var `--palette-bg-primary`. Used for: oversized quote type.

### Secondary & Accent
- **Sunrise** (`#f59e0b`): CSS var `--palette-accent`. Used for: opening quotation mark, CTA.
- **Sky** (`#0ea5e9`): CSS var `--palette-bg-secondary`. Used for: gradient stop.

### Surface & Background
- **Cloud** (`#f8fafc`): CSS var `--palette-bg-background`. Used for: default slide backdrop.
- **Mist** (`#f1f5f9`): CSS var `--palette-bg-surface`. Used for: caption cards.

### Neutrals & Text
- **Ink** (`#0f172a`): CSS var `--palette-text`. Used for: body.
- **Slate** (`#64748b`): Used for: metadata, attribution.

### Gradient System
`linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #fef3c7 100%)` — sunrise wash.
`linear-gradient(135deg, #312e81 0%, #0ea5e9 100%)` — quote gradient fill.

## 3. Typography Rules

### Font Family
- Heading: "Fraunces"
- Body: "Inter"
- Fallbacks: serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Hero quote | 140px | 700 italic | 1.0 | -0.03em |
| Speaker name | 36px | 600 | 1.1 | -0.01em |
| Heading | 44px | 700 | 1.1 | -0.02em |
| Body | 22px | 400 | 1.5 | 0 |
| Caption | 16px | 500 | 1.4 | 0.06em |

## 4. Spacing & Layout
- Padding: 56-80px
- gap scale: 16/24/40/64px
- Depth layering spacing: speaker cutout occupies 35% canvas, biased to one side; oversized quote type fills 80%+ of canvas width behind, with quote marks framing the type

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.22,1,0.36,1)
- Duration: 700ms
- Subject entry: opacity 0 → 1, scale 0.96 → 1, 800ms
- Quote entry: opacity 0 → 1 with 12px horizontal slide, 1000ms — slow and considered

## 6. Design Rules
- DEPTH LAYERING REQUIRED: .headline { position: relative; z-index: 1; font-style: italic; color: var(--palette-bg-primary) } .subject { position: relative; z-index: 2 }
- Background → Text → Subject (z-index order 0 → 1 → 2)
- Quote type ALWAYS in italic serif (Fraunces), never upright, never sans
- Use oversized opening quotation mark (200px+, sunrise colour) as a graphic anchor
- Speaker cutout is a transparent-background PNG (preferably headshot)
- Attribution goes BELOW the speaker with em-dash prefix (— Speaker Name)
- Quote max 12 words on the hook slide; longer quotes get their own dedicated slide
- Body copy max 8 words per slide
- Use a 1px sunrise divider between the quote and attribution
- Soft drop-shadow under the speaker (offset 0 12px, blur 24px, opacity 0.15)
