import Image from "next/image";
import type { TestimonialEntry } from "@/content/testimonials";

interface TestimonialAvatarProps {
  entry: TestimonialEntry;
}

function initials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
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
