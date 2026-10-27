import { Reveal } from "@/components/motion/Reveal";
import { RevealItem } from "@/components/motion/RevealItem";
import { Container } from "@/components/ui/Container";
import { PostCard } from "./PostCard";
import { TopicFilter } from "./TopicFilter";
import { useBlogFilter } from "./useBlogFilter";

/** Lead story (unfiltered view only), topic chips, then the grid. */
export function BlogList() {
  const { topic, posts, count, setTopic } = useBlogFilter();
  const [lead, ...rest] = posts;
  const showLead = topic === "all" && lead;
  const grid = showLead ? rest : posts;

  return (
    <section aria-labelledby="articles-title" className="bg-canvas py-12 md:py-16">
      <Container>
        {showLead && (
          <Reveal from="left" className="mb-14">
            <p className="mb-4 text-label text-muted">Latest article</p>
            <PostCard post={lead} featured />
          </Reveal>
        )}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 id="articles-title" className="text-h2 text-ink">{showLead ? "More articles" : "Articles"}</h2>
          <p aria-live="polite" className="text-[0.9375rem] text-muted">
            Showing {posts.length} of {count("all")}
          </p>
        </div>
        <div className="mt-6">
          <TopicFilter value={topic} onChange={setTopic} count={count} />
        </div>
        <Reveal stagger key={topic} className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {grid.map((post) => (
            <RevealItem key={post.slug}>
              <PostCard post={post} />
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
