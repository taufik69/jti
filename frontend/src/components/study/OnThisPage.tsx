import type { StudySection } from "@/content/study/types";

interface OnThisPageProps {
  sections: StudySection[];
}

/** Jump links to this page's sections; only worth showing on longer pages. */
export function OnThisPage({ sections }: OnThisPageProps) {
  if (sections.length < 3) return null;
  return (
    <nav aria-label="On this page" className="border-b border-line pb-6">
      <p className="text-label text-muted">On this page</p>
      <ol className="mt-3 space-y-1">
        {sections.map((section, i) => (
          <li key={section.id}>
            <a href={`#${section.id}`} className="flex gap-3 py-1 text-[0.9375rem] text-body transition-colors hover:text-plum-700">
              <span className="w-5 shrink-0 text-[0.8125rem] tabular-nums text-plum-500">{String(i + 1).padStart(2, "0")}</span>
              {section.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
