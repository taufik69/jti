import { FilterChips } from "@/components/ui/FilterChips";
import { storyThemes, type StoryTheme } from "@/content/about/stories";

type Choice = StoryTheme | "all";

interface StoryFiltersProps {
  value: Choice;
  onChange: (value: Choice) => void;
  count: (value: Choice) => number;
}

const choices: { id: Choice; label: string }[] = [{ id: "all", label: "All stories" }, ...storyThemes];

/** Toggle buttons rather than tabs: the list below simply narrows. */
export function StoryFilters(props: StoryFiltersProps) {
  return <FilterChips label="Filter stories by theme" choices={choices} {...props} />;
}
