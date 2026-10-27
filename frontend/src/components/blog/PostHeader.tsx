import { Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/page/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Image } from "@/components/ui/Image";
import { Link } from "@/components/ui/Link";
import { topicLabel, type BlogPost } from "@/content/blog";

interface PostHeaderProps {
  post: BlogPost;
}

/** Crumbs, topic, headline and reading time, then the lead image at full container width. */
export function PostHeader({ post }: PostHeaderProps) {
  return (
    <header className="bg-canvas pt-8 md:pt-10">
      <Container>
        <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blogs" }, { label: post.title }]} />
        <div className="max-w-4xl py-10 md:py-14">
          <Link href={`/blogs?topic=${post.topic}`} className="text-label text-plum-700 hover:underline">{topicLabel(post.topic)}</Link>
          <h1 className="mt-4 text-h1 text-balance text-ink">{post.title}</h1>
          <p className="mt-5 inline-flex items-center gap-2 text-[0.9375rem] text-muted">
            <Icon icon={Clock} size={16} />
            {post.minutes} min read
          </p>
        </div>
        <div className="relative aspect-[16/9] overflow-hidden rounded-card bg-plum-100 md:aspect-[21/9]">
          <Image src={post.image.src} alt="" fill priority sizes="(min-width: 1280px) 1240px, 100vw" className="object-cover" />
        </div>
      </Container>
    </header>
  );
}
