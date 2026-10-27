import { AboutHero } from "@/components/about/AboutHero";
import { AboutLayout } from "@/components/about/AboutLayout";
import { CommunitySection } from "@/components/about/difference/CommunitySection";
import { DiversitySection } from "@/components/about/difference/DiversitySection";
import { FlexibilitySection } from "@/components/about/difference/FlexibilitySection";
import { IndustrySection } from "@/components/about/difference/IndustrySection";
import { QualitySection } from "@/components/about/difference/QualitySection";
import { ThemeIndex } from "@/components/about/difference/ThemeIndex";
import { differenceIntro } from "@/content/about/difference";

/** /what-makes-jti-different: five themes, each with its own composition. */
export function DifferencePage() {
  return (
    <AboutLayout>
      <title>What makes JTI different · Job Training Institute</title>
      <meta name="description" content={differenceIntro} />
      <AboutHero label="What makes JTI different" title="Why students choose to train with JTI" intro={<p>{differenceIntro}</p>} aside={<ThemeIndex />} />
      <QualitySection />
      <DiversitySection />
      <FlexibilitySection />
      <IndustrySection />
      <CommunitySection />
    </AboutLayout>
  );
}
