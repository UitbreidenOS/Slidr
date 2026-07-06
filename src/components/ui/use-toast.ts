export interface ToastOptions {
  title: string;
  description: string;
  variant?: "default" | "destructive";
}

/**
 * Minimal toast implementation used by the app.
 * Currently logs to the console – replace with a UI toast library if desired.
 */
export function toast({ title, description, variant = "default" }: ToastOptions) {
  // In development we print to console; a real UI toast can hook into a context provider.
  // eslint-disable-next-line no-console
  console.log(`[Toast] ${variant.toUpperCase()}: ${title} – ${description}`);
}
