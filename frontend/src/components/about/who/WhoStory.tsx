import { Container } from "@/components/ui/Container";
import { whoStory } from "@/content/about/who-we-are";
import { EditorialSplit } from "../EditorialSplit";

/** Alternating photo-and-text chapters: trainer standards, then job-readiness. */
export function WhoStory() {
  return (
    <section aria-label="How we train" className="bg-canvas py-20 md:py-28">
      <Container className="space-y-20 md:space-y-28">
        {whoStory.map((chapter, i) => (
          <EditorialSplit key={chapter.title} image={chapter.image} alt={chapter.alt} reverse={i % 2 === 1}>
            <p className="text-label tabular-nums text-plum-700">0{i + 1}</p>
            <h2 className="mt-4 text-h2 text-ink">{chapter.title}</h2>
            <div className="mt-6 space-y-4 text-body-lg">
              {chapter.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </EditorialSplit>
        ))}
      </Container>
    </section>
  );
}
