"use client";

import { useState, useEffect } from "react";
import { X, Lock, Zap, Check, Loader2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface LicenseModalProps {
  open: boolean;
  onClose: () => void;
}

export function LicenseModal({ open, onClose }: LicenseModalProps) {
  const [status, setStatus] = useState<{ valid: boolean; key: string | null } | null>(null);
  const [inputKey, setInputKey] = useState("");
  const [activating, setActivating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [checkoutInfo, setCheckoutInfo] = useState<{ checkoutUrl: string; price: number; configured: boolean } | null>(null);

  useEffect(() => {
    if (open) {
      fetch("/api/license/status")
        .then((r) => r.json())
        .then(setStatus);
      fetch("/api/license/activate")
        .then((r) => r.json())
        .then(setCheckoutInfo);
      setError(null);
      setInputKey("");
    }
  }, [open]);

  if (!open) return null;

  const handleActivate = async () => {
    if (!inputKey.trim()) {
      setError("Please enter your license key");
      return;
    }
    setActivating(true);
    setError(null);
    try {
      const resp = await fetch("/api/license/activate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: inputKey.trim() }),
      });
      const data = await resp.json();
      if (data.success) {
        setStatus({ valid: true, key: inputKey.substring(0, 6) + "..." });
      } else {
        setError(data.error || "Activation failed");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setActivating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-background border border-border rounded-2xl w-full max-w-md shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <Lock className="h-5 w-5 text-accent" />
            {status?.valid ? "License Active" : "Remove Watermark"}
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close">
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-6 space-y-4">
          {status?.valid ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-green-500/10 flex items-center justify-center">
                <Check className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="font-semibold text-lg">Lifetime License Active</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Watermark removed from all exports forever.
              </p>
              {status.key && (
                <p className="text-xs text-muted-foreground mt-2 font-mono">
                  Key: {status.key}
                </p>
              )}
            </div>
          ) : (
            <>
              <div className="text-center">
                <div className="text-3xl font-bold">
                  ${checkoutInfo?.price || 11}
                  <span className="text-sm font-normal text-muted-foreground">/lifetime</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  One-time payment. Remove the Slidr watermark from all exports, forever.
                </p>
              </div>

              {/* Feature list */}
              <div className="space-y-2 text-sm">
                {[
                  "Watermark removed from all PNG + PDF exports",
                  "Lifetime access — pay once, no subscription",
                  "Works across all your devices",
                  "Supports Slidr's development",
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Checkout button */}
              {checkoutInfo?.checkoutUrl && (
                <a
                  href={checkoutInfo.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="slidr-press flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  Get Lifetime Access — ${checkoutInfo.price}
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}

              {/* Already have a key */}
              <div className="border-t border-border pt-4 space-y-2">
                <label className="text-sm font-medium">Already have a license key?</label>
                <div className="flex gap-2">
                  <Input
                    value={inputKey}
                    onChange={(e) => setInputKey(e.target.value)}
                    placeholder="Enter your license key"
                    className="font-mono text-xs"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleActivate();
                    }}
                  />
                  <Button onClick={handleActivate} disabled={activating}>
                    {activating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Zap className="h-4 w-4" />}
                  </Button>
                </div>
                {error && (
                  <p className="text-xs text-red-500">{error}</p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
