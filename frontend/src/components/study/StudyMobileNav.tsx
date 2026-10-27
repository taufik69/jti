import { ChevronDown } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { StudyNavList } from "./StudyNavList";

interface StudyMobileNavProps {
  currentSlug: string;
}

/** Below lg the sidebar folds into a disclosure at the top of the content. */
export function StudyMobileNav({ currentSlug }: StudyMobileNavProps) {
  return (
    <details className="group rounded-card border border-line bg-paper lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium text-ink [&::-webkit-details-marker]:hidden">
        All study pages
        <Icon icon={ChevronDown} size={20} className="text-plum-500 transition-transform duration-200 group-open:rotate-180" />
      </summary>
      <nav aria-label="Study with us" className="border-t border-line px-3 py-5">
        <StudyNavList currentSlug={currentSlug} />
      </nav>
    </details>
  );
}
