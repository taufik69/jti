import { Container } from "@/components/ui/Container";
import { StoryCard } from "./StoryCard";
import { StoryFilters } from "./StoryFilters";
import { useStoryFilter } from "./useStoryFilter";

/** Filter chips over a masonry of cards; columns keep short and long messages from leaving gaps. */
export function StoryGrid() {
  const { theme, setTheme, visible, count } = useStoryFilter();

  return (
    <section aria-labelledby="stories-title" className="bg-canvas py-16 md:py-24">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 id="stories-title" className="text-h2 text-ink">Messages from our students</h2>
          <p aria-live="polite" className="text-[0.9375rem] text-muted">
            Showing {visible.length} of {count("all")}
          </p>
        </div>
        <div className="mt-8">
          <StoryFilters value={theme} onChange={setTheme} count={count} />
        </div>
        <div className="mt-10 columns-1 gap-5 md:columns-2 xl:columns-3">
          {visible.map((story) => (
            <StoryCard key={story.name} story={story} />
          ))}
        </div>
      </Container>
    </section>
  );
}
