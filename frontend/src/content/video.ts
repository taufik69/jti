import type { LucideIcon } from "lucide-react";
import { Award, Building2, CalendarCheck, HandHeart, Handshake, UsersRound } from "lucide-react";

export const video = {
  id: "l_KpRuFMq_Y",
  title: "Life at Job Training Institute",
};

export interface VideoPoint {
  icon: LucideIcon;
  title: string;
  text: string;
}

/** Left of the video. Facts from jti.edu.au/who-we-are and /what-makes-jti-different. */
export const videoHighlights: VideoPoint[] = [
  {
    icon: UsersRound,
    title: "Trainers who work in the industry",
    text: "Every trainer holds formal training qualifications and stays active in the field they teach.",
  },
  {
    icon: Handshake,
    title: "Employer Days",
    text: "Meet potential employers and industry partners while you are still studying.",
  },
  {
    icon: HandHeart,
    title: "A multicultural community",
    text: "Students from many countries, with Multicultural Day and Australia Day events each year.",
  },
];

/** Right of the video: the provider facts that used to float over the frame. */
export const videoFacts: VideoPoint[] = [
  {
    icon: CalendarCheck,
    title: "Since 2008",
    text: "Training domestic and international students in Melbourne for more than 15 years.",
  },
  {
    icon: Award,
    title: "ASQA rated",
    text: "Demonstrated Consistently Compliant, the highest rating from the national regulator.",
  },
  {
    icon: Building2,
    title: "Two campuses",
    text: "Collins Street in the city, and Dandenong in Melbourne's south-east.",
  },
];
