import { useEffect } from "react";
import { useLocation } from "react-router";

/** Next.js did this for us: top of the page on a new route, or the #target when the link has one. */
export function RouteScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const target = document.getElementById(decodeURIComponent(hash.slice(1)));
    target?.scrollIntoView();
  }, [pathname, hash]);

  return null;
}
