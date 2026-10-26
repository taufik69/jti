import { ArrowUpRight, FileText } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Link } from "@/components/ui/Link";
import type { CourseLink } from "@/lib/find-course";

interface CourseDocumentsProps {
  links: CourseLink[];
}

/** Handbook, policies and forms the jti.edu.au course page links to. */
export function CourseDocuments({ links }: CourseDocumentsProps) {
  if (links.length === 0) return null;
  return (
    <div>
      <h3 className="mb-4 font-medium text-ink">Documents & policies</h3>
      <ul className="grid gap-2 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full items-center gap-3 rounded-control border border-line bg-paper px-4 py-3 text-[0.9375rem] text-ink transition-colors hover:border-plum-300 hover:bg-plum-50"
            >
              <Icon icon={FileText} size={20} className="shrink-0 text-plum-500" />
              <span className="flex-1">{link.label}</span>
              <Icon icon={ArrowUpRight} size={16} className="shrink-0 text-muted group-hover:text-plum-700" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
