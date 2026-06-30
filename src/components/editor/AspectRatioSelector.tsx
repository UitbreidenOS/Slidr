"use client";

import type { AspectRatio } from "@/types/carousel";
import { cn } from "@/lib/utils";

interface AspectRatioSelectorProps {
  value: AspectRatio;
  onChange: (ratio: AspectRatio) => void;
}

const RATIOS: { value: AspectRatio; label: string; icon: { w: number; h: number } }[] = [
  { value: "ig-1:1", label: "Insta Square", icon: { w: 16, h: 16 } },
  { value: "ig-4:5", label: "Insta Portrait", icon: { w: 16, h: 20 } },
  { value: "ig-9:16", label: "Insta Story", icon: { w: 12, h: 22 } },
  { value: "li-4:5", label: "LinkedIn", icon: { w: 16, h: 20 } },
  { value: "tt-9:16", label: "TikTok", icon: { w: 12, h: 22 } },
];

export function AspectRatioSelector({
  value,
  onChange,
}: AspectRatioSelectorProps) {
  return (
    <div className="flex items-center gap-1 flex-wrap">
      {RATIOS.map((ratio) => (
        <button
          key={ratio.value}
          onClick={() => onChange(ratio.value)}
          className={cn(
            "slidr-press flex flex-col items-center gap-1 px-2.5 py-2 rounded-lg text-xs",
            value === ratio.value
              ? "bg-foreground text-background"
              : "hover:bg-muted text-muted-foreground"
          )}
          aria-label={`${ratio.label} (${ratio.value})`}
        >
          <div
            className={cn(
              "border-2 rounded-sm mb-1",
              value === ratio.value
                ? "border-background"
                : "border-muted-foreground"
            )}
            style={{ width: ratio.icon.w, height: ratio.icon.h }}
          />
          <div className="flex flex-col items-center text-center">
            <span className="font-mono font-bold leading-none mb-0.5">{ratio.value.split("-")[1]}</span>
            <span className="text-[10px] leading-none opacity-80">{ratio.label}</span>
          </div>
        </button>
      ))}
    </div>
  );
}
