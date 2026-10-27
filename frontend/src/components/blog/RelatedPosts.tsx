import { Container } from "@/components/ui/Container";
import { relatedPosts, type BlogPost } from "@/content/blog";
import { Button } from "@/components/ui/Button";
import { PostCard } from "./PostCard";

interface RelatedPostsProps {
  post: BlogPost;
}

/** Three more articles, same topic first. */
export function RelatedPosts({ post }: RelatedPostsProps) {
  return (
    <section aria-labelledby="related-title" className="border-t border-line bg-canvas py-16 md:py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="related-title" className="text-h2 text-ink">Keep reading</h2>
          <Button href="/blogs" variant="outline" withArrow>All articles</Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {relatedPosts(post).map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
