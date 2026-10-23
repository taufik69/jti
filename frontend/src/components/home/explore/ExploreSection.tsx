import { Reveal } from "@/components/motion/Reveal";
import { RevealItem } from "@/components/motion/RevealItem";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { exploreTiles } from "@/content/explore";
import { site } from "@/content/site";
import { ExploreTile } from "./ExploreTile";

export function ExploreSection() {
  return (
    <Section labelledBy="explore-title">
      <SectionHeader
        id="explore-title"
        label="Life at JTI"
        title="Everything you need to know before you enrol"
        intro="How we teach, where you will study, and the support around you from enquiry to graduation."
      />
      <Reveal
        stagger
        className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-4 scroll-px-5 md:mx-0 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-5"
      >
        {exploreTiles.map((tile) => (
          <RevealItem key={tile.href} className="w-[72%] shrink-0 snap-start sm:w-[45%] md:w-auto">
            <ExploreTile tile={tile} />
          </RevealItem>
        ))}
      </Reveal>
      <div className="mt-12 flex flex-col items-center gap-4 text-center">
        <Button href={site.applyHref} size="lg" withArrow className="px-10">
          Apply now
        </Button>
        <p className="text-[0.9375rem] text-muted">
          Questions first? Call{" "}
          <a href={site.phones.general.href} className="font-medium text-plum-700">
            {site.phones.general.label}
          </a>
        </p>
      </div>
    </Section>
  );
}
