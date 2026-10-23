"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "motion/react";
import { useLenis } from "@/hooks/useLenis";

interface MotionProviderProps {
  children: ReactNode;
}

/** Honours prefers-reduced-motion for every motion component and starts Lenis. */
export function MotionProvider({ children }: MotionProviderProps) {
  useLenis();
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
