import { BookOpen, FileBadge } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { CourseDetails } from "@/lib/find-course";

interface FeeExtrasProps {
  extras: CourseDetails["extras"];
}

/** Recommended books and certificate re-issue fees, from the bottom of the pricing table. */
export function FeeExtras({ extras }: FeeExtrasProps) {
  if (extras.length === 0) return null;
  return (
    <ul className="divide-y divide-line rounded-card border border-line bg-paper">
      {extras.map((extra) => (
        <li key={extra.label} className="flex gap-4 p-5">
          <Icon icon={extra.label.startsWith("Recommended") ? BookOpen : FileBadge} className="mt-0.5 shrink-0 text-plum-500" />
          <div>
            <p className="text-left font-medium text-ink">{extra.label}</p>
            {extra.lines.map((line) => (
              <p key={line} className="mt-1 text-left text-[0.9375rem] text-body">{line}</p>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
