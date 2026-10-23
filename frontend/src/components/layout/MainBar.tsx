"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/cn";
import { DesktopNav } from "./DesktopNav";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";

/**
 * Height never changes on scroll (no layout shift). Once scrolled, the bar turns
 * translucent with a soft shadow and the logo eases down to 88%.
 * The <header> itself is sticky, so it must not be wrapped by another header.
 */
export function MainBar() {
  const scrolled = useScrolled();

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-[background-color,box-shadow,border-color] duration-200",
        scrolled
          ? "border-transparent bg-paper/90 shadow-float backdrop-blur-md"
          : "border-line bg-paper",
      )}
    >
      <Container className="relative flex h-18 items-center justify-between gap-6 lg:h-20">
        <Logo
          className={cn(
            "origin-left transition-transform duration-200 ease-out",
            scrolled && "scale-[0.88]",
          )}
        />
        <DesktopNav />
        <div className="flex items-center gap-2">
          <Button href="/#enquire" variant="outline" className="hidden xl:inline-flex">
            Enquire
          </Button>
          <Button href={site.applyHref} withArrow className="px-4 sm:px-5">
            Apply now
          </Button>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
