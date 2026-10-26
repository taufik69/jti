import type { CourseUnit } from "@/lib/find-course";

interface UnitListProps {
  units: CourseUnit[];
}

function Group({ title, units }: { title: string; units: CourseUnit[] }) {
  if (units.length === 0) return null;
  return (
    <div>
      <h3 className="flex items-center gap-2 font-medium text-ink">
        {title}
        <span className="rounded-full bg-plum-50 px-2 text-[0.75rem] tabular-nums text-plum-700">{units.length}</span>
      </h3>
      <ul className="mt-3 divide-y divide-line overflow-hidden rounded-card border border-line bg-paper">
        {units.map((unit) => (
          <li key={unit.code} className="flex gap-4 px-4 py-3 md:px-5">
            <span className="w-24 shrink-0 text-[0.875rem] font-medium tabular-nums text-plum-700">{unit.code}</span>
            <span className="text-[0.9375rem] text-ink">{unit.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Core and elective units as two bordered lists, as published on jti.edu.au. */
export function UnitList({ units }: UnitListProps) {
  return (
    <div className="space-y-8">
      <Group title="Core units" units={units.filter((u) => u.core)} />
      <Group title="Elective units" units={units.filter((u) => !u.core)} />
    </div>
  );
}
