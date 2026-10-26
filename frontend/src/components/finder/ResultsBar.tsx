import { Bookmark, ChevronDown } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { SortKey } from "@/lib/course-filters";
import { cn } from "@/lib/cn";
import type { CourseFinderState } from "./useCourseFinder";

interface ResultsBarProps {
  finder: CourseFinderState;
  total: number;
}

const sortLabels: Record<SortKey, string> = {
  recommended: "Recommended",
  shortest: "Shortest first",
  fee: "Lowest fee",
  title: "A to Z",
};

const pill = "inline-flex h-11 items-center gap-2 rounded-full border px-4 text-[0.9375rem] transition-colors duration-150";

export function ResultsBar({ finder, total }: ResultsBarProps) {
  const { results, filters, update, saved, sort, setSort } = finder;

  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <p aria-live="polite" className="text-ink">
        <span className="text-lg font-semibold tabular-nums">{results.length}</span>
        <span className="text-muted"> of {total} courses</span>
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          aria-pressed={filters.savedOnly}
          onClick={() => update({ savedOnly: !filters.savedOnly })}
          className={cn(pill, "cursor-pointer", filters.savedOnly ? "border-ink bg-ink text-white" : "border-line bg-paper text-ink hover:border-ink/25")}
        >
          <Icon icon={Bookmark} size={16} />
          Saved <span className="tabular-nums">{saved.length}</span>
        </button>
        <label className={cn(pill, "relative border-line bg-paper text-muted hover:border-ink/25")}>
          Sort by
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="cursor-pointer appearance-none bg-transparent pr-6 font-medium text-ink focus:outline-none"
          >
            {(Object.keys(sortLabels) as SortKey[]).map((key) => (
              <option key={key} value={key}>{sortLabels[key]}</option>
            ))}
          </select>
          <Icon icon={ChevronDown} size={16} className="pointer-events-none absolute right-4 text-ink" />
        </label>
      </div>
    </div>
  );
}
