/**
 * Slugs and titles only, in menu order, so the site header can build the Study menu without
 * pulling every guide's content into the main bundle. index.ts checks these match the pages.
 */
export const studyMenu: { slug: string; title: string }[] = [
  { slug: "domestic-forms", title: "All types of forms" },
  { slug: "why-choose-job-training-institute", title: "Why choose Job Training Institute?" },
  { slug: "jti-enrolment-process-for-international-students", title: "Enrolment process for international students" },
  { slug: "arranging-visas", title: "Arranging visas" },
  { slug: "overseas-student-health-cover-oshc-", title: "Overseas Student Health Cover (OSHC)" },
  { slug: "preparing-to-arrive", title: "Preparing to arrive" },
  { slug: "before-leaving-home-checklist", title: "Before leaving home checklist" },
  { slug: "checklist-on-arrival", title: "Checklist on arrival" },
  { slug: "checklist-on-getting-started", title: "Checklist on getting started" },
  { slug: "student-code-of-conduct", title: "Student code of conduct" },
  { slug: "faqs", title: "Frequently asked questions" },
  { slug: "esos-framework", title: "ESOS framework" },
  { slug: "scholarships", title: "Scholarships" },
  { slug: "international-forms", title: "International forms" },
  { slug: "pre-enrolment-guide-students-handbook", title: "Pre-enrolment guide and student handbook" },
  { slug: "international-students-policies-and-procedures", title: "International policies and procedures" },
  { slug: "a-bit-about-australia", title: "A bit about Australia" },
  { slug: "melbourne-victoria", title: "Melbourne, Victoria" },
  { slug: "know-your-college", title: "Know your college" },
  { slug: "study-in-australia", title: "Study in Australia" },
  { slug: "think-before", title: "Think Before: a student safety initiative" },
  { slug: "overseas-student-ombudsman", title: "Overseas Students Ombudsman" },
];

export const studyMenuHref = (slug: string) => `/study/${slug}`;

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
