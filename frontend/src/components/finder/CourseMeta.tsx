import { Briefcase, Clock, GraduationCap, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { Course } from "@/content/courses";

interface CourseMetaProps {
  course: Course;
}

/** Key facts, one per line. Placement only shows where jti.edu.au publishes the hours. */
export function CourseMeta({ course }: CourseMetaProps) {
  const items: [LucideIcon, string][] = [
    [Clock, course.duration],
    [GraduationCap, course.modes.join(" or ")],
    [MapPin, "Melbourne campuses"],
  ];
  if (course.placementHours) items.push([Briefcase, `${course.placementHours} hours work placement`]);

  return (
    <ul className="space-y-2 text-[0.875rem] text-body">
      {items.map(([icon, text]) => (
        <li key={text} className="flex items-center gap-2.5">
          <Icon icon={icon} size={16} className="shrink-0 text-muted" />
          {text}
        </li>
      ))}
    </ul>
  );
}
