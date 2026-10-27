import { AboutHero } from "@/components/about/AboutHero";
import { AboutLayout } from "@/components/about/AboutLayout";
import { FeaturedStory } from "@/components/about/stories/FeaturedStory";
import { StoryGrid } from "@/components/about/stories/StoryGrid";
import { stories } from "@/content/about/stories";

const intro = `${stories.length} messages that students and trainers have sent us, shared in their own words. Filter by what matters to you, and open any message to read it in full.`;

/** /testimonials: every published message, filterable by theme. */
export function TestimonialsPage() {
  return (
    <AboutLayout>
      <title>Testimonials · Job Training Institute</title>
      <meta name="description" content="Students and trainers on studying at Job Training Institute, in their own words." />
      <AboutHero label="Testimonials" title="Student stories, in their own words" intro={<p>{intro}</p>} aside={<FeaturedStory />} />
      <StoryGrid />
    </AboutLayout>
  );
}
