/**
 * Content for the /study/* pages, copied from jti.edu.au (October 2026) and restructured.
 * Text strings may hold inline links written as [label](href).
 */
export interface LinkItem {
  label: string;
  href: string;
}

export type StudyBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  /** Tick-box list; ticks are remembered in this browser only. */
  | { type: "checklist"; id: string; items: string[] }
  | { type: "steps"; items: { title: string; text?: string }[] }
  | { type: "downloads"; items: LinkItem[] }
  | { type: "links"; items: LinkItem[] }
  | { type: "table"; head: string[]; rows: string[][]; caption?: string }
  | { type: "facts"; items: { label: string; value: string }[]; note?: string }
  | { type: "faq"; items: { q: string; a: string[] }[] }
  | { type: "note"; text: string }
  | { type: "quote"; paragraphs: string[]; name: string; role: string; email?: string }
  | { type: "cards"; items: { title: string; text: string; meta?: string[] }[] };

export interface StudySection {
  id: string;
  title: string;
  blocks: StudyBlock[];
}

export type StudyGroup = "domestic" | "international";

export interface StudyPage {
  slug: string;
  /** Menu label, also the h1. */
  title: string;
  group: StudyGroup;
  summary: string;
  sections: StudySection[];
}

const pdfBase = "https://jti.edu.au/pdf/";
/** Documents stay on jti.edu.au; the name is the file name as the live site links it. */
export const pdf = (file: string) => pdfBase + encodeURI(file);
export const drive = (id: string) => `https://drive.google.com/uc?export=download&id=${id}`;
