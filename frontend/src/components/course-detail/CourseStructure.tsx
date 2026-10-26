import { ClipboardCheck } from "lucide-react";
import type { CourseDetails } from "@/lib/find-course";
import { TagList } from "./TagList";
import { UnitList } from "./UnitList";

interface CourseStructureProps {
  details: CourseDetails;
}

/** Packaging rule, the core and elective units, then how the units are assessed. */
export function CourseStructure({ details }: CourseStructureProps) {
  return (
    <div className="space-y-8">
      {details.unitRule && <p className="text-left">{details.unitRule}</p>}
      <UnitList units={details.units} />
      {details.assessmentMethods.length > 0 && (
        <div>
          <h3 className="mb-4 font-medium text-ink">Assessment methods</h3>
          <TagList items={details.assessmentMethods} icon={ClipboardCheck} />
        </div>
      )}
    </div>
  );
}
