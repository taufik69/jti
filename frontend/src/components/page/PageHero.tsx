import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/cn";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

interface PageHeroProps {
  crumbs: Crumb[];
  label: string;
  title: ReactNode;
  intro: ReactNode;
  /** Right column on large screens: photo, quote, contact card, etc. */
  aside?: ReactNode;
  /** Extra content under the intro, e.g. buttons. */
  children?: ReactNode;
  /** Full-width row at the bottom of the hero, e.g. a section switcher. */
  footer?: ReactNode;
  className?: string;
}

/** Light editorial hero shared by the About and Study pages: crumbs, label, headline, intro. */
export function PageHero({ crumbs, label, title, intro, aside, children, footer, className }: PageHeroProps) {
  return (
    <header className={cn("bg-canvas pt-8 md:pt-10", !footer && "border-b border-line", className)}>
      <Container>
        <Breadcrumbs trail={crumbs} />
        <div className={cn("grid gap-10 py-12 md:py-16 lg:gap-16", aside && "lg:grid-cols-12 lg:items-center")}>
          <Reveal from="left" className={aside ? "lg:col-span-6" : "max-w-4xl"}>
            <SectionLabel>{label}</SectionLabel>
            <h1 className="mt-5 text-h1 text-balance text-ink">{title}</h1>
            <div className="mt-6 max-w-[56ch] text-body-lg text-body [&_p]:text-left">{intro}</div>
            {children && <div className="mt-8">{children}</div>}
          </Reveal>
          {aside && (
            <Reveal from="right" delay={0.1} className="lg:col-span-6">
              {aside}
            </Reveal>
          )}
        </div>
        {footer}
      </Container>
    </header>
  );
}
