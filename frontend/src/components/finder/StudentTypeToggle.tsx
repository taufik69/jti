import type { AudienceFilter } from "@/lib/course-filters";
import { cn } from "@/lib/cn";

interface StudentTypeToggleProps {
  value: AudienceFilter;
  counts: Record<string, number>;
  total: number;
  onChange: (value: AudienceFilter) => void;
}

const options: { value: AudienceFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "domestic", label: "Domestic" },
  { value: "international", label: "International" },
];

/** Three-way segmented control; each segment shows how many courses it holds. */
export function StudentTypeToggle({ value, counts, total, onChange }: StudentTypeToggleProps) {
  return (
    <div role="radiogroup" aria-label="Student type" className="grid grid-cols-3 gap-1 rounded-card border border-line bg-paper p-1">
      {options.map((option) => {
        const on = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={on}
            onClick={() => onChange(option.value)}
            className={cn(
              "flex cursor-pointer flex-col items-center rounded-[12px] px-2 py-2 text-[0.875rem] font-medium transition-colors duration-150",
              on ? "bg-ink text-white" : "text-ink hover:bg-ink/5",
            )}
          >
            {option.label}
            <span className={cn("text-[0.75rem] tabular-nums", on ? "text-gold-400" : "text-muted")}>
              {option.value === "all" ? total : (counts[option.value] ?? 0)}
            </span>
          </button>
        );
      })}
    </div>
  );
}
