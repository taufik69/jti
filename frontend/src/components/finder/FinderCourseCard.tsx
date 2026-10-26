import { ArrowRight, Bookmark, MessageSquare } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Image } from "@/components/ui/Image";
import { Link } from "@/components/ui/Link";
import { fieldImages, fieldLabels, type Course } from "@/content/courses";
import { cn } from "@/lib/cn";
import { CourseMeta } from "./CourseMeta";
import { CoursePrice } from "./CoursePrice";

interface FinderCourseCardProps {
  course: Course;
  saved: boolean;
  onToggleSave: () => void;
}

const round = "flex size-11 shrink-0 items-center justify-center rounded-full border transition-colors duration-150";

export function FinderCourseCard({ course, saved, onToggleSave }: FinderCourseCardProps) {
  const image = fieldImages[course.field];

  return (
    <article className="group flex flex-col overflow-hidden rounded-card border border-line bg-paper transition-shadow duration-200 hover:shadow-float">
      <div className="relative aspect-[16/10] overflow-hidden bg-line">
        <Image src={image.src} alt="" fill style={{ objectPosition: image.position }} className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]" />
        <div className="absolute inset-x-3 top-3 flex items-start gap-1.5">
          <span className="rounded-full bg-paper px-2.5 py-1 text-[0.75rem] font-semibold tabular-nums text-ink">{course.code}</span>
          <span className="rounded-full bg-ink/80 px-2.5 py-1 text-[0.75rem] capitalize text-white backdrop-blur-sm">{course.audience}</span>
          <button
            type="button"
            aria-pressed={saved}
            aria-label={saved ? `Remove ${course.title} from saved` : `Save ${course.title}`}
            onClick={onToggleSave}
            className={cn("ml-auto flex size-9 cursor-pointer items-center justify-center rounded-full transition-colors", saved ? "bg-gold-500 text-ink" : "bg-paper/90 text-ink hover:bg-paper")}
          >
            <Icon icon={Bookmark} size={16} className={saved ? "fill-current" : undefined} />
          </button>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-baseline justify-between gap-3">
          <p className="text-label text-left text-ink">{fieldLabels[course.field]}</p>
          <p className="shrink-0 text-[0.8125rem] text-muted">{course.level}</p>
        </div>
        <h3 className="mt-2 text-xl font-medium leading-snug text-ink">{course.title}</h3>
        {course.cricos && <p className="mt-1 text-left text-[0.8125rem] text-muted">CRICOS {course.cricos}</p>}
        <div className="mt-5"><CourseMeta course={course} /></div>
        <div className="mt-6"><CoursePrice fee={course.fee} /></div>
        <div className="mt-auto flex gap-2 pt-6">
          <Link href={course.href} className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-ink/25 font-medium text-ink transition-colors duration-150 hover:border-ink hover:bg-ink/5">
            View course
            <Icon icon={ArrowRight} size={16} />
          </Link>
          <Link href="/#enquire" aria-label={`Enquire about ${course.title}`} className={cn(round, "border-line text-ink hover:border-ink hover:text-ink")}>
            <Icon icon={MessageSquare} size={20} />
          </Link>
        </div>
      </div>
    </article>
  );
}
