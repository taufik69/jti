import type { ReactNode } from "react";
import { PageHero } from "@/components/page/PageHero";
import { PageSwitcher } from "@/components/page/PageSwitcher";
import { aboutPages } from "@/content/about/pages";

interface AboutHeroProps {
  label: string;
  title: ReactNode;
  intro: ReactNode;
  aside?: ReactNode;
  children?: ReactNode;
}

/** PageHero with the About crumbs and the switcher between the four About pages. */
export function AboutHero({ label, ...rest }: AboutHeroProps) {
  return (
    <PageHero
      crumbs={[{ label: "Home", href: "/" }, { label: "About us" }, { label }]}
      label={label}
      footer={<PageSwitcher label="About JTI" pages={aboutPages} />}
      {...rest}
    />
  );
}
