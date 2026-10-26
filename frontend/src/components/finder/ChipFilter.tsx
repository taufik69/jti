import { cn } from "@/lib/cn";

interface ChipFilterProps<T extends string> {
  options: { value: T; label: string }[];
  selected: T[];
  counts: Record<string, number>;
  onChange: (next: T[]) => void;
}

/** Multi-select pills with live counts; options with nothing to show are disabled. */
export function ChipFilter<T extends string>({ options, selected, counts, onChange }: ChipFilterProps<T>) {
  const toggle = (value: T) =>
    onChange(selected.includes(value) ? selected.filter((v) => v !== value) : [...selected, value]);

  return (
    <div className="flex flex-wrap gap-2">
      {options.map(({ value, label }) => {
        const on = selected.includes(value);
        const count = counts[value] ?? 0;
        return (
          <button
            key={value}
            type="button"
            aria-pressed={on}
            disabled={count === 0 && !on}
            onClick={() => toggle(value)}
            className={cn(
              "inline-flex h-9 cursor-pointer items-center gap-1.5 rounded-full border px-3.5 text-[0.875rem] transition-colors duration-150",
              "disabled:cursor-not-allowed disabled:opacity-40",
              on ? "border-plum-700 bg-plum-700 text-white" : "border-line bg-paper text-ink hover:border-plum-300",
            )}
          >
            {label}
            <span className={cn("text-[0.75rem] tabular-nums", on ? "text-gold-400" : "text-muted")}>{count}</span>
          </button>
        );
      })}
    </div>
  );
}
