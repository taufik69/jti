import { Bookmark } from "lucide-react";
import { CoursePrice } from "@/components/finder/CoursePrice";
import { useSavedCourses } from "@/components/finder/useSavedCourses";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import type { Course } from "@/content/courses";
import { cn } from "@/lib/cn";

interface FeeCardProps {
  course: Course;
}

/** Sticky side card: price, the two actions, and the shortlist toggle shared with /courses. */
export function FeeCard({ course }: FeeCardProps) {
  const { saved, toggle } = useSavedCourses();
  const isSaved = saved.includes(course.id);

  return (
    <div className="rounded-card border border-line bg-paper p-6 shadow-float">
      <p className="text-label text-left text-plum-700">Course fee</p>
      <div className="mt-3"><CoursePrice fee={course.fee} /></div>
      <div className="mt-6 grid gap-2">
        <Button href="/applynow" size="lg" withArrow>Apply now</Button>
        <Button href="/#enquire" size="lg" variant="outline">Enquire about this course</Button>
      </div>
      <button
        type="button"
        aria-pressed={isSaved}
        onClick={() => toggle(course.id)}
        className={cn(
          "mt-4 flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-control py-2 text-[0.9375rem] font-medium transition-colors",
          isSaved ? "text-plum-700" : "text-muted hover:text-plum-700",
        )}
      >
        <Icon icon={Bookmark} size={16} className={isSaved ? "fill-current" : undefined} />
        {isSaved ? "Saved to your shortlist" : "Save to shortlist"}
      </button>
      <p className="mt-4 border-t border-line pt-4 text-left text-[0.8125rem] text-muted">
        Fees as published on jti.edu.au. Call 1300 144 584 to confirm before you enrol.
      </p>
    </div>
  );
}
