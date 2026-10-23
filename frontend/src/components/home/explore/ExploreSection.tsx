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
      <Reveal stagger className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-5">
        {exploreTiles.map((tile, i) => (
          <RevealItem key={tile.href} className={i === 0 ? "col-span-2 lg:col-span-1" : undefined}>
            <ExploreTile tile={tile} wide={i === 0} />
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
