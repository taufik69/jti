import type { ReactNode } from "react";
import { PageHero } from "@/components/page/PageHero";
import { PageSwitcher } from "@/components/page/PageSwitcher";
import { agentPages } from "@/content/agents";

interface AgentsHeroProps {
  label: string;
  title: ReactNode;
  intro: ReactNode;
  aside?: ReactNode;
}

/** PageHero with the Agents crumbs and a switcher between the two agent pages. */
export function AgentsHero({ label, ...rest }: AgentsHeroProps) {
  return (
    <PageHero
      crumbs={[{ label: "Home", href: "/" }, { label: "Agents" }, { label }]}
      label={label}
      footer={<PageSwitcher label="Agents" pages={agentPages} />}
      {...rest}
    />
  );
}
