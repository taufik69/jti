import { site } from "@/content/site";

export function FooterLegal() {
  const year = new Date().getFullYear();

  return (
    <div className="mt-16 border-t border-white/10 pt-6 text-[0.8125rem] text-white/70">
      <p>
        © {year} {site.legalName} · RTO {site.rto} · CRICOS {site.cricos} · ABN {site.abn}
      </p>
    </div>
  );
}
