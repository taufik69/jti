import { Sparkles } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Image } from "@/components/ui/Image";

interface HeroMediaProps {
  src: string;
  position?: string;
  caption: string;
  level: string;
}

/** Hero photo in a glass frame with a soft glow and a floating caption chip. */
export function HeroMedia({ src, position, caption, level }: HeroMediaProps) {
  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-gold-500/25 via-plum-500/20 to-transparent blur-2xl" />
      <div className="relative rounded-[32px] border border-white/15 bg-white/[0.06] p-2.5 shadow-[0_24px_60px_-20px_rgb(0_0_0/0.6)] backdrop-blur-md">
        <div className="relative aspect-[5/4] overflow-hidden rounded-[24px] bg-plum-800 ring-1 ring-white/10">
          <Image src={src} alt="" fill priority style={{ objectPosition: position }} className="object-cover" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-plum-950/55 via-transparent to-transparent" />
        </div>
        <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 rounded-2xl border border-white/20 bg-plum-950/55 px-4 py-3 backdrop-blur-md">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gold-500 text-plum-950">
            <Icon icon={Sparkles} size={20} />
          </span>
          <div className="min-w-0">
            <p className="truncate text-[0.9375rem] font-medium text-white">{caption}</p>
            <p className="truncate text-[0.8125rem] text-white/70">{level}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
