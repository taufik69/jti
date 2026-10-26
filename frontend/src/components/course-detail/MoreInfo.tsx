import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { InfoSection } from "@/lib/find-course";
import { RichBlocks } from "./RichBlocks";

interface MoreInfoProps {
  sections: InfoSection[];
}

/** Policy-style sections (RPL, support, payment, compliance) folded away so the page stays scannable. */
export function MoreInfo({ sections }: MoreInfoProps) {
  return (
    <Accordion.Root type="multiple" className="divide-y divide-line rounded-card border border-line bg-paper">
      {sections.map((section) => (
        <Accordion.Item key={section.key} value={section.key}>
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left font-medium text-ink hover:text-plum-700 md:px-6">
              {section.title}
              <Icon icon={ChevronDown} className="shrink-0 text-muted transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="px-5 pb-6 text-[0.9375rem] md:px-6">
            <RichBlocks blocks={section.blocks} />
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
