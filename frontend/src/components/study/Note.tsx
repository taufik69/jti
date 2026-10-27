import { Info } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { InlineText } from "./InlineText";

interface NoteProps {
  text: string;
}

/** Callout for warnings and tips: gold rule, cream ground. */
export function Note({ text }: NoteProps) {
  return (
    <aside className="flex gap-4 rounded-card border-l-4 border-gold-500 bg-gold-100 px-5 py-4 text-ink">
      <Icon icon={Info} size={20} className="mt-0.5 shrink-0 text-plum-700" />
      <p>
        <InlineText text={text} />
      </p>
    </aside>
  );
}
