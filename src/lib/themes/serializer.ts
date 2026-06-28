import type { Theme } from "@/types/theme";
import { DIMENSIONS, type AspectRatio } from "@/types/carousel";

/**
 * Convert a theme into a CSS custom-property block for preview/export.
 */
export function themeToCssVars(theme: Theme): string {
  return `:root {
  --palette-bg-primary: ${theme.palette.primary};
  --palette-bg-secondary: ${theme.palette.secondary};
  --palette-accent: ${theme.palette.accent};
  --palette-bg-background: ${theme.palette.background};
  --palette-bg-surface: ${theme.palette.surface};
  --palette-text-primary: ${theme.palette.text};
  ${theme.palette.gradient ? `--palette-gradient: ${theme.palette.gradient};` : ""}
  --font-heading: "${theme.fonts.heading}", ${theme.fonts.headingFallback || "sans-serif"};
  --font-body: "${theme.fonts.body}", ${theme.fonts.bodyFallback || "sans-serif"};
  --motion-easing: ${theme.motion.easing};
  --motion-duration: ${theme.motion.duration};
}`;
}

/**
 * Smart auto-resize: scale base font sizes proportionally for different aspect ratios.
 * Base sizes are defined at 4:5 (1080x1350). Scale up or down for other ratios.
 */
export function scaleFontsForRatio(
  baseHeadingSize: number,
  baseBodySize: number,
  ratio: AspectRatio
): { heading: number; body: number; hook: number } {
  const dims = DIMENSIONS[ratio];
  const baseArea = 1080 * 1350;
  const ratioArea = dims.width * dims.height;
  const scaleFactor = Math.sqrt(ratioArea / baseArea);

  // Clamp scale between 0.75 and 1.15 for readability
  const clampedScale = Math.max(0.75, Math.min(1.15, scaleFactor));

  return {
    hook: Math.round(baseHeadingSize * 1.4 * clampedScale),
    heading: Math.round(baseHeadingSize * clampedScale),
    body: Math.round(baseBodySize * clampedScale),
  };
}

/**
 * Generate a font-loading snippet for Google Fonts based on theme fonts.
 */
export function themeFontLink(theme: Theme): string {
  const fonts = [theme.fonts.heading, theme.fonts.body];
  const unique = [...new Set(fonts)].filter((f) => f && f !== "system-ui");

  if (unique.length === 0) return "";

  const params = unique
    .map((f) => `family=${encodeURIComponent(f)}:wght@300;400;500;600;700;800;900`)
    .join("&");

  return `<link href="https://fonts.googleapis.com/css2?${params}&display=swap" rel="stylesheet">`;
}

/**
 * Generate a compact summary of the theme for display in UI.
 */
export function themeSummary(theme: Theme): string {
  const paletteStr = [theme.palette.primary, theme.palette.accent, theme.palette.background]
    .join(" · ");
  return `${theme.category} · ${theme.fonts.heading} + ${theme.fonts.body} · ${paletteStr}`;
}
