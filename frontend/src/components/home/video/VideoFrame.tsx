import { Award, CalendarCheck } from "lucide-react";
import { video } from "@/content/video";
import { VideoBadge } from "./VideoBadge";
import { YouTubeFacade } from "./YouTubeFacade";

/** Video in a hairline glass frame with two floating fact badges. */
export function VideoFrame() {
  return (
    <div className="relative">
      <div className="rounded-media border border-white/15 bg-white/5 p-2 backdrop-blur-sm md:p-3">
        <YouTubeFacade videoId={video.id} title={video.title} />
      </div>
      <VideoBadge icon={CalendarCheck} value="Since 2008" label="Training in Melbourne" className="-left-6 -top-6" />
      <VideoBadge icon={Award} value="ASQA rated" label="Demonstrated Consistently Compliant" className="-bottom-6 -right-4" />
    </div>
  );
}
