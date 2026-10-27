import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Link } from "@/components/ui/Link";
import { studyHref } from "@/content/study";
import type { StudyPage } from "@/content/study/types";

interface GuideCardProps {
  page: StudyPage;
}

/** One guide in the hub: title, its one-line summary, and an arrow that nudges on hover. */
export function GuideCard({ page }: GuideCardProps) {
  return (
    <Link
      href={studyHref(page)}
      className="group flex h-full flex-col rounded-card border border-line bg-paper p-6 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-plum-300 hover:shadow-float"
    >
      <span className="text-[1.0625rem] font-medium leading-snug text-ink transition-colors group-hover:text-plum-700">{page.title}</span>
      <span className="mt-2 flex-1 text-[0.9375rem] text-body">{page.summary}</span>
      <span className="mt-5 inline-flex items-center gap-1.5 text-[0.875rem] font-medium text-plum-700">
        Read guide
        <Icon icon={ArrowRight} size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
