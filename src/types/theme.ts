export type ThemeCategory =
  | "Claude AI"
  | "Student Perks"
  | "GPT Image"
  | "Beauty"
  | "Agentic"
  | "General";

export interface ThemePalette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  gradient?: string;
}

export interface ThemeFonts {
  heading: string;
  body: string;
  headingFallback?: string;
  bodyFallback?: string;
}

export interface ThemeSpacing {
  padding: string;
  gap: string;
  scale: number[];
}

export interface ThemeMotion {
  easing: string;
  duration: string;
}

export interface Theme {
  id: string;
  name: string;
  category: ThemeCategory;
  atmosphere: string;
  palette: ThemePalette;
  fonts: ThemeFonts;
  spacing: ThemeSpacing;
  motion: ThemeMotion;
  designRules: string[];
  sourceInspiration?: string;
}
