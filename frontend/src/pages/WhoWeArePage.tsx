import { AboutHero } from "@/components/about/AboutHero";
import { AboutLayout } from "@/components/about/AboutLayout";
import { Campuses } from "@/components/about/who/Campuses";
import { CoreValues } from "@/components/about/who/CoreValues";
import { HeroCollage } from "@/components/about/who/HeroCollage";
import { Recognition } from "@/components/about/who/Recognition";
import { WhoFacts } from "@/components/about/who/WhoFacts";
import { WhoLead } from "@/components/about/who/WhoLead";
import { WhoStory } from "@/components/about/who/WhoStory";
import { motto, whoIntro } from "@/content/about/who-we-are";

/** /who-we-are: story, standards, recognition, values, campuses. */
export function WhoWeArePage() {
  return (
    <AboutLayout>
      <title>Who we are · Job Training Institute</title>
      <meta name="description" content={whoIntro.slice(0, 160)} />
      <AboutHero label="Who we are" title={`${motto}.`} intro={<p>{whoIntro}</p>} aside={<HeroCollage />} />
      <WhoFacts />
      <WhoLead />
      <WhoStory />
      <Recognition />
      <CoreValues />
      <Campuses />
    </AboutLayout>
  );
}
