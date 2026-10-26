import { Link } from "@/components/ui/Link";
import { ArrowUpRight } from "lucide-react";
import { Chip } from "@/components/ui/Chip";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

interface CourseCardProps {
  field: string;
  code: string;
  title: string;
  href: string;
  duration: string;
  modes: string[];
  featured?: boolean;
  className?: string;
}

export function CourseCard({ field, code, title, href, duration, modes, featured = false, className }: CourseCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex h-full flex-col rounded-card border border-line bg-paper p-6 transition-colors duration-200 hover:border-plum-300 md:p-7",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <p className="text-label text-plum-700">{field}</p>
        <Icon
          icon={ArrowUpRight}
          className="text-muted transition-[color,transform] duration-150 group-hover:translate-x-[3px] group-hover:text-plum-700"
        />
      </div>
      <p className="mt-8 text-[0.875rem] tabular-nums text-muted">{code}</p>
      <h3 className={cn("mt-1 font-medium text-ink", featured ? "text-h3" : "text-xl leading-snug")}>
        {title}
      </h3>
      <div className="mt-auto flex flex-wrap items-center gap-2 pt-8">
        <span className="mr-2 text-[0.875rem] text-body">{duration}</span>
        {modes.map((mode) => (
          <Chip key={mode}>{mode}</Chip>
        ))}
      </div>
    </Link>
  );
}
