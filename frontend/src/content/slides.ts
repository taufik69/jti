export interface Slide {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  image: { src: string; alt: string; position?: string };
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}

/** Messages carried over from the banners on the current jti.edu.au slider. */
export const slides: Slide[] = [
  {
    id: "welcome",
    eyebrow: "Welcome to JTI · RTO 122208 · CRICOS 03373B",
    title: "Lifting you to the next level",
    text: "Nationally recognised training for domestic and international students in Melbourne, for more than 15 years.",
    // TODO: replace with real JTI photo
    image: { src: "/images/college.jpg", alt: "Adult students standing together at a campus balcony", position: "40% center" },
    primary: { label: "Apply now", href: "/applynow" },
    secondary: { label: "Explore courses", href: "#courses" },
  },
  {
    id: "quality",
    eyebrow: "Quality provider",
    title: "Quality delivery & teaching",
    text: "JTI holds “Demonstrated Consistently Compliant”, the highest rating a provider can receive from the national regulator, ASQA.",
    // TODO: replace with real JTI photo
    image: { src: "/images/healthcare.jpg", alt: "Smiling healthcare student in scrubs with classmates", position: "center 30%" },
    primary: { label: "Why choose JTI", href: "/study/why-choose-job-training-institute" },
    secondary: { label: "Apply now", href: "/applynow" },
  },
  {
    id: "virtual",
    eyebrow: "Domestic students",
    title: "Virtual classes available",
    text: "Blended learning combines live online classes on Zoom with face-to-face practical sessions. Available to domestic students only.",
    // TODO: replace with real JTI photo
    image: { src: "/images/choose.jpg", alt: "Student at a laptop celebrating a result with classmates", position: "center" },
    primary: { label: "See study modes", href: "/mode-of-study" },
  },
  {
    id: "consultant",
    eyebrow: "Talk to us",
    title: "Speak with a career consultant",
    text: "Not sure which course is right for you? Call our City campus on (03) 9055 5007 or Dandenong on (03) 9212 3535.",
    // TODO: replace with real JTI photo
    image: { src: "/images/student.jpg", alt: "Two students talking with an adviser across a desk", position: "center" },
    primary: { label: "Call 1300 144 584", href: "tel:1300144584" },
    secondary: { label: "Send an enquiry", href: "#enquire" },
  },
];
