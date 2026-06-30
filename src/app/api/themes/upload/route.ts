import { NextResponse } from "next/server";
import { generateId } from "@/lib/utils";
import { mkdir, writeFile } from "fs/promises";
import path from "path";

// In a real app, this would be a proper database or validated storage
const USER_THEMES_DIR = "user-themes";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "Theme file (.md) is required" }, { status: 400 });
    }

    if (!file.name.endsWith(".md")) {
      return NextResponse.json({ error: "Only .md files (DESIGN.md format) are allowed" }, { status: 400 });
    }

    const content = await file.text();
    
    // Basic validation to ensure it looks like a DESIGN.md file
    if (!content.includes("# Design System:") || !content.includes("## 2. Color Palette")) {
      return NextResponse.json({ error: "Invalid theme format. Must follow DESIGN.md structure." }, { status: 400 });
    }

    const themeId = `theme_${generateId()}`;
    const dirPath = path.join(process.cwd(), "data", USER_THEMES_DIR);
    const filePath = path.join(dirPath, `${themeId}.md`);
    
    await mkdir(dirPath, { recursive: true });
    await writeFile(filePath, content, "utf-8");

    return NextResponse.json({ 
      success: true, 
      message: "Theme uploaded successfully",
      themeId
    });
  } catch (error) {
    console.error("Theme upload error:", error);
    return NextResponse.json(
      { error: (error as Error).message || "Failed to upload theme" },
      { status: 500 }
    );
  }
}
