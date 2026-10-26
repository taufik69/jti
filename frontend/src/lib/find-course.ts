import { allCourses } from "@/content/all-courses";
import type { Course } from "@/content/courses";
import details from "@/content/course-details.json";

export interface CourseUnit {
  code: string;
  name: string;
  core: boolean;
}

/** Rich text from a jti.edu.au accordion, flattened to the few shapes the pages use. */
export type ContentBlock =
  | { type: "p" | "h" | "sep"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; rows: string[][] };

export type InfoKey =
  | "payment" | "entry" | "delivery" | "assessment" | "placement"
  | "rpl" | "support" | "scholarship" | "compliance" | "other" | "why";

export interface InfoSection {
  key: InfoKey;
  title: string;
  blocks: ContentBlock[];
}

/** Domestic pricing table: self-funded always, self-paced where offered. Values as printed, e.g. "$5000". */
export interface DomesticFees {
  selfFunded: { registration: string | null; tuition: string | null; total: string | null };
  selfPaced: { registration: string | null; total: string | null } | null;
}

export interface CourseLink {
  label: string;
  href: string;
}

export interface CourseDetails {
  /** e.g. "Your Learning, Your Style: Blended or Self-Paced Delivery…" where the page has one. */
  tagline?: string;
  overview: string[];
  units: CourseUnit[];
  /** Packaging rule, e.g. "…requires the fulfilment of 10 Units of Study: 7 core units and 3 elective units." */
  unitRule?: string;
  assessmentMethods: string[];
  careers: string[];
  pathways: string[];
  /** Sentences from the pathway section that are not list items. */
  pathwayNotes: string[];
  /** Handbook, policies and other documents the page links to. */
  links: CourseLink[];
  duration: ContentBlock[];
  fees: DomesticFees | null;
  /** Extra pricing rows such as recommended books and certificate re-issue. */
  extras: { label: string; lines: string[] }[];
  sections: InfoSection[];
}

/** Text taken from each course page on jti.edu.au (October 2026), keyed by URL slug. */
const detailsBySlug = details as Record<string, CourseDetails>;

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

export function infoSection(details: CourseDetails, key: InfoKey): InfoSection | undefined {
  return details.sections.find((s) => s.key === key);
}
