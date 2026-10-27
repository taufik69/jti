import { MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { campuses } from "@/content/campuses";

/** The two Melbourne campuses, with the next step: find a course or ask us. */
export function Campuses() {
  return (
    <section aria-labelledby="campuses-title" className="bg-paper py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:items-end">
        <Reveal from="left" className="lg:col-span-5">
          <SectionLabel>Where we teach</SectionLabel>
          <h2 id="campuses-title" className="mt-5 text-h2 text-ink">Two campuses across Melbourne</h2>
          <p className="mt-5 max-w-[44ch]">Our Melbourne City campus (head office) and our Dandenong campus both offer courses, with online study available too.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/courses" size="lg" withArrow>Find a course</Button>
            <Button href="/#enquire" size="lg" variant="outline">Make an enquiry</Button>
          </div>
        </Reveal>
        <Reveal from="right" delay={0.08} className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {campuses.map((campus) => (
            <address key={campus.name} className="not-italic rounded-card border border-line bg-canvas p-7">
              <p className="text-label text-plum-700">{campus.role ?? "Campus"}</p>
              <p className="mt-3 text-h3 text-ink">{campus.name}</p>
              <p className="mt-4 flex gap-2.5 text-[0.9375rem]">
                <Icon icon={MapPin} size={20} className="mt-0.5 shrink-0 text-plum-500" />
                <a href={campus.mapHref} target="_blank" rel="noreferrer" className="underline-offset-4 hover:text-plum-700 hover:underline">
                  {campus.address.join(", ")}
                </a>
              </p>
              <p className="mt-3 flex gap-2.5 text-[0.9375rem]">
                <Icon icon={Phone} size={20} className="shrink-0 text-plum-500" />
                <a href={campus.phone.href} className="underline-offset-4 hover:text-plum-700 hover:underline">{campus.phone.label}</a>
              </p>
            </address>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
