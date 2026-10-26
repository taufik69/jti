import type { ReactNode } from "react";
import { fieldIntros, fieldLabels, type Course } from "@/content/courses";

interface StudyAreaGroupProps {
  field: Course["field"];
  count: number;
  children: ReactNode;
}

/** One study area on /courses: heading, the jti.edu.au category intro, then its cards. */
export function StudyAreaGroup({ field, count, children }: StudyAreaGroupProps) {
  return (
    <section aria-labelledby={`area-${field}`} className="scroll-mt-28">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-x-6 gap-y-2 border-b border-line pb-4">
        <div>
          <h2 id={`area-${field}`} className="flex items-center gap-3 text-h3 text-ink">
            {fieldLabels[field]}
            <span className="rounded-full bg-plum-50 px-2.5 py-0.5 text-[0.8125rem] font-medium tabular-nums text-plum-700">
              {count} {count === 1 ? "course" : "courses"}
            </span>
          </h2>
          <p className="mt-2 max-w-[70ch] text-left text-[0.9375rem] text-muted">{fieldIntros[field]}</p>
        </div>
      </div>
      {children}
    </section>
  );
}
