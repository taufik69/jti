import { BookOpen, MonitorPlay, School } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { RevealItem } from "@/components/motion/RevealItem";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Image } from "@/components/ui/Image";
import { flexibility } from "@/content/about/difference";
import { ThemeHeading } from "./ThemeHeading";

const icons = [School, MonitorPlay, BookOpen];

/** Theme 3: copy and portrait photo, then the three study modes as one divided panel. */
export function FlexibilitySection() {
  return (
    <section id="flexibility" aria-labelledby="flexibility-title" className="scroll-mt-28 bg-paper py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <Reveal from="left" className="lg:col-span-5">
          <ThemeHeading id="flexibility" />
          <p className="mt-6 text-body-lg">{flexibility.text}</p>
          <div className="relative mt-10 hidden aspect-[3/2] overflow-hidden rounded-card bg-plum-100 lg:block">
            <Image src="/images/student.jpg" alt="A student talking through her course with an advisor" fill sizes="480px" className="object-cover" />
          </div>
        </Reveal>
        <Reveal stagger className="lg:col-span-7">
          <ul className="divide-y divide-line overflow-hidden rounded-card border border-line">
            {flexibility.modes.map((mode, i) => (
              <li key={mode.title}>
                <RevealItem from="right" className="flex items-start gap-6 p-7 md:p-9">
                  <span className="grid size-12 shrink-0 place-items-center rounded-control bg-plum-50 text-plum-700">
                    <Icon icon={icons[i]} />
                  </span>
                  <span>
                    <span className="block text-h3 text-ink">{mode.title}</span>
                    <span className="mt-2 block">{mode.text}</span>
                  </span>
                </RevealItem>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[0.9375rem] text-muted">Modes vary by course. Each course page lists the options available.</p>
        </Reveal>
      </Container>
    </section>
  );
}
