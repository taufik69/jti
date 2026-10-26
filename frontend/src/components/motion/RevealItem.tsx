import type { ReactNode } from "react";
import { motion, type Variants } from "motion/react";
import { easeOutSoft } from "./easing";
import { revealOffsets, type RevealFrom } from "./reveal-offsets";

interface RevealItemProps {
  children: ReactNode;
  className?: string;
  /** Direction the item arrives from. */
  from?: RevealFrom;
}

const item: Variants = {
  hidden: (from: RevealFrom) => ({ opacity: 0, ...revealOffsets[from] }),
  shown: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6, ease: easeOutSoft } },
};

/** Child of <Reveal stagger>. */
export function RevealItem({ children, className, from = "up" }: RevealItemProps) {
  return (
    <motion.div className={className} variants={item} custom={from}>
      {children}
    </motion.div>
  );
}
