import { Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GridBackground } from "@/components/ui/GridBackground";
import { Icon } from "@/components/ui/Icon";
import { fieldLabels, type Course } from "@/content/courses";

interface CoursesHeroProps {
  onPickField: (field: Course["field"]) => void;
}

const fields = Object.keys(fieldLabels) as Course["field"][];

/** Dark plum intro band; the quick chips jump straight to one study area. */
export function CoursesHero({ onPickField }: CoursesHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-plum-950 pb-24 pt-14 text-white md:pb-28 md:pt-20">
      <GridBackground />
      <Container>
        <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-label text-gold-400">
          <Icon icon={Compass} size={16} />
          Course finder
        </p>
        <h1 className="mt-6 text-display text-white">Find your course</h1>
        <p className="mt-5 max-w-[56ch] text-left text-body-lg text-white/80">
          Nationally recognised qualifications for domestic and international students in Melbourne. Search by name or
          code, then narrow the list with the filters.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {fields.map((field) => (
            <button
              key={field}
              type="button"
              onClick={() => onPickField(field)}
              className="h-11 cursor-pointer rounded-full border border-white/20 bg-white/5 px-4 text-[0.9375rem] font-medium text-white transition-colors duration-150 hover:border-gold-400 hover:text-gold-400"
            >
              {fieldLabels[field]}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
