import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/content/site";

const campuses = [
  { name: "City campus (Head Office)", phone: site.phones.city },
  { name: "Dandenong campus", phone: site.phones.dandenong },
];

export function FooterContact() {
  return (
    <div className="rounded-card border border-white/10 bg-white/[0.03] p-6">
      <h2 className="text-label mb-5 text-gold-400">Contact</h2>
      <a href={site.phones.general.href} className="flex items-center gap-3 text-xl font-medium text-white hover:text-gold-400">
        <Icon icon={Phone} className="text-gold-400" />
        {site.phones.general.label}
      </a>
      <a href={`mailto:${site.email}`} className="mt-3 flex items-center gap-3 text-[0.9375rem] hover:text-white">
        <Icon icon={Mail} className="text-white/60" />
        {site.email}
      </a>
      <ul className="mt-6 space-y-4 border-t border-white/10 pt-5 text-[0.9375rem]">
        {campuses.map((campus) => (
          <li key={campus.name} className="flex gap-3">
            <Icon icon={MapPin} className="mt-0.5 text-white/60" />
            <div>
              <span className="block text-white">{campus.name}</span>
              <a href={campus.phone.href} className="hover:text-white">
                {campus.phone.label}
              </a>
              {/* TODO: add street address once confirmed by JTI */}
            </div>
          </li>
        ))}
      </ul>
      <Link
        href="/contact-us"
        className="group mt-6 inline-flex items-center gap-2 text-gold-100 underline-offset-4 hover:underline"
      >
        All contact details
        <Icon icon={ArrowRight} size={16} className="transition-transform group-hover:translate-x-[3px]" />
      </Link>
    </div>
  );
}
