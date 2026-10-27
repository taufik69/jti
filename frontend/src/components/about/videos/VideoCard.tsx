import { Play } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Image } from "@/components/ui/Image";
import { youtubeThumb, type JtiVideo } from "@/content/about/videos";
import { cn } from "@/lib/cn";

interface VideoCardProps {
  video: JtiVideo;
  onPlay: (video: JtiVideo) => void;
  /** The lead video: larger title and play button. */
  featured?: boolean;
}

/** 16:9 thumbnail button; opens the player dialog. */
export function VideoCard({ video, onPlay, featured = false }: VideoCardProps) {
  return (
    <button
      type="button"
      onClick={() => onPlay(video)}
      aria-label={`Play video: ${video.title}`}
      className="group block w-full cursor-pointer text-left"
    >
      <span className="relative block aspect-video overflow-hidden rounded-card bg-plum-900">
        <Image
          src={youtubeThumb(video.id)}
          alt=""
          fill
          sizes={featured ? "(min-width: 1024px) 760px, 100vw" : "(min-width: 1024px) 380px, 100vw"}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-plum-950/60 via-plum-950/0 to-transparent" />
        <span
          aria-hidden
          className={cn(
            "absolute bottom-4 left-4 grid place-items-center rounded-full bg-gold-500 text-plum-950 shadow-float transition-transform duration-200 group-hover:scale-110",
            featured ? "size-16 md:bottom-6 md:left-6" : "size-12",
          )}
        >
          <Icon icon={Play} size={featured ? 24 : 20} className="translate-x-px" />
        </span>
      </span>
      <span className="mt-4 block text-label text-plum-700">{video.category}</span>
      <span className={cn("mt-2 block text-ink transition-colors group-hover:text-plum-700", featured ? "text-h3" : "text-[1.1875rem] font-medium")}>
        {video.title}
      </span>
    </button>
  );
}
