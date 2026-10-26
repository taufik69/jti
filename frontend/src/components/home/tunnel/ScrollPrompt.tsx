import { motion, useTransform, type MotionValue } from "motion/react";

interface ScrollPromptProps {
  progress: MotionValue<number>;
}

/** "Scroll to explore" hint that disappears once the visitor starts moving. */
export function ScrollPrompt({ progress }: ScrollPromptProps) {
  const opacity = useTransform(progress, [0, 0.08], [1, 0]);

  return (
    <motion.div
      aria-hidden
      style={{ opacity }}
      className="pointer-events-none absolute bottom-8 z-20 flex flex-col items-center gap-2 text-label text-white/60 motion-reduce:hidden"
    >
      <span>Scroll to explore</span>
      <div className="h-6 w-px bg-gradient-to-b from-gold-500 to-transparent" />
    </motion.div>
  );
}
