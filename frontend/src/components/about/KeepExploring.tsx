import { ArrowUpRight } from "lucide-react";
import { useLocation } from "react-router";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Link } from "@/components/ui/Link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { aboutPages } from "@/content/about/pages";

/** The other three About pages, as a quiet row of links before the call to action. */
export function KeepExploring() {
  const { pathname } = useLocation();
  const others = aboutPages.filter((page) => page.href !== pathname);

  return (
    <section aria-labelledby="keep-exploring" className="border-t border-line bg-paper py-14 md:py-16">
      <Container>
        <SectionLabel>More about JTI</SectionLabel>
        <h2 id="keep-exploring" className="sr-only">More about JTI</h2>
        <ul className="mt-6 grid divide-y divide-line border-y border-line md:grid-cols-3 md:divide-x md:divide-y-0">
          {others.map((page) => (
            <li key={page.href} className="md:first:*:pl-0">
              <Link href={page.href} className="group flex h-full items-start justify-between gap-6 py-6 transition-colors duration-150 md:px-6">
                <span>
                  <span className="block text-h3 text-ink transition-colors group-hover:text-plum-700">{page.label}</span>
                  <span className="mt-1.5 block text-[0.9375rem] text-muted">{page.blurb}</span>
                </span>
                <Icon icon={ArrowUpRight} className="mt-1 shrink-0 text-plum-700 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
