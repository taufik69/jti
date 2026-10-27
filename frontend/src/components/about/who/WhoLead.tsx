import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { motto, whoLead } from "@/content/about/who-we-are";

/** One large statement of purpose, with the motto set as a signature line. */
export function WhoLead() {
  return (
    <section aria-label="Our aim" className="bg-paper py-20 md:py-28">
      <Container>
        <Reveal from="left" className="mx-auto max-w-4xl">
          <span aria-hidden className="block h-1 w-12 rounded-full bg-gold-500" />
          <p className="mt-8 text-h2 font-normal text-ink">{whoLead}</p>
          <p className="mt-8 text-label text-plum-700">Our motto · “{motto}”</p>
        </Reveal>
      </Container>
    </section>
  );
}
