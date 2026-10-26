import type { Course } from "@/content/courses";
import { FinderCourseCard } from "./FinderCourseCard";

interface ResultsGridProps {
  courses: Course[];
  saved: string[];
  onToggleSave: (id: string) => void;
}

export function ResultsGrid({ courses, saved, onToggleSave }: ResultsGridProps) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {courses.map((course) => (
        <li key={course.id} className="flex">
          <FinderCourseCard course={course} saved={saved.includes(course.id)} onToggleSave={() => onToggleSave(course.id)} />
        </li>
      ))}
    </ul>
  );
}
