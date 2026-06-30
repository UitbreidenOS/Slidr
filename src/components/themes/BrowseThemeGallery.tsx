"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search, Loader2, Sparkles, Layers } from "lucide-react";
import type { Theme } from "@/types/theme";

export function BrowseThemeGallery() {
  const router = useRouter();
  const [themes, setThemes] = useState<Theme[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [creatingForTheme, setCreatingForTheme] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/themes")
      .then((r) => r.json())
      .then((data) => {
        setThemes(data.themes || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleUseTheme = useCallback(
    async (themeId: string) => {
      setCreatingForTheme(themeId);
      const name = prompt("Enter a name for your new carousel:");
      if (!name || !name.trim()) {
        setCreatingForTheme(null);
        return;
      }

      try {
        const res = await fetch("/api/carousels", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.trim(),
            aspectRatio: "ig-4:5",
            themeId,
          }),
        });

        if (res.ok) {
          const carousel = await res.json();
          router.push(`/carousel/${carousel.id}`);
        }
      } catch (err) {
        console.error("Failed to create carousel with theme", err);
      } finally {
        setCreatingForTheme(null);
      }
    },
    [router]
  );

  // Get list of unique categories
  const categories = ["All", ...Array.from(new Set(themes.map((t) => t.category)))];

  const filteredThemes = themes.filter((t) => {
    const matchesSearch = t.name.toLowerCase().includes(search.toLowerCase()) || 
                          t.atmosphere.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || t.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-44 rounded-xl bg-muted animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search 115+ themes (e.g. Neon, Glassmorphism, Minimalist)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-surface border border-border rounded-lg text-sm focus:outline-none focus:border-accent"
          />
        </div>
        {/* Category filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-surface border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-accent"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredThemes.map((theme) => (
          <div
            key={theme.id}
            className="bg-surface border border-border p-5 rounded-xl flex flex-col justify-between hover:border-accent/50 transition-colors"
          >
            <div>
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-accent/10 text-accent">
                  {theme.category}
                </span>
                {theme.depthLayering && (
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-blue-500/10 text-blue-450 border border-blue-500/20 flex items-center gap-0.5">
                    <Layers className="h-2.5 w-2.5 text-blue-400" />
                    Depth Layering
                  </span>
                )}
              </div>
              <h4 className="font-semibold text-base truncate" title={theme.name}>
                {theme.name}
              </h4>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                {theme.atmosphere || "A tailored design preset for rich carousel output."}
              </p>

              {/* Theme Color Dots */}
              <div className="flex items-center gap-1.5 mt-4">
                <div
                  className="h-4 w-4 rounded-full border border-border/40"
                  style={{ backgroundColor: theme.palette.background }}
                  title={`Background: ${theme.palette.background}`}
                />
                <div
                  className="h-4 w-4 rounded-full border border-border/40"
                  style={{ backgroundColor: theme.palette.primary }}
                  title={`Primary: ${theme.palette.primary}`}
                />
                <div
                  className="h-4 w-4 rounded-full border border-border/40"
                  style={{ backgroundColor: theme.palette.accent }}
                  title={`Accent: ${theme.palette.accent}`}
                />
                <div
                  className="h-4 w-4 rounded-full border border-border/40"
                  style={{ backgroundColor: theme.palette.text }}
                  title={`Text: ${theme.palette.text}`}
                />
              </div>

              {/* Fonts */}
              <div className="text-[10px] text-muted-foreground mt-3 font-mono">
                Heading: {theme.fonts.heading} | Body: {theme.fonts.body}
              </div>
            </div>

            <button
              onClick={() => handleUseTheme(theme.id)}
              disabled={creatingForTheme === theme.id}
              className="w-full mt-5 px-3 py-2 bg-muted hover:bg-accent hover:text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              {creatingForTheme === theme.id ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : (
                "Use Theme"
              )}
            </button>
          </div>
        ))}
      </div>

      {filteredThemes.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No themes match your search query or filters.
        </div>
      )}
    </div>
  );
}
