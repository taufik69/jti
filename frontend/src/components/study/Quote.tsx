import { Mail } from "lucide-react";
import { Icon } from "@/components/ui/Icon";

interface QuoteProps {
  paragraphs: string[];
  name: string;
  role: string;
  email?: string;
}

/** A signed letter, e.g. the CEO's welcome. */
export function Quote({ paragraphs, name, role, email }: QuoteProps) {
  return (
    <figure className="rounded-card bg-plum-950 p-8 text-white/80 md:p-10">
      <span aria-hidden className="block font-serif text-6xl leading-none text-gold-500">“</span>
      <blockquote className="mt-2 space-y-4 text-body-lg">
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </blockquote>
      <figcaption className="mt-8 flex flex-col gap-3 border-t border-white/15 pt-6 sm:flex-row sm:items-end sm:justify-between">
        <span>
          <span className="block text-h3 text-white">{name}</span>
          <span className="mt-1 block text-[0.875rem] text-white/65">{role}</span>
        </span>
        {email && (
          <a href={`mailto:${email}`} className="inline-flex items-center gap-2 text-[0.9375rem] text-gold-400 underline-offset-4 hover:underline">
            <Icon icon={Mail} size={16} />
            {email}
          </a>
        )}
      </figcaption>
    </figure>
  );
}
