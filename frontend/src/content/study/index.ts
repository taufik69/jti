import { arrivalPages } from "./arrival";
import { conductPage } from "./conduct";
import { documentPages } from "./documents";
import { domesticPages } from "./domestic";
import { enrolPages } from "./enrol";
import { faqPage } from "./faqs";
import { lifePages } from "./life";
import { resourcePages } from "./safety";
import type { StudyGroup, StudyPage } from "./types";
import { visaPages } from "./visa";

/** All /study pages in the order of the jti.edu.au "Study with us" menu (1 domestic, 21 international). */
const order = [
  "domestic-forms",
  "why-choose-job-training-institute", "jti-enrolment-process-for-international-students", "arranging-visas",
  "overseas-student-health-cover-oshc-", "preparing-to-arrive", "before-leaving-home-checklist", "checklist-on-arrival",
  "checklist-on-getting-started", "student-code-of-conduct", "faqs", "esos-framework", "scholarships", "international-forms",
  "pre-enrolment-guide-students-handbook", "international-students-policies-and-procedures", "a-bit-about-australia",
  "melbourne-victoria", "know-your-college", "study-in-australia", "think-before", "overseas-student-ombudsman",
];

const all = [...domesticPages, ...enrolPages, ...visaPages, ...arrivalPages, conductPage, faqPage, ...documentPages, ...lifePages, ...resourcePages];
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

/** Topics for the menu, sidebar and /study hub: the 21 international pages split by stage of the journey. */
export const studyTopics: { id: string; label: string; blurb: string; slugs: string[] }[] = [
  { id: "domestic", label: "Domestic students", blurb: "Forms, the handbook and policies.", slugs: ["domestic-forms"] },
  {
    id: "apply",
    label: "Choosing and applying",
    blurb: "Why JTI, how to enrol, visas, health cover and scholarships.",
    slugs: ["why-choose-job-training-institute", "jti-enrolment-process-for-international-students", "arranging-visas", "overseas-student-health-cover-oshc-", "scholarships", "faqs"],
  },
  {
    id: "arrive",
    label: "Getting ready to arrive",
    blurb: "What to do before you fly, when you land, and in your first weeks.",
    slugs: ["preparing-to-arrive", "before-leaving-home-checklist", "checklist-on-arrival", "checklist-on-getting-started"],
  },
  {
    id: "studying",
    label: "Studying at JTI",
    blurb: "Your college, the handbook, conduct, forms and policies.",
    slugs: ["know-your-college", "pre-enrolment-guide-students-handbook", "student-code-of-conduct", "international-forms", "international-students-policies-and-procedures", "esos-framework"],
  },
  {
    id: "life",
    label: "Life in Australia",
    blurb: "Australia, Melbourne, safety, and where to get independent help.",
    slugs: ["a-bit-about-australia", "melbourne-victoria", "study-in-australia", "think-before", "overseas-student-ombudsman"],
  },
];

export const topicPages = (slugs: string[]) => slugs.map((slug) => bySlug.get(slug)).filter((p): p is StudyPage => Boolean(p));

export const topicOf = (slug: string) => studyTopics.find((topic) => topic.slugs.includes(slug));
