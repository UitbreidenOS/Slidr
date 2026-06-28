import { readDataSafe, writeData } from "@/lib/data";

export interface LicenseData {
  key: string;
  valid: boolean;
  activatedAt: string;
  lastChecked: string;
  variantId?: number;
  productId?: number;
}

const LICENSE_FILE = "license.json";

// Slidr Lemon Squeezy product/variant IDs — set these after creating the product
const SLIDR_PRODUCT_ID = Number(process.env.LEMON_SQUEEZY_PRODUCT_ID) || 0;
const SLIDR_VARIANT_ID = Number(process.env.LEMON_SQUEEZY_VARIANT_ID) || 0;
const LEMON_API_KEY = process.env.LEMON_SQUEEZY_API_KEY || "";

// Checkout URL — set after creating the Lemon Squeezy product
export const CHECKOUT_URL =
  process.env.SLIDR_CHECKOUT_URL || "https://slidr.lemonsqueezy.com/checkout";

export const LIFETIME_PRICE = 11;

export async function getLicense(): Promise<LicenseData | null> {
  const data = await readDataSafe<LicenseData | null>(LICENSE_FILE, null);
  return data;
}

export async function isLicensed(): Promise<boolean> {
  const license = await getLicense();
  if (!license || !license.valid) return false;

  // Re-validate every 7 days
  const lastChecked = new Date(license.lastChecked).getTime();
  const sevenDays = 7 * 24 * 60 * 60 * 1000;
  if (Date.now() - lastChecked > sevenDays) {
    const revalidated = await validateLicenseKey(license.key);
    if (!revalidated) {
      // Mark as invalid but keep the key for potential re-activation
      await saveLicense({ ...license, valid: false, lastChecked: new Date().toISOString() });
      return false;
    }
    await saveLicense({ ...license, valid: true, lastChecked: new Date().toISOString() });
  }

  return license.valid;
}

export async function saveLicense(data: LicenseData): Promise<void> {
  await writeData(LICENSE_FILE, data);
}

export async function clearLicense(): Promise<void> {
  await writeData(LICENSE_FILE, null);
}

/**
 * Validate a license key against the Lemon Squeezy License API.
 * Returns true if the key is valid and active.
 */
export async function validateLicenseKey(key: string): Promise<boolean> {
  if (!key || key.trim().length < 10) return false;

  try {
    const response = await fetch("https://api.lemonsqueezy.com/v1/licenses/validate", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json",
      },
      body: new URLSearchParams({
        license_key: key.trim(),
        product_id: SLIDR_PRODUCT_ID ? String(SLIDR_PRODUCT_ID) : "",
      }),
    });

    if (!response.ok) return false;

    const data = await response.json();
    return data.valid === true;
  } catch (err) {
    console.error("[license] validation error:", err);
    // On network error, trust the last known state (offline-capable)
    return false;
  }
}

/**
 * Activate a license key (first-time validation).
 */
export async function activateLicense(
  key: string
): Promise<{ success: boolean; error?: string; license?: LicenseData }> {
  if (!key || key.trim().length < 10) {
    return { success: false, error: "Invalid license key format" };
  }

  const valid = await validateLicenseKey(key);
  if (!valid) {
    return { success: false, error: "License key validation failed. Please check your key and try again." };
  }

  const now = new Date().toISOString();
  const license: LicenseData = {
    key: key.trim(),
    valid: true,
    activatedAt: now,
    lastChecked: now,
    productId: SLIDR_PRODUCT_ID || undefined,
    variantId: SLIDR_VARIANT_ID || undefined,
  };

  await saveLicense(license);
  return { success: true, license };
}

export function isLemonSqueezyConfigured(): boolean {
  return !!LEMON_API_KEY && !!SLIDR_PRODUCT_ID;
}
