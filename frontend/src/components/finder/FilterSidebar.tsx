import { levelOrder, type DeliveryMode } from "@/content/courses";
import { countBy, lengthBucket, lengthLabels, type LengthBucket } from "@/lib/course-filters";
import { ChipFilter } from "./ChipFilter";
import { FilterGroup } from "./FilterGroup";
import { StudentTypeToggle } from "./StudentTypeToggle";
import { StudyAreaFilter } from "./StudyAreaFilter";
import type { CourseFinderState } from "./useCourseFinder";

interface FilterSidebarProps {
  finder: CourseFinderState;
}

const modes: DeliveryMode[] = ["Blended", "Self-paced", "Full-time"];
const toOptions = <T extends string>(values: T[], label: (v: T) => string = (v) => v) =>
  values.map((value) => ({ value, label: label(value) }));

export function FilterSidebar({ finder }: FilterSidebarProps) {
  const { filters, update, reset, searchPool, facetPool } = finder;
  const active = filters.fields.length + filters.levels.length + filters.modes.length + filters.lengths.length;

  return (
    <div className="space-y-6">
      <FilterGroup title="Student type">
        <StudentTypeToggle
          value={filters.audience}
          total={searchPool.length}
          counts={countBy(searchPool, (c) => c.audience)}
          onChange={(audience) => update({ audience })}
        />
      </FilterGroup>
      <FilterGroup title="Study area">
        <StudyAreaFilter selected={filters.fields} counts={countBy(facetPool, (c) => c.field)} onChange={(fields) => update({ fields })} />
      </FilterGroup>
      <FilterGroup title="Qualification level">
        <ChipFilter options={toOptions(levelOrder)} selected={filters.levels} counts={countBy(facetPool, (c) => c.level)} onChange={(levels) => update({ levels })} />
      </FilterGroup>
      <FilterGroup title="Delivery mode">
        <ChipFilter options={toOptions(modes)} selected={filters.modes} counts={countBy(facetPool, (c) => c.modes)} onChange={(m) => update({ modes: m })} />
      </FilterGroup>
      <FilterGroup title="Course length">
        <ChipFilter
          options={toOptions(Object.keys(lengthLabels) as LengthBucket[], (v) => lengthLabels[v])}
          selected={filters.lengths}
          counts={countBy(facetPool, (c) => lengthBucket(c.months))}
          onChange={(lengths) => update({ lengths })}
        />
      </FilterGroup>
      {active > 0 && (
        <button type="button" onClick={reset} className="cursor-pointer text-[0.9375rem] font-medium text-ink underline-offset-4 hover:underline">
          Clear {active} filter{active > 1 ? "s" : ""}
        </button>
      )}
    </div>
  );
}
