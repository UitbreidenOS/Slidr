import { updateReferenceImageCutout, setReferenceImageCutoutStatus } from '@/lib/carousels';
import { readDataSafe, writeData } from '@/lib/data';

// Mock the data layer to use an in-memory object
jest.mock('@/lib/data', () => {
  const original = jest.requireActual('@/lib/data');
  const dataStore = new Map<string, any>();

  return {
    ...original,
    readDataSafe: async (filename: string, fallback: any) => {
      const data = dataStore.get(filename);
      return data !== undefined ? data : fallback;
    },
    writeData: async (filename: string, data: any) => {
      dataStore.set(filename, data);
    },
  };
});

describe('cutout helper functions', () => {
  beforeEach(() => {
    // Reset the mock storage
    (require('@/lib/data') as any).dataStore.clear();
  });

  it('should update cutoutUrl and cutoutStatus', async () => {
    const result = await updateReferenceImageCutout('test-carousel', 'test-image', '/uploads/cutout-test.png', 'ready');
    expect(result).toBe(true);

    const data = await readDataSafe<{ carousels: any[] }>('carousels.json', { carousels: [] });
    const car = data.carousels.find((c: any) => c.id === 'test-carousel');
    const img = car?.referenceImages.find((i: any) => i.id === 'test-image');
    expect(img?.cutoutUrl).toBe('/uploads/cutout-test.png');
    expect(img?.cutoutStatus).toBe('ready');
  });

  it('should update only cutoutStatus when using setReferenceImageCutoutStatus', async () => {
    const result = await setReferenceImageCutoutStatus('test-carousel', 'test-image', 'pending');
    expect(result).toBe(true);

    const data = await readDataSafe<{ carousels: any[] }>('carousels.json', { carousels: [] });
    const car = data.carousels.find((c: any) => c.id === 'test-carousel');
    const img = car?.referenceImages.find((i: any) => i.id === 'test-image');
    expect(img?.cutoutUrl).toBeUndefined(); // Should not have changed
    expect(img?.cutoutStatus).toBe('pending');
  });
});