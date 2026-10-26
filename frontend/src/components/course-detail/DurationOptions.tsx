import { Clock } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { ContentBlock } from "@/lib/find-course";
import { RichBlocks } from "./RichBlocks";

interface DurationOptionsProps {
  blocks: ContentBlock[];
}

/** "Blended Delivery: Typically completed within 12-15 months" → a labelled tile. */
function toOption(block: ContentBlock): { mode: string; time: string } | null {
  if (block.type !== "p") return null;
  const text = block.text;
  const match = /^([^:]{3,30}):\s*(.+)$/.exec(text);
  if (!match || match[2].length > 80) return null;
  return { mode: match[1].replace(/ Delivery$/i, ""), time: match[2] };
}

/** Short per-mode durations as tiles; long explanations (the diplomas) fall back to text. */
export function DurationOptions({ blocks }: DurationOptionsProps) {
  const options = blocks.map(toOption);
  if (blocks.length === 0) return null;
  if (options.some((o) => o === null)) return <RichBlocks blocks={blocks} />;

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((o) => o && (
        <div key={o.mode} className="flex gap-4 rounded-card border border-line bg-paper p-5">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-control bg-plum-50 text-plum-700">
            <Icon icon={Clock} />
          </span>
          <div>
            <p className="text-left font-medium text-ink">{o.mode}</p>
            <p className="mt-0.5 text-left text-[0.9375rem] text-body">{o.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
