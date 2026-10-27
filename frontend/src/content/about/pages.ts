/** The four About pages, in menu order. Shared by the nav, the in-page switcher and "Keep exploring". */
export interface AboutPage {
  href: string;
  label: string;
  /** One line under the label in the menu and the "keep exploring" links. */
  blurb: string;
}

export const aboutPages: AboutPage[] = [
  { href: "/who-we-are", label: "Who we are", blurb: "Our story, standards and values" },
  { href: "/what-makes-jti-different", label: "What makes JTI different", blurb: "Five reasons students choose us" },
  { href: "/testimonials", label: "Testimonials", blurb: "Students in their own words" },
  { href: "/jti-video", label: "JTI videos", blurb: "Classes, campus life and nursing" },
];
