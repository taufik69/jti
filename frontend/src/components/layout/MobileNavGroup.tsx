import Link from "next/link";
import * as Accordion from "@radix-ui/react-accordion";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronDown } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { NavItem } from "@/content/types";

interface MobileNavGroupProps {
  item: NavItem;
}

export function MobileNavGroup({ item }: MobileNavGroupProps) {
  return (
    <Accordion.Item value={item.label}>
      <Accordion.Header>
        <Accordion.Trigger className="group flex h-14 w-full cursor-pointer items-center justify-between text-lg font-medium text-ink">
          {item.label}
          <Icon
            icon={ChevronDown}
            className="text-muted transition-transform duration-200 group-data-[state=open]:rotate-180"
          />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="pb-5">
        {item.columns?.map((column) => (
          <div key={column.title} className="mt-2 first:mt-0">
            <p className="text-label py-2 text-muted">{column.title}</p>
            <ul>
              {column.links.map((link) => (
                <li key={link.href}>
                  <Dialog.Close asChild>
                    <Link href={link.href} className="block py-2.5 text-body text-body">
                      {link.label}
                      {link.meta && (
                        <span className="block text-[0.8125rem] text-muted">{link.meta}</span>
                      )}
                    </Link>
                  </Dialog.Close>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Accordion.Content>
    </Accordion.Item>
  );
}
