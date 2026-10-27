import { useEffect, useState } from "react";

const keyFor = (id: string) => `jti-checklist:${id}`;

/** Ticked item indexes, remembered in this browser. Storage can be unavailable, so every access is guarded. */
export function useChecklist(id: string) {
  const [done, setDone] = useState<Set<number>>(new Set());

  useEffect(() => {
    try {
      const saved = localStorage.getItem(keyFor(id));
      if (saved) setDone(new Set(JSON.parse(saved) as number[]));
    } catch {
      // Private mode or blocked storage: start empty.
    }
  }, [id]);

  const toggle = (index: number) => {
    setDone((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      try {
        localStorage.setItem(keyFor(id), JSON.stringify([...next]));
      } catch {
        // Ticks still work for this visit.
      }
      return next;
    });
  };

  return { done, toggle };
}
