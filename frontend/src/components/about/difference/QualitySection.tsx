import { Award } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { quality } from "@/content/about/difference";
import { SatisfactionChart } from "./SatisfactionChart";
import { ThemeHeading } from "./ThemeHeading";

/** Theme 1: the evidence-led one. Copy and rating on the left, the dated satisfaction figure on the right. */
export function QualitySection() {
  return (
    <section id="quality" aria-labelledby="quality-title" className="scroll-mt-28 bg-paper py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal from="left" className="lg:col-span-6">
          <ThemeHeading id="quality" />
          <div className="mt-6 space-y-4 text-body-lg">
            {quality.text.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="mt-8 inline-flex items-center gap-3 rounded-full bg-gold-100 py-2 pl-2 pr-5 text-[0.9375rem] font-medium text-plum-950">
            <span className="grid size-8 place-items-center rounded-full bg-gold-500">
              <Icon icon={Award} size={16} />
            </span>
            ASQA: Demonstrated Consistently Compliant
          </p>
        </Reveal>
        <Reveal from="right" delay={0.08} className="lg:col-span-6 lg:pt-14">
          <SatisfactionChart />
        </Reveal>
      </Container>
    </section>
  );
}
