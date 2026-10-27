import { cn } from "@/lib/cn";

interface FilterChipsProps<T extends string> {
  /** Accessible name for the group, e.g. "Filter articles by topic". */
  label: string;
  choices: { id: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
  count: (value: T) => number;
}

/** Single-choice toggle chips with counts; scrolls sideways on phones, wraps from md up. */
export function FilterChips<T extends string>({ label, choices, value, onChange, count }: FilterChipsProps<T>) {
  return (
    <div role="group" aria-label={label} className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] md:mx-0 md:flex-wrap md:px-0">
      {choices.map((choice) => {
        const active = value === choice.id;
        return (
          <button
            key={choice.id}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(choice.id)}
            className={cn(
              "inline-flex min-h-11 shrink-0 cursor-pointer items-center gap-2 rounded-full border px-4 text-[0.9375rem] font-medium transition-colors duration-150",
              active ? "border-plum-700 bg-plum-700 text-white" : "border-line bg-paper text-ink hover:border-plum-300 hover:text-plum-700",
            )}
          >
            {choice.label}
            <span className={cn("tabular-nums text-[0.8125rem]", active ? "text-white/70" : "text-muted")}>{count(choice.id)}</span>
          </button>
        );
      })}
    </div>
  );
}
