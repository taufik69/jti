import type { ReactNode } from "react";

interface DetailSectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

/** A titled block in the course body; the id is the target for the on-page nav. */
export function DetailSection({ id, title, children }: DetailSectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-28 border-t border-line pt-10 first:border-t-0 first:pt-0">
      <h2 id={`${id}-title`} className="text-h3 text-ink">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}
