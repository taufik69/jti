import { CourseCard } from "@/components/course/CourseCard";

export function CardShowcase() {
  return (
    <div className="grid gap-4 md:grid-cols-12">
      <CourseCard
        featured
        className="md:col-span-7"
        field="Individual support"
        code="CHC33021"
        title="Certificate III in Individual Support (Ageing & Disability)"
        href="/courses/individual-support-disability-leisure-and-health"
        duration="TODO: duration"
        modes={["Face-to-face", "Blended"]}
      />
      <CourseCard
        className="md:col-span-5"
        field="Early childhood"
        code="CHC50125"
        title="Diploma of Early Childhood Education and Care"
        href="/courses/early-childhood-education-care"
        duration="TODO: duration"
        modes={["Face-to-face"]}
      />
      <p className="text-[0.9375rem] text-muted md:col-span-12">
        Cards: 16px radius, 1px line border, no shadow. Hover shifts the border to plum-300 and moves
        the arrow. Durations and modes are placeholders until JTI confirms them per course.
      </p>
    </div>
  );
}
