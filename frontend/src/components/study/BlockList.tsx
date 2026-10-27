import { Check } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { InlineText } from "./InlineText";

interface BlockListProps {
  items: string[];
  ordered?: boolean;
}

/** Bulleted lists get a small plum tick; ordered lists get numbered badges. */
export function BlockList({ items, ordered = false }: BlockListProps) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className="space-y-3">
      {items.map((item, i) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-plum-50 text-[0.75rem] font-medium tabular-nums text-plum-700">
            {ordered ? i + 1 : <Icon icon={Check} size={16} />}
          </span>
          <span className="min-w-0">
            <InlineText text={item} />
          </span>
        </li>
      ))}
    </Tag>
  );
}
