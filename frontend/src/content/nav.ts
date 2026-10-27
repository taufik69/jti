import { aboutPages } from "./about/pages";
import { studyHref, studyTopics, topicPages } from "./study";
import type { NavItem } from "./types";

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  /** A plain link: the course finder page replaces the old courses mega menu. */
  { label: "Courses", href: "/courses" },
  {
    label: "Study with us",
    href: "/study",
    columns: studyTopics.map((topic) => ({
      title: topic.label,
      links: topicPages(topic.slugs).map((page) => ({ label: page.title, href: studyHref(page) })),
    })),
    footer: { label: "All study guides", href: "/study" },
  },
  {
    label: "About us",
    href: "/who-we-are",
    columns: [
      {
        title: "About JTI",
        links: aboutPages.map((page) => ({ label: page.label, href: page.href, meta: page.blurb })),
      },
    ],
  },
  {
    label: "Agents",
    href: "/list-agents",
    columns: [
      {
        title: "Education agents",
        links: [
          { label: "List of JTI agents", href: "/list-agents", meta: "Agencies that represent JTI" },
          { label: "Agent application", href: "/agent-application", meta: "Apply to join our agent network" },
        ],
      },
    ],
  },
  { label: "Blog", href: "/blogs" },
  { label: "Contact", href: "/contact-us" },
];
