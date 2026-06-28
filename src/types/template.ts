import type { AspectRatio, Slide } from "./carousel";

export interface Template {
  id: string;
  name: string;
  description: string;
  aspectRatio: AspectRatio;
  slides: Omit<Slide, "previousVersions">[];
  tags: string[];
  createdAt: string;
}

export interface TemplatesData {
  templates: Template[];
}
