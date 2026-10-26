import { infoSection, type CourseDetails, type InfoKey } from "@/lib/find-course";

export type SectionId = "overview" | "fees" | "units" | "entry" | "study" | "placement" | "careers" | "more";

/** Folded into "Good to know" at the end. */
export const moreInfoKeys: InfoKey[] = ["rpl", "support", "scholarship", "compliance", "other"];

/** Tabs and sections in page order, skipping any the source page has no content for. */
export function courseSections(details: CourseDetails): { id: SectionId; label: string }[] {
  const has = (key: InfoKey) => Boolean(infoSection(details, key));
  const all: { id: SectionId; label: string; show: boolean }[] = [
    { id: "overview", label: "Overview", show: true },
    { id: "fees", label: "Fees", show: true },
    { id: "units", label: "Units", show: details.units.length > 0 },
    { id: "entry", label: "Entry requirements", show: has("entry") },
    { id: "study", label: "How you'll study", show: has("delivery") || has("assessment") },
    { id: "placement", label: "Work placement", show: has("placement") },
    { id: "careers", label: "Careers", show: details.careers.length > 0 || details.pathways.length > 0 },
    { id: "more", label: "Good to know", show: moreInfoKeys.some(has) },
  ];
  return all.filter((s) => s.show);
}
