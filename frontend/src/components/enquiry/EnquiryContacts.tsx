import { Mail, MapPin, Phone } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { campuses } from "@/content/campuses";
import { site } from "@/content/site";

const quick = [
  { icon: Phone, label: "Call us", value: site.phones.general.label, href: site.phones.general.href },
  { icon: Mail, label: "Email us", value: site.email, href: `mailto:${site.email}` },
];

const iconBox = "flex size-11 shrink-0 items-center justify-center rounded-control bg-plum-50 text-plum-700";

export function EnquiryContacts() {
  return (
    <div className="mt-10 space-y-3">
      {quick.map((item) => (
        <a key={item.href} href={item.href} className="group flex items-center gap-4 rounded-card border border-line p-4 transition-colors duration-150 hover:border-plum-300">
          <span className={iconBox}>
            <Icon icon={item.icon} />
          </span>
          <span>
            <span className="block text-[0.8125rem] text-muted">{item.label}</span>
            <span className="block font-medium text-ink group-hover:text-plum-700">{item.value}</span>
          </span>
        </a>
      ))}
      {campuses.map((campus) => (
        <a key={campus.name} href={campus.mapHref} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 rounded-card border border-line p-4 transition-colors duration-150 hover:border-plum-300">
          <span className={iconBox}>
            <Icon icon={MapPin} />
          </span>
          <span className="text-[0.9375rem] leading-snug">
            <span className="block font-medium text-ink group-hover:text-plum-700">
              {campus.name} campus{campus.role ? ` (${campus.role})` : ""}
            </span>
            <span className="mt-1 block text-body">{campus.address.join(", ")}</span>
            <span className="mt-1 block text-muted">{campus.phone.label}</span>
          </span>
        </a>
      ))}
    </div>
  );
}
