import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";
import { SectionLabel } from "./SectionLabel";

interface SectionHeaderProps {
  id: string;
  label: string;
  index?: string;
  title: ReactNode;
  intro?: ReactNode;
  aside?: ReactNode;
  onDark?: boolean;
  className?: string;
}

/** Label on its own line, then title (7 cols) and intro or controls (5 cols, bottom-aligned). */
export function SectionHeader({ id, label, index, title, intro, aside, onDark = false, className }: SectionHeaderProps) {
  return (
    <Reveal className={cn("mb-10 md:mb-14", className)}>
      <SectionLabel index={index} onDark={onDark}>
        {label}
      </SectionLabel>
      <div className="mt-5 grid gap-6 md:grid-cols-12 md:items-end">
        <h2 id={id} className="text-h2 md:col-span-7">
          {title}
        </h2>
        {(intro || aside) && (
          <div className="md:col-span-5 md:justify-self-end">
            {intro && (
              <p className={cn("max-w-[48ch]", onDark ? "text-white/80" : "text-body")}>{intro}</p>
            )}
            {aside}
          </div>
        )}
      </div>
    </Reveal>
  );
}
