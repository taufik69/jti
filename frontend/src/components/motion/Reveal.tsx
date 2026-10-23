"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "motion/react";
import { easeOutSoft } from "./easing";
import { revealOffsets, type RevealFrom } from "./reveal-offsets";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger direct RevealItem children by 60ms. */
  stagger?: boolean;
  delay?: number;
  /** Direction the content arrives from. */
  from?: RevealFrom;
}

const container: Variants = {
  hidden: (custom: { from: RevealFrom }) => ({ opacity: 0, ...revealOffsets[custom.from] }),
  shown: (custom: { delay: number }) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.7, ease: easeOutSoft, delay: custom.delay },
  }),
};

const staggerContainer: Variants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.06 } },
};

export function Reveal({ children, className, stagger = false, delay = 0, from = "up" }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={stagger ? staggerContainer : container}
      custom={{ delay, from }}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}
