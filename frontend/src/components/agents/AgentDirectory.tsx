import { ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { RevealItem } from "@/components/motion/RevealItem";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/content/site";
import { agents } from "@/content/agents";
import { AgentCard } from "./AgentCard";

/** The agent cards, under a short line on how to confirm an agent with JTI. */
export function AgentDirectory() {
  return (
    <section aria-labelledby="agents-title" className="bg-canvas py-16 md:py-24">
      <Container>
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2 id="agents-title" className="text-h2 text-ink">International agents</h2>
          <p className="flex max-w-[46ch] items-start gap-3 text-[0.9375rem]">
            <Icon icon={ShieldCheck} size={20} className="mt-0.5 shrink-0 text-plum-700" />
            <span>
              Want to confirm an agent represents JTI? Call us on{" "}
              <a href={site.phones.general.href} className="font-medium text-plum-700 underline-offset-4 hover:underline">{site.phones.general.label}</a>.
            </span>
          </p>
        </div>
        <Reveal stagger className="mt-10 grid gap-5 md:grid-cols-2">
          {agents.map((agent) => (
            <RevealItem key={agent.abn}>
              <AgentCard agent={agent} />
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
