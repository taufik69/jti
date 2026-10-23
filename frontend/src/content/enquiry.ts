import { courseGroups } from "./course-groups";
import { qualifications } from "./qualifications";

interface Option {
  value: string;
  label: string;
}

/** Enquiry types exactly as on the current jti.edu.au form. */
export const enquiryTypes: Option[] = [
  "Student Support",
  "Other Administration Question",
  "Payment and Accounts Enquiry",
  "Training and Curriculum Enquiry",
  "Technical Problem",
  "Compliments",
].map((label) => ({ value: label, label }));

const shortCourses = courseGroups.flatMap((group) => group.items ?? []);

export const courseOptions: Option[] = [
  ...qualifications.map((q) => ({ value: q.code, label: `${q.code} ${q.title}` })),
  ...shortCourses.map((label) => ({ value: label, label })),
  { value: "not-sure", label: "Not sure yet" },
];

export const campusOptions: Option[] = [
  { value: "dandenong", label: "Dandenong" },
  { value: "online", label: "Online" },
  { value: "city", label: "City" },
  { value: "not-sure", label: "Not sure" },
];
