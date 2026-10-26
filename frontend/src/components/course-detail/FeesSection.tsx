import type { Course } from "@/content/courses";
import { infoSection, type CourseDetails } from "@/lib/find-course";
import { FeeComparison } from "./FeeComparison";
import { FeeExtras } from "./FeeExtras";
import { RichBlocks } from "./RichBlocks";

interface FeesSectionProps {
  course: Course;
  details: CourseDetails;
}

export function FeesSection({ course, details }: FeesSectionProps) {
  const payment = infoSection(details, "payment");

  return (
    <div className="space-y-6">
      <FeeComparison course={course} details={details} />
      <FeeExtras extras={details.extras} />
      {payment && (
        <div className="rounded-card bg-plum-50 p-5 text-[0.9375rem] md:p-6">
          <RichBlocks blocks={payment.blocks} />
        </div>
      )}
    </div>
  );
}
