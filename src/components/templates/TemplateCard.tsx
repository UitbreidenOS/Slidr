"use client";

import { Trash2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SlideRenderer } from "@/components/editor/SlideRenderer";
import type { Template } from "@/types/template";

interface TemplateCardProps {
  template: Template;
  onUse: (id: string) => void;
  onDelete: (id: string) => void;
}

const platformLabels: Record<string, string> = {
  "ig-1:1": "Instagram (1:1)",
  "ig-4:5": "Instagram (4:5)",
  "ig-3:4": "Instagram (3:4)",
  "ig-9:16": "Instagram (9:16)",
  "li-1:1": "LinkedIn (1:1)",
  "li-4:5": "LinkedIn (4:5)",
  "li-16:9": "LinkedIn (16:9)",
  "tt-9:16": "TikTok (9:16)",
};

export function TemplateCard({ template, onUse, onDelete }: TemplateCardProps) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4 group hover:border-accent/50 hover:shadow-md hover:-translate-y-0.5 transition-[translate,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]">
      <div className="h-28 rounded-lg bg-muted mb-3 overflow-hidden">
        {template.slides.length > 0 ? (
          <SlideRenderer
            html={template.slides[0].html}
            aspectRatio={template.aspectRatio}
            className="w-full h-full"
          />
        ) : (
          <div className="h-full flex items-center justify-center text-muted-foreground/30 text-xs">
            Empty
          </div>
        )}
      </div>
      <h3 className="font-semibold text-sm truncate">{template.name}</h3>
      <p className="text-xs text-muted-foreground mt-0.5 truncate">
        {template.slides.length} slide{template.slides.length !== 1 ? "s" : ""} &middot; {platformLabels[template.aspectRatio] || template.aspectRatio}
      </p>
      <div className="flex items-center gap-2 mt-3">
        <Button
          variant="accent"
          size="sm"
          className="flex-1 text-xs"
          onClick={() => onUse(template.id)}
        >
          Use Template
          <ArrowRight className="h-3 w-3" />
        </Button>
        {!template.id.startsWith("template-") && (
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => onDelete(template.id)}
            aria-label="Delete template"
          >
            <Trash2 className="h-3 w-3" />
          </Button>
        )}
      </div>
    </div>
  );
}
