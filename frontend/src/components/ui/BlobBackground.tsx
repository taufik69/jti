import { cn } from "@/lib/cn";
import { AnimatedBlob } from "./AnimatedBlob";

interface BlobBackgroundProps {
  className?: string;
}

/**
 * Three crisp, solid morphing shapes (cream, soft gold, lilac) for soft purple sections.
 * Place inside a `relative isolate overflow-hidden` parent. Motion stops under
 * prefers-reduced-motion.
 */
export function BlobBackground({ className }: BlobBackgroundProps) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 -z-10", className)}>
      <div className="absolute -left-32 -top-32 size-[22rem] animate-[blob-drift-a_26s_ease-in-out_infinite] md:-left-40 md:-top-48 md:size-[38rem]">
        <AnimatedBlob seeds={[11, 27, 43]} duration={16} className="inset-0 size-full text-gold-100" />
      </div>
      <div className="absolute -bottom-28 -right-24 size-[16rem] animate-[blob-drift-b_22s_ease-in-out_infinite] md:-right-32 md:size-[28rem]">
        <AnimatedBlob seeds={[5, 61, 88]} duration={14} className="inset-0 size-full text-gold-400/45" />
      </div>
      <div className="absolute right-[6%] top-[8%] hidden size-[9rem] animate-[blob-drift-c_20s_ease-in-out_infinite] md:block">
        <AnimatedBlob seeds={[73, 19, 34]} duration={12} className="inset-0 size-full text-plum-300/60" />
      </div>
    </div>
  );
}
