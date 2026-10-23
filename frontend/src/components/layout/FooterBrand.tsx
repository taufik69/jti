import { site } from "@/content/site";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";

const credentials = [
  { label: "RTO", value: site.rto },
  { label: "CRICOS", value: site.cricos },
];

export function FooterBrand() {
  return (
    <div>
      <Logo onDark />
      <p className="mt-5 max-w-[34ch] text-[0.9375rem] text-left">
        Nationally recognised vocational training in Melbourne since {site.founded}.
      </p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {credentials.map((item) => (
          <li
            key={item.label}
            className="inline-flex h-8 items-center gap-2 rounded-control border border-white/15 px-3 text-[0.8125rem]"
          >
            <span className="text-gold-400">{item.label}</span>
            <span className="text-white">{item.value}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <SocialLinks />
      </div>
    </div>
  );
}
