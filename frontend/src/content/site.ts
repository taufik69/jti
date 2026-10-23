export const site = {
  name: "Job Training Institute",
  shortName: "JTI",
  legalName: "Job Training Institute Pty Ltd",
  url: "https://jti.edu.au",
  rto: "122208",
  cricos: "03373B",
  abn: "49 132 734 680",
  founded: 2008,
  yearsLabel: "15+ years",
  email: "info@jti.edu.au",
  phones: {
    general: { label: "1300 144 584", href: "tel:1300144584" },
    city: { label: "(03) 9055 5007", href: "tel:0390555007" },
    dandenong: { label: "(03) 9212 3535", href: "tel:0392123535" },
  },
  portals: {
    student: "https://moodle.lms.jti.edu.au/login/index.php",
    staff: "https://jti.edu.au/staff/login.php",
  },
  applyHref: "/applynow",
  social: {
    facebook: "https://www.facebook.com/jobtraininginstitute/",
    x: "https://twitter.com/jtiaustralia",
    youtube: "https://www.youtube.com/channel/UCiDS8HjbRZvKZclybBHvWuQ",
  },
} as const;
