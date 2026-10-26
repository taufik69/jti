import type { Course } from "./courses";

/** Onshore price on the card, offshore price as the note. Material fee $500 on every course. */
function fee(onshore: number, offshore: number) {
  return { amount: onshore, label: "onshore", note: `Offshore $${offshore.toLocaleString("en-AU")} · $500 material fee` };
}

/** CRICOS courses: full-time study for student-visa holders. Figures from jti.edu.au (October 2026). */
export const internationalCourses: Course[] = [
  {
    id: "international-CHC33021", code: "CHC33021", cricos: "115246M", audience: "international", field: "individual-support",
    title: "Certificate III in Individual Support (Ageing & Disability)", level: "Certificate III",
    duration: "36 weeks", months: 8.3, modes: ["Full-time"], placementHours: 120, fee: fee(4000, 7500),
    href: "/course/int-certificate-iii-in-individual-support-ageing-disability",
  },
  {
    id: "international-CHC43121", code: "CHC43121", cricos: "115247K", audience: "international", field: "individual-support",
    title: "Certificate IV in Disability Support", level: "Certificate IV",
    duration: "30 weeks", months: 6.9, modes: ["Full-time"], placementHours: 120, fee: fee(5000, 8000),
    href: "/course/int-certificate-iv-in-disability0939790d",
  },
  {
    // TODO: the course page still shows the superseded code CHC30121.
    id: "international-CHC30125", code: "CHC30125", cricos: "109012B", audience: "international", field: "early-childhood",
    title: "Certificate III in Early Childhood Education and Care", level: "Certificate III",
    duration: "52 weeks", months: 12, modes: ["Full-time"], placementHours: 160, fee: fee(7500, 11500),
    href: "/course/int-certificate-iii-in-early-childhood-education-and-care",
  },
  {
    id: "international-CHC50125", code: "CHC50125", cricos: "109013A", audience: "international", field: "early-childhood",
    title: "Diploma of Early Childhood Education and Care", level: "Diploma",
    duration: "56 weeks", months: 12.9, modes: ["Full-time"], placementHours: 280, fee: fee(8000, 11500),
    href: "/course/int-diploma-of-early-childhood-education-and-care",
  },
  {
    id: "international-CHC52025", code: "CHC52025", cricos: "115248J", audience: "international", field: "community-services",
    title: "Diploma of Community Services (Case Management)", level: "Diploma",
    duration: "78 weeks", months: 18, modes: ["Full-time"], placementHours: 400, fee: fee(11500, 16500),
    href: "/course/int-diploma-of-community-services-case-management",
  },
  {
    id: "international-CHC53315", code: "CHC53315", cricos: "099899M", audience: "international", field: "mental-health",
    title: "Diploma of Mental Health", level: "Diploma",
    duration: "78 weeks", months: 18, modes: ["Full-time"], placementHours: 400, fee: fee(11500, 16500),
    href: "/course/int-diploma-in-mental-health",
  },
  {
    id: "international-CHC43515", code: "CHC43515", cricos: "102269M", audience: "international", field: "mental-health",
    title: "Certificate IV in Mental Health Peer Work", level: "Certificate IV",
    duration: "38 weeks", months: 8.8, modes: ["Full-time"], placementHours: 80, fee: fee(5000, 8000),
    href: "/course/int-certificate-iv-in-mental-health-peer-work",
  },
  {
    id: "international-BSB50120", code: "BSB50120", cricos: "111656C", audience: "international", field: "business",
    title: "Diploma of Business (Leadership)", level: "Diploma",
    duration: "48 weeks", months: 11, modes: ["Full-time"], fee: fee(6000, 10000),
    href: "/course/int-diploma-of-business-leadership",
  },
  {
    id: "international-BSB60120", code: "BSB60120", cricos: "111657B", audience: "international", field: "business",
    title: "Advanced Diploma of Business", level: "Advanced Diploma",
    duration: "63 weeks", months: 14.5, modes: ["Full-time"], fee: fee(8000, 11000),
    href: "/course/bsb60120-advanced-diploma-of-business",
  },
];
