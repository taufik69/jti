export interface TestimonialEntry {
  quote: string;
  name: string;
  course: string;
  /** Photo from jti.edu.au/testimonials where one exists; initials otherwise. */
  photo?: string;
}

/** Excerpts from jti.edu.au/testimonials, trimmed but not reworded. */
export const testimonials: TestimonialEntry[] = [
  {
    quote:
      "The case studies that we have in our syllabus are real and gives me a good insight on how to deal with the real work life situation.",
    name: "Paula Mejia Vesga",
    course: "Certificate IV in Disability",
    photo: "/images/students/paula.jpg",
  },
  {
    quote:
      "As a mature aged student I was a little concerned… The support and encouragement I have received from your team has helped me to grow in confidence.",
    name: "Lisa J",
    course: "Certificate III, distance learning",
  },
  {
    quote:
      "English is my second language and sometimes I need help. JTI team has supported me by giving free English language class.",
    name: "Jadwa Shawareb",
    course: "Diploma of Early Childhood Education and Care",
    photo: "/images/students/jadwa.jpg",
  },
  {
    quote: "After about 3 months study with JTI I am lucky to get a job from my placement.",
    name: "Lynn Govo",
    course: "Student",
  },
];
