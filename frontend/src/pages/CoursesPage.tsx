import { useRef } from "react";
import { useLocation } from "react-router";
import { CourseResults } from "@/components/finder/CourseResults";
import { CourseSearch } from "@/components/finder/CourseSearch";
import { CoursesHelp } from "@/components/finder/CoursesHelp";
import { CoursesHero } from "@/components/finder/CoursesHero";
import { FilterSidebar } from "@/components/finder/FilterSidebar";
import { MobileFilters } from "@/components/finder/MobileFilters";
import { ResultsBar } from "@/components/finder/ResultsBar";
import { useCourseFinder } from "@/components/finder/useCourseFinder";
import { Container } from "@/components/ui/Container";
import { allCourses } from "@/content/all-courses";

/** /courses: every JTI qualification, searchable and filterable. */
export function CoursesPage() {
  const finder = useCourseFinder(useLocation().search);
  const resultsRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <title>Courses · Job Training Institute</title>
      <meta
        name="description"
        content="Find a nationally recognised course at JTI Melbourne: individual support, disability, early childhood, community services, mental health and business, for domestic and international students."
      />
      <CoursesHero
        onPickField={(field) => {
          finder.update({ fields: [field] });
          resultsRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <Container className="relative -mt-7 pb-24">
        <CourseSearch value={finder.filters.query} onChange={(query) => finder.update({ query })} />
        <div ref={resultsRef} className="mt-10 grid scroll-mt-28 gap-8 lg:grid-cols-[17rem_1fr] lg:gap-12">
          <aside aria-label="Filters" className="hidden lg:block">
            <div className="sticky top-28">
              <FilterSidebar finder={finder} />
            </div>
          </aside>
          <div className="min-w-0 space-y-6">
            <MobileFilters finder={finder} />
            <ResultsBar finder={finder} total={allCourses.length} />
            <CourseResults finder={finder} />
          </div>
        </div>
        <CoursesHelp />
      </Container>
    </>
  );
}
