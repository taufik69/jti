import { Container } from "@/components/ui/Container";
import { footerColumns } from "@/content/footer";
import { FooterBrand } from "./FooterBrand";
import { FooterColumn } from "./FooterColumn";
import { FooterContact } from "./FooterContact";
import { FooterCta } from "./FooterCta";
import { FooterLegal } from "./FooterLegal";

/** The single permitted gradient: a faint radial plum tint, top left. */
const tint = "bg-[radial-gradient(60rem_30rem_at_0%_0%,rgb(93_20_125/0.35),transparent_70%)]";

export function SiteFooter() {
  return (
    <footer className={`bg-plum-950 text-white/80 ${tint}`}>
      <FooterCta />
      <Container className="pb-8 pt-14 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <FooterBrand />
          </div>
          <div className="grid gap-x-10 md:grid-cols-3 md:gap-y-10 lg:col-span-6">
            {footerColumns.map((column) => (
              <FooterColumn key={column.title} column={column} />
            ))}
          </div>
          <div className="lg:col-span-3">
            <FooterContact />
          </div>
        </div>
        <FooterLegal />
      </Container>
    </footer>
  );
}
