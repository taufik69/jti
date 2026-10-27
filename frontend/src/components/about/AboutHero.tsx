import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/cn";
import { AboutSwitcher } from "./AboutSwitcher";
import { Breadcrumbs } from "./Breadcrumbs";

interface AboutHeroProps {
  label: string;
  title: ReactNode;
  intro: ReactNode;
  /** Right column on large screens: photo, featured quote, index, etc. */
  aside?: ReactNode;
  /** Extra content under the intro, e.g. buttons. */
  children?: ReactNode;
  className?: string;
}

/** Shared light hero for the About pages: crumbs, label, headline, intro, page switcher. */
export function AboutHero({ label, title, intro, aside, children, className }: AboutHeroProps) {
  return (
    <header className={cn("bg-canvas pt-8 md:pt-10", className)}>
      <Container>
        <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "About us" }, { label }]} />
        <div className={cn("grid gap-10 py-12 md:py-16 lg:gap-16", aside && "lg:grid-cols-12 lg:items-center")}>
          <Reveal from="left" className={aside ? "lg:col-span-6" : "max-w-4xl"}>
            <SectionLabel>{label}</SectionLabel>
            <h1 className="mt-5 text-h1 text-balance text-ink">{title}</h1>
            <div className="mt-6 max-w-[56ch] text-body-lg text-body">{intro}</div>
            {children && <div className="mt-8">{children}</div>}
          </Reveal>
          {aside && (
            <Reveal from="right" delay={0.1} className="lg:col-span-6">
              {aside}
            </Reveal>
          )}
        </div>
        <AboutSwitcher />
      </Container>
    </header>
  );
}
