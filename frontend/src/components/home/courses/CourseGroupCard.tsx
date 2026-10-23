import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { CourseGroup } from "@/content/types";
import { cn } from "@/lib/cn";
import { CourseGroupBody } from "./CourseGroupBody";

interface CourseGroupCardProps {
  group: CourseGroup;
  featured?: boolean;
  className?: string;
}

export function CourseGroupCard({ group, featured = false, className }: CourseGroupCardProps) {
  return (
    <Link
      href={group.href}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-card border border-line bg-paper transition-colors duration-200 hover:border-plum-300",
        className,
      )}
    >
      {featured && (
        <div className="relative hidden aspect-[16/7] overflow-hidden bg-plum-100 lg:block">
          {/* TODO: replace with real JTI photo (aged care practical session) */}
          <Image
            src="/images/healthcare.jpg"
            alt=""
            fill
            sizes="(min-width: 1024px) 45vw, 0px"
            className="object-cover object-[center_30%] transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className={cn("font-medium text-ink", featured ? "text-h3" : "text-xl leading-snug")}>
            {group.title}
          </h3>
          <Icon
            icon={ArrowUpRight}
            className="mt-1 text-muted transition-[color,transform] duration-150 group-hover:translate-x-[3px] group-hover:text-plum-700"
          />
        </div>
        <CourseGroupBody group={group} />
      </div>
    </Link>
  );
}
