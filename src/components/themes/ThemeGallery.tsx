"use client";

import { useState, useEffect } from "react";
import { Palette, Check } from "lucide-react";
import type { Theme } from "@/types/theme";
import { cn } from "@/lib/utils";

interface ThemeGalleryProps {
  selectedThemeId: string | null;
  onSelect: (themeId: string) => void;
}

export function ThemeGallery({ selectedThemeId, onSelect }: ThemeGalleryProps) {
  const [themes, setThemes] = useState<Theme[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/themes")
      .then((r) => r.json())
      .then((data) => {
        setThemes(data.themes || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8 text-sm text-muted-foreground">
        Loading themes...
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-1.5 text-sm font-medium">
        <Palette className="h-4 w-4" />
        Theme
      </div>
      <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto p-1">
        {themes.map((theme) => {
          const isSelected = selectedThemeId === theme.id;
          return (
            <button
              key={theme.id}
              onClick={() => onSelect(theme.id)}
              className={cn(
                "slidr-press relative flex flex-col gap-1.5 p-3 rounded-lg border text-left transition-all",
                isSelected
                  ? "border-accent ring-2 ring-accent/20"
                  : "border-border hover:border-muted-foreground"
              )}
            >
              {/* Color preview swatches */}
              <div className="flex gap-1">
                <div
                  className="w-6 h-6 rounded-md border border-border"
                  style={{ backgroundColor: theme.palette.background }}
                  title="Background"
                />
                <div
                  className="w-6 h-6 rounded-md"
                  style={{ backgroundColor: theme.palette.primary }}
                  title="Primary"
                />
                <div
                  className="w-6 h-6 rounded-md"
                  style={{ backgroundColor: theme.palette.accent }}
                  title="Accent"
                />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold truncate">{theme.name}</div>
                <div className="text-[10px] text-muted-foreground truncate">
                  {theme.category}
                </div>
              </div>
              {isSelected && (
                <div className="absolute top-1 right-1 bg-accent text-accent-foreground rounded-full p-0.5">
                  <Check className="h-3 w-3" />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
