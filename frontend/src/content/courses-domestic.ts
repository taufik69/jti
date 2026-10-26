import type { Course } from "./courses";

const selfPaced = (amount: number) => `Self-paced option $${amount.toLocaleString("en-AU")}`;

/** Durations and fees from each course page on jti.edu.au (October 2026). Registration fee $500. */
export const domesticCourses: Course[] = [
  {
    id: "domestic-CHC33021", code: "CHC33021", audience: "domestic", field: "individual-support",
    title: "Certificate III in Individual Support (Ageing & Disability)", level: "Certificate III",
    duration: "8–12 months", months: 12, modes: ["Blended", "Self-paced"],
    fee: { amount: 3500, label: "self-funded", note: selfPaced(1599) },
    href: "/course/certificate-iii-in-individual-support-ageing-disability",
  },
  {
    id: "domestic-CHC43121", code: "CHC43121", audience: "domestic", field: "individual-support",
    title: "Certificate IV in Disability Support", level: "Certificate IV",
    duration: "6–12 months", months: 12, modes: ["Blended", "Self-paced"],
    fee: { amount: 2500, label: "self-funded", note: selfPaced(1599) },
    href: "/course/certificate-iv-in-disability",
  },
  {
    id: "domestic-CHC30125", code: "CHC30125", audience: "domestic", field: "early-childhood",
    title: "Certificate III in Early Childhood Education and Care", level: "Certificate III",
    duration: "12–15 months", months: 15, modes: ["Blended", "Self-paced"],
    fee: { amount: 5000, label: "self-funded", note: selfPaced(1599) },
    href: "/course/certificate-iii-in-early-childhood-education-and-care",
  },
  {
    id: "domestic-CHC50125", code: "CHC50125", audience: "domestic", field: "early-childhood",
    title: "Diploma of Early Childhood Education and Care", level: "Diploma",
    duration: "1–2 years", months: 24, modes: ["Blended", "Self-paced"], placementHours: 280,
    fee: { amount: 6000, label: "self-funded", note: `${selfPaced(1999)} · VET Student Loans available` },
    href: "/course/diploma-of-early-childhood-education-and-care",
  },
  {
    id: "domestic-CHC52025", code: "CHC52025", audience: "domestic", field: "community-services",
    title: "Diploma of Community Services (Case Management, Child, Youth and Family Welfare)", level: "Diploma",
    duration: "12–18 months", months: 18, modes: ["Blended", "Self-paced"],
    fee: { amount: 6000, label: "self-funded", note: selfPaced(1999) },
    href: "/course/diploma-of-community-services-case-management",
  },
  {
    id: "domestic-CHC53315", code: "CHC53315", audience: "domestic", field: "mental-health",
    title: "Diploma of Mental Health", level: "Diploma",
    duration: "12–18 months", months: 18, modes: ["Blended"],
    fee: { amount: 6700, label: "self-funded" },
    href: "/course/diploma-of-mental-health-1",
  },
  {
    id: "domestic-CHC43515", code: "CHC43515", audience: "domestic", field: "mental-health",
    title: "Certificate IV in Mental Health Peer Work", level: "Certificate IV",
    duration: "12 months", months: 12, modes: ["Blended"],
    fee: { amount: 4000, label: "self-funded" },
    href: "/course/certificate-iv-in-mental-health-peer-work-1",
  },
  {
    id: "domestic-BSB50120", code: "BSB50120", audience: "domestic", field: "business",
    title: "Diploma of Business (Leadership)", level: "Diploma",
    duration: "1–2 years", months: 24, modes: ["Blended", "Self-paced"],
    href: "/course/diploma-of-business",
  },
];
