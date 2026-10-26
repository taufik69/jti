import { HeroGrid } from "../slider/HeroGrid";

/** Faint radial glows on the plum band, matching the previous hero. */
const glow =
  "bg-[radial-gradient(50rem_30rem_at_85%_10%,rgb(139_79_171/0.35),transparent_70%),radial-gradient(40rem_25rem_at_0%_100%,rgb(255_203_105/0.10),transparent_70%)]";

/** Grid, glow and depth rings behind the tunnel; purely decorative. */
export function TunnelBackdrop() {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 flex items-center justify-center ${glow}`}>
      <HeroGrid />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgb(139_79_171/0.25)_0%,transparent_65%)]" />
      <div className="absolute size-[48vmin] rounded-full border border-gold-500/20" />
      <div className="absolute size-[76vmin] rounded-full border border-dashed border-white/10" />
    </div>
  );
}
