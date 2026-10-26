import { useEffect, useState, type RefObject } from "react";
import type { StageSize } from "./tunnel-cards";

/** Tracks the stage element's size; the default matches a common desktop for the server render. */
export function useStageSize(ref: RefObject<HTMLElement | null>): StageSize {
  const [size, setSize] = useState<StageSize>({ width: 1440, height: 820, isMobile: false });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height, isMobile: width < 768 });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return size;
}
