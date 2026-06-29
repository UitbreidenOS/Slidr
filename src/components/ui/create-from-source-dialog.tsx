"use client";

import { useState, useRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Zap, X, Link, PlayCircle, FileText, Type, Loader2 } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";
import { AspectRatioSelector } from "@/components/editor/AspectRatioSelector";
import type { AspectRatio } from "@/types/carousel";

interface CreateFromSourceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: (carouselId: string) => void;
}

type SourceType = "url" | "youtube" | "pdf" | "text";

export function CreateFromSourceDialog({
  open,
  onOpenChange,
  onSuccess,
}: CreateFromSourceDialogProps) {
  const [type, setType] = useState<SourceType>("url");
  const [source, setSource] = useState("");
  const [name, setName] = useState("");
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>("ig-4:5");
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState("");
  const abortRef = useRef<AbortController | null>(null);

  const handleSubmit = async () => {
    if (!source.trim()) return;
    setIsGenerating(true);
    setError(null);
    setStatus("Extracting content...");

    abortRef.current = new AbortController();

    try {
      const response = await fetch("/api/carousels/generate-from-source", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          source: source.trim(),
          name: name.trim() || undefined,
          aspectRatio,
        }),
        signal: abortRef.current.signal,
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.error || "Failed to generate carousel");
      }

      setStatus("Generating slides...");
      
      const reader = response.body?.getReader();
      if (!reader) throw new Error("No response stream");

      const decoder = new TextDecoder();
      let buffer = "";
      let carouselId = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            try {
              const data = JSON.parse(line.slice(6));
              if (data.type === "carousel_created") {
                carouselId = data.carousel.id;
              } else if (data.type === "tool_call") {
                setStatus(`Adding slide...`);
              } else if (data.type === "error") {
                throw new Error(data.error);
              } else if (data.type === "done") {
                // Done
              }
            } catch {
              // skip
            }
          }
        }
      }

      if (carouselId) {
        setStatus("Complete!");
        onSuccess(carouselId);
        onOpenChange(false);
        setSource("");
        setName("");
      } else {
        throw new Error("Failed to get carousel ID");
      }

    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") return;
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
    } finally {
      setIsGenerating(false);
      abortRef.current = null;
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={(val) => {
      if (isGenerating && !val) return; // Prevent closing while generating
      onOpenChange(val);
    }}>
      <Dialog.Portal>
        <Dialog.Overlay data-oc-overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content data-oc-dialog className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl bg-surface border border-border p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-accent/10 flex items-center justify-center">
                <Zap className="h-4 w-4 text-accent" />
              </div>
              <Dialog.Title className="text-base font-semibold">
                Generate from Source
              </Dialog.Title>
            </div>
            {!isGenerating && (
              <Dialog.Close asChild>
                <button
                  className="h-7 w-7 rounded-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </Dialog.Close>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                Source Type
              </label>
              <div className="grid grid-cols-4 gap-2">
                <button
                  onClick={() => setType("url")}
                  className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-colors ${type === "url" ? "border-accent bg-accent/5 text-accent" : "border-border hover:bg-muted text-muted-foreground"}`}
                >
                  <Link className="h-5 w-5 mb-1" />
                  <span className="text-[10px] font-medium">URL</span>
                </button>
                <button
                  onClick={() => setType("youtube")}
                  className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-colors ${type === "youtube" ? "border-accent bg-accent/5 text-accent" : "border-border hover:bg-muted text-muted-foreground"}`}
                >
                  <PlayCircle className="h-5 w-5 mb-1" />
                  <span className="text-[10px] font-medium">YouTube</span>
                </button>
                <button
                  onClick={() => setType("pdf")}
                  className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-colors ${type === "pdf" ? "border-accent bg-accent/5 text-accent" : "border-border hover:bg-muted text-muted-foreground"}`}
                >
                  <FileText className="h-5 w-5 mb-1" />
                  <span className="text-[10px] font-medium">PDF Text</span>
                </button>
                <button
                  onClick={() => setType("text")}
                  className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-colors ${type === "text" ? "border-accent bg-accent/5 text-accent" : "border-border hover:bg-muted text-muted-foreground"}`}
                >
                  <Type className="h-5 w-5 mb-1" />
                  <span className="text-[10px] font-medium">Raw Text</span>
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                Content Source
              </label>
              {type === "text" || type === "pdf" ? (
                <textarea
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  placeholder={type === "pdf" ? "Paste extracted PDF text here for now (file upload coming soon)..." : "Paste your raw text, notes, or bullet points here..."}
                  className="w-full h-32 px-3 py-2 text-sm rounded-md border border-input bg-transparent shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-none"
                />
              ) : (
                <Input
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  placeholder={type === "url" ? "https://example.com/blog-post" : "https://youtube.com/watch?v=..."}
                />
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                  Carousel Name (Optional)
                </label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Auto-generated if empty"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                  Aspect Ratio
                </label>
                <AspectRatioSelector
                  value={aspectRatio}
                  onChange={setAspectRatio}
                />
              </div>
            </div>

            {error && (
              <div className="p-3 text-sm text-destructive bg-destructive/10 rounded-lg">
                {error}
              </div>
            )}
          </div>

          <div className="flex justify-end gap-2 mt-6">
            {!isGenerating ? (
              <>
                <Dialog.Close asChild>
                  <Button variant="outline" size="sm">
                    Cancel
                  </Button>
                </Dialog.Close>
                <Button
                  variant="accent"
                  size="sm"
                  onClick={handleSubmit}
                  disabled={!source.trim()}
                >
                  Generate Carousel
                </Button>
              </>
            ) : (
              <div className="flex items-center gap-2 w-full justify-between px-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin text-accent" />
                  {status}
                </span>
                <Button variant="outline" size="sm" onClick={() => abortRef.current?.abort()}>
                  Cancel
                </Button>
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
