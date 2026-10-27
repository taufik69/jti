import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/cn";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** Max offset as a percentage of the element's height (brief caps it at 6). */
  amount?: number;
}

/** Light parallax for large photos only. The child should be ~12% taller than the frame. */
export function Parallax({ children, className, amount = 6 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // Scroll-linked values bypass MotionConfig's reducedMotion, so hold still explicitly.
  const reduce = useReducedMotion() ?? false;
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : [`-${amount}%`, `${amount}%`]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div style={{ y }} className="absolute -inset-y-[6%] inset-x-0">
        {children}
      </motion.div>
    </div>
  );
}
