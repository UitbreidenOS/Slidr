import { NextRequest, NextResponse } from "next/server";
import { activateLicense, isLemonSqueezyConfigured, CHECKOUT_URL, LIFETIME_PRICE } from "@/lib/license";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Webhook handler for Lemon Squeezy (optional — for server-side activation)
export async function POST(request: NextRequest) {
  let body: { key?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { key } = body;
  if (!key) {
    return NextResponse.json({ error: "License key required" }, { status: 400 });
  }

  const result = await activateLicense(key);
  if (!result.success) {
    return NextResponse.json(
      { success: false, error: result.error || "Activation failed" },
      { status: 400 }
    );
  }

  return NextResponse.json({ success: true, license: result.license });
}

// Get checkout info
export async function GET() {
  return NextResponse.json({
    configured: isLemonSqueezyConfigured(),
    checkoutUrl: CHECKOUT_URL,
    price: LIFETIME_PRICE,
  });
}
