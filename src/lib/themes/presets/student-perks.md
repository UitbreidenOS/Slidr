# Design System: Student Perks

> Category: Student Perks
> Clean, friendly, education-focused with product-highlight styling. Light backgrounds with blue primary and amber accents.

Source inspiration: Student Perks category (Adobe, Notion, Figma, GitHub education carousels)

## 2. Color Palette & Roles

### Primary
- **Blue** (`#2563eb`): CSS var `--palette-bg-primary`. Used for: headings, brand names, key features.

### Secondary & Accent
- **Amber** (`#f59e0b`): CSS var `--palette-accent`. Used for: "FREE" badges, savings, CTAs, highlight numbers.
- **Indigo** (`#4f46e5`): CSS var `--palette-bg-secondary`. Used for: gradient stops, secondary headings.

### Surface & Background
- **White** (`#ffffff`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Light Blue** (`#eff6ff`): CSS var `--palette-bg-surface`. Used for: cards, feature highlights, inset panels.

### Neutrals & Text
- **Slate** (`#1e293b`): CSS var `--palette-text`. Used for: primary text.
- **Muted Slate** (`#64748b`): Used for: captions, secondary text.

### Gradient System
`linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)` — subtle blue tint.
`linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)` — for CTA buttons.

## 3. Typography Rules

### Font Family
- Heading: "Sora"
- Body: "Inter"
- Fallbacks: sans-serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 68px | 800 | 1.1 |
| Heading | 42px | 700 | 1.2 |
| Subheading | 28px | 600 | 1.3 |
| Body | 24px | 400 | 1.5 |

## 4. Spacing & Layout
- Padding: 64-80px
- gap scale: 8/16/24/32/48px

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.4,0,0.2,1)
- Duration: 300ms

## 6. Design Rules
- Light, airy background — education/student-friendly tone
- Blue for brand name and feature headings
- Amber "FREE" or "$0" badge on relevant slides — rounded pill shape
- Feature lists use checkmark icons in blue
- Product/perk highlights use light blue (#eff6ff) surface cards
- Keep it approachable — rounded corners (12-16px), friendly spacing
- Numbers (discounts, savings) in amber, oversized
