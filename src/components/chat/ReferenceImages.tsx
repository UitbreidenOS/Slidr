"use client";

import { useState, useCallback } from "react";
import { ImagePlus, X, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ReferenceImage } from "@/types/carousel";
import { toast } from "@/components/ui/use-toast"; // Assuming a toast hook exists

interface ReferenceImagesProps {
  carouselId: string;
  images: ReferenceImage[];
  onImagesChange: () => void;
}

export function ReferenceImages({ carouselId, images, onImagesChange }: ReferenceImagesProps) {
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [batchProcessing, setBatchProcessing] = useState(false);

  const handleUpload = useCallback(
    async (file: File) => {
      setUploading(true);
      try {
        // Upload the file
        const formData = new FormData();
        formData.append("file", file);
        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
        if (!uploadRes.ok) throw new Error("Upload failed");
        const uploadData = await uploadRes.json();

        // Register as reference image
        const res = await fetch(`/api/carousels/${carouselId}/references`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: uploadData.url, name: file.name }),
        });
        if (!res.ok) throw new Error("Register reference failed");
        onImagesChange();
      } catch (e) {
        toast({ title: "Error", description: (e as Error).message, variant: "destructive" });
      } finally {
        setUploading(false);
      }
    },
    [carouselId, onImagesChange]
  );

  const handleRemove = useCallback(
    async (imageId: string) => {
      await fetch(`/api/carousels/${carouselId}/references?imageId=${imageId}`, { method: "DELETE" });
      onImagesChange();
    },
    [carouselId, onImagesChange]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith("image/")) handleUpload(file);
    },
    [handleUpload]
  );

  const handleClick = useCallback(() => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/png,image/jpeg,image/webp";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) handleUpload(file);
    };
    input.click();
  }, [handleUpload]);

  // Single image background removal
  const handleRemoveBg = async (img: ReferenceImage) => {
    try {
      // Optimistically set status to pending
      await fetch(`/api/images/remove-bg`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ carouselId, imageId: img.id }),
      });
      onImagesChange();
      toast({ title: "Background removal started", description: `Processing ${img.name}` });
    } catch (e) {
      toast({ title: "Error", description: (e as Error).message, variant: "destructive" });
    }
  };

  // Batch removal
  const handleBatchRemoveBg = async () => {
    setBatchProcessing(true);
    try {
      const pendingImages = images.filter((i) => i.cutoutStatus !== "ready");
      for (const img of pendingImages) {
        await handleRemoveBg(img);
      }
      toast({ title: "Batch removal completed" });
    } finally {
      setBatchProcessing(false);
    }
  };

  const handlePreview = useCallback((url: string) => {
    setPreviewUrl(previewUrl === url ? null : url);
  }, [previewUrl]);

  return (
    <div className="border-b border-border">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2">
        <span className="text-xs font-medium text-muted-foreground">Reference Images</span>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={handleClick} disabled={uploading} className="h-6 text-xs gap-1 px-2">
            <ImagePlus className="h-3 w-3" />
            {uploading ? "Uploading..." : "Add"}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleBatchRemoveBg}
            disabled={batchProcessing || images.length === 0}
            className="h-6 text-xs gap-1 px-2"
          >
            <RefreshCw className="h-3 w-3" />
            {batchProcessing ? "Processing..." : "Remove BG (Batch)"}
          </Button>
        </div>
      </div>

      {/* Images grid or drop zone */}
      {images.length === 0 ? (
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={handleClick}
          className="mx-4 mb-3 border border-dashed border-border rounded-lg p-3 text-center cursor-pointer hover:border-muted-foreground/50 hover:bg-muted/30 transition-colors"
        >
          <ImagePlus className="h-4 w-4 mx-auto text-muted-foreground/50 mb-1" />
          <p className="text-[10px] text-muted-foreground">Drop reference images here</p>
          <p className="text-[9px] text-muted-foreground/70">The AI will study these to match your style</p>
        </div>
      ) : (
        <div className="flex gap-2 px-4 pb-3 overflow-x-auto">
          {images.map((img) => (
            <div key={img.id} className="oc-enter-pop relative group shrink-0">
              <button onClick={() => handlePreview(img.url)} className="block w-14 h-14 rounded-lg overflow-hidden border border-border hover:border-accent transition-colors">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.url} alt={img.name} className="w-full h-full object-cover" />
              </button>

              {/* Cutout status overlay */}
              {img.cutoutStatus === "pending" && (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-xs">Processing</div>
              )}
              {img.cutoutStatus === "ready" && img.cutoutUrl && (
                <img src={img.cutoutUrl} alt="cutout" className="absolute inset-0 w-full h-full object-contain" />
              )}

              {/* Remove reference button */}
              <button
                onClick={() => handleRemove(img.id)}
                className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-destructive text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label={`Remove ${img.name}`}
              >
                <X className="h-2.5 w-2.5" />
              </button>

              {/* Remove BG button */}
              {img.cutoutStatus !== "ready" && (
                <button
                  onClick={() => handleRemoveBg(img)}
                  className="absolute bottom-0 left-0 right-0 h-5 bg-primary/80 text-white text-xs flex items-center justify-center opacity-80 hover:opacity-100"
                >
                  {img.cutoutStatus === "pending" ? "Processing..." : "Remove BG"}
                </button>
              )}
            </div>
          ))}
          {/* Add more button */}
          <button onClick={handleClick} className="shrink-0 w-14 h-14 rounded-lg border border-dashed border-border flex items-center justify-center hover:border-muted-foreground/50 transition-colors">
            <ImagePlus className="h-3.5 w-3.5 text-muted-foreground" />
          </button>
        </div>
      )}

      {/* Preview modal */}
      {previewUrl && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-8" onClick={() => setPreviewUrl(null)}>
          <div className="relative max-w-2xl max-h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={previewUrl} alt="Reference preview" className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl" />
            <button
              onClick={() => setPreviewUrl(null)}
              className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-white text-foreground flex items-center justify-center shadow-lg"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
