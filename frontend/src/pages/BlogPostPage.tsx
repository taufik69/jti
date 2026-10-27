import { useParams } from "react-router";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { ArticleSkeleton } from "@/components/blog/ArticleSkeleton";
import { PostAside } from "@/components/blog/PostAside";
import { PostHeader } from "@/components/blog/PostHeader";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { usePostBody } from "@/components/blog/usePostBody";
import { Container } from "@/components/ui/Container";
import { findPost } from "@/content/blog";
import { NotFoundPage } from "./NotFoundPage";

/** /blog/:slug, same slugs as jti.edu.au so existing links keep working. */
export function BlogPostPage() {
  const { slug = "" } = useParams();
  const post = findPost(slug);
  const blocks = usePostBody(slug);
  if (!post) return <NotFoundPage />;

  return (
    <div className="[&_p]:text-left [&_p]:hyphens-manual">
      <title>{`${post.title} · JTI Blog`}</title>
      <meta name="description" content={post.excerpt.slice(0, 160)} />
      <PostHeader post={post} />
      <Container className="grid gap-12 py-12 md:py-16 lg:grid-cols-[1fr_20rem] lg:gap-16">
        <article className="min-w-0">{blocks ? <ArticleBody blocks={blocks} /> : <ArticleSkeleton />}</article>
        <aside>
          <PostAside />
        </aside>
      </Container>
      <RelatedPosts post={post} />
    </div>
  );
}
