import { tunnelImages, type TunnelImage } from "@/content/hero-tunnel";

export interface TunnelCardData {
  image: TunnelImage;
  index: number;
  angleCos: number;
  angleSin: number;
  radiusX: number;
  radiusY: number;
  rotateZ: number;
}

export interface StageSize {
  width: number;
  height: number;
  isMobile: boolean;
}

/** Share of the scroll each card spends travelling from far to near. */
export const STAGGER_SPAN = 0.55;

/** Scroll progress at rest: most cards are already spread through the tunnel on load. */
export const REST_PROGRESS = 0.4;

/** Photos are reused round the spiral so the tunnel looks full from the first frame. */
const CARD_COUNT = 14;

/** Golden-angle spiral keeps the cards spread around the tunnel without clumping. */
export const tunnelCards: TunnelCardData[] = Array.from({ length: CARD_COUNT }, (_, i) => {
  const angle = i * 137.5 * (Math.PI / 180);
  return {
    image: tunnelImages[i % tunnelImages.length],
    index: i,
    angleCos: Math.cos(angle),
    angleSin: Math.sin(angle),
    radiusX: 0.3 + (i % 3) * 0.08,
    radiusY: 0.28 + (i % 2) * 0.09,
    rotateZ: (i % 2 === 0 ? 1 : -1) * (3 + (i % 5) * 2),
  };
});

export function cardWidth({ width, isMobile }: StageSize): number {
  return isMobile ? Math.max(120, Math.min(170, width * 0.36)) : Math.max(180, Math.min(260, width * 0.17));
}
