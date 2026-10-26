import { Link } from "@/components/ui/Link";
import * as Accordion from "@radix-ui/react-accordion";
import * as Dialog from "@radix-ui/react-dialog";
import { mainNav } from "@/content/nav";
import { MobileNavGroup } from "./MobileNavGroup";

const rowClass = "flex h-14 w-full items-center text-lg font-medium text-ink";

export function MobileNavGroups() {
  return (
    <Accordion.Root type="single" collapsible className="divide-y divide-line">
      {mainNav.map((item) =>
        item.columns ? (
          <MobileNavGroup key={item.label} item={item} />
        ) : (
          <Dialog.Close asChild key={item.label}>
            <Link href={item.href} className={rowClass}>
              {item.label}
            </Link>
          </Dialog.Close>
        ),
      )}
    </Accordion.Root>
  );
}
