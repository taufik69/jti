import { Link } from "@/components/ui/Link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { NavItem } from "@/content/types";
import { cn } from "@/lib/cn";
import { MegaColumn } from "./MegaColumn";
import { MegaFeature } from "./MegaFeature";
import { menuPanel } from "./nav-styles";

interface MegaPanelProps {
  item: NavItem;
}

/** Panel width and grid follow the column count: one list, two groups, or a full topic spread. */
function layoutFor(item: NavItem) {
  const count = item.columns?.length ?? 0;
  if (count >= 4) return { width: "w-[min(78rem,calc(100vw-3rem))]", grid: "grid-cols-[11rem_repeat(4,minmax(0,1fr))] gap-8" };
  if (item.feature) return { width: "w-[min(58rem,calc(100vw-3rem))]", grid: "grid-cols-[1fr_1fr_15rem] gap-10" };
  if (count > 1) return { width: "w-[min(58rem,calc(100vw-3rem))]", grid: "grid-cols-2 gap-10" };
  return { width: "w-80", grid: "" };
}

export function MegaPanel({ item }: MegaPanelProps) {
  const { width, grid } = layoutFor(item);

  return (
    <NavigationMenu.Content className={cn(menuPanel, "p-0", width)}>
      <div className={cn("grid p-8", grid)}>
        {item.columns?.map((column, i) => (
          <MegaColumn key={column.title} column={column} divided={grid.includes("repeat") && i === 0} />
        ))}
        {item.feature && <MegaFeature feature={item.feature} />}
      </div>
      {item.footer && (
        <div className="flex items-center justify-between gap-6 border-t border-line bg-canvas px-8 py-4">
          <p className="text-[0.875rem] text-muted">Guides for every step, from applying to settling into Melbourne.</p>
          <NavigationMenu.Link asChild>
            <Link href={item.footer.href} className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium text-plum-700">
              {item.footer.label}
              <Icon icon={ArrowRight} size={16} className="transition-transform duration-150 group-hover:translate-x-[3px]" />
            </Link>
          </NavigationMenu.Link>
        </div>
      )}
    </NavigationMenu.Content>
  );
}
