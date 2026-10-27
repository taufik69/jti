import { useMemo, useState } from "react";
import { stories, type StoryTheme } from "@/content/about/stories";

/** Selected theme ("all" or one theme) and the stories that match it. */
export function useStoryFilter() {
  const [theme, setTheme] = useState<StoryTheme | "all">("all");
  const visible = useMemo(() => (theme === "all" ? stories : stories.filter((s) => s.themes.includes(theme))), [theme]);
  const count = (t: StoryTheme | "all") => (t === "all" ? stories.length : stories.filter((s) => s.themes.includes(t)).length);
  return { theme, setTheme, visible, count };
}
