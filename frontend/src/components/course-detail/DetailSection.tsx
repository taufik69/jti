import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import type { RevealFrom } from "@/components/motion/reveal-offsets";

interface DetailSectionProps {
  id: string;
  title: string;
  children: ReactNode;
  /** Side the section slides in from as it scrolls into view. */
  from?: RevealFrom;
}

/** A titled block in the course body; the id is the target for the on-page nav. */
export function DetailSection({ id, title, children, from = "left" }: DetailSectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-40 border-t border-line pt-12 first:border-t-0 first:pt-0">
      <Reveal from={from}>
        <h2 id={`${id}-title`} className="text-h3 text-ink">
          {title}
        </h2>
        <div className="mt-5">{children}</div>
      </Reveal>
    </section>
  );
}
