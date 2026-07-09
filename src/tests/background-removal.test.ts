import { removeBackground, removeBackgroundLocal, saveCutout } from '@/lib/background-removal';
import { promises as fs } from 'fs';
import path from 'path';

// Mock fetch for Remove.bg API
jest.mock('node-fetch', () => jest.fn());
import fetch from 'node-fetch';
const { Response } = jest.requireActual('node-fetch');

describe('background-removal service', () => {
  const sampleImage = path.resolve(__dirname, '../../public/uploads/sample.png');

  beforeAll(async () => {
    // Ensure a sample image exists (could be a tiny PNG placeholder)
    await fs.writeFile(sampleImage, Buffer.from([0x89,0x50,0x4e,0x47,0x0d,0x0a,0x1a,0x0a]));
  });

  afterAll(async () => {
    await fs.unlink(sampleImage);
  });

  it('uses Remove.bg when API key is set', async () => {
    process.env.REMOVE_BG_API_KEY = 'test-key';
    // Mock successful Remove.bg response
    (fetch as any).mockResolvedValue(new Response(Buffer.from('fake-png'), { status: 200 }));
    const result = await removeBackground(sampleImage);
    expect(result.success).toBe(true);
    expect(result.buffer).toBeInstanceOf(Buffer);
    delete process.env.REMOVE_BG_API_KEY;
  });

  it('falls back to local when no API key', async () => {
    const result = await removeBackground(sampleImage);
    expect(result.success).toBe(true);
    expect(result.buffer).toBeInstanceOf(Buffer);
  });

  it('saves cutout correctly', async () => {
    const buffer = Buffer.from('test');
    const url = await saveCutout('test-carousel', 'img-id', buffer);
    expect(url).toMatch(/^\/uploads\/cutout-test-carousel-img-id\.png$/);
    // Clean up the generated file
    const filePath = path.resolve(process.cwd(), 'public', url);
    await fs.unlink(filePath);
  });
});
