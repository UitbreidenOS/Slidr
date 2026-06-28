import { NextResponse } from "next/server";
import { listThemes, getTheme } from "@/lib/themes";
import { themeSummary } from "@/lib/themes";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const themeId = url.searchParams.get("id");

  if (themeId) {
    const theme = await getTheme(themeId);
    if (!theme) {
      return NextResponse.json({ error: "Theme not found" }, { status: 404 });
    }
    return NextResponse.json({ theme });
  }

  const themes = await listThemes();
  return NextResponse.json({
    themes: themes.map((t) => ({
      ...t,
      summary: themeSummary(t),
    })),
  });
}
