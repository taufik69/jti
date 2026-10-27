import { Link } from "@/components/ui/Link";
import { studyHref, studyTopics, topicPages } from "@/content/study";
import { cn } from "@/lib/cn";

interface StudyNavListProps {
  currentSlug: string;
  /** Show only the current page's topic (the desktop sidebar); otherwise every topic. */
  onlyCurrentTopic?: boolean;
}

/** /study pages grouped by topic, with the current one marked. */
export function StudyNavList({ currentSlug, onlyCurrentTopic = false }: StudyNavListProps) {
  const topics = onlyCurrentTopic ? studyTopics.filter((topic) => topic.slugs.includes(currentSlug)) : studyTopics;

  return (
    <div className="space-y-6">
      {topics.map((topic) => (
        <div key={topic.id}>
          <p className="text-label text-muted">{topic.label}</p>
          <ul className="mt-2 space-y-0.5">
            {topicPages(topic.slugs).map((page) => {
              const current = page.slug === currentSlug;
              return (
                <li key={page.slug}>
                  <Link
                    href={studyHref(page)}
                    aria-current={current ? "page" : undefined}
                    className={cn(
                      "relative block rounded-control py-2 pl-4 pr-3 text-[0.9375rem] leading-snug transition-colors duration-150",
                      "before:absolute before:inset-y-2 before:left-0 before:w-0.5 before:rounded-full before:transition-colors",
                      current ? "bg-plum-50 font-medium text-plum-700 before:bg-plum-700" : "text-body before:bg-transparent hover:bg-plum-50/60 hover:text-ink",
                    )}
                  >
                    {page.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
