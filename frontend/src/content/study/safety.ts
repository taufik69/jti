import type { StudyPage } from "./types";

/**
 * The three government resources the jti.edu.au menu links out to. Each page says briefly what the
 * resource is and sends students to the official source rather than restating its detail.
 */
export const resourcePages: StudyPage[] = [
  {
    slug: "study-in-australia",
    title: "Study in Australia",
    group: "international",
    summary: "The Australian Government's official guide for international students.",
    sections: [
      {
        id: "about",
        title: "The official guide",
        blocks: [
          { type: "p", text: "Study Australia is the Australian Government's official website for international students. It covers choosing a course and institution, applying for a student visa, living costs, working while you study, and life in Australia." },
          { type: "links", items: [{ label: "Visit Study Australia", href: "https://www.studyaustralia.gov.au/" }] },
        ],
      },
      {
        id: "jti",
        title: "Our guides for JTI students",
        blocks: [
          { type: "links", items: [
            { label: "A bit about Australia", href: "/study/a-bit-about-australia" },
            { label: "Melbourne, Victoria", href: "/study/melbourne-victoria" },
            { label: "Arranging visas", href: "/study/arranging-visas" },
            { label: "Preparing to arrive", href: "/study/preparing-to-arrive" },
          ] },
        ],
      },
    ],
  },
  {
    slug: "think-before",
    title: "Think Before: a student safety initiative",
    group: "international",
    summary: "An Australian Government initiative encouraging international students to think about their personal safety.",
    sections: [
      {
        id: "about",
        title: "About Think Before",
        blocks: [
          { type: "p", text: "Think Before is a student safety initiative from the Australian Government's international education team. It encourages international students to think ahead about their safety in everyday situations while living and studying in Australia." },
          { type: "links", items: [{ label: "Read about Think Before", href: "https://internationaleducation.gov.au/News/newsarchive/Pages/Article-ThinkBefore.aspx" }] },
        ],
      },
      {
        id: "help",
        title: "If you need help",
        blocks: [
          { type: "note", text: "In an emergency call [000](tel:000) for police, fire or ambulance." },
          { type: "p", text: "JTI Student Support is here for you at every campus. Our [Know your college](/study/know-your-college#support) guide lists free counselling and other support services, and the [ESOS framework](/study/esos-framework) page explains your rights, including family safety information." },
        ],
      },
    ],
  },
  {
    slug: "overseas-student-ombudsman",
    title: "Overseas Students Ombudsman",
    group: "international",
    summary: "Free, independent help if you have a complaint about your education provider that JTI hasn't resolved.",
    sections: [
      {
        id: "about",
        title: "What the Ombudsman does",
        blocks: [
          { type: "p", text: "The Overseas Students Ombudsman is part of the Commonwealth Ombudsman. It investigates complaints from overseas students about private education providers in Australia, free of charge and independently." },
          { type: "links", items: [{ label: "Commonwealth Ombudsman: Overseas students", href: "https://www.ombudsman.gov.au/" }] },
        ],
      },
      {
        id: "first",
        title: "Before you go to the Ombudsman",
        blocks: [
          { type: "steps", items: [
            { title: "Raise the issue with JTI", text: "Use our Complaints and Appeals Application Form, available on the [International forms](/study/international-forms) page." },
            { title: "Go through JTI's complaints and appeals process", text: "JTI acknowledges complaints in writing and aims to finalise them as soon as practicable." },
            { title: "Ask for an external review", text: "If you are not satisfied with the outcome, you can contact the Overseas Students Ombudsman." },
          ] },
        ],
      },
    ],
  },
];
