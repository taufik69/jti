import { useLayoutEffect, useState, type RefObject } from "react";

/** Left offset and width of the active tab inside the track, so the pill slides only sideways. */
export function useTabPill(listRef: RefObject<HTMLUListElement | null>, active: string | undefined) {
  const [pill, setPill] = useState({ x: 0, width: 0 });

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const measure = () => {
      const tab = list.querySelector<HTMLElement>('[aria-current="location"]')?.parentElement;
      if (tab) setPill({ x: tab.offsetLeft, width: tab.offsetWidth });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(list);
    return () => observer.disconnect();
  }, [listRef, active]);

  return pill;
}
