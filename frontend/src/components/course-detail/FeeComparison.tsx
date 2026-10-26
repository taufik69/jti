import type { Course } from "@/content/courses";
import type { CourseDetails } from "@/lib/find-course";
import { FeeOption } from "./FeeOption";

interface FeeComparisonProps {
  course: Course;
  details: CourseDetails;
}

const aud = (n: number) => `$${n.toLocaleString("en-AU")}`;
/** The source prints "$5000" and "$1,599"; show both the same way. */
const tidy = (v: string | null) => (v ? aud(Number(v.replace(/[$,]/g, ""))) : null);

/** Domestic: self-funded vs self-paced. International: onshore vs offshore. Figures exactly as jti.edu.au lists them. */
export function FeeComparison({ course, details }: FeeComparisonProps) {
  if (course.audience === "international" && course.fee) {
    const offshore = /Offshore \$([\d,]+)/.exec(course.fee.note ?? "")?.[1];
    return (
      <div className="grid gap-4 sm:grid-cols-2">
        <FeeOption title="Onshore price" caption="Applying from within Australia" rows={[["Material fee", "$500"]]} total={aud(course.fee.amount)} totalLabel="Course price" highlight />
        {offshore && (
          <FeeOption title="Offshore price" caption="Applying from outside Australia" rows={[["Material fee", "$500"]]} total={`$${offshore}`} totalLabel="Course price" />
        )}
      </div>
    );
  }
  const fees = details.fees;
  if (!fees) {
    return <p className="text-left">Fees for this course are listed on the JTI fee schedule. Call 1300 144 584 or send an enquiry for a quote.</p>;
  }
  const { selfFunded, selfPaced } = fees;
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <FeeOption title="Self-funded" rows={[["Registration fee", tidy(selfFunded.registration)], ["Tuition fee", tidy(selfFunded.tuition)]]} total={tidy(selfFunded.total)} highlight />
      {selfPaced && (
        <FeeOption title="Self-paced" rows={[["Registration fee", tidy(selfPaced.registration)]]} total={tidy(selfPaced.total)} />
      )}
    </div>
  );
}
