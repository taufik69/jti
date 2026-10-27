import { useEffect } from "react";
import Lenis from "lenis";
import { prefersReducedMotion, watchReducedMotion } from "@/lib/motion-preference";

/** Smooth wheel scrolling, only while the visitor hasn't asked for reduced motion; follows changes live. */
export function useLenis(): void {
  useEffect(() => {
    let lenis: Lenis | null = null;
    let frame = 0;

    const start = () => {
      lenis = new Lenis({ lerp: 0.1, anchors: true });
      frame = requestAnimationFrame(function raf(time: number) {
        lenis?.raf(time);
        frame = requestAnimationFrame(raf);
      });
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      lenis?.destroy();
      lenis = null;
    };

    if (!prefersReducedMotion()) start();
    const unwatch = watchReducedMotion((reduce) => (reduce ? stop() : !lenis && start()));

    return () => {
      unwatch();
      stop();
    };
  }, []);
}
