import { cn } from "@/lib/cn";

interface SectionLabelProps {
  children: string;
  index?: string;
  onDark?: boolean;
  className?: string;
}

/** "01 — Courses". The index is only used on the home page, where order matters. */
export function SectionLabel({ children, index, onDark = false, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "text-label flex items-center gap-3",
        onDark ? "text-gold-400" : "text-plum-700",
        className,
      )}
    >
      {index && <span className="tabular-nums">{index}</span>}
      {index && (
        <span aria-hidden className={cn("h-px w-6", onDark ? "bg-gold-400/50" : "bg-plum-300")} />
      )}
      <span>{children}</span>
    </p>
  );
}
