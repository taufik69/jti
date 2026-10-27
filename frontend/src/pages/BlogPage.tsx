import { BlogList } from "@/components/blog/BlogList";
import { PageHero } from "@/components/page/PageHero";
import { blogPosts } from "@/content/blog";

/** /blogs: every article from jti.edu.au, newest first, filterable by topic. */
export function BlogPage() {
  return (
    <div className="[&_p]:text-left [&_p]:hyphens-manual">
      <title>Blog · Job Training Institute</title>
      <meta name="description" content="Career guides, course advice and news from Job Training Institute." />
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        label="JTI blog"
        title="Careers, courses and study advice"
        intro={<p>{blogPosts.length} articles on building a career in early childhood, aged care, community services and mental health, plus how government funding can help you study.</p>}
      />
      <BlogList />
    </div>
  );
}
