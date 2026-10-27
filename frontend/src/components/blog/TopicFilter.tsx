import { blogTopics, type BlogTopic } from "@/content/blog";
import { cn } from "@/lib/cn";

type Choice = BlogTopic | "all";

interface TopicFilterProps {
  value: Choice;
  onChange: (value: Choice) => void;
  count: (value: Choice) => number;
}

const choices: { id: Choice; label: string }[] = [{ id: "all", label: "All articles" }, ...blogTopics];

/** Toggle chips that narrow the article grid. */
export function TopicFilter({ value, onChange, count }: TopicFilterProps) {
  return (
    <div role="group" aria-label="Filter articles by topic" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] md:mx-0 md:flex-wrap md:px-0">
      {choices.map((choice) => {
        const active = value === choice.id;
        return (
          <button
            key={choice.id}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(choice.id)}
            className={cn(
              "inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-[0.9375rem] font-medium transition-colors duration-150",
              active ? "border-plum-700 bg-plum-700 text-white" : "border-line bg-paper text-ink hover:border-plum-300 hover:text-plum-700",
            )}
          >
            {choice.label}
            <span className={cn("tabular-nums text-[0.8125rem]", active ? "text-white/70" : "text-muted")}>{count(choice.id)}</span>
          </button>
        );
      })}
    </div>
  );
}
