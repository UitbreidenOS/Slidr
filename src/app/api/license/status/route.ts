import { NextResponse } from "next/server";
import { getLicense } from "@/lib/license";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const license = await getLicense();
  return NextResponse.json({
    valid: license?.valid ?? false,
    key: license?.key ? license.key.substring(0, 6) + "..." + license.key.slice(-4) : null,
    activatedAt: license?.activatedAt ?? null,
  });
}
