import { SectionLabel } from "@/components/ui/SectionLabel";
import { differenceThemes, type ThemeId } from "@/content/about/difference";
import { cn } from "@/lib/cn";

interface ThemeHeadingProps {
  id: ThemeId;
  onDark?: boolean;
  className?: string;
}

/** "02 — Multicultural diversity" label plus the theme title as the section h2. */
export function ThemeHeading({ id, onDark = false, className }: ThemeHeadingProps) {
  const index = differenceThemes.findIndex((t) => t.id === id);
  const title = differenceThemes[index].title;

  return (
    <div className={className}>
      <SectionLabel index={`0${index + 1}`} onDark={onDark}>
        What makes us different
      </SectionLabel>
      <h2 id={`${id}-title`} className={cn("mt-5 text-h2", onDark ? "text-white" : "text-ink")}>
        {title}
      </h2>
    </div>
  );
}
