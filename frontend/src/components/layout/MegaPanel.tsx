import { Link } from "@/components/ui/Link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import type { NavItem } from "@/content/types";
import { cn } from "@/lib/cn";
import { MegaColumn } from "./MegaColumn";
import { MegaFeature } from "./MegaFeature";
import { menuPanel } from "./nav-styles";

interface MegaPanelProps {
  item: NavItem;
}

export function MegaPanel({ item }: MegaPanelProps) {
  const columns = item.columns ?? [];
  const wide = columns.length > 1;
  const long = columns.some((column) => column.links.length > 8);
  const grid = item.feature
    ? "grid-cols-[1fr_1fr_15rem]"
    : long
      ? "grid-cols-[1fr_2fr]"
      : wide && "grid-cols-2";

  return (
    <NavigationMenu.Content className={cn(menuPanel, wide ? "w-[min(58rem,calc(100vw-3rem))]" : "w-80")}>
      <div className={cn("grid gap-10", grid)}>
        {columns.map((column) => (
          <MegaColumn key={column.title} column={column} />
        ))}
        {item.feature && <MegaFeature feature={item.feature} />}
      </div>
      {item.label === "Courses" && (
        <div className="mt-8 border-t border-line pt-5">
          <NavigationMenu.Link asChild>
            <Link
              href={item.href}
              className="text-[0.9375rem] font-medium text-plum-700 underline-offset-4 hover:underline"
            >
              View all courses
            </Link>
          </NavigationMenu.Link>
        </div>
      )}
    </NavigationMenu.Content>
  );
}
