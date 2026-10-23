import type { ReactNode } from "react";

interface StyleguideBlockProps {
  id: string;
  title: string;
  note?: string;
  children: ReactNode;
}

export function StyleguideBlock({ id, title, note, children }: StyleguideBlockProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line py-14 md:py-20">
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-3">
          <h2 id={`${id}-title`} className="text-h3">
            {title}
          </h2>
          {note && <p className="mt-3 max-w-[40ch] text-[0.9375rem] text-muted">{note}</p>}
        </div>
        <div className="md:col-span-9">{children}</div>
      </div>
    </section>
  );
}
