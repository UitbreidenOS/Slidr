import { NextResponse } from "next/server";

export async function GET() {
  // In a real app, this would fetch from a global database of approved community themes.
  // We'll mock a few community themes for demonstration.
  
  const communityThemes = [
    {
      id: "community_1",
      name: "Cyberpunk 2077",
      author: "neon_rider",
      downloads: 1250,
      rating: 4.9,
      category: "Dark & Neon",
      previewUrl: "https://example.com/preview1.jpg"
    },
    {
      id: "community_2",
      name: "Minimalist Scandinavian",
      author: "nordic_design",
      downloads: 840,
      rating: 4.7,
      category: "Minimalist",
      previewUrl: "https://example.com/preview2.jpg"
    },
    {
      id: "community_3",
      name: "Retro 80s VHS",
      author: "synthwave_fan",
      downloads: 3200,
      rating: 4.8,
      category: "Brutalist & Y2K",
      previewUrl: "https://example.com/preview3.jpg"
    }
  ];

  return NextResponse.json({ themes: communityThemes });
}
