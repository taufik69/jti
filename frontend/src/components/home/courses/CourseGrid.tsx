import { courseGroups } from "@/content/course-groups";
import type { Audience } from "@/content/types";
import { CourseGroupCard } from "./CourseGroupCard";
import { CourseHelpTile } from "./CourseHelpTile";
import { gridClass, helpSlotClass, slotClass } from "./grid-layout";

interface CourseGridProps {
  audience: Audience;
}

export function CourseGrid({ audience }: CourseGridProps) {
  const groups = courseGroups.filter((group) => group.audience === audience);

  return (
    <div className={gridClass}>
      {groups.map((group, i) => (
        <CourseGroupCard
          key={group.href}
          group={group}
          featured={i === 0}
          className={slotClass[i] ?? slotClass[slotClass.length - 1]}
        />
      ))}
      <CourseHelpTile className={helpSlotClass} />
    </div>
  );
}
