import { useEffect, useRef, useState, type ReactNode } from "react";

interface WhenVisibleProps {
  children: ReactNode;
  /** Space held before the content mounts, so the page doesn't jump. */
  minHeight: string;
  /** How early to start, before the block scrolls into view. */
  margin?: string;
}

/**
 * Mounts heavy below-the-fold content (and so fetches its lazy chunk) only once the visitor
 * scrolls near it. Falls back to mounting immediately where IntersectionObserver is missing.
 */
export function WhenVisible({ children, minHeight, margin = "800px" }: WhenVisibleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setShow(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setShow(true), { rootMargin: margin });
    observer.observe(el);
    return () => observer.disconnect();
  }, [margin]);

  if (show) return <>{children}</>;
  return <div ref={ref} aria-hidden style={{ minHeight }} />;
}
