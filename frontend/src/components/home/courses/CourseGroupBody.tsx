import { Chip } from "@/components/ui/Chip";
import type { CourseGroup } from "@/content/types";
import { QualificationRow } from "./QualificationRow";

interface CourseGroupBodyProps {
  group: CourseGroup;
}

export function CourseGroupBody({ group }: CourseGroupBodyProps) {
  return (
    <>
      {group.items ? (
        <ul className="mt-4 space-y-2 text-ink">
          {group.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <ul className="mt-3">
          {group.codes.map((code) => (
            <QualificationRow key={code} code={code} />
          ))}
        </ul>
      )}
      {group.modes.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {group.modes.map((mode) => (
            <Chip key={mode}>{mode}</Chip>
          ))}
        </div>
      )}
    </>
  );
}
