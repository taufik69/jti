import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { Story } from "@/content/about/stories";
import { cn } from "@/lib/cn";
import { StoryAvatar } from "./StoryAvatar";

interface StoryCardProps {
  story: Story;
}

/** Messages under this length show in full; longer ones lead with their highlight and expand. */
const SHORT = 320;

export function StoryCard({ story }: StoryCardProps) {
  const [open, setOpen] = useState(false);
  const bodyId = useId();
  const isShort = story.paragraphs.join(" ").length <= SHORT;

  return (
    <article className="mb-5 break-inside-avoid rounded-card border border-line bg-paper p-7 transition-shadow duration-200 hover:shadow-float md:p-8">
      <span aria-hidden className="block font-serif text-5xl leading-none text-gold-500">“</span>
      {isShort ? (
        <p className="mt-2 text-[1.0625rem] text-ink">{story.paragraphs[0]}</p>
      ) : (
        <>
          <p className="mt-2 text-[1.25rem] leading-snug font-medium text-ink">{story.highlight}</p>
          <div id={bodyId} hidden={!open} className="mt-5 space-y-3 border-l-2 border-plum-100 pl-5 text-[0.9375rem]">
            {story.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <button
            type="button"
            aria-expanded={open}
            aria-controls={bodyId}
            onClick={() => setOpen(!open)}
            className="mt-5 inline-flex cursor-pointer items-center gap-1.5 rounded-control text-[0.9375rem] font-medium text-plum-700 underline-offset-4 hover:underline"
          >
            {open ? "Show less" : "Read full message"}
            <Icon icon={ChevronDown} size={16} className={cn("transition-transform duration-200", open && "rotate-180")} />
          </button>
        </>
      )}
      <footer className="mt-6 flex items-center gap-3 border-t border-line pt-5">
        <StoryAvatar story={story} />
        <div>
          <p className="font-medium text-ink">{story.name}</p>
          <p className="text-[0.875rem] text-muted">{story.role}</p>
        </div>
      </footer>
    </article>
  );
}
