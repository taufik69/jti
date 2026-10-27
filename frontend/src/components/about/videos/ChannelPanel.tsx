import { ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/content/site";
import { jtiVideos } from "@/content/about/videos";

/** Sits beside the lead video: what's here, and where the rest live. */
export function ChannelPanel() {
  return (
    <div className="flex h-full flex-col justify-between gap-10 rounded-card bg-plum-950 p-8 text-white/75 md:p-10">
      <div>
        <p className="text-label text-gold-400">{jtiVideos.length} videos</p>
        <h3 className="mt-4 text-h3 text-white">More on our YouTube channel</h3>
        <p className="mt-4">You can check out our other videos on our YouTube channel.</p>
      </div>
      <a
        href={site.social.youtube}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex h-12 items-center justify-between gap-3 rounded-control border border-white/25 px-5 font-medium text-white transition-colors duration-150 hover:border-white/60 hover:bg-white/10"
      >
        View all videos
        <span className="sr-only">(opens YouTube in a new tab)</span>
        <Icon icon={ArrowUpRight} size={20} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}
