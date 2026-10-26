import { EnquirySection } from "@/components/enquiry/EnquirySection";
import { CourseFinder } from "@/components/home/courses/CourseFinder";
import { ExploreSection } from "@/components/home/explore/ExploreSection";
import { TestimonialsSection } from "@/components/home/testimonials/TestimonialsSection";
import { TunnelHero } from "@/components/home/tunnel/TunnelHero";
import { VideoSection } from "@/components/home/video/VideoSection";
import { WelcomeSection } from "@/components/home/welcome/WelcomeSection";

/** Section order follows the current jti.edu.au home page, with courses and testimonials added. */
export function HomePage() {
  return (
    <>
      <TunnelHero />
      <WelcomeSection />
      <ExploreSection />
      <CourseFinder />
      <VideoSection />
      <TestimonialsSection />
      <EnquirySection />
    </>
  );
}
