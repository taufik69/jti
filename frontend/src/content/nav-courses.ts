import { courseGroups } from "./course-groups";
import { findQualification } from "./qualifications";
import type { Audience, NavColumn, NavLink } from "./types";

const levelOrder = ["Certificate III", "Certificate IV", "Diploma", "Advanced Diploma"];

function levelsFor(codes: string[]): string {
  const levels = codes
    .map((code) => findQualification(code)?.level)
    .filter((level): level is string => Boolean(level));
  return Array.from(new Set(levels))
    .sort((a, b) => levelOrder.indexOf(a) - levelOrder.indexOf(b))
    .join(", ");
}

function linksFor(audience: Audience): NavLink[] {
  return courseGroups
    .filter((group) => group.audience === audience)
    .map((group) => ({
      label: group.items ? group.items.join(", ") : group.title,
      href: group.href,
      meta: group.items ? group.title : levelsFor(group.codes),
    }));
}

export const coursesColumns: NavColumn[] = [
  { title: "Domestic", links: linksFor("domestic") },
  { title: "International", links: linksFor("international") },
];
