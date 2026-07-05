export type Platform = "instagram" | "linkedin" | "tiktok";

export type AspectRatio =
  // Instagram
  | "ig-1:1"
  | "ig-4:5"
  | "ig-3:4"
  | "ig-9:16"
  // LinkedIn
  | "li-1:1"
  | "li-4:5"
  | "li-16:9"
  // TikTok
  | "tt-9:16";

export interface Slide {
  id: string;
  html: string;
  previousVersions: string[];
  order: number;
  notes: string;
}

export interface ReferenceImage {
  id: string;
  url: string;           // e.g. "/uploads/abc.png"
  absPath: string;        // absolute path for Claude to Read
  name: string;           // original filename or description
  addedAt: string;
  cutoutUrl?: string;     // e.g. "/uploads/cutout-abc.png" (background removed)
  cutoutStatus?: "pending" | "ready" | "failed";  // status of background removal
}

export interface Carousel {
  id: string;
  name: string;
  aspectRatio: AspectRatio;
  slides: Slide[];
  referenceImages: ReferenceImage[];
  caption?: string;
  hashtags?: string[];
  chatSessionId: string | null;
  isTemplate: boolean;
  tags: string[];
  themeId?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CarouselsData {
  carousels: Carousel[];
}

export interface DimensionSpec {
  width: number;
  height: number;
  platform: Platform;
  label: string;
  recommended?: boolean;
  exportFormat: "png" | "pdf";
}

export const DIMENSIONS: Record<AspectRatio, DimensionSpec> = {
  // Instagram — PNG carousel export
  "ig-1:1":  { width: 1080, height: 1080, platform: "instagram", label: "Instagram Square", exportFormat: "png" },
  "ig-4:5":  { width: 1080, height: 1350, platform: "instagram", label: "Instagram Portrait", recommended: true, exportFormat: "png" },
  "ig-3:4":  { width: 1080, height: 1440, platform: "instagram", label: "Instagram 3:4 Grid", exportFormat: "png" },
  "ig-9:16": { width: 1080, height: 1920, platform: "instagram", label: "Instagram Story/Reel", exportFormat: "png" },
  // LinkedIn — PDF document export
  "li-1:1":  { width: 1080, height: 1080, platform: "linkedin", label: "LinkedIn Square", exportFormat: "pdf" },
  "li-4:5":  { width: 1080, height: 1350, platform: "linkedin", label: "LinkedIn Portrait", recommended: true, exportFormat: "pdf" },
  "li-16:9": { width: 1920, height: 1080, platform: "linkedin", label: "LinkedIn Landscape", exportFormat: "pdf" },
  // TikTok — PNG carousel export
  "tt-9:16": { width: 1080, height: 1920, platform: "tiktok", label: "TikTok Vertical", recommended: true, exportFormat: "png" },
};

export const ALL_ASPECT_RATIOS = Object.keys(DIMENSIONS) as AspectRatio[];

export const ASPECT_RATIOS_BY_PLATFORM: Record<Platform, AspectRatio[]> = {
  instagram: ["ig-1:1", "ig-4:5", "ig-3:4", "ig-9:16"],
  linkedin: ["li-1:1", "li-4:5", "li-16:9"],
  tiktok: ["tt-9:16"],
};

export function getPlatform(ratio: AspectRatio): Platform {
  return DIMENSIONS[ratio].platform;
}

export function getExportFormat(ratio: AspectRatio): "png" | "pdf" {
  return DIMENSIONS[ratio].exportFormat;
}

export const MAX_SLIDES = 20;
export const MAX_VERSIONS = 5;
