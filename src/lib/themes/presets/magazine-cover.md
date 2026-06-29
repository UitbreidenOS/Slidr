# Design System: Magazine Cover

> Category: Beauty
> Depth Layering: enabled
> Editorial cover layout — masthead-sized serif title slips behind a portrait, framing the face.

Source inspiration: Vogue / Harper's Bazaar cover variants with z-depth type

## 2. Color Palette & Roles

### Primary
- **Crimson** (`#dc2626`): CSS var `--palette-bg-primary`. Used for: masthead headline, cover date numerals.

### Secondary & Accent
- **Gold** (`#ca8a04`): CSS var `--palette-accent`. Used for: rule lines, drop caps.
- **Plum** (`#7e22ce`): CSS var `--palette-bg-secondary`. Used for: secondary cover lines.

### Surface & Background
- **Bone** (`#faf7f2`): CSS var `--palette-bg-background`. Used for: cover page.
- **Parchment** (`#efe7d8`): CSS var `--palette-bg-surface`. Used for: caption strips.

### Neutrals & Text
- **Espresso** (`#1c1917`): CSS var `--palette-text`. Used for: deck copy, body.
- **Ash** (`#78716c`): Used for: bylines, micro labels.

### Gradient System
`linear-gradient(180deg, #faf7f2 0%, #efe7d8 100%)` — paper stock.
`linear-gradient(180deg, #dc2626 0%, #7e22ce 100%)` — masthead gradient.

## 3. Typography Rules

### Font Family
- Heading: "Playfair Display"
- Body: "EB Garamond"
- Fallbacks: serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Masthead | 220px | 900 | 0.9 | -0.03em |
| Cover line | 48px | 700 | 1.1 | -0.01em |
| Deck | 26px | 400 | 1.4 | 0 |
| Body | 22px | 400 | 1.55 | 0 |
| Bylines | 16px | 600 | 1.3 | 0.08em |

## 4. Spacing & Layout
- Padding: 48-72px
- gap scale: 8/16/24/40px
- Depth layering spacing: portrait occupies 50% of canvas width on the right; masthead stretches across the full width behind the face, with 2-3x overlap

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.65,0,0.35,1)
- Duration: 600ms
- Subject entry: scale 0.92 → 1, opacity 0 → 1
- Masthead entry: clip-path inset(0 100% 0 0) → inset(0 0 0 0), 700ms

## 6. Design Rules
- DEPTH LAYERING REQUIRED: .headline { position: relative; z-index: 1 } .subject { position: relative; z-index: 2 }
- Background → Text → Subject (z-index order 0 → 1 → 2)
- Masthead text spans the FULL canvas width — the portrait interrupts the type, not the other way around
- Portrait sits on the right 50% of canvas, face roughly 40-55% from the top
- Use one thick rule line under the masthead in `--palette-accent`
- Bylines and deck copy stay BELOW the subject, never on top
- Headline contrast > 4.5:1; prefer deep crimson or plum on bone
- Keep a small "issue date" / cover line in the top-left as an anchor
- Use a subtle paper grain on the background (CSS noise filter, opacity < 0.08)
