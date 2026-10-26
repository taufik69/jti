import { video } from "@/content/video";
import { YouTubeFacade } from "./YouTubeFacade";

/** Video in a hairline glass frame with a soft plum glow behind it. */
export function VideoFrame() {
  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-10 -z-10 rounded-full bg-plum-500/25 blur-3xl" />
      <div className="rounded-media border border-white/15 bg-white/5 p-2 backdrop-blur-sm md:p-3">
        <YouTubeFacade videoId={video.id} title={video.title} />
      </div>
    </div>
  );
}
