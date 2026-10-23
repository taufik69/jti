import { Award, CalendarCheck, SmilePlus } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { RevealItem } from "@/components/motion/RevealItem";
import { Icon } from "@/components/ui/Icon";
import { GridBackground } from "@/components/ui/GridBackground";
import { StatCounter } from "@/components/ui/StatCounter";
import { stats } from "@/content/home";
import { site } from "@/content/site";

/** One icon per stat, in the same order as `stats`. */
const icons = [CalendarCheck, SmilePlus, Award];

const glow =
  "bg-[radial-gradient(40rem_20rem_at_100%_0%,rgb(139_79_171/0.35),transparent_70%),radial-gradient(30rem_18rem_at_0%_100%,rgb(255_203_105/0.08),transparent_70%)]";

export function StatsPanel() {
  return (
    <Reveal className={`relative isolate mt-16 overflow-hidden rounded-media bg-plum-950 ${glow}`}>
      <GridBackground />
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-6 py-5 md:px-12">
        <p className="text-label text-gold-400">JTI at a glance</p>
        <p className="hidden text-[0.8125rem] text-white/60 sm:block">RTO {site.rto} · CRICOS {site.cricos}</p>
      </div>
      <Reveal stagger className="grid md:grid-cols-3">
        {stats.map((stat, i) => (
          <RevealItem
            key={stat.label}
            className="border-white/10 px-6 py-8 not-first:border-t md:px-10 md:py-12 md:not-first:border-l md:not-first:border-t-0 lg:px-12"
          >
            <StatCounter {...stat} icon={<Icon icon={icons[i]} />} />
          </RevealItem>
        ))}
      </Reveal>
    </Reveal>
  );
}
