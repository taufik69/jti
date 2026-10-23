import type { Qualification } from "./types";

/** Codes and titles exactly as listed on jti.edu.au/courses (October 2026). */
export const qualifications: Qualification[] = [
  {
    code: "CHC33021",
    title: "Certificate III in Individual Support (Ageing & Disability)",
    level: "Certificate III",
    aqf: 3,
    field: "individual-support",
  },
  {
    code: "CHC43121",
    title: "Certificate IV in Disability Support",
    level: "Certificate IV",
    aqf: 4,
    field: "individual-support",
  },
  {
    code: "CHC30125",
    title: "Certificate III in Early Childhood Education and Care",
    level: "Certificate III",
    aqf: 3,
    field: "early-childhood",
  },
  {
    code: "CHC50125",
    title: "Diploma of Early Childhood Education and Care",
    level: "Diploma",
    aqf: 5,
    field: "early-childhood",
  },
  {
    code: "CHC52025",
    title:
      "Diploma of Community Services (Case Management, Child, Youth and Family Welfare)",
    level: "Diploma",
    aqf: 5,
    field: "community-services",
  },
  {
    code: "CHC53315",
    title: "Diploma of Mental Health",
    level: "Diploma",
    aqf: 5,
    field: "mental-health",
  },
  {
    code: "CHC43515",
    title: "Certificate IV in Mental Health Peer Work",
    level: "Certificate IV",
    aqf: 4,
    field: "mental-health",
  },
  {
    code: "BSB50120",
    title: "Diploma of Business",
    level: "Diploma",
    aqf: 5,
    field: "business",
  },
  {
    code: "BSB60120",
    title: "Advanced Diploma of Business",
    level: "Advanced Diploma",
    aqf: 6,
    field: "business",
  },
];

export function findQualification(code: string): Qualification | undefined {
  return qualifications.find((q) => q.code === code);
}
