import { NextRequest, NextResponse } from "next/server";
import { activateLicense } from "@/lib/license";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Lemon Squeezy webhook handler.
 *
 * Lemon Squeezy sends webhook events for order completed, license key created, etc.
 * This route listens for `license_key_created` and `order_created` events and
 * auto-activates the license server-side so the user doesn't have to manually
 * enter the key (though manual entry via /api/license/activate still works).
 *
 * Configure the webhook URL in your Lemon Squeezy dashboard:
 *   Settings → Webhooks → Add webhook → https://yourdomain.com/api/license/webhook
 *
 * Security: Lemon Squeezy signs webhooks with X-Signature header (HMAC-SHA256).
 * We verify the signature when LEMON_SQUEEZY_API_KEY is set.
 */
export async function POST(request: NextRequest) {
  const rawBody = await request.text();

  // Verify webhook signature if API key is configured
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY;
  const signature = request.headers.get("x-signature") || "";

  if (apiKey) {
    try {
      const crypto = await import("node:crypto");
      const hmac = crypto.createHmac("sha256", apiKey);
      hmac.update(rawBody);
      const digest = hmac.digest("hex");
      if (signature !== digest) {
        return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
      }
    } catch {
      // If crypto fails, log but continue (don't block in dev)
      console.error("[license:webhook] signature verification failed");
    }
  }

  let body: { meta?: { event_name?: string }; data?: { attributes?: { license_key?: { key: string } } } };
  try {
    body = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const eventName = body.meta?.event_name;

  // Handle license key creation or order completion
  if (eventName === "license_key_created" || eventName === "order_created" || eventName === "order_refunded") {
    const licenseKey = body.data?.attributes?.license_key?.key;

    if (eventName === "order_refunded") {
      // On refund, deactivate the license
      const { clearLicense } = await import("@/lib/license");
      await clearLicense();
      console.log("[license:webhook] order_refunded — license deactivated");
      return NextResponse.json({ success: true, action: "deactivated" });
    }

    if (licenseKey) {
      const result = await activateLicense(licenseKey);
      if (result.success) {
        console.log("[license:webhook] license activated:", eventName);
        return NextResponse.json({ success: true, action: "activated" });
      }
      return NextResponse.json(
        { success: false, error: result.error || "Activation failed" },
        { status: 400 }
      );
    }
  }

  // Unhandled event — acknowledge so Lemon Squeezy doesn't retry
  return NextResponse.json({ success: true, action: "ignored", event: eventName });
}
