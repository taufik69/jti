import { CheckCircle2 } from "lucide-react";
import { Icon } from "@/components/ui/Icon";

interface EntryListProps {
  items: string[];
}

/** Lines ending in ":" (or a lone AND) are sub-headings on the source page; the rest are requirements. */
export function EntryList({ items }: EntryListProps) {
  return (
    <ul className="space-y-3">
      {items.map((item) =>
        item.endsWith(":") || item === "AND" ? (
          <li key={item} className="pt-2 font-medium text-ink first:pt-0">{item}</li>
        ) : (
          <li key={item} className="flex gap-3 text-[0.9375rem] text-body">
            <Icon icon={CheckCircle2} size={20} className="mt-0.5 shrink-0 text-plum-500" />
            <span>{item}</span>
          </li>
        ),
      )}
    </ul>
  );
}
