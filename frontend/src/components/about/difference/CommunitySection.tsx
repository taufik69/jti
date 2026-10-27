import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { GridBackground } from "@/components/ui/GridBackground";
import { community } from "@/content/about/difference";
import { ThemeHeading } from "./ThemeHeading";

/** Theme 5: the page's one dark band; typographic, with the support promise set large. */
export function CommunitySection() {
  const [lead, ...rest] = community.text;

  return (
    <section id="community" aria-labelledby="community-title" className="relative isolate scroll-mt-28 overflow-hidden bg-plum-950 py-20 text-white/80 md:py-28">
      <GridBackground />
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal from="left" className="lg:col-span-5">
          <ThemeHeading id="community" onDark />
          <p className="mt-6 text-body-lg text-white/85">{lead}</p>
        </Reveal>
        <Reveal from="right" delay={0.08} className="space-y-8 lg:col-span-7 lg:border-l lg:border-white/15 lg:pl-16">
          {rest.map((p, i) => (
            <p key={p} className={i === 0 ? "text-h3 font-normal text-white" : "text-body-lg"}>
              {p}
            </p>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
