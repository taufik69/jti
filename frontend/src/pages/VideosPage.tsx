import { AboutHero } from "@/components/about/AboutHero";
import { AboutLayout } from "@/components/about/AboutLayout";
import { VideoGallery } from "@/components/about/videos/VideoGallery";

/** /jti-video: the four published videos, played in a modal. */
export function VideosPage() {
  return (
    <AboutLayout>
      <title>JTI videos · Job Training Institute</title>
      <meta name="description" content="Watch life at JTI, a class discussion, international students and a little bit about nursing." />
      <AboutHero
        label="JTI videos"
        title="See JTI for yourself"
        intro={<p>Step inside our classes and campus life, hear from international students, and get a feel for studying nursing at JTI.</p>}
      />
      <VideoGallery />
    </AboutLayout>
  );
}
