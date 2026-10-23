import { Icon } from "@/components/ui/Icon";
import { videoHighlights } from "@/content/video";

export function VideoHighlights() {
  return (
    <ul className="mt-10 space-y-5">
      {videoHighlights.map((item) => (
        <li key={item.title} className="flex gap-4">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-control border border-white/15 bg-white/10 text-gold-400">
            <Icon icon={item.icon} />
          </span>
          <div>
            <p className="font-medium text-white">{item.title}</p>
            <p className="mt-1 text-[0.9375rem] leading-relaxed text-white/75">{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
