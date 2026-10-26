import { useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import { FilterSidebar } from "./FilterSidebar";
import type { CourseFinderState } from "./useCourseFinder";

interface MobileFiltersProps {
  finder: CourseFinderState;
}

/** Below lg the sidebar folds into a disclosure above the results. */
export function MobileFilters({ finder }: MobileFiltersProps) {
  const [open, setOpen] = useState(false);
  const { fields, levels, modes, lengths, audience } = finder.filters;
  const active = fields.length + levels.length + modes.length + lengths.length + (audience === "all" ? 0 : 1);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-filters"
        onClick={() => setOpen(!open)}
        className="flex h-12 w-full cursor-pointer items-center gap-3 rounded-card border border-line bg-paper px-4 font-medium text-ink"
      >
        <Icon icon={SlidersHorizontal} size={20} className="text-plum-700" />
        Filters
        {active > 0 && <span className="rounded-full bg-plum-700 px-2 text-[0.75rem] tabular-nums text-white">{active}</span>}
        <Icon icon={ChevronDown} size={20} className={cn("ml-auto transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <div id="mobile-filters" className="mt-3 rounded-card border border-line bg-paper p-5">
          <FilterSidebar finder={finder} />
        </div>
      )}
    </div>
  );
}
