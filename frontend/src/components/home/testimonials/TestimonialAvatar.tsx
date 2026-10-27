import { Image } from "@/components/ui/Image";
import type { TestimonialEntry } from "@/content/testimonials";
import { initials } from "@/lib/initials";

interface TestimonialAvatarProps {
  entry: TestimonialEntry;
}

export function TestimonialAvatar({ entry }: TestimonialAvatarProps) {
  if (entry.photo) {
    return (
      <Image
        src={entry.photo}
        alt=""
        width={48}
        height={48}
        className="size-12 shrink-0 rounded-full object-cover ring-2 ring-gold-400"
      />
    );
  }
  return (
    <span aria-hidden className="flex size-12 shrink-0 items-center justify-center rounded-full bg-plum-700 font-medium text-gold-400">
      {initials(entry.name)}
    </span>
  );
}
