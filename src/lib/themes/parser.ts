import { readFile } from "fs/promises";
import path from "path";
import type { Theme, ThemePalette, ThemeFonts, ThemeSpacing, ThemeMotion, ThemeCategory } from "@/types/theme";

const PRESETS_DIR = path.resolve(process.cwd(), "src/lib/themes/presets");
const themeCache = new Map<string, Theme>();

/**
 * Parse a DESIGN.md file (Open Design format) into a Theme object.
 */
export function parseDesignMd(id: string, content: string): Theme {
  const nameMatch = content.match(/^#\s+Design System:\s*(.+)$/m);
  const name = nameMatch ? nameMatch[1].trim() : id;

  const categoryMatch = content.match(/Category:\s*(.+)$/m);
  const categoryStr = categoryMatch ? categoryMatch[1].trim() : "General";
  const validCategories = [
    "Claude AI",
    "Student Perks",
    "GPT Image",
    "Beauty",
    "Agentic",
    "Dark & Neon",
    "Editorial & Magazine",
    "Brutalist & Y2K",
    "Brand-Inspired",
    "Niche & Industry",
    "Depth & Layering",
    "3D & Glassmorphism",
    "Cinematic & Gradient",
    "Premium Dark",
    "3D Typography",
    "General",
  ];
  const category = (validCategories.includes(categoryStr)
    ? categoryStr
    : "General") as ThemeCategory;

  // Atmosphere = the first `>` line that is NOT "Category:" or "Depth Layering:"
  const atmosphereLine = content.split("\n").find(
    (line) => /^>\s*(?!Category:|Depth Layering:)(.+)$/.test(line)
  );
  const atmosphere = atmosphereLine
    ? atmosphereLine.replace(/^>\s*/, "").trim()
    : "";

  const sourceMatch = content.match(/Source inspiration:\s*(.+)$/m);
  const sourceInspiration = sourceMatch ? sourceMatch[1].trim() : undefined;

  // Parse "Depth Layering: enabled" from front-matter (the area after the
  // H1 and the Category line, where ">" blockquote directives live).
  // Matches `> Depth Layering: enabled` (case-insensitive, optional whitespace).
  const depthLayeringMatch = content.match(/^>\s*Depth Layering:\s*([^\n]+)$/im);
  const depthLayering = depthLayeringMatch
    ? /enabled|true|yes|on/i.test(depthLayeringMatch[1].trim())
    : false;

  // Parse hex colors — primary, secondary, accent, background, surface, text
  const palette = parsePalette(content);

  // Parse fonts
  const fonts = parseFonts(content);

  // Parse spacing
  const spacing = parseSpacing(content);

  // Parse motion
  const motion = parseMotion(content);

  // Parse design rules (section 6)
  const designRules = parseDesignRules(content);

  return {
    id,
    name,
    category,
    atmosphere,
    palette,
    fonts,
    spacing,
    motion,
    designRules,
    sourceInspiration,
    depthLayering,
  };
}

function parsePalette(content: string): ThemePalette {
  const extractHex = (label: RegExp) => {
    const m = content.match(label);
    return m ? m[1].trim() : "#000000";
  };

  const primary = extractHex(/Primary[^`]*`(#(?:[0-9a-fA-F]{3,8}))`/);
  const secondary = extractHex(/Secondary[^`]*`(#(?:[0-9a-fA-F]{3,8}))`/);
  const accent = extractHex(/Accent[^`]*`(#(?:[0-9a-fA-F]{3,8}))`/);
  const background = extractHex(/Background[^`]*`(#(?:[0-9a-fA-F]{3,8}))`/);
  const surface = extractHex(/Surface[^`]*`(#(?:[0-9a-fA-F]{3,8}))`/);
  const text = extractHex(/Text[^`]*`(#(?:[0-9a-fA-F]{3,8}))`/);

  const gradientMatch = content.match(/gradient[^\n]*:?\s*(linear-gradient\([^)]+\))/i);
  const gradient = gradientMatch ? gradientMatch[1].trim() : undefined;

  return { primary, secondary, accent, background, surface, text, gradient };
}

function parseFonts(content: string): ThemeFonts {
  const headingMatch = content.match(/Heading:?\s*"([^"]+)"/);
  const bodyMatch = content.match(/Body:?\s*"([^"]+)"/);
  const headingFallbackMatch = content.match(/fallback:\s*([^\n]+)/);

  return {
    heading: headingMatch ? headingMatch[1].trim() : "Inter",
    body: bodyMatch ? bodyMatch[1].trim() : "Inter",
    headingFallback: headingFallbackMatch ? headingFallbackMatch[1].trim() : "sans-serif",
    bodyFallback: headingFallbackMatch ? headingFallbackMatch[1].trim() : "sans-serif",
  };
}

function parseSpacing(content: string): ThemeSpacing {
  const paddingMatch = content.match(/Padding:?\s*(\d+[-–]\d+)\s*px/);
  const gapMatch = content.match(/gap scale:?\s*([\d/]+)/);
  const scaleMatch = content.match(/scale:?\s*([\d/\s,]+)/);

  return {
    padding: paddingMatch ? paddingMatch[1] : "64-80",
    gap: gapMatch ? gapMatch[1] : "8/16/24/32/48",
    scale: scaleMatch
      ? scaleMatch[1].split(/[/,\s]+/).map(Number).filter((n) => !isNaN(n))
      : [8, 16, 24, 32, 48],
  };
}

function parseMotion(content: string): ThemeMotion {
  const easingMatch = content.match(/Easing:?\s*(cubic-bezier\([^)]+\))/);
  const durationMatch = content.match(/Duration:?\s*(\d+ms)/);

  return {
    easing: easingMatch ? easingMatch[1] : "cubic-bezier(0.22,1,0.36,1)",
    duration: durationMatch ? durationMatch[1] : "300ms",
  };
}

function parseDesignRules(content: string): string[] {
  // Find section 6 "Design Rules" and extract bullet points
  const rulesSection = content.split(/^##\s+\d+\.?\s*Design Rules/i);
  if (rulesSection.length < 2) return [];

  const rulesBlock = rulesSection[1].split(/^##\s/m)[0];
  const rules = rulesBlock
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("-"))
    .map((line) => line.replace(/^-\s*/, "").trim())
    .filter((rule) => rule.length > 0);

  return rules.length > 0 ? rules : [
    "Contrast ratio > 4.5:1 for all text",
    "One focal element per slide",
    "Hook slide max 8 words, oversized text",
    "60-80px padding minimum",
  ];
}

/**
 * Load a single theme by ID from its DESIGN.md file.
 */
export async function getTheme(id: string): Promise<Theme | null> {
  if (themeCache.has(id)) return themeCache.get(id)!;

  try {
    const filePath = path.join(PRESETS_DIR, `${id}.md`);
    const content = await readFile(filePath, "utf-8");
    const theme = parseDesignMd(id, content);
    themeCache.set(id, theme);
    return theme;
  } catch {
    return null;
  }
}

/**
 * List all available theme IDs from the presets directory.
 */
export async function listThemeIds(): Promise<string[]> {
  const { readdir } = await import("fs/promises");
  try {
    const files = await readdir(PRESETS_DIR);
    return files
      .filter((f) => f.endsWith(".md"))
      .map((f) => f.replace(/\.md$/, ""));
  } catch {
    return [];
  }
}

/**
 * List all themes (loaded).
 */
export async function listThemes(): Promise<Theme[]> {
  const ids = await listThemeIds();
  const themes = await Promise.all(ids.map((id) => getTheme(id)));
  return themes.filter((t): t is Theme => t !== null);
}
