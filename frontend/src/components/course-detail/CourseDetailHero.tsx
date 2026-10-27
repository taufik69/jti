import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GridBackground } from "@/components/ui/GridBackground";
import { Icon } from "@/components/ui/Icon";
import { Link } from "@/components/ui/Link";
import { fieldImages, fieldLabels, type Course } from "@/content/courses";
import { otherAudienceVersion } from "@/lib/find-course";
import { Reveal } from "@/components/motion/Reveal";
import { CourseFacts } from "./CourseFacts";
import { HeroMedia } from "./HeroMedia";

interface CourseDetailHeroProps {
  course: Course;
  tagline?: string;
}

const badge = "rounded-full px-3 py-1 text-[0.8125rem] font-medium";

export function CourseDetailHero({ course, tagline }: CourseDetailHeroProps) {
  const image = fieldImages[course.field];
  const other = otherAudienceVersion(course);

  return (
    <section className="relative isolate overflow-hidden bg-plum-950 pb-14 pt-10 text-white md:pb-20 md:pt-14">
      <GridBackground />
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[0.875rem] text-white/65">
          <Link href="/courses" className="hover:text-gold-400">Courses</Link>
          <Icon icon={ChevronRight} size={16} />
          <span className="text-white">{fieldLabels[course.field]}</span>
        </nav>
        <div className="mt-8 grid items-center gap-10 lg:grid-cols-12">
          <Reveal from="left" className="lg:col-span-7">
            <div className="flex flex-wrap gap-2">
              <span className={`${badge} bg-paper tabular-nums text-ink`}>{course.code}</span>
              <span className={`${badge} bg-gold-500 capitalize text-plum-950`}>{course.audience}</span>
              <span className={`${badge} border border-white/20 text-white`}>{course.level}</span>
              {course.cricos && <span className={`${badge} border border-white/20 text-white`}>CRICOS {course.cricos}</span>}
            </div>
            <h1 className="mt-6 text-h1 text-white">{course.title}</h1>
            {tagline && <p className="mt-5 max-w-[60ch] text-left text-body-lg text-white/85">{tagline}</p>}
            {other && (
              <p className="mt-5 text-left text-white/75">
                Also offered to {other.audience} students.{" "}
                <Link href={other.href} className="font-medium text-gold-400 underline underline-offset-4 hover:text-gold-100">
                  See the {other.audience} version
                </Link>
              </p>
            )}
          </Reveal>
          <Reveal from="right" delay={0.1} className="hidden lg:col-span-5 lg:block">
            <HeroMedia src={image.src} position={image.position} caption={fieldLabels[course.field]} level={course.level} />
          </Reveal>
        </div>
        <div className="mt-10"><CourseFacts course={course} /></div>
      </Container>
    </section>
  );
}
