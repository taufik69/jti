import { EnquirySection } from "@/components/enquiry/EnquirySection";
import { CourseFinder } from "@/components/home/courses/CourseFinder";
import { ExploreSection } from "@/components/home/explore/ExploreSection";
import { HeroSlider } from "@/components/home/slider/HeroSlider";
import { TestimonialsSection } from "@/components/home/testimonials/TestimonialsSection";
import { VideoSection } from "@/components/home/video/VideoSection";
import { WelcomeSection } from "@/components/home/welcome/WelcomeSection";

/** Section order follows the current jti.edu.au home page, with courses and testimonials added. */
export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <WelcomeSection />
      <ExploreSection />
      <CourseFinder />
      <VideoSection />
      <TestimonialsSection />
      <EnquirySection />
    </>
  );
}
