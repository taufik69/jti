interface FactsProps {
  items: { label: string; value: string }[];
  note?: string;
}

/** Figures set large in a hairline grid; the note carries the source or year. */
export function Facts({ items, note }: FactsProps) {
  return (
    <figure>
      <dl className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.label} className="bg-paper p-6">
            <dd className="text-h3 tabular-nums text-plum-700">{item.value}</dd>
            <dt className="mt-2 text-[0.9375rem] text-body">{item.label}</dt>
          </div>
        ))}
      </dl>
      {note && <figcaption className="mt-3 text-[0.875rem] text-muted">{note}</figcaption>}
    </figure>
  );
}
