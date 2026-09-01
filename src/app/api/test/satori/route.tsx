import { NextRequest, NextResponse } from 'next/server';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  try {
    // 1. Fetch a font to use for Satori
    // We'll use Inter from Google Fonts as a default
    const fontResponse = await fetch('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2');
    const fontData = await fontResponse.arrayBuffer();

    // 2. Define our SVG via Satori using standard HTML-like structure (React elements under the hood)
    const svg = await satori(
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: '#0a0a0f',
          color: '#ffffff',
          fontFamily: '"Inter"',
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', fontSize: '64px', fontWeight: 800, color: '#a78bfa', marginBottom: '24px' }}>
          Hello from Satori!
        </div>
        <div style={{ display: 'flex', fontSize: '32px', textAlign: 'center', color: '#e2e8f0' }}>
          This is a proof of concept rendering HTML/CSS to SVG, then converting to PNG using resvg-js.
        </div>
      </div>,
      {
        width: 1080,
        height: 1080,
        fonts: [
          {
            name: 'Inter',
            data: fontData,
            weight: 400,
            style: 'normal',
          },
          {
            name: 'Inter',
            data: fontData,
            weight: 800,
            style: 'normal',
          }
        ],
      }
    );

    // 3. Convert SVG to PNG using Resvg
    const resvg = new Resvg(svg, {
      fitTo: { mode: 'original' },
    });
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    // 4. Return the PNG
    return new NextResponse(new Uint8Array(pngBuffer), {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error in Satori test route:', error);
    return NextResponse.json(
      { error: 'Failed to generate image', details: (error as Error).message },
      { status: 500 }
    );
  }
}
