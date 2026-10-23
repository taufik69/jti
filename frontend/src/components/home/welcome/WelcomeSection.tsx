import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StatsPanel } from "./StatsPanel";
import { StudyOptions } from "./StudyOptions";

export function WelcomeSection() {
  return (
    <Section tone="paper" labelledBy="welcome-title">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5" from="left">
          <SectionLabel>About JTI</SectionLabel>
          <h2 id="welcome-title" className="mt-5 text-h2">
            Welcome to Job Training Institute
          </h2>
          <blockquote className="mt-8 border-l-2 border-gold-500 pl-5">
            <p className="text-h3 font-medium text-plum-700">“Always lifting you to the next level.”</p>
          </blockquote>
          <Button href="/who-we-are" variant="outline" className="mt-10">
            Who we are
          </Button>
        </Reveal>
        <Reveal className="lg:col-span-7" delay={0.1} from="right">
          <div className="max-w-[65ch] space-y-4 text-body-lg">
            <p>
              With over 15 years of experience, Job Training Institute (JTI) is a trusted Australian
              Registered Training Organisation delivering nationally recognised qualifications to
              domestic and international students.
            </p>
            <p>
              Education here is more than a course. It is personal growth, career development and
              lifelong opportunity, with flexible, industry-relevant training and full support from
              our trainers however you choose to study.
            </p>
          </div>
          <StudyOptions />
        </Reveal>
      </div>
      <StatsPanel />
    </Section>
  );
}
