import { FilterChips } from "@/components/ui/FilterChips";
import { blogTopics, type BlogTopic } from "@/content/blog";

type Choice = BlogTopic | "all";

interface TopicFilterProps {
  value: Choice;
  onChange: (value: Choice) => void;
  count: (value: Choice) => number;
}

const choices: { id: Choice; label: string }[] = [{ id: "all", label: "All articles" }, ...blogTopics];

/** Toggle chips that narrow the article grid. */
export function TopicFilter(props: TopicFilterProps) {
  return <FilterChips label="Filter articles by topic" choices={choices} {...props} />;
}
