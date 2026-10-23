import { ChevronDown } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { NavColumn } from "@/content/types";
import { FooterLinks } from "./FooterLinks";

interface FooterColumnProps {
  column: NavColumn;
}

/**
 * Mobile: a native disclosure, so the footer is four rows instead of a wall of links.
 * Desktop: a plain open column. Only one of the two is ever displayed.
 */
export function FooterColumn({ column }: FooterColumnProps) {
  return (
    <div>
      <details className="group border-b border-white/10 md:hidden">
        <summary className="text-label flex h-14 cursor-pointer list-none items-center justify-between text-gold-400 [&::-webkit-details-marker]:hidden">
          {column.title}
          <Icon
            icon={ChevronDown}
            className="text-white/60 transition-transform duration-200 group-open:rotate-180"
          />
        </summary>
        <div className="pb-6">
          <FooterLinks links={column.links} />
        </div>
      </details>
      <div className="hidden md:block">
        <h2 className="text-label mb-5 text-gold-400">{column.title}</h2>
        <FooterLinks links={column.links} />
      </div>
    </div>
  );
}
