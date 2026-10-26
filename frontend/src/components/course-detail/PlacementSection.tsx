import { Briefcase } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { Course } from "@/content/courses";
import { infoSection, type ContentBlock, type CourseDetails } from "@/lib/find-course";
import { RichBlocks } from "./RichBlocks";

interface PlacementSectionProps {
  course: Course;
  details: CourseDetails;
}

/** "a minimum of 160 hours of work placement" → 160, when the course data has no figure. */
function hoursIn(blocks: ContentBlock[]): number | undefined {
  const text = blocks.map((b) => ("text" in b ? b.text : "")).join(" ");
  const match = /(\d{2,3})\s*hours/i.exec(text);
  return match ? Number(match[1]) : undefined;
}

export function PlacementSection({ course, details }: PlacementSectionProps) {
  const placement = infoSection(details, "placement");
  if (!placement) return null;
  const hours = course.placementHours ?? hoursIn(placement.blocks);
  if (!hours) return <RichBlocks blocks={placement.blocks} />;

  return (
    <div className="grid gap-6 md:grid-cols-[12rem_1fr]">
      <div className="flex flex-col justify-center self-start rounded-card bg-plum-950 p-6 text-white">
        <Icon icon={Briefcase} className="text-gold-400" />
        <p className="mt-4 text-left text-h2 font-semibold tabular-nums text-white">{hours}</p>
        <p className="text-left text-white/75">hours in a real workplace</p>
      </div>
      <RichBlocks blocks={placement.blocks} />
    </div>
  );
}
