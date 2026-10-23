/** Deterministic PRNG so server and client render identical shapes. */
function mulberry32(seed: number): () => number {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Point = [number, number];

/**
 * A smooth, closed, blobmaker-style shape in a 500×500 box.
 * Every path has the same number of curve segments, so any two can be morphed with SMIL.
 */
export function blobPath(seed: number, points = 6, randomness = 0.28): string {
  const rand = mulberry32(seed);
  const centre = 250;
  const pts: Point[] = Array.from({ length: points }, (_, i) => {
    const angle = (i / points) * Math.PI * 2;
    const radius = 200 * (1 - randomness + rand() * randomness);
    return [centre + Math.cos(angle) * radius, centre + Math.sin(angle) * radius];
  });

  const at = (i: number) => pts[(i + points) % points];
  const f = (n: number) => n.toFixed(1);
  let d = `M${f(pts[0][0])},${f(pts[0][1])}`;

  // Catmull-Rom → cubic Bézier for a curve that passes through every point.
  for (let i = 0; i < points; i++) {
    const [p0, p1, p2, p3] = [at(i - 1), at(i), at(i + 1), at(i + 2)];
    const c1: Point = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2: Point = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += `C${f(c1[0])},${f(c1[1])} ${f(c2[0])},${f(c2[1])} ${f(p2[0])},${f(p2[1])}`;
  }
  return `${d}Z`;
}
