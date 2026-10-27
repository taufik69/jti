import { Search, X } from "lucide-react";
import { Icon } from "@/components/ui/Icon";

interface CourseSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function CourseSearch({ value, onChange }: CourseSearchProps) {
  return (
    <div className="relative">
      <Icon icon={Search} className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-muted" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search course name or code"
        aria-label="Search courses by name or code"
        className="h-14 w-full rounded-full border border-line bg-paper pl-13 pr-12 text-ink shadow-float placeholder:text-muted transition-colors hover:border-ink/25 focus:border-ink [&::-webkit-search-cancel-button]:hidden"
      />
      {value && (
        <button type="button" onClick={() => onChange("")} aria-label="Clear search" className="absolute right-2.5 top-1/2 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-muted hover:bg-ink/5 hover:text-ink">
          <Icon icon={X} size={16} />
        </button>
      )}
    </div>
  );
}
