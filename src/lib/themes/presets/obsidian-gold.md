# Design System: Obsidian Gold

> Category: General
> Polished black with metallic gold accents — the luxury watch advertisement aesthetic.

Source inspiration: Rolex advertising + Cartier visual identity + black-tie event design

## 2. Color Palette & Roles

### Primary
- **Metallic Gold** (`#d4af37`): CSS var `--palette-bg-primary`. Used for: headings, primary text, decorative rules.

### Secondary & Accent
- **Champagne** (`#f5e6c0`): CSS var `--palette-accent`. Used for: CTAs, body emphasis, swipe indicator.
- **Antique Bronze** (`#a8853a`): CSS var `--palette-bg-secondary`. Used for: secondary headings, gradient stops.

### Surface & Background
- **Obsidian Black** (`#0a0a0c`): CSS var `--palette-bg-background`. Used for: default slide background.
- **Polished Onyx** (`#16161a`): CSS var `--palette-bg-surface`. Used for: panels, product cards, inset frames.

### Neutrals & Text
- **Pearl White** (`#f8f4ec`): CSS var `--palette-text`. Used for: body text (warm, never pure white).
- **Taupe** (`#7a7368`): Used for: captions, secondary metadata.

### Gradient System
`linear-gradient(180deg, #0a0a0c 0%, #16161a 100%)` — obsidian depth.
`linear-gradient(135deg, #d4af37 0%, #f5e6c0 50%, #d4af37 100%)` — metallic gold gradient (signature).
`radial-gradient(circle at 50% 50%, rgba(212,175,55,0.08) 0%, transparent 60%)` — ambient gold halo.

## 3. Typography Rules

### Font Family
- Heading: "Playfair Display"
- Body: "Cormorant Garamond"
- Fallbacks: serif

### Hierarchy
| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hook | 72px | 700 | 1.1 |
| Heading | 40px | 600 | 1.2 |
| Subheading | 26px | 500 | 1.35 |
| Body | 22px | 400 | 1.6 |

## 4. Spacing & Layout
- Padding: 72-96px (more generous — luxury breathes)
- gap scale: 8/16/24/32/48px
- One focal element per slide; centered symmetric composition
- At least 35% intentional empty space on every slide

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.4,0,0.2,1)
- Duration: 450ms (slow, deliberate)
- Use @starting-style for fade-in; respect prefers-reduced-motion
- Optional gold shimmer on headings: linear-gradient background-position animation, 8s loop

## 6. Design Rules
- Playfair Display (high-contrast serif) for ALL headings — its editorial luxury is mandatory
- Cormorant Garamond for body — it pairs with Playfair without competing
- Gold appears on: headings, decorative rules, drop caps, ONE accent per slide
- Decorative 1px gold horizontal rules (centered, 40-60% width) separate sections
- Optional ambient gold halo (radial gradient at 8% opacity) behind centered content
- All-caps Playfair for hooks — the engraved monumental feel demands it
- CTAs are pill buttons with the metallic gold gradient fill and 1px champagne border
- Slide 1 includes an ornamental flourish or "→" swipe indicator in champagne, bottom-right
- Body text always pearl white — never pure white, which would feel sterile and cheap
- Contrast ratio ≥ 4.5:1: pearl #f8f4ec on #0a0a0c = 17.4:1 (WCAG AAA)
