import { Clock } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Image } from "@/components/ui/Image";
import { Link } from "@/components/ui/Link";
import { postHref, topicLabel, type BlogPost } from "@/content/blog";
import { cn } from "@/lib/cn";

interface PostCardProps {
  post: BlogPost;
  /** Lead story: image beside the text on large screens, bigger title. */
  featured?: boolean;
}

/** Image, topic, title, excerpt and reading time; the whole card is the link. */
export function PostCard({ post, featured = false }: PostCardProps) {
  return (
    <Link
      href={postHref(post)}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-card border border-line bg-paper transition-[border-color,box-shadow] duration-200 hover:border-plum-300 hover:shadow-float",
        featured && "lg:grid lg:grid-cols-[1.2fr_1fr]",
      )}
    >
      <span className={cn("relative block aspect-[16/9] overflow-hidden bg-plum-100", featured && "lg:aspect-auto lg:h-full lg:min-h-[22rem]")}>
        <Image
          src={post.image.src}
          alt=""
          fill
          sizes={featured ? "(min-width: 1024px) 700px, 100vw" : "(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </span>
      <span className={cn("flex flex-1 flex-col p-6", featured && "md:p-10 lg:justify-center")}>
        <span className="text-label text-plum-700">{topicLabel(post.topic)}</span>
        <span className={cn("mt-3 block text-ink transition-colors group-hover:text-plum-700", featured ? "text-h2" : "text-[1.1875rem] font-medium leading-snug")}>
          {post.title}
        </span>
        <span className={cn("mt-3 block text-[0.9375rem] text-body", featured ? "line-clamp-4" : "line-clamp-3")}>{post.excerpt}</span>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[0.875rem] text-muted">
          <Icon icon={Clock} size={16} />
          {post.minutes} min read
        </span>
      </span>
    </Link>
  );
}
