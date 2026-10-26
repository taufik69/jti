import { Check } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { fieldLabels, type Course } from "@/content/courses";
import { cn } from "@/lib/cn";

type Field = Course["field"];

interface StudyAreaFilterProps {
  selected: Field[];
  counts: Record<string, number>;
  onChange: (next: Field[]) => void;
}

const fields = Object.keys(fieldLabels) as Field[];

/** Checkbox list with a count badge per study area. */
export function StudyAreaFilter({ selected, counts, onChange }: StudyAreaFilterProps) {
  const toggle = (field: Field) =>
    onChange(selected.includes(field) ? selected.filter((f) => f !== field) : [...selected, field]);

  return (
    <ul className="space-y-1">
      {fields.map((field) => {
        const on = selected.includes(field);
        return (
          <li key={field}>
            <label className="group flex cursor-pointer items-center gap-3 rounded-control px-2 py-2 hover:bg-ink/5">
              <input type="checkbox" checked={on} onChange={() => toggle(field)} className="peer sr-only" />
              <span
                aria-hidden
                className={cn(
                  "flex size-5 shrink-0 items-center justify-center rounded-[5px] border transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-gold-500",
                  on ? "border-ink bg-ink text-white" : "border-ink/25 bg-paper",
                )}
              >
                {on && <Icon icon={Check} size={16} />}
              </span>
              <span className="flex-1 text-[0.9375rem] text-ink">{fieldLabels[field]}</span>
              <span className="min-w-6 rounded-control bg-ink/5 px-1.5 text-center text-[0.75rem] tabular-nums text-ink">
                {counts[field] ?? 0}
              </span>
            </label>
          </li>
        );
      })}
    </ul>
  );
}
