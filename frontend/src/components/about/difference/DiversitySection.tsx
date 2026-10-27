import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Image } from "@/components/ui/Image";
import { diversity } from "@/content/about/difference";
import { ThemeHeading } from "./ThemeHeading";

/** Theme 2: one wide photo with the copy in a card that overlaps its lower edge. */
export function DiversitySection() {
  return (
    <section id="diversity" aria-labelledby="diversity-title" className="scroll-mt-28 bg-canvas py-20 md:py-28">
      <Container>
        <Reveal from="left" className="relative aspect-[4/3] overflow-hidden rounded-card bg-plum-100 md:aspect-[21/9]">
          <Image
            src="/images/jti/multicultural-day.jpg"
            alt="JTI students and staff in traditional dress celebrating Multicultural Day"
            fill
            sizes="(min-width: 1280px) 1240px, 100vw"
            style={{ objectPosition: "center 35%" }}
            className="object-cover"
          />
        </Reveal>
        <Reveal from="right" delay={0.08} className="relative -mt-10 grid gap-8 rounded-card border border-line bg-paper p-7 shadow-float md:mx-10 md:-mt-24 md:p-12 lg:mx-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ThemeHeading id="diversity" />
            <p className="mt-6 text-body-lg">{diversity.text}</p>
          </div>
          <div className="flex flex-col justify-between gap-8 border-line lg:col-span-5 lg:border-l lg:pl-10">
            <div>
              <p className="text-label text-muted">Celebrated each year</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {diversity.events.map((event) => (
                  <li key={event} className="rounded-full border border-plum-300 px-4 py-1.5 text-[0.9375rem] font-medium text-plum-700">
                    {event}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-h3 italic text-plum-700">“{diversity.motto}”</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
