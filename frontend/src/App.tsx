import { Route, Routes } from "react-router";
import { RouteScroll } from "@/components/layout/RouteScroll";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { organizationSchema } from "@/lib/organization-schema";
import { CourseDetailPage } from "@/pages/CourseDetailPage";
import { CoursesPage } from "@/pages/CoursesPage";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { StyleguidePage } from "@/pages/StyleguidePage";

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
