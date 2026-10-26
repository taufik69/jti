import type { CourseDetails } from "@/lib/find-course";
import { DurationOptions } from "./DurationOptions";

interface OverviewSectionProps {
  details: CourseDetails;
}

export function OverviewSection({ details }: OverviewSectionProps) {
  const [lead, ...rest] = details.overview;

  return (
    <div>
      {lead && <p className="text-left text-body-lg text-ink">{lead}</p>}
      <div className="mt-4 space-y-4">
        {rest.map((p) => <p key={p} className="text-left">{p}</p>)}
      </div>
      {details.duration.length > 0 && (
        <div className="mt-8">
          <h3 className="mb-4 font-medium text-ink">How long it takes</h3>
          <DurationOptions blocks={details.duration} />
        </div>
      )}
    </div>
  );
}
