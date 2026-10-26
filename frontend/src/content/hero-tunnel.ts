export interface TunnelImage {
  src: string;
  label: string;
  /** CSS object-position, so faces stay in frame on the portrait crop. */
  position?: string;
}

/** Photos that fly past in the home hero, in spiral order. */
export const tunnelImages: TunnelImage[] = [
  { src: "/images/jti/city-campus-building.jpg", label: "City campus" },
  { src: "/images/healthcare.jpg", label: "Individual support", position: "30% center" },
  { src: "/images/jti/multicultural-day.jpg", label: "Multicultural day", position: "center 25%" },
  { src: "/images/choose.jpg", label: "Blended learning" },
  { src: "/images/jti/industry-partners.jpg", label: "Industry partners", position: "55% center" },
  { src: "/images/college.jpg", label: "Student life", position: "40% center" },
  { src: "/images/jti/campus-walk.jpg", label: "Dandenong campus", position: "45% center" },
  { src: "/images/student.jpg", label: "Career advice" },
  { src: "/images/city-campus.jpg", label: "Collins Street" },
];

export const tunnelHero = {
  eyebrow: "Welcome to JTI · RTO 122208 · CRICOS 03373B",
  title: "Lifting you to the next level",
  text: "Nationally recognised training for domestic and international students in Melbourne, for more than 15 years.",
  primary: { label: "Apply now", href: "/applynow" },
  secondary: { label: "Explore courses", href: "#courses" },
};
