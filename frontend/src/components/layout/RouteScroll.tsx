import { useEffect } from "react";
import { useLocation } from "react-router";

/** How long to wait for a #target that lives in a route chunk still loading. */
const WAIT_MS = 3000;

/** Top of the page on a new route, or the #target when the link has one (waiting for lazy pages to render it). */
export function RouteScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = decodeURIComponent(hash.slice(1));
    const started = performance.now();
    let frame = 0;
    const seek = () => {
      const target = document.getElementById(id);
      if (target) target.scrollIntoView();
      else if (performance.now() - started < WAIT_MS) frame = requestAnimationFrame(seek);
    };
    seek();
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}
