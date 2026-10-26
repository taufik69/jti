import type { CourseGroup } from "./types";

const domesticBlended = ["Blended", "Self-paced"];
/** Student-visa holders must study full-time (National Code). */
const international = ["Full-time", "CRICOS registered"];
/** Each group opens the course finder pre-filtered to its student type and study areas. */
export const courseGroups: CourseGroup[] = [
  {
    title: "Individual Support, Disability & Leisure and Health",
    href: "/courses?type=domestic&area=individual-support",
    audience: "domestic",
    codes: ["CHC33021", "CHC43121"],
    modes: domesticBlended,
  },
  {
    title: "Early Childhood Education & Care",
    href: "/courses?type=domestic&area=early-childhood",
    audience: "domestic",
    codes: ["CHC30125", "CHC50125"],
    // TODO: mode-of-study page lists the superseded CHC30121/CHC50121 — confirm modes.
    modes: domesticBlended,
  },
  {
    title: "Community Services & Mental Health",
    href: "/courses?type=domestic&area=community-services,mental-health",
    audience: "domestic",
    codes: ["CHC43515", "CHC52025", "CHC53315"],
    modes: ["Blended", "Self-paced for CHC52025"],
  },
  {
    title: "Business (Melbourne)",
    href: "/courses?type=domestic&area=business",
    audience: "domestic",
    codes: ["BSB50120"],
    modes: [], // TODO: business study modes are not published
  },
  {
    title: "Short courses",
    href: "/courses?type=domestic", // TODO: short courses are not in the finder yet (no published details)
    audience: "domestic",
    codes: [],
    items: ["Medication participation", "Manual handling participation", "First aid"],
    modes: [],
  },
  {
    title: "Individual Support & Disability",
    href: "/courses?type=international&area=individual-support",
    audience: "international",
    codes: ["CHC33021", "CHC43121"],
    modes: international,
  },
  {
    title: "Early Childhood Education & Care",
    href: "/courses?type=international&area=early-childhood",
    audience: "international",
    codes: ["CHC30125", "CHC50125"],
    modes: international,
  },
  {
    title: "Community Services",
    href: "/courses?type=international&area=community-services",
    audience: "international",
    codes: ["CHC52025"],
    modes: international,
  },
  {
    title: "Mental Health",
    href: "/courses?type=international&area=mental-health",
    audience: "international",
    codes: ["CHC43515", "CHC53315"],
    modes: international,
  },
  {
    title: "Business",
    href: "/courses?type=international&area=business",
    audience: "international",
    codes: ["BSB50120", "BSB60120"],
    modes: international,
  },
];
