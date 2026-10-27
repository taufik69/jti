import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Link } from "@/components/ui/Link";
import type { StudyPage } from "@/content/study/types";
import { OnThisPage } from "./OnThisPage";
import { StudyNavList } from "./StudyNavList";

interface StudySidebarProps {
  page: StudyPage;
}

/** Large screens: sticky column with this page's contents, the guides in the same topic, and the way back to all guides. */
export function StudySidebar({ page }: StudySidebarProps) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28 space-y-6">
        <OnThisPage sections={page.sections} />
        <nav aria-label="Related guides">
          <StudyNavList currentSlug={page.slug} onlyCurrentTopic />
        </nav>
        <Link href="/study" className="group inline-flex items-center gap-2 border-t border-line pt-5 text-[0.9375rem] font-medium text-plum-700">
          All study guides
          <Icon icon={ArrowRight} size={16} className="transition-transform duration-150 group-hover:translate-x-[3px]" />
        </Link>
      </div>
    </aside>
  );
}
