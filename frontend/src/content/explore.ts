export interface ExploreTile {
  title: string;
  text: string;
  href: string;
  image: string;
  /** CSS object-position, so faces stay in frame on the portrait crop. */
  position?: string;
}

/** The five photo tiles from the current home page, using JTI's own photos where they exist. */
export const exploreTiles: ExploreTile[] = [
  {
    title: "Why choose JTI?",
    text: "Rated Demonstrated Consistently Compliant by ASQA.",
    href: "/study/why-choose-job-training-institute",
    image: "/images/jti/industry-partners.jpg",
    position: "55% center",
  },
  {
    title: "Know your college",
    text: "Campuses on Collins Street and in Dandenong.",
    href: "/study/know-your-college",
    image: "/images/jti/city-campus-building.jpg",
  },
  {
    title: "Mode of study",
    text: "Face-to-face, blended or self-paced.",
    href: "/mode-of-study",
    image: "/images/jti/campus-walk.jpg",
    position: "45% center",
  },
  {
    title: "Student support & well-being",
    text: "Free English support, homestay and airport pick-up help.",
    href: "/student-support",
    image: "/images/jti/multicultural-day.jpg",
    position: "center 25%",
  },
  {
    title: "Work placement",
    text: "Placements and Employer Days built into your course.",
    // TODO: replace stock photo with a real JTI placement photo
    href: "/work-placement",
    image: "/images/healthcare.jpg",
    position: "30% center",
  },
];
