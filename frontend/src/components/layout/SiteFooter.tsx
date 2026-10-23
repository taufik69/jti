import { Container } from "@/components/ui/Container";
import { footerColumns } from "@/content/footer";
import { FooterColumn } from "./FooterColumn";
import { FooterContact } from "./FooterContact";
import { FooterLegal } from "./FooterLegal";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";

/** The single permitted gradient: a faint radial plum tint, top left. */
const tint = "bg-[radial-gradient(60rem_30rem_at_0%_0%,rgb(93_20_125/0.35),transparent_70%)]";

export function SiteFooter() {
  return (
    <footer className={`bg-plum-950 text-white/80 ${tint}`}>
      <Container className="pb-10 pt-16 md:pt-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-12 lg:col-span-3">
            <Logo onDark />
            <p className="mt-5 max-w-[30ch] text-[0.9375rem]">
              Nationally recognised training in Melbourne since 2008.
            </p>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>
          <div className="grid gap-x-10 md:col-span-12 md:grid-cols-2 md:gap-y-10 lg:col-span-9 lg:grid-cols-4">
            {footerColumns.map((column) => (
              <FooterColumn key={column.title} column={column} />
            ))}
            <div className="mt-10 md:mt-0">
              <FooterContact />
            </div>
          </div>
        </div>
        <FooterLegal />
      </Container>
    </footer>
  );
}
