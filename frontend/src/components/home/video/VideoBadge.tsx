import type { LucideIcon } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

interface VideoBadgeProps {
  icon: LucideIcon;
  value: string;
  label: string;
  className?: string;
}

/** Frosted glass card that floats over a corner of the video frame. */
export function VideoBadge({ icon, value, label, className }: VideoBadgeProps) {
  return (
    <div
      className={cn(
        "absolute z-10 hidden items-center gap-3 rounded-card border border-white/20 bg-plum-900/70 px-4 py-3 shadow-float backdrop-blur-md sm:flex",
        className,
      )}
    >
      <span className="flex size-10 items-center justify-center rounded-control bg-gold-500 text-plum-950">
        <Icon icon={icon} />
      </span>
      <span className="leading-tight">
        <span className="block font-semibold text-white">{value}</span>
        <span className="block text-[0.8125rem] text-white/75">{label}</span>
      </span>
    </div>
  );
}
