import { SearchX } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { CourseFinderState } from "./useCourseFinder";

interface NoResultsProps {
  finder: CourseFinderState;
}

export function NoResults({ finder }: NoResultsProps) {
  return (
    <div className="flex flex-col items-center rounded-card border border-dashed border-plum-300 bg-paper px-6 py-16 text-center">
      <Icon icon={SearchX} size={24} className="text-plum-500" />
      <h2 className="mt-4 text-h3 text-ink">No courses match</h2>
      <p className="mt-2 max-w-[40ch] text-center text-body">Try fewer filters, or search by a course code such as CHC33021.</p>
      <button
        type="button"
        onClick={() => {
          finder.reset();
          finder.update({ query: "" });
        }}
        className="mt-6 cursor-pointer font-medium text-plum-700 underline underline-offset-4"
      >
        Show all courses
      </button>
    </div>
  );
}
