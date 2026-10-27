import { Reveal } from "@/components/motion/Reveal";
import { RevealItem } from "@/components/motion/RevealItem";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { coreValues } from "@/content/about/who-we-are";

/** Five values as a numbered editorial list with hairline rules, beside a sticky heading. */
export function CoreValues() {
  return (
    <section aria-labelledby="values-title" className="bg-gold-100 py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal from="left" className="lg:sticky lg:top-32">
            <SectionLabel>Our core values</SectionLabel>
            <h2 id="values-title" className="mt-5 text-h2 text-ink">What we stand for</h2>
            <p className="mt-5 max-w-[36ch]">The principles behind how we teach, support students and work with each other.</p>
          </Reveal>
        </div>
        <Reveal stagger className="lg:col-span-8">
          <ol className="border-t border-plum-950/15">
            {coreValues.map((value, i) => (
              <li key={value} className="group border-b border-plum-950/15">
                <RevealItem from="right" className="flex items-baseline gap-6 py-7 md:gap-10 md:py-9">
                  <span className="w-10 shrink-0 text-label tabular-nums text-plum-700">0{i + 1}</span>
                  <span className="text-h2 font-normal text-ink transition-colors duration-200 group-hover:text-plum-700">{value}</span>
                </RevealItem>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
