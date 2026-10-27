import { aboutPages } from "./about/pages";
import { studyGroups, studyHref, studyPages } from "./study";
import type { NavItem } from "./types";

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  /** A plain link: the course finder page replaces the old courses mega menu. */
  { label: "Courses", href: "/courses" },
  {
    label: "Study with us",
    href: "/study/why-choose-job-training-institute",
    columns: studyGroups.map((group) => ({
      title: group.label,
      links: studyPages.filter((page) => page.group === group.id).map((page) => ({ label: page.title, href: studyHref(page) })),
    })),
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
          { label: "Agent list", href: "/list-agents" },
          { label: "Become an agent", href: "/agent-application" },
        ],
      },
    ],
  },
  { label: "Blog", href: "/blogs" },
  { label: "Contact", href: "/contact-us" },
];
