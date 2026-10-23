export type RevealFrom = "up" | "left" | "right";

/** Starting offset per direction. Kept small so it reads on phones and never feels like a slide-in. */
export const revealOffsets: Record<RevealFrom, { x: number; y: number }> = {
  up: { x: 0, y: 16 },
  left: { x: -32, y: 0 },
  right: { x: 32, y: 0 },
};
