import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { useActiveSection } from "./useActiveSection";

interface SectionTabsProps {
  sections: { id: string; label: string }[];
}

/** Sticky jump bar under the site header; scrolls sideways on phones. */
export function SectionTabs({ sections }: SectionTabsProps) {
  const active = useActiveSection(sections.map((s) => s.id));

  return (
    <nav aria-label="Course sections" className="sticky top-18 z-30 border-b border-line bg-paper/95 backdrop-blur-md lg:top-20">
      <Container>
        <ul className="-mx-1 flex gap-1 overflow-x-auto py-2 [scrollbar-width:none]">
          {sections.map((s) => (
            <li key={s.id} className="shrink-0">
              <a
                href={`#${s.id}`}
                aria-current={active === s.id ? "location" : undefined}
                className={cn(
                  "block rounded-full px-4 py-2 text-[0.9375rem] font-medium transition-colors duration-150",
                  active === s.id ? "bg-plum-700 text-white" : "text-body hover:bg-plum-50 hover:text-plum-700",
                )}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
