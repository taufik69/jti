import { Reveal } from "@/components/motion/Reveal";
import { RevealItem } from "@/components/motion/RevealItem";
import { Container } from "@/components/ui/Container";
import { Image } from "@/components/ui/Image";
import { industry } from "@/content/about/difference";
import { ThemeHeading } from "./ThemeHeading";

/** Theme 4: a 2×2 grid of what partnerships give students, with a tall photo alongside. */
export function IndustrySection() {
  return (
    <section id="industry" aria-labelledby="industry-title" className="scroll-mt-28 bg-canvas py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:order-2 lg:col-span-7">
          <Reveal from="right">
            <ThemeHeading id="industry" />
            <p className="mt-6 max-w-[52ch] text-body-lg">{industry.text}</p>
          </Reveal>
          <Reveal stagger className="mt-10 grid gap-x-10 sm:grid-cols-2">
            {industry.items.map((item, i) => (
              <RevealItem key={item.title} className="border-t border-plum-950/15 py-6">
                <p className="text-label tabular-nums text-plum-700">0{i + 1}</p>
                <h3 className="mt-3 text-[1.1875rem] font-medium text-ink">{item.title}</h3>
                <p className="mt-2 text-[0.9375rem]">{item.text}</p>
              </RevealItem>
            ))}
          </Reveal>
        </div>
        <Reveal from="left" className="lg:order-1 lg:col-span-5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-plum-100 lg:aspect-auto lg:h-full lg:min-h-[32rem]">
            <Image src="/images/healthcare.jpg" alt="A student nurse in scrubs during practical training" fill sizes="(min-width: 1024px) 480px, 100vw" style={{ objectPosition: "30% center" }} className="object-cover" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
