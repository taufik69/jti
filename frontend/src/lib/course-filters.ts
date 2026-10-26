import type { Course, CourseLevel, DeliveryMode } from "@/content/courses";
import { fieldLabels, levelOrder } from "@/content/courses";
import type { Audience } from "@/content/types";

export type AudienceFilter = Audience | "all";
export type LengthBucket = "under-12" | "12-18" | "over-18";
export type SortKey = "recommended" | "shortest" | "fee" | "title";

export interface CourseFilters {
  query: string;
  audience: AudienceFilter;
  fields: Course["field"][];
  levels: CourseLevel[];
  modes: DeliveryMode[];
  lengths: LengthBucket[];
  savedOnly: boolean;
}

export const emptyFilters: CourseFilters = {
  query: "", audience: "all", fields: [], levels: [], modes: [], lengths: [], savedOnly: false,
};

export const lengthLabels: Record<LengthBucket, string> = {
  "under-12": "Up to 12 months",
  "12-18": "12 to 18 months",
  "over-18": "Over 18 months",
};

export function lengthBucket(months: number): LengthBucket {
  if (months <= 12) return "under-12";
  return months <= 18 ? "12-18" : "over-18";
}

/** An empty list means "no restriction" for that group. */
const allows = <T>(selected: T[], value: T) => selected.length === 0 || selected.includes(value);

export function matches(course: Course, f: CourseFilters, saved: string[]): boolean {
  const q = f.query.trim().toLowerCase();
  return (
    (!q || course.title.toLowerCase().includes(q) || course.code.toLowerCase().includes(q)) &&
    (f.audience === "all" || course.audience === f.audience) &&
    allows(f.fields, course.field) &&
    allows(f.levels, course.level) &&
    (f.modes.length === 0 || course.modes.some((m) => f.modes.includes(m))) &&
    allows(f.lengths, lengthBucket(course.months)) &&
    (!f.savedOnly || saved.includes(course.id))
  );
}

const fieldOrder = Object.keys(fieldLabels);

const sorters: Record<SortKey, (a: Course, b: Course) => number> = {
  /** Study area in menu order, then level, then domestic before international. */
  recommended: (a, b) =>
    fieldOrder.indexOf(a.field) - fieldOrder.indexOf(b.field) ||
    levelOrder.indexOf(a.level) - levelOrder.indexOf(b.level) ||
    a.audience.localeCompare(b.audience),
  shortest: (a, b) => a.months - b.months,
  fee: (a, b) => (a.fee?.amount ?? Infinity) - (b.fee?.amount ?? Infinity),
  title: (a, b) => a.title.localeCompare(b.title),
};

export function sortCourses(courses: Course[], key: SortKey): Course[] {
  return [...courses].sort(sorters[key]);
}

/** How many courses each option would show, given every other active filter. */
export function countBy<K extends string>(courses: Course[], key: (c: Course) => K | K[]): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const course of courses) {
    const values = ([] as K[]).concat(key(course));
    for (const v of values) counts[v] = (counts[v] ?? 0) + 1;
  }
  return counts;
}

const isAudience = (v: string | null): v is Course["audience"] => v === "domestic" || v === "international";

/** Reads `?type=domestic&area=early-childhood,business` so menu and home links open pre-filtered. */
export function filtersFromSearch(search: string, fieldIds: Course["field"][]): CourseFilters {
  const params = new URLSearchParams(search);
  const type = params.get("type");
  const areas = (params.get("area") ?? "").split(",");
  return {
    ...emptyFilters,
    audience: isAudience(type) ? type : "all",
    fields: fieldIds.filter((id) => areas.includes(id)),
  };
}
