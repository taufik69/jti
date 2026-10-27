import { Clock, Mail, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/content/site";

const items: { icon: LucideIcon; label: string; value: string; href?: string }[] = [
  { icon: Phone, label: "Call us", value: site.phones.general.label, href: site.phones.general.href },
  { icon: Mail, label: "Email us", value: site.email, href: `mailto:${site.email}` },
  /** Hours as given in the jti.edu.au FAQs. */
  { icon: Clock, label: "Office hours", value: "09:00 – 17:00 AEST" },
];

/** Hero aside: the three fastest ways to reach JTI. */
export function QuickContact() {
  return (
    <ul className="divide-y divide-line overflow-hidden rounded-card border border-line bg-paper shadow-float">
      {items.map((item) => {
        const body = (
          <>
            <span className="grid size-12 shrink-0 place-items-center rounded-control bg-plum-50 text-plum-700 transition-colors group-hover:bg-plum-700 group-hover:text-white">
              <Icon icon={item.icon} />
            </span>
            <span>
              <span className="block text-[0.8125rem] text-muted">{item.label}</span>
              <span className="mt-0.5 block text-[1.125rem] font-medium text-ink group-hover:text-plum-700">{item.value}</span>
            </span>
          </>
        );
        return (
          <li key={item.label}>
            {item.href ? (
              <a href={item.href} className="group flex items-center gap-5 p-5 transition-colors hover:bg-plum-50/40 md:px-7">{body}</a>
            ) : (
              <div className="flex items-center gap-5 p-5 md:px-7">{body}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
