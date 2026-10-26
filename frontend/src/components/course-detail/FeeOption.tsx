import { cn } from "@/lib/cn";

interface FeeOptionProps {
  title: string;
  caption?: string;
  rows: [string, string | null][];
  total: string | null;
  totalLabel?: string;
  highlight?: boolean;
}

/** One column of the fee comparison: a few line items and a bold total. */
export function FeeOption({ title, caption, rows, total, totalLabel = "Total", highlight = false }: FeeOptionProps) {
  return (
    <div className={cn("flex flex-col rounded-card border p-6", highlight ? "border-plum-700 bg-plum-950 text-white" : "border-line bg-paper")}>
      <p className={cn("text-label text-left", highlight ? "text-gold-400" : "text-plum-700")}>{title}</p>
      {caption && <p className={cn("mt-1 text-left text-[0.875rem]", highlight ? "text-white/70" : "text-muted")}>{caption}</p>}
      <dl className="mt-5 space-y-2 text-[0.9375rem]">
        {rows.map(([label, value]) => value && (
          <div key={label} className="flex justify-between gap-4">
            <dt className={highlight ? "text-white/75" : "text-body"}>{label}</dt>
            <dd className="tabular-nums">{value}</dd>
          </div>
        ))}
      </dl>
      <div className={cn("mt-auto flex items-baseline justify-between border-t pt-4", highlight ? "border-white/15" : "border-line")}>
        <span className="font-medium">{totalLabel}</span>
        <span className={cn("text-h3 font-semibold tabular-nums", highlight ? "text-gold-400" : "text-ink")}>{total ?? "—"}</span>
      </div>
    </div>
  );
}
