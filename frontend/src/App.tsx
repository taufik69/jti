import { Route, Routes } from "react-router";
import { RouteScroll } from "@/components/layout/RouteScroll";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { organizationSchema } from "@/lib/organization-schema";
import { CourseDetailPage } from "@/pages/CourseDetailPage";
import { CoursesPage } from "@/pages/CoursesPage";
import { DifferencePage } from "@/pages/DifferencePage";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { StudyPage } from "@/pages/StudyPage";
import { StyleguidePage } from "@/pages/StyleguidePage";
import { TestimonialsPage } from "@/pages/TestimonialsPage";
import { VideosPage } from "@/pages/VideosPage";
import { WhoWeArePage } from "@/pages/WhoWeArePage";

/** Site shell: header, routed page, footer, plus the organisation JSON-LD. */
export function App() {
  return (
    <MotionProvider>
      <RouteScroll />
      <SiteHeader />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/course/:slug" element={<CourseDetailPage />} />
          <Route path="/who-we-are" element={<WhoWeArePage />} />
          <Route path="/what-makes-jti-different" element={<DifferencePage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/jti-video" element={<VideosPage />} />
          <Route path="/study/:slug" element={<StudyPage />} />
          <Route path="/styleguide" element={<StyleguidePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </MotionProvider>
  );
}
