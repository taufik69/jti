import { InlineText } from "@/components/study/InlineText";
import { Image } from "@/components/ui/Image";
import type { BlogBlock } from "@/content/blog";

interface ArticleBodyProps {
  blocks: BlogBlock[];
}

/** Long-form reading layout: ~68ch measure, generous leading, quiet headings. */
export function ArticleBody({ blocks }: ArticleBodyProps) {
  return (
    <div className="max-w-[68ch] space-y-5 text-[1.0625rem] leading-[1.75]">
      {blocks.map((block, i) => {
        const key = `${block.type}-${i}`;
        switch (block.type) {
          case "h2":
            return <h2 key={key} className="pt-6 text-h3 font-medium text-ink">{block.text}</h2>;
          case "h3":
            return <h3 key={key} className="pt-3 text-[1.1875rem] font-medium leading-snug text-ink">{block.text}</h3>;
          case "p":
            return <p key={key}><InlineText text={block.text} /></p>;
          case "list": {
            const Tag = block.ordered ? "ol" : "ul";
            return (
              <Tag key={key} className={`space-y-2 pl-6 marker:text-plum-500 ${block.ordered ? "list-decimal" : "list-disc"}`}>
                {block.items.map((item) => (
                  <li key={item} className="pl-1"><InlineText text={item} /></li>
                ))}
              </Tag>
            );
          }
          case "img":
            return (
              <figure key={key} className="py-3">
                <Image src={block.src} alt={block.alt} width={block.width} height={block.height} className="h-auto w-full rounded-card bg-plum-100" />
              </figure>
            );
        }
      })}
    </div>
  );
}
