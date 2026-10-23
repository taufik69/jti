import { Quote } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { TestimonialEntry } from "@/content/testimonials";
import { TestimonialAvatar } from "./TestimonialAvatar";

interface TestimonialCardProps {
  entry: TestimonialEntry;
}

export function TestimonialCard({ entry }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col rounded-card border border-line bg-paper p-7 md:p-8">
      <Icon icon={Quote} size={24} className="text-gold-600" />
      <blockquote className="mt-5 flex-1">
        <p className="text-body-lg leading-relaxed text-ink">{entry.quote}</p>
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
        <TestimonialAvatar entry={entry} />
        <span>
          <span className="block font-medium text-ink">{entry.name}</span>
          <span className="block text-[0.875rem] text-muted">{entry.course}</span>
        </span>
      </figcaption>
    </figure>
  );
}
