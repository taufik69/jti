import { NoResults } from "./NoResults";
import { ResultsGrid } from "./ResultsGrid";
import type { CourseFinderState } from "./useCourseFinder";

interface CourseResultsProps {
  finder: CourseFinderState;
}

/** One continuous grid of every matching course; study areas are filtered from the sidebar. */
export function CourseResults({ finder }: CourseResultsProps) {
  const { results, saved, toggleSaved } = finder;

  if (results.length === 0) return <NoResults finder={finder} />;
  return <ResultsGrid courses={results} saved={saved} onToggleSave={toggleSaved} />;
}
