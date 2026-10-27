import posts from "./posts.json";

/** Posts from jti.edu.au/blogs (October 2026), newest first. Bodies load on demand from ./bodies. */
export type BlogTopic = "early-childhood" | "aged-care" | "community-services" | "mental-health" | "funding";

export type BlogBlock =
  | { type: "p" | "h2" | "h3"; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "img"; src: string; width: number; height: number; alt: string };

export interface BlogPost {
  slug: string;
  title: string;
  topic: BlogTopic;
  image: { src: string; width: number; height: number };
  excerpt: string;
  minutes: number;
}

export const blogPosts = posts as BlogPost[];

/** Topics are inferred from each title, for filtering and "related" links. */
export const blogTopics: { id: BlogTopic; label: string }[] = [
  { id: "early-childhood", label: "Early childhood" },
  { id: "aged-care", label: "Aged care & support" },
  { id: "community-services", label: "Community services" },
  { id: "mental-health", label: "Mental health" },
  { id: "funding", label: "Funding" },
];

export const topicLabel = (id: BlogTopic) => blogTopics.find((t) => t.id === id)?.label ?? "";
export const findPost = (slug: string) => blogPosts.find((post) => post.slug === slug);
export const postHref = (post: BlogPost) => `/blog/${post.slug}`;

export function relatedPosts(post: BlogPost, count = 3): BlogPost[] {
  const same = blogPosts.filter((p) => p.topic === post.topic && p.slug !== post.slug);
  const rest = blogPosts.filter((p) => p.topic !== post.topic && p.slug !== post.slug);
  return [...same, ...rest].slice(0, count);
}

const bodies = import.meta.glob<{ default: BlogBlock[] }>("./bodies/*.json");

/** Loads one article body as its own chunk. */
export async function loadPostBody(slug: string): Promise<BlogBlock[]> {
  const load = bodies[`./bodies/${slug}.json`];
  return load ? (await load()).default : [];
}
