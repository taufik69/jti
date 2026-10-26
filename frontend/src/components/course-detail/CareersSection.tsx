import { GraduationCap, UserRound } from "lucide-react";
import type { CourseDetails } from "@/lib/find-course";
import { TagList } from "./TagList";

interface CareersSectionProps {
  details: CourseDetails;
}

export function CareersSection({ details }: CareersSectionProps) {
  return (
    <div className="space-y-8">
      {details.careers.length > 0 && (
        <div>
          <h3 className="mb-4 font-medium text-ink">Jobs this course can lead to</h3>
          <TagList items={details.careers} icon={UserRound} />
        </div>
      )}
      {details.pathways.length > 0 && (
        <div>
          <h3 className="mb-4 font-medium text-ink">Keep studying</h3>
          <TagList items={details.pathways} icon={GraduationCap} />
        </div>
      )}
    </div>
  );
}
