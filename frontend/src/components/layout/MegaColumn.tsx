import { Link } from "@/components/ui/Link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { useLocation } from "react-router";
import type { NavColumn } from "@/content/types";
import { cn } from "@/lib/cn";

interface MegaColumnProps {
  column: NavColumn;
  /** Rule on the right, separating a lead column from the rest. */
  divided?: boolean;
}

export function MegaColumn({ column, divided = false }: MegaColumnProps) {
  const { pathname } = useLocation();

  return (
    <div className={cn(divided && "border-r border-line pr-6")}>
      <p className="text-label mb-4 text-muted">{column.title}</p>
      <ul className={cn("space-y-1", column.links.length > 8 && "columns-2 gap-x-6")}>
        {column.links.map((link) => (
          <li key={link.href} className="break-inside-avoid">
            <NavigationMenu.Link asChild active={link.href === pathname}>
              <Link
                href={link.href}
                aria-current={link.href === pathname ? "page" : undefined}
                className="group/link relative -mx-3 block rounded-control px-3 py-2 transition-colors duration-150 hover:bg-plum-50 focus-visible:bg-plum-50 aria-[current=page]:bg-plum-50"
              >
                <span aria-hidden className="absolute inset-y-2 left-0 w-0.5 scale-y-0 rounded-full bg-plum-700 transition-transform duration-200 group-aria-[current=page]/link:scale-y-100" />
                <span className="block text-[0.9375rem] font-medium leading-snug text-ink transition-colors group-hover/link:text-plum-700 group-aria-[current=page]/link:text-plum-700">
                  {link.label}
                </span>
                {link.meta && (
                  <span className="mt-0.5 block text-[0.8125rem] text-muted">{link.meta}</span>
                )}
              </Link>
            </NavigationMenu.Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
