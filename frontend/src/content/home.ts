import type { Audience } from "./types";

export interface StudyMode {
  name: string;
  description: string;
  audience: string;
}

/** Wording follows jti.edu.au/mode-of-study. */
export const studyModes: StudyMode[] = [
  {
    name: "Face-to-face",
    description:
      "Timetabled classes at our City or Dandenong campus, learning alongside your trainer and classmates.",
    audience: "International students study full-time, as their visa requires.",
  },
  {
    name: "Blended",
    description:
      "Live online classes on Zoom, face-to-face practical simulation sessions, and structured online study in between.",
    audience: "Domestic students, funded and fee-for-service.",
  },
  {
    name: "Self-paced",
    description:
      "Work through online resources on your own schedule, with a trainer to call on when you need help.",
    audience: "Domestic fee-for-service students, selected courses only.",
  },
];

export interface Stat {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
  note?: string;
}

export const stats: Stat[] = [
  { value: 15, suffix: "+", label: "years training students in Melbourne", note: "Since 2008" },
  {
    value: 82.35,
    decimals: 2,
    suffix: "%",
    label: "of students satisfied with their training",
    note: "2020 survey. Victorian RTO average: 77.8%",
  },
  { value: 9, label: "nationally recognised qualifications", note: "Certificate III to Advanced Diploma" },
];

export const audiences: { id: Audience; label: string }[] = [
  { id: "domestic", label: "Domestic" },
  { id: "international", label: "International" },
];
