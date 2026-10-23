import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

interface CourseHelpTileProps {
  className?: string;
}

export function CourseHelpTile({ className }: CourseHelpTileProps) {
  return (
    <div className={cn("flex flex-col rounded-card bg-plum-950 p-6 text-white/80 md:p-7", className)}>
      <h3 className="text-xl font-medium leading-snug text-white">Not sure which course fits?</h3>
      <p className="mt-3 text-[0.9375rem]">
        Tell us about your background and the work you want to do. Admissions will suggest a course
        and explain the entry requirements.
      </p>
      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-8">
        <Button href="#enquire">Ask admissions</Button>
        <a href={site.phones.general.href} className="text-[0.9375rem] text-gold-100 underline-offset-4 hover:underline">
          {site.phones.general.label}
        </a>
      </div>
    </div>
  );
}
