import { Reveal } from "@/components/motion/Reveal";
import { RevealItem } from "@/components/motion/RevealItem";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { campuses } from "@/content/campuses";
import { CampusCard } from "./CampusCard";

/** Both campuses side by side, each with its own map. */
export function CampusSection() {
  return (
    <section aria-labelledby="campuses-title" className="bg-paper py-16 md:py-24">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Visit us</SectionLabel>
            <h2 id="campuses-title" className="mt-5 text-h2 text-ink">Our campuses</h2>
          </div>
          <p className="max-w-[44ch]">Office hours are 09:00 – 17:00 AEST. Call the campus before you visit if you need to see someone in particular.</p>
        </div>
        <Reveal stagger className="mt-10 grid gap-6 md:grid-cols-2">
          {campuses.map((campus) => (
            <RevealItem key={campus.name}>
              <CampusCard campus={campus} />
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
