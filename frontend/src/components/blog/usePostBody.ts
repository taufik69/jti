import { useEffect, useState } from "react";
import { loadPostBody, type BlogBlock } from "@/content/blog";

/** Article body for a slug; null while its chunk loads. */
export function usePostBody(slug: string) {
  const [body, setBody] = useState<{ slug: string; blocks: BlogBlock[] } | null>(null);

  useEffect(() => {
    let live = true;
    loadPostBody(slug).then((blocks) => live && setBody({ slug, blocks }));
    return () => {
      live = false;
    };
  }, [slug]);

  return body?.slug === slug ? body.blocks : null;
}
