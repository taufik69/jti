import type { LucideIcon } from "lucide-react";
import { Icon } from "@/components/ui/Icon";

interface TagListProps {
  items: string[];
  icon: LucideIcon;
}

/** Wrapping chips for job titles and further-study options. */
export function TagList({ items, icon }: TagListProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-2 text-[0.9375rem] text-ink">
          <Icon icon={icon} size={16} className="shrink-0 text-plum-500" />
          {item}
        </li>
      ))}
    </ul>
  );
}
