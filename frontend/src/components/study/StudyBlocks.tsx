import type { StudyBlock } from "@/content/study/types";
import { BlockList } from "./BlockList";
import { Cards } from "./Cards";
import { Checklist } from "./Checklist";
import { DataTable } from "./DataTable";
import { Downloads } from "./Downloads";
import { Facts } from "./Facts";
import { Faq } from "./Faq";
import { InlineText } from "./InlineText";
import { LinkList } from "./LinkList";
import { Note } from "./Note";
import { Quote } from "./Quote";
import { Steps } from "./Steps";

interface StudyBlocksProps {
  blocks: StudyBlock[];
}

/** One renderer per block type; the content files decide the order. */
export function StudyBlocks({ blocks }: StudyBlocksProps) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        const key = `${block.type}-${i}`;
        switch (block.type) {
          case "p":
            return <p key={key}><InlineText text={block.text} /></p>;
          case "h3":
            return <h3 key={key} className="pt-2 text-[1.1875rem] font-medium text-ink">{block.text}</h3>;
          case "list":
            return <BlockList key={key} items={block.items} ordered={block.ordered} />;
          case "checklist":
            return <Checklist key={key} id={block.id} items={block.items} />;
          case "steps":
            return <Steps key={key} items={block.items} />;
          case "downloads":
            return <Downloads key={key} items={block.items} />;
          case "links":
            return <LinkList key={key} items={block.items} />;
          case "table":
            return <DataTable key={key} head={block.head} rows={block.rows} caption={block.caption} />;
          case "facts":
            return <Facts key={key} items={block.items} note={block.note} />;
          case "faq":
            return <Faq key={key} items={block.items} />;
          case "note":
            return <Note key={key} text={block.text} />;
          case "quote":
            return <Quote key={key} {...block} />;
          case "cards":
            return <Cards key={key} items={block.items} />;
        }
      })}
    </div>
  );
}
