---
description: Wipe local carousels & uploads, then re-seed defaults (asks first).
allowed-tools: Bash(rm *), Bash(npm run setup), Bash(ls *), AskUserQuestion
---

Confirm with the user via AskUserQuestion:

> "This will delete every locally saved carousel, template, brand config, uploaded image, and export from `data/` and `public/uploads/`. Continue?"

Options: **Yes, wipe everything** / **Cancel**.

On **Yes**: run `rm -rf data/*.json public/uploads/* data/exports/*` then `npm run setup` to re-seed default empty data files. Report what was reset (e.g., "Wiped 3 carousels, 12 uploads, 1 export. Defaults restored.").

On **Cancel**: do nothing; reply "No changes made."
