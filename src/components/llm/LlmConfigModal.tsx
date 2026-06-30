"use client";

import { useState, useEffect } from "react";
import { X, Key, Terminal, Globe, Check, Zap, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { PROVIDER_PRESETS, type LlmConfig, type CliInfo } from "@/lib/llm/types";

interface LlmConfigModalProps {
  open: boolean;
  onClose: () => void;
  config: LlmConfig;
  detectedClis: CliInfo[];
  onSave: (config: LlmConfig) => Promise<void>;
}

export function LlmConfigModal({
  open,
  onClose,
  config,
  detectedClis,
  onSave,
}: LlmConfigModalProps) {
  const [mode, setMode] = useState<LlmConfig["mode"]>(config.mode);
  const [baseURL, setBaseURL] = useState(config.baseURL);
  const [apiKey, setApiKey] = useState(config.apiKey);
  const [model, setModel] = useState(config.model);
  const [selectedCli, setSelectedCli] = useState<string | null>(config.cli ?? null);
  const [saving, setSaving] = useState(false);
  const [showKey, setShowKey] = useState(false);
  const [cliStatus, setCliStatus] = useState<{
    working: boolean;
    installed: boolean;
    models: string[];
    error?: string;
  } | null>(null);
  const [loadingCli, setLoadingCli] = useState(false);

  useEffect(() => {
    if (open) {
      setMode(config.mode);
      setBaseURL(config.baseURL);
      setApiKey(config.apiKey);
      setModel(config.model);
      setSelectedCli(config.cli ?? null);
      
      // Fetch CLI status
      setLoadingCli(true);
      fetch("/api/llm-config/cli-status")
        .then((res) => res.json())
        .then((data) => {
          setCliStatus(data);
          if (data.working && data.models.length > 0 && config.mode === "cli") {
            // Pre-select model from CLI if it's currently empty or invalid
            if (!config.model || !data.models.includes(config.model)) {
              setModel(data.models[0]);
            }
          }
        })
        .catch((err) => console.error("CLI status check failed", err))
        .finally(() => setLoadingCli(false));
    }
  }, [open, config]);

  if (!open) return null;

  const handlePreset = (preset: (typeof PROVIDER_PRESETS)[0]) => {
    setBaseURL(preset.baseURL);
    setModel(preset.model);
    if (mode === "cli") setMode("auto");
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await onSave({
        mode,
        baseURL,
        apiKey,
        model,
        cli: selectedCli as LlmConfig["cli"],
      });
      onClose();
    } finally {
      setSaving(false);
    }
  };

  const recommendedCli = detectedClis.find((c) => c.recommended);
  const httpReady = !!(baseURL && apiKey && model);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-background border border-border rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-lg font-bold flex items-center gap-2">
              <Zap className="h-5 w-5 text-accent" />
              LLM Configuration
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              Use any OpenAI-compatible provider or a coding CLI
            </p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close">
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-6 space-y-6">
          {/* CLI Detection */}
          {detectedClis.length > 0 && (
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-1.5">
                <Terminal className="h-4 w-4" />
                Detected Coding CLIs
              </label>
              <div className="flex flex-wrap gap-2">
                {detectedClis.map((cli) => (
                  <div
                    key={cli.type}
                    className={cn(
                      "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border",
                      selectedCli === cli.type
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-border bg-muted"
                    )}
                  >
                    <Check className="h-3 w-3 text-green-500" />
                    <span className="font-medium">{cli.name}</span>
                    {cli.recommended && (
                      <span className="text-[10px] bg-accent text-accent-foreground px-1.5 py-0.5 rounded-full">
                        Recommended
                      </span>
                    )}
                  </div>
                ))}
              </div>
              {recommendedCli && (
                <p className="text-xs text-muted-foreground">
                  Antigravity CLI detected — recommended for agentic mode (web fetch, reference images).
                </p>
              )}
            </div>
          )}

          {/* Mode selector */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Mode</label>
            <div className="flex gap-2">
              {(["auto", "http", "cli"] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={cn(
                    "slidr-press flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-colors",
                    mode === m
                      ? "bg-foreground text-background"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  )}
                >
                  {m === "auto" ? "Auto" : m === "http" ? "HTTP (API Key)" : "CLI (Agent)"}
                </button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              {mode === "auto"
                ? "Uses CLI if detected, falls back to HTTP"
                : mode === "http"
                  ? "Direct API calls — no CLI needed"
                  : "Uses a coding CLI for agentic capabilities"}
            </p>
          </div>

          {/* HTTP config (always show — used in auto + http modes) */}
          {(mode === "auto" || mode === "http") && (
            <>
              {/* Provider presets */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Quick Setup (Free Tiers Available)</label>
                <div className="grid grid-cols-2 gap-2">
                  {PROVIDER_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => handlePreset(preset)}
                      className={cn(
                        "slidr-press flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs border text-left transition-colors",
                        baseURL === preset.baseURL
                          ? "border-accent bg-accent/5"
                          : "border-border hover:bg-muted"
                      )}
                    >
                      <Globe className="h-3 w-3 shrink-0" />
                      <div className="min-w-0">
                        <div className="font-medium truncate">{preset.label}</div>
                        {preset.free && (
                          <div className="text-[10px] text-green-500">Free tier</div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Base URL */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Base URL</label>
                <Input
                  value={baseURL}
                  onChange={(e) => setBaseURL(e.target.value)}
                  placeholder="https://api.groq.com/openai/v1"
                  className="font-mono text-xs"
                />
              </div>

              {/* API Key */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-1.5">
                  <Key className="h-3.5 w-3.5" />
                  API Key
                </label>
                <div className="relative">
                  <Input
                    type={showKey ? "text" : "password"}
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="sk-..."
                    className="font-mono text-xs pr-16"
                  />
                  <button
                    onClick={() => setShowKey(!showKey)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
                  >
                    {showKey ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Model */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Model</label>
                <Input
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  placeholder="llama-3.3-70b-versatile"
                  className="font-mono text-xs"
                />
              </div>
            </>
          )}

          {/* CLI selector (only in cli mode) */}
          {mode === "cli" && detectedClis.length > 0 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Select CLI</label>
                <div className="flex flex-col gap-2">
                  {detectedClis.map((cli) => (
                    <div
                      key={cli.type}
                      className={cn(
                        "flex items-center justify-between px-3 py-2 rounded-lg text-sm border transition-colors bg-surface",
                        selectedCli === cli.type
                          ? "border-accent bg-accent/5"
                          : "border-border"
                      )}
                    >
                      <span className="font-medium">{cli.name}</span>
                      <div className="flex items-center gap-2">
                        {loadingCli ? (
                          <Loader2 className="h-3 w-3 animate-spin text-muted-foreground" />
                        ) : cliStatus?.working ? (
                          <span className="flex items-center gap-1 text-xs text-green-500 font-semibold bg-green-500/10 px-2 py-0.5 rounded-full">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                            Connected
                          </span>
                        ) : (
                          <span className="text-xs text-red-500 font-semibold bg-red-500/10 px-2 py-0.5 rounded-full">
                            Offline
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {cliStatus?.working && cliStatus.models.length > 0 && (
                <div className="space-y-2">
                  <label className="text-sm font-medium">CLI Model Selection</label>
                  <select
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-accent"
                  >
                    {cliStatus.models.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                  <p className="text-[10px] text-muted-foreground">
                    Available models queried dynamically from the Antigravity CLI.
                  </p>
                </div>
              )}
            </div>
          )}

          {mode === "cli" && detectedClis.length === 0 && (
            <div className="text-center py-8 text-sm text-muted-foreground">
              <Terminal className="h-8 w-8 mx-auto mb-2 opacity-50" />
              No coding CLIs detected. Install{" "}
              <a
                href="https://antigravity.google/cli/install.sh"
                target="_blank"
                rel="noopener"
                className="text-accent underline"
              >
                Antigravity CLI
              </a>{" "}
              or switch to HTTP mode.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-border">
          <div className="text-xs text-muted-foreground">
            {httpReady ? (
              <span className="text-green-500">✓ HTTP configured</span>
            ) : detectedClis.length > 0 ? (
              <span className="text-amber-500">⚠ HTTP not configured (CLI available)</span>
            ) : (
              <span className="text-red-500">⚠ No LLM configured</span>
            )}
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={saving}>
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : "Save"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
