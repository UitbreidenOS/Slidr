import type { AspectRatio } from "./carousel";
import type { BrandConfig } from "./brand";

export interface StylePreset {
  id: string;
  name: string;
  description: string;
  brand: BrandConfig;
  designRules: string;
  exampleSlideHtml: string;
  aspectRatio: AspectRatio;
  tags: string[];
  createdAt: string;
}

export interface StylePresetsData {
  presets: StylePreset[];
}
