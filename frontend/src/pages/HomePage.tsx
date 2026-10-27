import { lazy, Suspense } from "react";
import { EnquirySection } from "@/components/enquiry/EnquirySection";
import { CourseFinder } from "@/components/home/courses/CourseFinder";
import { ExploreSection } from "@/components/home/explore/ExploreSection";
import { TunnelHero } from "@/components/home/tunnel/TunnelHero";
import { VideoSection } from "@/components/home/video/VideoSection";
import { WelcomeSection } from "@/components/home/welcome/WelcomeSection";
import { WhenVisible } from "@/components/ui/WhenVisible";

/** Swiper lives only in the testimonials carousel, so it loads when that section is near. */
const TestimonialsSection = lazy(() =>
  import("@/components/home/testimonials/TestimonialsSection").then((m) => ({ default: m.TestimonialsSection })),
);

const testimonialsHeight = "44rem";

/** Section order follows the current jti.edu.au home page, with courses and testimonials added. */
export function HomePage() {
  return (
    <>
      <TunnelHero />
      <WelcomeSection />
      <ExploreSection />
      <CourseFinder />
      <VideoSection />
      <WhenVisible minHeight={testimonialsHeight}>
        <Suspense fallback={<div aria-hidden style={{ minHeight: testimonialsHeight }} />}>
          <TestimonialsSection />
        </Suspense>
      </WhenVisible>
      <EnquirySection />
    </>
  );
}
