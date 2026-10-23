import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import type { NavColumn } from "@/content/types";
import { cn } from "@/lib/cn";

interface MegaColumnProps {
  column: NavColumn;
}

export function MegaColumn({ column }: MegaColumnProps) {
  return (
    <div>
      <p className="text-label mb-4 text-muted">{column.title}</p>
      <ul className={cn("space-y-1", column.links.length > 8 && "columns-2 gap-x-6")}>
        {column.links.map((link) => (
          <li key={link.href} className="break-inside-avoid">
            <NavigationMenu.Link asChild>
              <Link
                href={link.href}
                className="-mx-3 block rounded-control px-3 py-2 transition-colors duration-150 hover:bg-plum-50"
              >
                <span className="block text-[0.9375rem] font-medium leading-snug text-ink">
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
