import { ArrowUp } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/content/site";

export function FooterLegal() {
  const year = new Date().getFullYear();

  return (
    <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-[0.8125rem] text-white/70 md:flex-row md:items-center md:justify-between">
      <p className="text-left">
        © {year} {site.legalName} · RTO {site.rto} · CRICOS {site.cricos} · ABN {site.abn}
      </p>
      <div className="flex items-center gap-6">
        <a href={site.portals.staff} rel="noopener" className="hover:text-white">
          Staff login
        </a>
        <a href="#top" className="group inline-flex items-center gap-2 hover:text-white">
          Back to top
          <Icon icon={ArrowUp} size={16} className="transition-transform group-hover:-translate-y-[2px]" />
        </a>
      </div>
    </div>
  );
}
