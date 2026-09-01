import { removeBackground, saveCutout } from '@/lib/background-removal';
import { promises as fs } from 'fs';
import path from 'path';

// Mock global fetch for Remove.bg API
const mockFetch = jest.fn();
Object.defineProperty(global, 'fetch', {
  value: mockFetch,
  writable: true,
});

describe('background-removal service', () => {
  const dummyImagePath = path.resolve(__dirname, '../../public/uploads/dummy.png');

  beforeAll(async () => {
    // Ensure the uploads directory exists
    const uploadsDir = path.resolve(__dirname, '../../public/uploads');
    await fs.mkdir(uploadsDir, { recursive: true });
    // Create a tiny dummy PNG file (valid 1x1 transparent)
    await fs.writeFile(
      dummyImagePath,
      Buffer.from([
        0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, // PNG signature
        0x00, 0x00, 0x00, 0x0d, // IHDR chunk length
        0x49, 0x48, 0x44, 0x52, // IHDR
        0x00, 0x00, 0x00, 0x01, // width = 1
        0x00, 0x00, 0x00, 0x01, // height = 1
        0x08, 0x06, 0x00, 0x00, 0x00, // bit depth, color type, compression, filter, interlace
        0x1f, 0x15, 0xc4, 0x89, // CRC
        0x00, 0x00, 0x00, 0x0c, // IDAT chunk length
        0x49, 0x44, 0x41, 0x54, // IDAT
        0x08, 0xd7, 0x63, 0xf8, 0x0f, 0x00, 0x01, 0x01, 0x00, 0x15, 0xdd, 0x8d, 0xb4, // zlib data
        0x00, 0x00, 0x00, 0x00, // IEND chunk length
        0x49, 0x45, 0x4e, 0x44, // IEND
        0xae, 0x42, 0x60, 0x82, // CRC
      ])
    );
  });

  afterAll(async () => {
    // Clean up dummy image
    await fs.unlink(dummyImagePath);
  });

  it('uses Remove.bg when API key is set', async () => {
    process.env.REMOVE_BG_API_KEY = 'test-key';
    // Mock successful Remove.bg response with a PNG buffer
    const fakePng = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]); // minimal PNG
    mockFetch.mockResolvedValueOnce(
      new Response(fakePng, {
        status: 200,
        headers: { 'content-type': 'image/png' },
      })
    );

    const result = await removeBackground(dummyImagePath);
    expect(result.success).toBe(true);
    expect(result.buffer).toBeInstanceOf(Buffer);
    // Optionally check that fetch was called with correct URL and headers
    expect(mockFetch).toHaveBeenCalled();
    delete process.env.REMOVE_BG_API_KEY;
  });

  it('saves cutout correctly', async () => {
    const buffer = Buffer.from('test');
    const url = await saveCutout('test-carousel', 'img-id', buffer);
    expect(url).toMatch(/^\/uploads\/cutout-test-carousel-img-id\.png$/);
    // Verify file exists
    const filePath = path.resolve(process.cwd(), 'public', url);
    const exists = await fs
      .access(filePath)
      .then(() => true)
      .catch(() => false);
    expect(exists).toBe(true);
    // Clean up
    await fs.unlink(filePath);
  });
});