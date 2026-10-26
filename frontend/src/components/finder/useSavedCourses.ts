import { useEffect, useState } from "react";

const KEY = "jti-saved-courses";

function read(): string[] {
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem(KEY) ?? "[]");
    return Array.isArray(parsed) ? parsed.filter((v): v is string => typeof v === "string") : [];
  } catch {
    return [];
  }
}

/** Shortlist kept in this browser only; it survives reloads but is not shared. */
export function useSavedCourses() {
  const [saved, setSaved] = useState<string[]>(read);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(saved));
    } catch {
      // Storage blocked (private mode): the shortlist just won't persist.
    }
  }, [saved]);

  const toggle = (id: string) =>
    setSaved((list) => (list.includes(id) ? list.filter((v) => v !== id) : [...list, id]));

  return { saved, toggle };
}
