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

    // Pause while a Radix select or dialog holds the scroll lock, so the page behind can't drift.
    const lock = new MutationObserver(() => {
      if (document.body.hasAttribute("data-scroll-locked")) lenis?.stop();
      else lenis?.start();
    });
    lock.observe(document.body, { attributes: true, attributeFilter: ["data-scroll-locked"] });

    return () => {
      lock.disconnect();
      unwatch();
      stop();
    };
  }, []);
}
