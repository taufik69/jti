import { Icon } from "@/components/ui/Icon";
import type { VideoPoint } from "@/content/video";
import { cn } from "@/lib/cn";

interface VideoHighlightsProps {
  items: VideoPoint[];
  /** Which side of the video the list sits on; on large screens the icons face the video. */
  side: "left" | "right";
}

export function VideoHighlights({ items, side }: VideoHighlightsProps) {
  const facing = side === "left" ? "lg:flex-row-reverse" : "";
  /** Narrow columns, so override the global justified paragraphs. */
  const align = side === "left" ? "text-left lg:text-right" : "text-left";

  return (
    <ul className="space-y-8">
      {items.map((item) => (
        <li key={item.title} className={cn("flex gap-4", facing)}>
          <span className="flex size-11 shrink-0 items-center justify-center rounded-control border border-white/15 bg-white/10 text-gold-400">
            <Icon icon={item.icon} />
          </span>
          <div>
            <p className={cn("font-medium text-white", align)}>{item.title}</p>
            <p className={cn("mt-1 text-[0.9375rem] leading-relaxed text-white/75", align)}>
              {item.text}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
