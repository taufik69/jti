import { Chip } from "@/components/ui/Chip";
import { Todo } from "@/components/ui/Todo";
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
      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {group.modes.length > 0 ? (
          group.modes.map((mode) => <Chip key={mode}>{mode}</Chip>)
        ) : (
          <Todo>study modes</Todo>
        )}
      </div>
    </>
  );
}
