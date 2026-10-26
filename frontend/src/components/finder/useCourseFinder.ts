import { useEffect, useMemo, useState } from "react";
import { allCourses } from "@/content/all-courses";
import { fieldLabels, type Course } from "@/content/courses";
import { emptyFilters, filtersFromSearch, matches, sortCourses, type CourseFilters, type SortKey } from "@/lib/course-filters";
import { useSavedCourses } from "./useSavedCourses";

/**
 * Filter + sort state for the courses page. Counts come from wider pools so they stay steady
 * while ticking options: `searchPool` (search only) feeds the student-type toggle,
 * `facetPool` (search + student type) feeds every other group.
 */
const fieldIds = Object.keys(fieldLabels) as Course["field"][];

export function useCourseFinder(search: string) {
  const [filters, setFilters] = useState<CourseFilters>(() => filtersFromSearch(search, fieldIds));
  // A new ?type=…&area=… (e.g. a link clicked while already on /courses) resets the filters to match.
  useEffect(() => setFilters(filtersFromSearch(search, fieldIds)), [search]);
  const [sort, setSort] = useState<SortKey>("recommended");
  const { saved, toggle } = useSavedCourses();

  const results = useMemo(
    () => sortCourses(allCourses.filter((c) => matches(c, filters, saved)), sort),
    [filters, saved, sort],
  );
  const searchPool = useMemo(
    () => allCourses.filter((c) => matches(c, { ...emptyFilters, query: filters.query }, saved)),
    [filters.query, saved],
  );
  const facetPool = useMemo(
    () => searchPool.filter((c) => filters.audience === "all" || c.audience === filters.audience),
    [searchPool, filters.audience],
  );

  const update = (patch: Partial<CourseFilters>) => setFilters((f) => ({ ...f, ...patch }));
  const reset = () => setFilters((f) => ({ ...emptyFilters, query: f.query }));

  return { filters, update, reset, sort, setSort, results, searchPool, facetPool, saved, toggleSaved: toggle };
}

export type CourseFinderState = ReturnType<typeof useCourseFinder>;
