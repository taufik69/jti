import type { ReactNode } from "react";
import type { Course } from "@/content/courses";
import { infoSection, type CourseDetails, type InfoSection } from "@/lib/find-course";
import { CareersSection } from "./CareersSection";
import { CourseDocuments } from "./CourseDocuments";
import { CourseStructure } from "./CourseStructure";
import { courseSections, moreInfoKeys, type SectionId } from "./course-sections";
import { DetailSection } from "./DetailSection";
import { FeesSection } from "./FeesSection";
import { MoreInfo } from "./MoreInfo";
import { OverviewSection } from "./OverviewSection";
import { PlacementSection } from "./PlacementSection";
import { RichBlocks } from "./RichBlocks";
import { StudySection } from "./StudySection";

interface CourseBodyProps {
  course: Course;
  details: CourseDetails;
}

const titles: Record<SectionId, string> = {
  overview: "Overview",
  fees: "Fees",
  units: "Course structure",
  entry: "Entry & enrolment requirements",
  study: "How you'll study",
  placement: "Work placement",
  careers: "Careers & further study",
  more: "Good to know",
};

/** Every section of the jti.edu.au course page, regrouped and restyled. */
export function CourseBody({ course, details }: CourseBodyProps) {
  const more = moreInfoKeys.map((k) => infoSection(details, k)).filter((s): s is InfoSection => Boolean(s));
  const content: Record<SectionId, ReactNode> = {
    overview: <OverviewSection details={details} />,
    fees: <FeesSection course={course} details={details} />,
    units: <CourseStructure details={details} />,
    entry: <RichBlocks blocks={infoSection(details, "entry")?.blocks ?? []} />,
    study: <StudySection details={details} />,
    placement: <PlacementSection course={course} details={details} />,
    careers: <CareersSection details={details} />,
    more: (
      <div className="space-y-8">
        {more.length > 0 && <MoreInfo sections={more} />}
        <CourseDocuments links={details.links} />
      </div>
    ),
  };

  return (
    <div className="space-y-14">
      {courseSections(details).map(({ id }) => (
        <DetailSection key={id} id={id} title={titles[id]}>
          {content[id]}
        </DetailSection>
      ))}
    </div>
  );
}
