import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Link } from "@/components/ui/Link";
import type { LinkItem } from "@/content/study/types";

interface LinkListProps {
  items: LinkItem[];
}

/** Resource links with hairline rules; site links get →, external ones ↗ and a new tab. */
export function LinkList({ items }: LinkListProps) {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {items.map((item) => {
        const external = item.href.startsWith("http");
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              {...(external && { target: "_blank", rel: "noreferrer" })}
              className="group flex items-center justify-between gap-4 py-4 font-medium text-ink transition-colors hover:text-plum-700"
            >
              {item.label}
              {external && <span className="sr-only">(opens in a new tab)</span>}
              <Icon
                icon={external ? ArrowUpRight : ArrowRight}
                size={20}
                className="shrink-0 text-plum-300 transition-[color,transform] duration-200 group-hover:translate-x-0.5 group-hover:text-plum-700"
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
