import { ChevronRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Link } from "@/components/ui/Link";

interface BreadcrumbsProps {
  trail: { label: string; href?: string }[];
}

/** Home › About › Page. The last crumb is the current page and is not a link. */
export function Breadcrumbs({ trail }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-[0.875rem] text-muted">
        {trail.map((crumb, i) => (
          <li key={crumb.label} className="flex items-center gap-1.5">
            {i > 0 && <Icon icon={ChevronRight} size={16} className="text-plum-300" />}
            {crumb.href ? (
              <Link href={crumb.href} className="transition-colors duration-150 hover:text-plum-700">
                {crumb.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink">
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
