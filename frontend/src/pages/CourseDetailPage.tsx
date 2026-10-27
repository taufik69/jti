import { useParams } from "react-router";
import { CourseBody } from "@/components/course-detail/CourseBody";
import { CourseDetailHero } from "@/components/course-detail/CourseDetailHero";
import { courseSections } from "@/components/course-detail/course-sections";
import { FeeCard } from "@/components/course-detail/FeeCard";
import { RelatedCourses } from "@/components/course-detail/RelatedCourses";
import { SectionTabs } from "@/components/course-detail/SectionTabs";
import { Container } from "@/components/ui/Container";
import { findCourse, relatedCourses } from "@/lib/find-course";
import { NotFoundPage } from "./NotFoundPage";

/** /course/:slug, using the same slugs as jti.edu.au so existing links keep working. */
export function CourseDetailPage() {
  const { slug = "" } = useParams();
  const found = findCourse(slug);
  if (!found) return <NotFoundPage />;
  const { course, details } = found;

  return (
    <div className="[&_p]:text-left [&_p]:hyphens-manual">
      <title>{`${course.code} ${course.title} · Job Training Institute`}</title>
      <meta name="description" content={details.overview[0]?.slice(0, 160)} />
      <CourseDetailHero course={course} tagline={details.tagline} />
      <SectionTabs sections={courseSections(details)} />
      <Container className="grid gap-10 py-12 md:py-16 lg:grid-cols-[1fr_21rem] lg:gap-14">
        <div className="min-w-0 lg:order-1">
          <CourseBody course={course} details={details} />
        </div>
        <aside className="order-first lg:order-2">
          <div className="lg:sticky lg:top-40">
            <FeeCard course={course} />
          </div>
        </aside>
      </Container>
      <RelatedCourses courses={relatedCourses(course)} />
    </div>
  );
}
