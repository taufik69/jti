import { useEffect } from "react";
import { useMotionValue, useSpring, type MotionValue } from "motion/react";

export interface PointerOffset {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

const spring = { stiffness: 60, damping: 25, mass: 0.5 };

/** Pointer position as -1…1 from the viewport centre, eased so the camera drifts rather than snaps. */
export function usePointerParallax(enabled: boolean): PointerOffset {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, spring);
  const y = useSpring(rawY, spring);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      rawX.set((e.clientX / window.innerWidth - 0.5) * 2);
      rawY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled, rawX, rawY]);

  return { x, y };
}
