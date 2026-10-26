import { useParams } from "react-router";
import { CourseBody, bodySections } from "@/components/course-detail/CourseBody";
import { CourseDetailHero } from "@/components/course-detail/CourseDetailHero";
import { FeeCard } from "@/components/course-detail/FeeCard";
import { OnPageNav } from "@/components/course-detail/OnPageNav";
import { RelatedCourses } from "@/components/course-detail/RelatedCourses";
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
    <>
      <title>{`${course.code} ${course.title} · Job Training Institute`}</title>
      <meta name="description" content={details.overview[0]?.slice(0, 160)} />
      <CourseDetailHero course={course} />
      <Container className="grid gap-10 py-14 md:py-20 lg:grid-cols-[1fr_22rem] lg:gap-14">
        <div className="min-w-0 lg:order-1">
          <CourseBody details={details} />
        </div>
        <aside className="order-first lg:order-2">
          <div className="space-y-4 lg:sticky lg:top-28">
            <FeeCard course={course} />
            <div className="hidden lg:block"><OnPageNav sections={bodySections(details)} /></div>
          </div>
        </aside>
      </Container>
      <RelatedCourses courses={relatedCourses(course)} />
    </>
  );
}
