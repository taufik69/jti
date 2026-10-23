/** 48px line grid, faded toward the edges so it reads as texture behind the slides. */
const lines =
  "bg-[linear-gradient(to_right,rgb(255_255_255/0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.06)_1px,transparent_1px)] bg-[size:48px_48px]";

const fade = "[mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,black_30%,transparent_100%)]";

export function HeroGrid() {
  return <div aria-hidden className={`pointer-events-none absolute inset-0 ${lines} ${fade}`} />;
}
