import { cn } from "@/lib/cn";

interface LevelLadderProps {
  aqf: 3 | 4 | 5 | 6;
  className?: string;
}

const steps = [3, 4, 5, 6] as const;
const heights = ["h-1.5", "h-2.5", "h-3.5", "h-4.5"];

/** Four rising steps, one per AQF level (Certificate III → Advanced Diploma). */
export function LevelLadder({ aqf, className }: LevelLadderProps) {
  return (
    <span className={cn("inline-flex items-end gap-[3px]", className)} aria-hidden>
      {steps.map((step, i) => (
        <span
          key={step}
          className={cn("w-1.5", heights[i], step <= aqf ? "bg-plum-700" : "bg-plum-100")}
        />
      ))}
    </span>
  );
}
