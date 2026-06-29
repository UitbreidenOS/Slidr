# Design System: Newspaper Classified

> Category: Editorial & Magazine
> Multi-column dense type on aged paper — the back-page classifieds aesthetic. Small text, lots of rules.

Source inspiration: Vintage newspaper classified sections + multi-column financial tables

## 2. Color Palette & Roles

### Primary
- **Newsprint Black** (`#1a1a1a`): CSS var `--palette-bg-primary`. Used for: all small text, headlines, body copy.

### Secondary & Accent
- **Aged Ink** (`#3a3a3a`): CSS var `--palette-accent`. Used for: section dividers, bold callouts, small headline emphasis.
- **Sepia** (`#5a4a35`): CSS var `--palette-bg-secondary`. Used for: secondary headings, photo captions.

### Surface & Background
- **Newsprint Paper** (`#faf6ed`): CSS var `--palette-bg-background`. Used for: default slide background, page surface.
- **Cream White** (`#fffdf4`): CSS var `--palette-bg-surface`. Used for: ad cards, boxed classifieds.

### Neutrals & Text
- **Body Black** (`#1a1a1a`): CSS var `--palette-text`. Used for: all body copy.
- **Fine Print Gray** (`#6b6b6b`): Used for: footnotes, legal text, page numbers.

### Gradient System
`linear-gradient(180deg, #faf6ed 0%, #ede5d2 100%)` — aged paper tonal shift.

## 3. Typography Rules

### Font Family
- Heading: "Source Serif Pro"
- Body: "Source Serif Pro"
- Fallbacks: Georgia, "Times New Roman", serif

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Section Header | 28px | 700 | 1.15 | 0.04em uppercase |
| Subheading | 18px | 700 | 1.3 | 0 |
| Body | 14px | 400 | 1.5 | 0 |
| Ad Listing | 12px | 400 | 1.45 | 0 |
| Fine Print | 10px | 400 | 1.4 | 0 |

## 4. Spacing & Layout
- Padding: 48-64px (denser than typical editorial — back-page feel)
- gap scale: 4/8/12/16/24px
- 4- and 5-column grid for classifieds; 3-column for body slides
- Hairline vertical rules (1px) separate columns like a printed page

## 5. Motion (CSS-first)
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
- Duration: 200ms (quick, utilitarian — no drama)
- @starting-style for fade-in; respect prefers-reduced-motion

## 6. Design Rules
- Background is warm newsprint paper — never pure white or dark
- Source Serif Pro throughout — single family for unified classified feel
- Text is SMALL (10-14px body, 18-28px headers) — density is the point
- Multi-column layouts REQUIRED: 3-column minimum, 4-5 for listings
- Hairline rules (1px) divide columns and sections — never use color blocks
- ALL CAPS section headers with 0.04em tracking, underlined
- Boxed classifieds use 1px border, no fill, no shadow
- Listings follow strict template: BOLD HEADLINE / body / contact
- Numbered references (Fig. 1, §2) rendered in fine print at column bottoms
- Contrast > 4.5:1 — black on newsprint paper is ~17:1, maximum safety
