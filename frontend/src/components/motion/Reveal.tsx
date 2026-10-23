"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "motion/react";
import { easeOutSoft } from "./easing";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger direct RevealItem children by 60ms. */
  stagger?: boolean;
  delay?: number;
}

const container: Variants = {
  hidden: { opacity: 0, y: 16 },
  shown: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutSoft, delay },
  }),
};

const staggerContainer: Variants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.06 } },
};

export function Reveal({ children, className, stagger = false, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={stagger ? staggerContainer : container}
      custom={delay}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
