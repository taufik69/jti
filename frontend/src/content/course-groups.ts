import type { CourseGroup } from "./types";

const domesticBlended = ["Blended", "Self-paced"];
/** Student-visa holders must study full-time (National Code). */
const international = ["Full-time", "CRICOS registered"];
/** Existing jti.edu.au URLs are kept so search rankings carry over. */
export const courseGroups: CourseGroup[] = [
  {
    title: "Individual Support, Disability & Leisure and Health",
    href: "/courses/individual-support-disability-leisure-and-health",
    audience: "domestic",
    codes: ["CHC33021", "CHC43121"],
    modes: domesticBlended,
  },
  {
    title: "Early Childhood Education & Care",
    href: "/courses/early-childhood-education-care",
    audience: "domestic",
    codes: ["CHC30125", "CHC50125"],
    // TODO: mode-of-study page lists the superseded CHC30121/CHC50121 — confirm modes.
    modes: domesticBlended,
  },
  {
    title: "Community Services & Mental Health",
    href: "/courses/community-services-mental-health",
    audience: "domestic",
    codes: ["CHC43515", "CHC52025", "CHC53315"],
    modes: ["Blended", "Self-paced for CHC52025"],
  },
  {
    title: "Business (Melbourne)",
    href: "/courses/business-courses-melbourne",
    audience: "domestic",
    codes: ["BSB50120"],
    modes: [], // TODO: business study modes are not published
  },
  {
    title: "Short courses",
    href: "/courses/short-courses", // TODO: no page on the current site
    audience: "domestic",
    codes: [],
    items: ["Medication participation", "Manual handling participation", "First aid"],
    modes: [],
  },
  {
    title: "Individual Support & Disability",
    href: "/courses/individual-support-disability-1",
    audience: "international",
    codes: ["CHC33021", "CHC43121"],
    modes: international,
  },
  {
    title: "Early Childhood Education & Care",
    href: "/courses/early-childhood-education-care-1",
    audience: "international",
    codes: ["CHC30125", "CHC50125"],
    modes: international,
  },
  {
    title: "Community Services",
    href: "/courses/community-services",
    audience: "international",
    codes: ["CHC52025"],
    modes: international,
  },
  {
    title: "Mental Health",
    href: "/courses/mental-health",
    audience: "international",
    codes: ["CHC43515", "CHC53315"],
    modes: international,
  },
  {
    title: "Business",
    href: "/courses/business",
    audience: "international",
    codes: ["BSB50120", "BSB60120"],
    modes: international,
  },
];
