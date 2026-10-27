import type { StudyPage } from "@/content/study/types";
import { OnThisPage } from "./OnThisPage";
import { StudyNavList } from "./StudyNavList";

interface StudySidebarProps {
  page: StudyPage;
}

/** Large screens: sticky column with this page's contents, then all study pages. */
export function StudySidebar({ page }: StudySidebarProps) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28 max-h-[calc(100vh-8rem)] space-y-6 overflow-y-auto overscroll-contain pb-8 pr-2 [scrollbar-width:thin]">
        <OnThisPage sections={page.sections} />
        <nav aria-label="Study with us">
          <StudyNavList currentSlug={page.slug} />
        </nav>
      </div>
    </aside>
  );
}
