import { PageHero } from "@/components/page/PageHero";
import { JourneyIndex } from "@/components/study/hub/JourneyIndex";
import { TopicSection } from "@/components/study/hub/TopicSection";
import { studyPages, studyTopics } from "@/content/study";

const intro = `${studyPages.length} guides for domestic and international students, from choosing JTI and applying, to arriving in Melbourne and settling into study.`;

/** /study: every "Study with us" guide, grouped by stage of the student journey. */
export function StudyHubPage() {
  return (
    <div className="[&_p]:text-left [&_p]:hyphens-manual">
      <title>Study with us · Job Training Institute</title>
      <meta name="description" content={intro} />
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Study with us" }]}
        label="Study with us"
        title="Everything you need, from application to arrival"
        intro={<p>{intro}</p>}
        aside={<JourneyIndex />}
      />
      {studyTopics.map((topic, i) => (
        <TopicSection key={topic.id} topic={topic} index={i} />
      ))}
    </div>
  );
}
