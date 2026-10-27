import { arrivalPages } from "./arrival";
import { conductPage } from "./conduct";
import { documentPages } from "./documents";
import { domesticPages } from "./domestic";
import { enrolPages } from "./enrol";
import { faqPage } from "./faqs";
import { lifePages } from "./life";
import type { StudyGroup, StudyPage } from "./types";
import { visaPages } from "./visa";

/** All /study pages in the order of the jti.edu.au "Study with us" menu. */
const order = [
  "vet-student-loan", "domestic-forms",
  "why-choose-job-training-institute", "jti-enrolment-process-for-international-students", "arranging-visas",
  "overseas-student-health-cover-oshc-", "preparing-to-arrive", "before-leaving-home-checklist", "checklist-on-arrival",
  "checklist-on-getting-started", "student-code-of-conduct", "faqs", "esos-framework", "scholarships", "international-forms",
  "pre-enrolment-guide-students-handbook", "international-students-policies-and-procedures", "a-bit-about-australia",
  "melbourne-victoria", "know-your-college",
];

const all = [...domesticPages, ...enrolPages, ...visaPages, ...arrivalPages, conductPage, faqPage, ...documentPages, ...lifePages];
const bySlug = new Map(all.map((page) => [page.slug, page]));

export const studyPages: StudyPage[] = order.map((slug) => {
  const page = bySlug.get(slug);
  if (!page) throw new Error(`Missing study page: ${slug}`);
  return page;
});

export const studyGroups: { id: StudyGroup; label: string }[] = [
  { id: "domestic", label: "Domestic students" },
  { id: "international", label: "International students" },
];

export const findStudyPage = (slug: string) => bySlug.get(slug);
export const studyHref = (page: StudyPage) => `/study/${page.slug}`;
