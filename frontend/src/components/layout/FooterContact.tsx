import Link from "next/link";
import { site } from "@/content/site";

const campuses = [
  { name: "City campus (Head Office)", phone: site.phones.city },
  { name: "Dandenong campus", phone: site.phones.dandenong },
];

export function FooterContact() {
  return (
    <div>
      <h2 className="text-label mb-5 text-gold-400">Contact</h2>
      <a href={site.phones.general.href} className="block text-xl font-medium text-white">
        {site.phones.general.label}
      </a>
      <ul className="mt-5 space-y-4 text-[0.9375rem]">
        {campuses.map((campus) => (
          <li key={campus.name}>
            <span className="block text-white">{campus.name}</span>
            <a href={campus.phone.href} className="hover:text-white">
              {campus.phone.label}
            </a>
            {/* TODO: add street address once confirmed by JTI */}
          </li>
        ))}
      </ul>
      <Link href="/contact-us" className="mt-5 inline-block text-gold-100 underline-offset-4 hover:underline">
        All contact details
      </Link>
    </div>
  );
}
