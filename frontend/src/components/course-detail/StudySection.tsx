import { infoSection, type CourseDetails } from "@/lib/find-course";
import { RichBlocks } from "./RichBlocks";

interface StudySectionProps {
  details: CourseDetails;
}

/** Delivery modes, then the assessment types as chips when the source gives a plain list. */
export function StudySection({ details }: StudySectionProps) {
  const delivery = infoSection(details, "delivery");
  const assessment = infoSection(details, "assessment");
  const chips = assessment?.blocks.find((b) => b.type === "ul");
  const notes = assessment?.blocks.filter((b) => b.type === "p") ?? [];

  return (
    <div className="space-y-8">
      {delivery && <RichBlocks blocks={delivery.blocks} />}
      {assessment && (
        <div>
          <h3 className="font-medium text-ink">How you'll be assessed</h3>
          {chips && chips.type === "ul" ? (
            <ul className="mt-4 flex flex-wrap gap-2">
              {chips.items.map((item) => (
                <li key={item} className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-[0.9375rem] text-ink">{item}</li>
              ))}
            </ul>
          ) : (
            <div className="mt-4"><RichBlocks blocks={assessment.blocks} /></div>
          )}
          {chips && notes.length > 0 && <div className="mt-4 text-[0.9375rem] text-muted"><RichBlocks blocks={notes} /></div>}
        </div>
      )}
    </div>
  );
}
