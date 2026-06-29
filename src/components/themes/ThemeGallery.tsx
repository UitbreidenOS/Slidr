"use client";

import { useState, useEffect, useMemo } from "react";
import { Palette, Check, Search, Layers } from "lucide-react";
import type { Theme } from "@/types/theme";
import { cn } from "@/lib/utils";

interface ThemeGalleryProps {
  selectedThemeId: string | null;
  onSelect: (themeId: string) => void;
}

export function ThemeGallery({ selectedThemeId, onSelect }: ThemeGalleryProps) {
  const [themes, setThemes] = useState<Theme[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    fetch("/api/themes")
      .then((r) => r.json())
      .then((data) => {
        setThemes(data.themes || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const categories = useMemo(() => {
    const cats = new Set<string>();
    themes.forEach((t) => cats.add(t.category));
    return ["All", ...Array.from(cats).sort()];
  }, [themes]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return themes.filter((t) => {
      const matchesCategory = activeCategory === "All" || t.category === activeCategory;
      const matchesSearch =
        !q ||
        t.name.toLowerCase().includes(q) ||
        t.id.toLowerCase().includes(q) ||
        t.atmosphere.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [themes, search, activeCategory]);

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
        <span className="text-[10px] text-muted-foreground ml-auto">
          {filtered.length} / {themes.length}
        </span>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search themes..."
          className="w-full pl-7 pr-2 py-1.5 text-xs rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-accent"
        />
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-1 max-h-24 overflow-y-auto p-0.5">
        {categories.map((cat) => {
          const count =
            cat === "All"
              ? themes.length
              : themes.filter((t) => t.category === cat).length;
          if (count === 0) return null;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "slidr-press text-[10px] px-2 py-0.5 rounded-full border transition-colors",
                activeCategory === cat
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border hover:border-muted-foreground text-muted-foreground"
              )}
            >
              {cat} <span className="opacity-60">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Theme grid */}
      <div className="grid grid-cols-2 gap-2 max-h-80 overflow-y-auto p-1">
        {filtered.length === 0 && (
          <div className="col-span-2 py-6 text-center text-xs text-muted-foreground">
            No themes match your search.
          </div>
        )}
        {filtered.map((theme) => {
          const isSelected = selectedThemeId === theme.id;
          return (
            <button
              key={theme.id}
              onClick={() => onSelect(theme.id)}
              className={cn(
                "slidr-press relative flex flex-col gap-1.5 p-2.5 rounded-lg border text-left transition-all",
                isSelected
                  ? "border-accent ring-2 ring-accent/20"
                  : "border-border hover:border-muted-foreground"
              )}
            >
              {/* Color preview swatches */}
              <div className="flex gap-1">
                <div
                  className="w-5 h-5 rounded-md border border-border"
                  style={{ backgroundColor: theme.palette.background }}
                  title="Background"
                />
                <div
                  className="w-5 h-5 rounded-md"
                  style={{ backgroundColor: theme.palette.primary }}
                  title="Primary"
                />
                <div
                  className="w-5 h-5 rounded-md"
                  style={{ backgroundColor: theme.palette.accent }}
                  title="Accent"
                />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-semibold truncate flex items-center gap-1">
                  {theme.name}
                  {theme.depthLayering && (
                    <Layers
                      className="h-2.5 w-2.5 text-accent shrink-0"
                      aria-label="Depth-layering (text behind subject)"
                    />
                  )}
                </div>
                <div className="text-[9px] text-muted-foreground truncate">
                  {theme.category}
                </div>
              </div>
              {isSelected && (
                <div className="absolute top-1 right-1 bg-accent text-accent-foreground rounded-full p-0.5">
                  <Check className="h-2.5 w-2.5" />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
