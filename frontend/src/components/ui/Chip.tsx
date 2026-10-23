import { cn } from "@/lib/cn";

interface ChipProps {
  children: string;
  className?: string;
}

export function Chip({ children, className }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex h-7 items-center rounded-control border border-line bg-canvas px-2.5 text-[0.8125rem] text-body",
        className,
      )}
    >
      {children}
    </span>
  );
}
