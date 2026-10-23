"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "motion/react";
import { easeOutSoft } from "./easing";

interface RevealItemProps {
  children: ReactNode;
  className?: string;
}

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutSoft } },
};

/** Child of <Reveal stagger>. */
export function RevealItem({ children, className }: RevealItemProps) {
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
