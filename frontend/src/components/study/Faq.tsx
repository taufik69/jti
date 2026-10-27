import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { InlineText } from "./InlineText";

interface FaqProps {
  items: { q: string; a: string[] }[];
}

/** Radix accordion: arrow keys move between questions, Enter/Space toggles. Several can be open. */
export function Faq({ items }: FaqProps) {
  return (
    <Accordion.Root type="multiple" className="divide-y divide-line overflow-hidden rounded-card border border-line bg-paper">
      {items.map((item) => (
        <Accordion.Item key={item.q} value={item.q}>
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full cursor-pointer items-start justify-between gap-6 px-6 py-5 text-left font-medium text-ink transition-colors hover:bg-plum-50/40 data-[state=open]:text-plum-700">
              {item.q}
              <Icon icon={Plus} size={20} className="mt-0.5 shrink-0 text-plum-500 transition-transform duration-200 group-data-[state=open]:rotate-45" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="space-y-3 px-6 pb-6 text-[0.9375rem]">
            {item.a.map((p) => (
              <p key={p}>
                <InlineText text={p} />
              </p>
            ))}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
