# Contributing to Slidr

Thank you for your interest in contributing to Slidr!

## Code Guidelines

- **Components**: Maximum of ~300 lines of code per file.
- **Styling**: Tailwind v4 (CSS-first approach). Use `cn()` from `src/lib/utils.ts` for class merging.
- **State & Data Mutations**: Go through `src/lib/data.ts`. Do not write directly to the local filesystem.
- **IFrame sandboxing**: Sandboxed slide previews should always use `sandbox=""` (no JavaScript).
- **Themes**: Written in `.md` (DESIGN.md format) placed inside `src/lib/themes/presets/`. Do not hardcode palettes inside React components.

## Git & Commit Policy

- **Author Attribution**: Commits must be attributed to the sole author: `tushar2704 <tushar.inseec@gmail.com>`. Do not include `Co-authored-by` trailers.
- Use the imperative mood and be concise.
- Always run `npm run build` and `npm run doctor` before committing.
