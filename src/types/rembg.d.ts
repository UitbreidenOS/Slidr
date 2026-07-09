declare module "rembg" {
  /**
   * Removes the background from an image buffer and returns a new PNG buffer with transparency.
   */
  export function removeBackground(buffer: Buffer): Promise<Buffer>;
}
