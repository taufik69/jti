import type { Audience, FieldId } from "./types";

export type CourseLevel = "Certificate III" | "Certificate IV" | "Diploma" | "Advanced Diploma";
export type DeliveryMode = "Blended" | "Self-paced" | "Full-time";

export interface CourseFee {
  /** Headline figure on the card, in AUD. */
  amount: number;
  /** Words after the figure, e.g. "self-funded" or "onshore". */
  label: string;
  /** Smaller line under the price. */
  note?: string;
}

export interface Course {
  /** Unique across audiences: `${audience}-${code}`. */
  id: string;
  code: string;
  title: string;
  level: CourseLevel;
  field: Exclude<FieldId, "short-courses">;
  audience: Audience;
  duration: string;
  /** Typical upper length in months, used by the length filter and sorting. */
  months: number;
  modes: DeliveryMode[];
  placementHours?: number;
  cricos?: string;
  /** Undefined where jti.edu.au only links to the fee schedule. */
  fee?: CourseFee;
  /** Existing jti.edu.au URL, kept so search rankings carry over. */
  href: string;
}

export const fieldLabels: Record<Course["field"], string> = {
  "individual-support": "Individual Support & Disability",
  "early-childhood": "Early Childhood",
  "community-services": "Community Services",
  "mental-health": "Mental Health",
  business: "Business",
};

/** Group intros on /courses, adapted from the category pages on jti.edu.au. */
export const fieldIntros: Record<Course["field"], string> = {
  "individual-support": "Start a career in aged care and disability support, helping people live independently at home, in residential care and in the community.",
  "early-childhood": "Study early childhood education for a fulfilling career working with young children in long day care, kindergartens and family day care.",
  "community-services": "Case management and welfare work with individuals, families and young people across the community services sector.",
  "mental-health": "Support people living with mental health challenges, including peer work for people with lived experience as a consumer or carer.",
  business: "Business and leadership skills for managing a team, running operations or starting a business of your own.",
};

/** TODO: replace with real JTI photos for each study area. */
export const fieldImages: Record<Course["field"], { src: string; position?: string }> = {
  "individual-support": { src: "/images/healthcare.jpg", position: "30% center" },
  "early-childhood": { src: "/images/jti/multicultural-day.jpg", position: "center 25%" },
  "community-services": { src: "/images/student.jpg" },
  "mental-health": { src: "/images/jti/campus-walk.jpg", position: "45% center" },
  business: { src: "/images/jti/industry-partners.jpg", position: "55% center" },
};

export const levelOrder: CourseLevel[] = ["Certificate III", "Certificate IV", "Diploma", "Advanced Diploma"];
