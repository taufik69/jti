import { Image } from "@/components/ui/Image";
import type { Story } from "@/content/about/stories";
import { cn } from "@/lib/cn";
import { initials } from "@/lib/initials";

interface StoryAvatarProps {
  story: Story;
  className?: string;
}

/** Photo where jti.edu.au had one, otherwise initials on plum. */
export function StoryAvatar({ story, className }: StoryAvatarProps) {
  const base = cn("size-11 shrink-0 rounded-full", className);
  if (story.photo) return <Image src={story.photo} alt="" width={44} height={44} className={cn(base, "object-cover")} />;
  return (
    <span aria-hidden className={cn(base, "grid place-items-center bg-plum-100 text-[0.875rem] font-medium text-plum-700")}>
      {initials(story.name)}
    </span>
  );
}
