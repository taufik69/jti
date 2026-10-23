import { GraduationCap, LogIn, Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/content/site";

const contacts = [
  { icon: Phone, label: site.phones.general.label, href: site.phones.general.href, className: "" },
  { icon: Phone, label: site.phones.city.label, href: site.phones.city.href, className: "hidden lg:inline-flex" },
  { icon: Mail, label: site.email, href: `mailto:${site.email}`, className: "" },
];

const linkClass = "inline-flex items-center gap-2 transition-colors duration-150 hover:text-gold-400";

export function UtilityBar() {
  return (
    <div className="hidden bg-plum-950 text-[0.8125rem] text-white/80 md:block">
      <Container className="flex h-10 items-center justify-between gap-6">
        <ul className="flex items-center gap-6">
          {contacts.map((contact) => (
            <li key={contact.href} className={contact.className}>
              <a href={contact.href} className={linkClass}>
                <Icon icon={contact.icon} size={16} className="text-gold-400" />
                {contact.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-6">
          <p className="hidden text-white/60 xl:block">
            RTO {site.rto} · CRICOS {site.cricos}
          </p>
          <nav aria-label="Portals" className="flex items-center gap-2">
            <a href={site.portals.student} className={`${linkClass} rounded-control bg-white/10 px-3 py-1.5 text-white`}>
              <Icon icon={GraduationCap} size={16} />
              Student login
            </a>
            <a href={site.portals.staff} className={`${linkClass} px-3 py-1.5`}>
              <Icon icon={LogIn} size={16} />
              Staff portal
            </a>
          </nav>
        </div>
      </Container>
    </div>
  );
}
