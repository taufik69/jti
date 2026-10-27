import { Reveal } from "@/components/motion/Reveal";
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
    <footer className={`bg-plum-950 text-white/80 [&_p]:text-left [&_p]:hyphens-manual ${tint}`}>
      <FooterCta />
      <Container className="pb-8 pt-14 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-3" from="left">
            <FooterBrand />
          </Reveal>
          <Reveal className="grid gap-x-10 md:grid-cols-3 md:gap-y-10 lg:col-span-6" delay={0.1}>
            {footerColumns.map((column) => (
              <FooterColumn key={column.title} column={column} />
            ))}
          </Reveal>
          <Reveal className="lg:col-span-3" delay={0.2} from="right">
            <FooterContact />
          </Reveal>
        </div>
        <FooterLegal />
      </Container>
    </footer>
  );
}
