import { NextResponse } from 'next/server';

// Mock the modules we depend on
jest.mock('@/lib/carousels', () => ({
  getCarousel: jest.fn(),
  updateReferenceImageCutout: jest.fn(),
}));
jest.mock('@/lib/background-removal', () => ({
  removeBackground: jest.fn(),
  saveCutout: jest.fn(),
}));

// We need to import the handler after mocking
const { POST } = require('@/app/api/images/remove-bg/route');

describe('POST /api/images/remove-bg', () => {
  const mockCarouselId = 'test-carousel';
  const mockImageId = 'test-image';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns 400 if carouselId or imageId missing', async () => {
    const req = {
      json: () => Promise.resolve({}),
    } as any;
    const res = await POST(req);
    expect(res.status).toBe(400);
    expect(await res.json()).toEqual({ error: 'carouselId and imageId are required' });
  });

  it('returns 404 if carousel not found', async () => {
    const req = {
      json: () =>
        Promise.resolve({
          carouselId: mockCarouselId,
          imageId: mockImageId,
        }),
    } as any;
    // @ts-expect-error mock
    require('@/lib/carousels').getCarousel.mockResolvedValue(null);
    const res = await POST(req);
    expect(res.status).toBe(404);
    expect(await res.json()).toEqual({ error: 'Carousel not found' });
  });

  it('returns 404 if reference image not found', async () => {
    const req = {
      json: () =>
        Promise.resolve({
          carouselId: mockCarouselId,
          imageId: mockImageId,
        }),
    } as any;
    const mockCarousel = { referenceImages: [] };
    // @ts-expect-error mock
    require('@/lib/carousels').getCarousel.mockResolvedValue(mockCarousel);
    const res = await POST(req);
    expect(res.status).toBe(404);
    expect(await res.json()).toEqual({ error: 'Reference image not found' });
  });

  it('returns 500 if background removal fails', async () => {
    const req = {
      json: () =>
        Promise.resolve({
          carouselId: mockCarouselId,
          imageId: mockImageId,
        }),
    } as any;
    const mockCarousel = {
      referenceImages: [
        { id: mockImageId, url: '/uploads/test.png', absPath: '/fake/path', name: 'test', addedAt: 'now' },
      ],
    };
    // @ts-expect-error mock
    require('@/lib/carousels').getCarousel.mockResolvedValue(mockCarousel);
    // @ts-expect-error mock
    require('@/lib/background-removal').removeBackground.mockResolvedValue({ success: false, error: 'Some error' });
    const res = await POST(req);
    expect(res.status).toBe(500);
    expect(await res.json()).toEqual({ error: 'Internal server error' });
  });

  it('returns cutoutUrl on success', async () => {
    const req = {
      json: () =>
        Promise.resolve({
          carouselId: mockCarouselId,
          imageId: mockImageId,
        }),
    } as any;
    const mockCarousel = {
      referenceImages: [
        { id: mockImageId, url: '/uploads/test.png', absPath: '/fake/path', name: 'test', addedAt: 'now' },
      ],
    };
    // @ts-expect-error mock
    require('@/lib/carousels').getCarousel.mockResolvedValue(mockCarousel);
    // @ts-expect-error mock
    require('@/lib/background-removal').removeBackground.mockResolvedValue({
      success: true,
      buffer: Buffer.from('fake-png'),
    });
    // @ts-expect-error mock
    require('@/lib/background-removal').saveCutout.mockResolvedValue('/uploads/cutout-test-carousel-test-image.png');
    // @ts-expect-error mock
    require('@/lib/carousels').updateReferenceImageCutout.mockResolvedValue(true);
    const res = await POST(req);
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ cutoutUrl: '/uploads/cutout-test-carousel-test-image.png', status: 'ready' });
  });
});