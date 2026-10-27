interface CardsProps {
  items: { title: string; text: string; meta?: string[] }[];
}

/** Side-by-side cards, e.g. campuses; meta lines (address, phone) sit under a rule. */
export function Cards({ items }: CardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <article key={item.title} className="flex flex-col rounded-card border border-line bg-paper p-7">
          <h3 className="text-h3 text-ink">{item.title}</h3>
          <p className="mt-3 flex-1 text-[0.9375rem]">{item.text}</p>
          {item.meta && (
            <ul className="mt-5 space-y-1 border-t border-line pt-4 text-[0.9375rem] font-medium text-ink">
              {item.meta.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}
