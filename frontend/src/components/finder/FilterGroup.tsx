import { useId, type ReactNode } from "react";

interface FilterGroupProps {
  title: string;
  children: ReactNode;
}

/** One titled block in the filter sidebar, separated by a hairline. */
export function FilterGroup({ title, children }: FilterGroupProps) {
  const id = useId();

  return (
    <div role="group" aria-labelledby={id} className="border-t border-line pt-6 first:border-t-0 first:pt-0">
      <h2 id={id} className="mb-4 text-base font-medium text-ink">
        {title}
      </h2>
      {children}
    </div>
  );
}
