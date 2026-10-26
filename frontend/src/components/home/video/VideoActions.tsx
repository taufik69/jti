import { PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { video } from "@/content/video";

export function VideoActions() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <Button href="/#enquire" size="lg" withArrow>
        Talk to us
      </Button>
      <a
        href={`https://www.youtube.com/watch?v=${video.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-13 items-center gap-2 rounded-control px-1 font-medium text-gold-100 transition-colors duration-150 hover:text-gold-400 sm:px-4"
      >
        <Icon icon={PlayCircle} />
        Watch on YouTube
      </a>
    </div>
  );
}
