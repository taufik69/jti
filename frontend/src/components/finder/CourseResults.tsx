import { fieldLabels, type Course } from "@/content/courses";
import { NoResults } from "./NoResults";
import { ResultsGrid } from "./ResultsGrid";
import { StudyAreaGroup } from "./StudyAreaGroup";
import type { CourseFinderState } from "./useCourseFinder";

interface CourseResultsProps {
  finder: CourseFinderState;
}

const fields = Object.keys(fieldLabels) as Course["field"][];

/** Grouped by study area (as on jti.edu.au) under "Recommended"; one flat grid for other sorts. */
export function CourseResults({ finder }: CourseResultsProps) {
  const { results, saved, toggleSaved, sort } = finder;

  if (results.length === 0) return <NoResults finder={finder} />;
  if (sort !== "recommended") return <ResultsGrid courses={results} saved={saved} onToggleSave={toggleSaved} />;

  return (
    <div className="space-y-14">
      {fields.map((field) => {
        const courses = results.filter((c) => c.field === field);
        if (courses.length === 0) return null;
        return (
          <StudyAreaGroup key={field} field={field} count={courses.length}>
            <ResultsGrid courses={courses} saved={saved} onToggleSave={toggleSaved} />
          </StudyAreaGroup>
        );
      })}
    </div>
  );
}
