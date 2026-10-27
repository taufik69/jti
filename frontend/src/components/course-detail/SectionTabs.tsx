import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { useActiveSection } from "./useActiveSection";
import { useTabPill } from "./useTabPill";

interface SectionTabsProps {
  sections: { id: string; label: string }[];
}

/** Sticky jump bar under the site header: a boxed track with a pill that slides sideways; scrolls on phones. */
export function SectionTabs({ sections }: SectionTabsProps) {
  const active = useActiveSection(sections.map((s) => s.id));
  const listRef = useRef<HTMLUListElement>(null);
  const pill = useTabPill(listRef, active);

  // Keep the active tab visible when the track overflows on small screens.
  useEffect(() => {
    const list = listRef.current;
    const tab = list?.querySelector<HTMLElement>('[aria-current="location"]')?.parentElement;
    if (!list || !tab) return;
    list.scrollTo({ left: tab.offsetLeft - (list.clientWidth - tab.offsetWidth) / 2, behavior: "smooth" });
  }, [active]);

  return (
    <nav aria-label="Course sections" className="sticky top-18 z-30 border-b border-line/70 bg-canvas/80 py-3 backdrop-blur-xl lg:top-20">
      <Container>
        <div className="rounded-2xl border border-line bg-paper p-1.5 shadow-[0_1px_2px_rgb(46_11_64/0.04),0_8px_24px_-12px_rgb(46_11_64/0.12)]">
          <ul
            ref={listRef}
            className="relative flex gap-1 overflow-x-auto scroll-smooth [mask-image:linear-gradient(to_right,transparent,#000_16px,#000_calc(100%-16px),transparent)] [scrollbar-width:none] lg:[mask-image:none]"
          >
            <motion.li
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 rounded-xl bg-gradient-to-b from-plum-600 to-plum-700 shadow-[0_6px_16px_-6px_rgb(93_20_125/0.55)]"
              initial={false}
              animate={{ x: pill.x, width: pill.width }}
              transition={{ type: "spring", stiffness: 380, damping: 34 }}
            />
            {sections.map((s) => (
              <li key={s.id} className="relative flex-1 shrink-0">
                <a
                  href={`#${s.id}`}
                  aria-current={active === s.id ? "location" : undefined}
                  className={cn(
                    "block whitespace-nowrap rounded-xl px-4 py-2.5 text-center text-[0.9375rem] font-medium transition-colors duration-200",
                    active === s.id ? "text-white" : "text-body hover:bg-plum-50 hover:text-plum-700",
                  )}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
}
