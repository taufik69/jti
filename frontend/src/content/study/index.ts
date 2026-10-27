import { arrivalPages } from "./arrival";
import { conductPage } from "./conduct";
import { documentPages } from "./documents";
import { domesticPages } from "./domestic";
import { enrolPages } from "./enrol";
import { faqPage } from "./faqs";
import { lifePages } from "./life";
import { resourcePages } from "./safety";
import { studyMenu, studyTopics } from "./menu";
import type { StudyGroup, StudyPage } from "./types";
import { visaPages } from "./visa";

/** All /study pages in menu order (1 domestic, 21 international); the order lives in menu.ts. */
const order = studyMenu.map((item) => item.slug);

const all = [...domesticPages, ...enrolPages, ...visaPages, ...arrivalPages, conductPage, faqPage, ...documentPages, ...lifePages, ...resourcePages];
const bySlug = new Map(all.map((page) => [page.slug, page]));

export const studyPages: StudyPage[] = order.map((slug) => {
  const page = bySlug.get(slug);
  if (!page) throw new Error(`Missing study page: ${slug}`);
  return page;
});

export { studyTopics };

if (import.meta.env.DEV) {
  const drift = studyMenu.filter((item) => bySlug.get(item.slug)?.title !== item.title);
  if (drift.length) console.warn("content/study/menu.ts is out of step with the pages:", drift);
}

export const studyGroups: { id: StudyGroup; label: string }[] = [
  { id: "domestic", label: "Domestic students" },
  { id: "international", label: "International students" },
];

export const findStudyPage = (slug: string) => bySlug.get(slug);
export const studyHref = (page: StudyPage) => `/study/${page.slug}`;

export const topicPages = (slugs: string[]) => slugs.map((slug) => bySlug.get(slug)).filter((p): p is StudyPage => Boolean(p));

export const topicOf = (slug: string) => studyTopics.find((topic) => topic.slugs.includes(slug));
