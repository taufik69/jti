import { allCourses } from "@/content/all-courses";
import type { Course } from "@/content/courses";
import details from "@/content/course-details.json";

export interface CourseUnit {
  code: string;
  name: string;
  core: boolean;
}

export interface CourseDetails {
  overview: string[];
  entry: string[];
  units: CourseUnit[];
  careers: string[];
  pathways: string[];
  assessment: string[];
}

/** Text taken from each course page on jti.edu.au (October 2026), keyed by URL slug. */
const detailsBySlug: Record<string, CourseDetails> = details;

export const slugOf = (course: Course) => course.href.replace("/course/", "");

export function findCourse(slug: string): { course: Course; details: CourseDetails } | undefined {
  const course = allCourses.find((c) => slugOf(c) === slug);
  const found = detailsBySlug[slug];
  return course && found ? { course, details: found } : undefined;
}

/** Same qualification for the other student type, e.g. the international CHC33021. */
export function otherAudienceVersion(course: Course): Course | undefined {
  return allCourses.find((c) => c.code === course.code && c.audience !== course.audience);
}

/** Up to three courses in the same study area and student type. */
export function relatedCourses(course: Course): Course[] {
  return allCourses.filter((c) => c.field === course.field && c.audience === course.audience && c.id !== course.id).slice(0, 3);
}
