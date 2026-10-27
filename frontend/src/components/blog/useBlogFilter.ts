import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { blogPosts, blogTopics, type BlogTopic } from "@/content/blog";

/** Topic filter kept in ?topic= so a filtered list can be linked and survives Back. */
export function useBlogFilter() {
  const [params, setParams] = useSearchParams();
  const raw = params.get("topic");
  const topic: BlogTopic | "all" = blogTopics.some((t) => t.id === raw) ? (raw as BlogTopic) : "all";
  const posts = useMemo(() => (topic === "all" ? blogPosts : blogPosts.filter((p) => p.topic === topic)), [topic]);
  const count = (id: BlogTopic | "all") => (id === "all" ? blogPosts.length : blogPosts.filter((p) => p.topic === id).length);
  const setTopic = (id: BlogTopic | "all") => setParams(id === "all" ? {} : { topic: id }, { replace: true, preventScrollReset: true });
  return { topic, posts, count, setTopic };
}
