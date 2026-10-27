import { ArrowDown } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { studyTopics } from "@/content/study";

/** Hero aside: the topics as a numbered route through the guides. */
export function JourneyIndex() {
  return (
    <nav aria-label="Guide topics" className="rounded-card border border-line bg-paper p-3 shadow-float">
      <ol>
        {studyTopics.map((topic, i) => (
          <li key={topic.id}>
            <a href={`#${topic.id}`} className="group flex items-center gap-5 rounded-control px-4 py-4 transition-colors duration-150 hover:bg-plum-50">
              <span className="text-label tabular-nums text-plum-700">{String(i + 1).padStart(2, "0")}</span>
              <span className="flex-1">
                <span className="block text-[1.0625rem] font-medium text-ink">{topic.label}</span>
                <span className="mt-0.5 block text-[0.875rem] text-muted">{topic.slugs.length} {topic.slugs.length === 1 ? "guide" : "guides"}</span>
              </span>
              <Icon icon={ArrowDown} size={16} className="text-plum-300 transition-transform duration-200 group-hover:translate-y-0.5 group-hover:text-plum-700" />
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
