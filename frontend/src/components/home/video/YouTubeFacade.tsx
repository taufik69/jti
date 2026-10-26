import { useState } from "react";
import { Image } from "@/components/ui/Image";
import { Play } from "lucide-react";
import { Icon } from "@/components/ui/Icon";

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
}

/** Shows a thumbnail until clicked, so YouTube's ~1MB of scripts only load on demand. */
export function YouTubeFacade({ videoId, title }: YouTubeFacadeProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden rounded-[20px] bg-plum-900">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} className="group absolute inset-0 cursor-pointer" aria-label={`Play video: ${title}`}>
          <Image
            src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
            alt=""
            fill
            sizes="(min-width: 1280px) 1100px, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
          <span aria-hidden className="absolute inset-0 bg-plum-950/35 transition-colors duration-200 group-hover:bg-plum-950/20" />
          <span className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center md:size-24">
            <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-gold-500/40 [animation-duration:2.4s]" />
            <span className="relative flex size-full items-center justify-center rounded-full bg-gold-500 text-plum-950 shadow-float transition-transform duration-200 group-hover:scale-110">
              <Icon icon={Play} size={24} className="translate-x-0.5" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
