import { Check } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { ContentBlock } from "@/lib/find-course";

interface RichBlocksProps {
  blocks: ContentBlock[];
}

/** Renders the paragraphs, sub-headings and lists copied from a jti.edu.au course page. */
export function RichBlocks({ blocks }: RichBlocksProps) {
  return (
    <div className="space-y-4">
      {blocks.map((block, i) => {
        const key = `${block.type}-${i}`;
        if (block.type === "h") return <h3 key={key} className="pt-2 font-medium text-ink first:pt-0">{block.text}</h3>;
        if (block.type === "sep") {
          return <p key={key} className="text-label text-left text-plum-500">{block.text}</p>;
        }
        if (block.type === "p") return <p key={key} className="text-left">{block.text}</p>;
        if (block.type === "ul") {
          return (
            <ul key={key} className="space-y-2.5">
              {block.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-plum-50 text-plum-700">
                    <Icon icon={Check} size={16} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        return null;
      })}
    </div>
  );
}
