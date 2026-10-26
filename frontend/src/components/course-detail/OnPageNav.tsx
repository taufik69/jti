interface OnPageNavProps {
  sections: { id: string; label: string }[];
}

/** Jump links to the sections that exist for this course. */
export function OnPageNav({ sections }: OnPageNavProps) {
  return (
    <nav aria-label="On this page" className="rounded-card border border-line bg-paper p-5">
      <p className="text-label text-left text-muted">On this page</p>
      <ul className="mt-3 space-y-1">
        {sections.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className="block rounded-control px-2 py-1.5 text-[0.9375rem] text-ink transition-colors hover:bg-plum-50 hover:text-plum-700">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
