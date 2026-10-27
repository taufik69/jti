import { Award } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { RevealItem } from "@/components/motion/RevealItem";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { whoRecognition } from "@/content/about/who-we-are";

/** The regulator rating and the 2017 benchmark, each with its source and year. */
export function Recognition() {
  return (
    <section aria-labelledby="recognition-title" className="bg-plum-950 py-20 text-white/80 md:py-24">
      <Container className="grid gap-12 lg:grid-cols-12">
        <Reveal from="left" className="lg:col-span-4">
          <SectionLabel onDark>Recognition</SectionLabel>
          <h2 id="recognition-title" className="mt-5 text-h2 text-white">Independently recognised for quality</h2>
        </Reveal>
        <Reveal stagger className="grid gap-px overflow-hidden rounded-card bg-white/10 sm:grid-cols-2 lg:col-span-8">
          {whoRecognition.map((item) => (
            <RevealItem key={item.label} className="bg-plum-950 p-7 md:p-9">
              <Icon icon={Award} className="text-gold-400" />
              <p className="mt-6 text-label text-white/60">{item.label}</p>
              <p className="mt-3 text-h3 text-white">{item.value}</p>
              <p className="mt-3 text-[0.9375rem] text-white/70">{item.text}</p>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
