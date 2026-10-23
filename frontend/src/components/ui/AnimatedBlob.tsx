"use client";

import { useReducedMotion } from "motion/react";
import { blobPath } from "@/lib/blob-path";
import { cn } from "@/lib/cn";

interface AnimatedBlobProps {
  /** Three seeds: the blob morphs a → b → c → a. */
  seeds: [number, number, number];
  className?: string;
  /** Seconds for one full morph cycle. */
  duration?: number;
  outline?: boolean;
}

const ease = "0.45 0 0.55 1";

/** Solid organic shape that slowly morphs. Colour comes from `text-*` via currentColor. */
export function AnimatedBlob({ seeds, className, duration = 14, outline = false }: AnimatedBlobProps) {
  const reduce = useReducedMotion();
  const [a, b, c] = seeds.map((seed) => blobPath(seed));
  const paint = outline
    ? { fill: "none", stroke: "currentColor", strokeWidth: 2, vectorEffect: "non-scaling-stroke" as const }
    : { fill: "currentColor" };

  return (
    <svg viewBox="0 0 500 500" aria-hidden className={cn("absolute", className)}>
      <path d={a} {...paint}>
        {!reduce && (
          <animate
            attributeName="d"
            dur={`${duration}s`}
            repeatCount="indefinite"
            values={`${a};${b};${c};${a}`}
            keyTimes="0;0.33;0.66;1"
            calcMode="spline"
            keySplines={`${ease};${ease};${ease}`}
          />
        )}
      </path>
    </svg>
  );
}
