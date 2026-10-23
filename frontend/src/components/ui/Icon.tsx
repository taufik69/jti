import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

interface IconProps {
  icon: LucideIcon;
  size?: 16 | 20 | 24;
  className?: string;
  label?: string;
}

/** Every lucide icon goes through here so stroke width stays at 1.5px site-wide. */
export function Icon({ icon: Glyph, size = 20, className, label }: IconProps) {
  return (
    <Glyph
      size={size}
      strokeWidth={1.5}
      absoluteStrokeWidth
      className={cn("shrink-0", className)}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
    />
  );
}
