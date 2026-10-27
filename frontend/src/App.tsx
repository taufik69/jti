import { Suspense } from "react";
import { Route, Routes } from "react-router";
import { PageFallback } from "@/components/layout/PageFallback";
import { RouteScroll } from "@/components/layout/RouteScroll";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { organizationSchema } from "@/lib/organization-schema";
import { HomePage } from "@/pages/HomePage";
import { lazyRoutes, NotFoundPage } from "@/routes";

/** Site shell: header, routed page (code-split per route), footer, plus the organisation JSON-LD. */
export function App() {
  return (
    <MotionProvider>
      <RouteScroll />
      <SiteHeader />
      <main id="main">
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {lazyRoutes.map(({ path, Page }) => (
              <Route key={path} path={path} element={<Page />} />
            ))}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </MotionProvider>
  );
}
