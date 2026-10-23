import type { NavColumn } from "./types";

export const footerColumns: NavColumn[] = [
  {
    title: "Students",
    links: [
      { label: "Student login", href: "https://moodle.lms.jti.edu.au/login/index.php", external: true },
      { label: "Pay your fees", href: "/pay-your-fees" },
      { label: "Apply for certificate", href: "/apply-certificate" },
      { label: "Unique Student Identifier (USI)", href: "/unique" },
      { label: "Recognition of prior learning", href: "/recognition-prior-learning" },
      { label: "Assessment appeal", href: "/appeal" },
      { label: "Complaint form", href: "/pdf/CF014-Complaints-and-Appeals-Application-Form.pdf" },
      { label: "Continuous improvement form", href: "/pdf/Continuous-Improvement-Form.pdf" },
      { label: "Domestic student handbook", href: "/pdf/Student-Handbook-(Domestic).pdf" },
      { label: "International student handbook", href: "/pdf/International-Student-Handbook.pdf" },
    ],
  },
  {
    title: "Quick links",
    links: [
      { label: "Tuition fees & charges", href: "/pdf/JTI-Tuition-Fees-Domestic-and-International.pdf" },
      { label: "Fee & charges policy", href: "/pdf/Tuition-and-other-fees.pdf" },
      { label: "Complaints & appeals policy", href: "/pdf/Compliant-and-Appeal-Policy.pdf" },
      { label: "Enrolment policy (domestic)", href: "/pdf/Enrolment-Policy-(Domestic).pdf" },
      { label: "Registration audit report", href: "/registration-audit-report" },
      { label: "Online service standards", href: "/pdf/JTI_Online Services Standard.pdf" },
      { label: "Employer survey", href: "https://jti.edu.au/survey/index.php?sid=25712&lang=en", external: true },
      { label: "Useful links", href: "/useful-links" },
    ],
  },
  {
    title: "Study",
    links: [
      { label: "All courses", href: "/courses" },
      { label: "Mode of study", href: "/mode-of-study" },
      { label: "Student support", href: "/student-support" },
      { label: "Work placement", href: "/work-placement" },
      { label: "ESOS framework", href: "/study/esos-framework" },
      { label: "Overseas Student Ombudsman", href: "https://www.ombudsman.vic.gov.au/", external: true },
    ],
  },
];
