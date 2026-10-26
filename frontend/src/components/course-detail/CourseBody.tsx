import { GraduationCap, UserRound } from "lucide-react";
import type { CourseDetails } from "@/lib/find-course";
import { DetailSection } from "./DetailSection";
import { EntryList } from "./EntryList";
import { TagList } from "./TagList";
import { UnitList } from "./UnitList";

interface CourseBodyProps {
  details: CourseDetails;
}

/** Ids and labels for the sections this course actually has content for. */
export function bodySections(details: CourseDetails) {
  return [
    { id: "overview", label: "Overview", show: details.overview.length > 0 },
    { id: "units", label: `Course structure (${details.units.length} units)`, show: details.units.length > 0 },
    { id: "entry", label: "Entry requirements", show: details.entry.length > 0 },
    { id: "careers", label: "Career outcomes", show: details.careers.length > 0 },
    { id: "pathways", label: "Further study", show: details.pathways.length > 0 },
  ].filter((s) => s.show);
}

export function CourseBody({ details }: CourseBodyProps) {
  return (
    <div className="space-y-10">
      <DetailSection id="overview" title="Overview">
        <div className="space-y-4 text-body-lg">
          {details.overview.map((p) => <p key={p} className="text-left">{p}</p>)}
        </div>
        {details.assessment.length > 0 && (
          <p className="mt-6 text-left text-[0.9375rem] text-muted">Assessed through: {details.assessment.join(", ")}.</p>
        )}
      </DetailSection>
      {details.units.length > 0 && (
        <DetailSection id="units" title="Course structure"><UnitList units={details.units} /></DetailSection>
      )}
      {details.entry.length > 0 && (
        <DetailSection id="entry" title="Entry requirements"><EntryList items={details.entry} /></DetailSection>
      )}
      {details.careers.length > 0 && (
        <DetailSection id="careers" title="Where this course can take you"><TagList items={details.careers} icon={UserRound} /></DetailSection>
      )}
      {details.pathways.length > 0 && (
        <DetailSection id="pathways" title="Further study"><TagList items={details.pathways} icon={GraduationCap} /></DetailSection>
      )}
    </div>
  );
}
