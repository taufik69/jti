import type { NavItem } from "./types";

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  /** A plain link: the course finder page replaces the old courses mega menu. */
  { label: "Courses", href: "/courses" },
  {
    label: "Study with us",
    href: "/study/why-choose-job-training-institute",
    columns: [
      {
        title: "Domestic",
        links: [
          { label: "VET Student Loans", href: "/study/vet-student-loan" },
          { label: "Forms", href: "/study/domestic-forms" },
        ],
      },
      {
        title: "International",
        links: [
          { label: "Why JTI", href: "/study/why-choose-job-training-institute" },
          { label: "Enrolment process", href: "/study/jti-enrolment-process-for-international-students" },
          { label: "Visas", href: "/study/arranging-visas" },
          { label: "Health cover (OSHC)", href: "/study/overseas-student-health-cover-oshc-" },
          { label: "Before leaving home", href: "/study/before-leaving-home-checklist" },
          { label: "Arrival checklist", href: "/study/checklist-on-arrival" },
          { label: "Code of conduct", href: "/study/student-code-of-conduct" },
          { label: "FAQs", href: "/study/faqs" },
          { label: "ESOS framework", href: "/study/esos-framework" },
          { label: "Scholarships", href: "/study/scholarships" },
          { label: "Student handbook", href: "/study/pre-enrolment-guide-students-handbook" },
          { label: "Policies", href: "/study/international-students-policies-and-procedures" },
          { label: "Living in Melbourne", href: "/study/melbourne-victoria" },
        ],
      },
    ],
  },
  {
    label: "About",
    href: "/who-we-are",
    columns: [
      {
        title: "About JTI",
        links: [
          { label: "Who we are", href: "/who-we-are" },
          { label: "What makes JTI different", href: "/what-makes-jti-different" },
          { label: "Testimonials", href: "/testimonials" },
          { label: "Videos", href: "/jti-video" },
        ],
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
