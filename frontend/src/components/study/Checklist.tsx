import { Check } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import { useChecklist } from "./useChecklist";

interface ChecklistProps {
  id: string;
  items: string[];
}

/** Real checkboxes with a progress count; ticks are saved on this device only. */
export function Checklist({ id, items }: ChecklistProps) {
  const { done, toggle } = useChecklist(id);

  return (
    <div className="overflow-hidden rounded-card border border-line bg-paper">
      <div className="flex items-center justify-between gap-4 border-b border-line bg-plum-50/60 px-5 py-3.5">
        <p className="text-[0.9375rem] font-medium text-ink" aria-live="polite">
          {done.size} of {items.length} done
        </p>
        <div aria-hidden className="h-1.5 w-32 overflow-hidden rounded-full bg-plum-100">
          <div className="h-full rounded-full bg-plum-700 transition-[width] duration-300" style={{ width: `${(done.size / items.length) * 100}%` }} />
        </div>
      </div>
      <ul className="divide-y divide-line">
        {items.map((item, i) => {
          const checked = done.has(i);
          return (
            <li key={item}>
              <label className="flex cursor-pointer items-start gap-4 px-5 py-4 transition-colors hover:bg-plum-50/40">
                <input type="checkbox" checked={checked} onChange={() => toggle(i)} className="peer sr-only" />
                <span
                  aria-hidden
                  className={cn(
                    "mt-0.5 grid size-6 shrink-0 place-items-center rounded-md border-2 transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-gold-500 peer-focus-visible:ring-offset-2",
                    checked ? "border-plum-700 bg-plum-700 text-white" : "border-plum-300 bg-paper text-transparent",
                  )}
                >
                  <Icon icon={Check} size={16} />
                </span>
                <span className={cn("transition-colors", checked ? "text-muted line-through decoration-plum-300" : "text-ink")}>{item}</span>
              </label>
            </li>
          );
        })}
      </ul>
      <p className="border-t border-line px-5 py-3 text-[0.8125rem] text-muted">Your ticks are saved in this browser only.</p>
    </div>
  );
}
