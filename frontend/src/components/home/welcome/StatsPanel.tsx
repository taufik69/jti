import { Reveal } from "@/components/motion/Reveal";
import { StatCounter } from "@/components/ui/StatCounter";
import { stats } from "@/content/home";

export function StatsPanel() {
  return (
    <Reveal className="mt-16 rounded-media bg-plum-950 bg-[radial-gradient(40rem_20rem_at_100%_0%,rgb(139_79_171/0.35),transparent_70%)] px-6 py-10 md:px-12 md:py-14">
      <ul className="grid gap-10 md:grid-cols-3 md:gap-0">
        {stats.map((stat) => (
          <li key={stat.label} className="md:border-l md:border-white/10 md:px-10 md:first:border-l-0 md:first:pl-0">
            <StatCounter {...stat} />
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
