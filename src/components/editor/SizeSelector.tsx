"use client";

import { useState } from "react";
import { Monitor, Smartphone, Tablet } from "lucide-react";
import type { AspectRatio, Platform } from "@/types/carousel";
import { DIMENSIONS, ASPECT_RATIOS_BY_PLATFORM } from "@/types/carousel";
import { cn } from "@/lib/utils";

interface SizeSelectorProps {
  value: AspectRatio;
  onChange: (ratio: AspectRatio) => void;
}

const PLATFORM_META: Record<Platform, { label: string; icon: typeof Monitor }> = {
  instagram: { label: "Instagram", icon: Monitor },
  linkedin: { label: "LinkedIn", icon: Tablet },
  tiktok: { label: "TikTok", icon: Smartphone },
};

export function SizeSelector({ value, onChange }: SizeSelectorProps) {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>(
    DIMENSIONS[value].platform
  );

  const ratios = ASPECT_RATIOS_BY_PLATFORM[selectedPlatform];

  return (
    <div className="flex flex-col gap-2">
      {/* Platform tabs */}
      <div className="flex gap-1 p-1 bg-muted rounded-lg">
        {(Object.keys(PLATFORM_META) as Platform[]).map((platform) => {
          const Icon = PLATFORM_META[platform].icon;
          return (
            <button
              key={platform}
              onClick={() => setSelectedPlatform(platform)}
              className={cn(
                "slidr-press flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors flex-1 justify-center",
                selectedPlatform === platform
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className="h-3.5 w-3.5" />
              {PLATFORM_META[platform].label}
            </button>
          );
        })}
      </div>

      {/* Size options for selected platform */}
      <div className="flex gap-1">
        {ratios.map((ratio) => {
          const dims = DIMENSIONS[ratio];
          const isActive = value === ratio;
          return (
            <button
              key={ratio}
              onClick={() => onChange(ratio)}
              className={cn(
                "slidr-press flex flex-col items-center gap-1 px-2 py-1.5 rounded-lg text-xs transition-colors flex-1",
                isActive
                  ? "bg-foreground text-background"
                  : "hover:bg-muted text-muted-foreground"
              )}
              aria-label={`${dims.label} (${ratio})`}
            >
              <div
                className={cn(
                  "border-2 rounded-sm",
                  isActive ? "border-background" : "border-muted-foreground"
                )}
                style={{
                  width: Math.min(20, (dims.width / dims.height) * 20),
                  height: Math.min(20, (dims.height / dims.width) * 20) || 20,
                }}
              />
              <span className="font-mono">{ratio}</span>
              {dims.recommended && (
                <span className="text-[10px] opacity-60">★</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
