interface StepsProps {
  items: { title: string; text?: string }[];
}

/** Numbered timeline joined by a vertical rule. */
export function Steps({ items }: StepsProps) {
  return (
    <ol className="relative">
      {items.map((step, i) => (
        <li key={step.title} className="relative flex gap-5 pb-7 last:pb-0">
          {i < items.length - 1 && <span aria-hidden className="absolute left-[1.1875rem] top-11 bottom-1 w-px bg-plum-100" />}
          <span className="grid size-10 shrink-0 place-items-center rounded-full border border-plum-300 bg-paper text-[0.875rem] font-medium tabular-nums text-plum-700">
            {i + 1}
          </span>
          <span className="pt-2">
            <span className="block font-medium text-ink">{step.title}</span>
            {step.text && <span className="mt-1 block text-[0.9375rem]">{step.text}</span>}
          </span>
        </li>
      ))}
    </ol>
  );
}
