import { Check } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

interface FormStepperProps {
  titles: string[];
  current: number;
}

/** Progress across the steps: a bar on phones, numbered labels from md up. */
export function FormStepper({ titles, current }: FormStepperProps) {
  return (
    <div>
      <p className="text-[0.875rem] text-muted md:sr-only" aria-live="polite">
        Step {current + 1} of {titles.length}: <span className="font-medium text-ink">{titles[current]}</span>
      </p>
      <div aria-hidden className="mt-3 h-1.5 overflow-hidden rounded-full bg-plum-100 md:hidden">
        <div className="h-full rounded-full bg-plum-700 transition-[width] duration-300" style={{ width: `${((current + 1) / titles.length) * 100}%` }} />
      </div>
      <ol aria-hidden className="hidden gap-2 md:grid" style={{ gridTemplateColumns: `repeat(${titles.length}, minmax(0, 1fr))` }}>
        {titles.map((title, i) => {
          const done = i < current;
          const active = i === current;
          return (
            <li key={title} className={cn("border-t-2 pt-3 transition-colors duration-300", done || active ? "border-plum-700" : "border-plum-100")}>
              <span className="flex items-center gap-2">
                <span className={cn("grid size-6 shrink-0 place-items-center rounded-full text-[0.75rem] font-medium tabular-nums", done ? "bg-plum-700 text-white" : active ? "bg-gold-500 text-plum-950" : "bg-plum-50 text-muted")}>
                  {done ? <Icon icon={Check} size={16} /> : i + 1}
                </span>
                <span className={cn("truncate text-[0.875rem]", active ? "font-medium text-ink" : "text-muted")}>{title}</span>
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
