import { motion, useTransform, type MotionValue } from "motion/react";
import { Button } from "@/components/ui/Button";
import { tunnelHero } from "@/content/hero-tunnel";

interface TunnelCopyProps {
  progress: MotionValue<number>;
}

/** Soft plum pool behind the copy so it stays legible over the photos. */
const scrim = "absolute -inset-x-24 -inset-y-20 -z-10 bg-[radial-gradient(closest-side,rgb(30_6_41/0.9),rgb(30_6_41/0.6)_60%,transparent)]";

/** Centre headline and calls to action, above the photos; stays readable for the whole flight. */
export function TunnelCopy({ progress }: TunnelCopyProps) {
  const scale = useTransform(progress, [0, 1], [1, 1.05]);

  return (
    <motion.div style={{ scale }} className="relative z-10 flex max-w-3xl flex-col items-center px-5 text-center">
      <div aria-hidden className={scrim} />
      <p className="text-label text-center text-gold-400">{tunnelHero.eyebrow}</p>
      <h1 className="mt-5 text-display text-white">{tunnelHero.title}</h1>
      <p className="mt-5 max-w-[46ch] text-center text-body-lg text-white/80">{tunnelHero.text}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href={tunnelHero.primary.href} size="lg" withArrow>
          {tunnelHero.primary.label}
        </Button>
        <Button href={tunnelHero.secondary.href} size="lg" variant="inverse">
          {tunnelHero.secondary.label}
        </Button>
      </div>
    </motion.div>
  );
}
