import { Briefcase, Clock, GraduationCap, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { Course } from "@/content/courses";

interface CourseFactsProps {
  course: Course;
}

/** Glass tiles under the hero title: the four facts people compare courses on. */
export function CourseFacts({ course }: CourseFactsProps) {
  const facts: [LucideIcon, string, string][] = [
    [Clock, "Duration", course.duration],
    [GraduationCap, "Study mode", course.modes.join(" or ")],
    [MapPin, "Location", "Melbourne campuses"],
    [Briefcase, "Work placement", course.placementHours ? `${course.placementHours} hours` : "Ask us"],
  ];

  return (
    <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {facts.map(([icon, label, value]) => (
        <div key={label} className="rounded-card border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
          <dt className="flex items-center gap-2 text-[0.8125rem] text-white/65">
            <Icon icon={icon} size={16} className="text-gold-400" />
            {label}
          </dt>
          <dd className="mt-1.5 font-medium text-white">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
