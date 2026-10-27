import { ArrowLeft, ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Link } from "@/components/ui/Link";
import { studyHref, studyPages } from "@/content/study";
import type { StudyPage } from "@/content/study/types";

interface StudyPagerProps {
  page: StudyPage;
}

/** Previous / next page in menu order, so the guides read as a sequence. */
export function StudyPager({ page }: StudyPagerProps) {
  const i = studyPages.findIndex((p) => p.slug === page.slug);
  const prev = studyPages[i - 1];
  const next = studyPages[i + 1];
  const card = "group flex flex-1 flex-col gap-1 rounded-card border border-line bg-paper p-5 transition-[border-color,box-shadow] hover:border-plum-300 hover:shadow-float";

  return (
    <nav aria-label="More study pages" className="mt-16 flex flex-col gap-3 border-t border-line pt-8 sm:flex-row">
      {prev && (
        <Link href={studyHref(prev)} className={card}>
          <span className="inline-flex items-center gap-1.5 text-label text-muted">
            <Icon icon={ArrowLeft} size={16} className="transition-transform group-hover:-translate-x-0.5" /> Previous
          </span>
          <span className="font-medium text-ink group-hover:text-plum-700">{prev.title}</span>
        </Link>
      )}
      {next && (
        <Link href={studyHref(next)} className={`${card} sm:items-end sm:text-right`}>
          <span className="inline-flex items-center gap-1.5 text-label text-muted">
            Next <Icon icon={ArrowRight} size={16} className="transition-transform group-hover:translate-x-0.5" />
          </span>
          <span className="font-medium text-ink group-hover:text-plum-700">{next.title}</span>
        </Link>
      )}
    </nav>
  );
}
