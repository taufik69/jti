import { useLocation } from "react-router";
import { Link } from "@/components/ui/Link";
import { cn } from "@/lib/cn";

interface PageSwitcherProps {
  label: string;
  pages: { href: string; label: string }[];
}

/** Underlined tab row linking sibling pages (About, Agents), so readers can move between them without the menu. */
export function PageSwitcher({ label, pages }: PageSwitcherProps) {
  const { pathname } = useLocation();

  return (
    <nav aria-label={label} className="-mx-5 overflow-x-auto px-5 [scrollbar-width:none] md:mx-0 md:px-0">
      <ul className="flex w-max gap-6 border-b border-line md:w-full md:gap-8">
        {pages.map((page) => {
          const current = page.href === pathname;
          return (
            <li key={page.href}>
              <Link
                href={page.href}
                aria-current={current ? "page" : undefined}
                className={cn(
                  "relative block whitespace-nowrap py-4 text-[0.9375rem] font-medium transition-colors duration-150",
                  "after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:origin-left after:transition-transform after:duration-200",
                  current
                    ? "text-plum-700 after:scale-x-100 after:bg-plum-700"
                    : "text-muted after:scale-x-0 after:bg-gold-500 hover:text-ink hover:after:scale-x-100",
                )}
              >
                {page.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
