import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { Campus } from "@/content/campuses";

interface CampusCardProps {
  campus: Campus;
}

/** Map on top (lazy, keyless Google embed), then address, phone and a directions link. */
export function CampusCard({ campus }: CampusCardProps) {
  const query = encodeURIComponent(campus.address.join(", "));

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-card border border-line bg-paper">
      <div className="relative aspect-[16/10] bg-plum-50">
        <iframe
          src={`https://www.google.com/maps?q=${query}&output=embed`}
          title={`Map of JTI ${campus.name} campus`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 size-full border-0"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        {campus.role && <p className="text-label text-plum-700">{campus.role}</p>}
        <h3 className="mt-2 text-h3 text-ink">{campus.name} campus</h3>
        <address className="mt-5 space-y-3 not-italic text-[0.9375rem]">
          <p className="flex gap-3">
            <Icon icon={MapPin} size={20} className="mt-0.5 shrink-0 text-plum-500" />
            <span>{campus.address.map((line) => <span key={line} className="block">{line}</span>)}</span>
          </p>
          <p className="flex gap-3">
            <Icon icon={Phone} size={20} className="mt-0.5 shrink-0 text-plum-500" />
            <a href={campus.phone.href} className="font-medium text-ink hover:text-plum-700">{campus.phone.label}</a>
          </p>
        </address>
        <a
          href={campus.mapHref}
          target="_blank"
          rel="noreferrer"
          className="group mt-auto inline-flex items-center gap-2 pt-6 text-[0.9375rem] font-medium text-plum-700"
        >
          Get directions
          <span className="sr-only">(opens Google Maps in a new tab)</span>
          <Icon icon={ArrowUpRight} size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </article>
  );
}
