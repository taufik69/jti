import { FinderCourseCard } from "@/components/finder/FinderCourseCard";
import { useSavedCourses } from "@/components/finder/useSavedCourses";
import { Container } from "@/components/ui/Container";
import type { Course } from "@/content/courses";

interface RelatedCoursesProps {
  courses: Course[];
}

export function RelatedCourses({ courses }: RelatedCoursesProps) {
  const { saved, toggle } = useSavedCourses();
  if (courses.length === 0) return null;

  return (
    <section aria-labelledby="related-title" className="border-t border-line bg-paper py-16 md:py-20">
      <Container>
        <h2 id="related-title" className="text-h2 text-ink">More in this study area</h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <li key={course.id} className="flex">
              <FinderCourseCard course={course} saved={saved.includes(course.id)} onToggleSave={() => toggle(course.id)} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
