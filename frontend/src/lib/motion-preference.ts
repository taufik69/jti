const query = "(prefers-reduced-motion: reduce)";

/** True when the visitor has asked the OS/browser for less motion. Safe outside the browser. */
export function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia(query).matches;
}

/**
 * Behaviour for scrollTo / scrollIntoView. A JS `behavior: "smooth"` overrides the CSS
 * reduced-motion rule, so every programmatic scroll must ask here instead of hardcoding it.
 */
export function scrollBehavior(): ScrollBehavior {
  return prefersReducedMotion() ? "auto" : "smooth";
}

/** Calls `onChange` whenever the preference flips mid-session; returns the unsubscribe. */
export function watchReducedMotion(onChange: (reduce: boolean) => void): () => void {
  const media = window.matchMedia(query);
  const listener = (event: MediaQueryListEvent) => onChange(event.matches);
  media.addEventListener("change", listener);
  return () => media.removeEventListener("change", listener);
}
