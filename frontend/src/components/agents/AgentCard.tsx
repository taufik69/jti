import { Mail, UserRound } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { Agent } from "@/content/agents";

interface AgentCardProps {
  agent: Agent;
}

const monogram = (name: string) =>
  name
    .split(/\s+/)
    .filter((word) => /^[A-Za-z]/.test(word))
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

/** One authorised agent: monogram, name, registration facts and a direct email action. */
export function AgentCard({ agent }: AgentCardProps) {
  const showTrading = agent.tradingName !== agent.name;

  return (
    <article className="flex h-full flex-col rounded-card border border-line bg-paper p-7 transition-[border-color,box-shadow] duration-200 hover:border-plum-300 hover:shadow-float">
      <div className="flex items-start gap-4">
        <span aria-hidden className="grid size-12 shrink-0 place-items-center rounded-control bg-plum-950 text-[0.9375rem] font-medium tracking-wide text-gold-400">
          {monogram(agent.name)}
        </span>
        <div className="min-w-0">
          <h3 className="text-[1.1875rem] font-medium leading-snug text-ink [overflow-wrap:anywhere]">{agent.name}</h3>
          {showTrading && <p className="mt-1 text-[0.875rem] text-muted">Trading as {agent.tradingName}</p>}
        </div>
      </div>
      <dl className="mt-6 grid flex-1 grid-cols-2 gap-4 border-t border-line pt-5 text-[0.9375rem]">
        <div>
          <dt className="text-label text-muted">ABN</dt>
          <dd className="mt-1.5 font-medium tabular-nums text-ink">{agent.abn}</dd>
        </div>
        <div>
          <dt className="text-label text-muted">Contact</dt>
          <dd className="mt-1.5 flex items-center gap-1.5 font-medium text-ink">
            <Icon icon={UserRound} size={16} className="shrink-0 text-plum-500" />
            {agent.contact}
          </dd>
        </div>
      </dl>
      <a
        href={`mailto:${agent.email}`}
        className="mt-6 inline-flex items-center gap-2.5 rounded-control border border-line px-4 py-3 text-[0.9375rem] font-medium text-plum-700 transition-colors hover:border-plum-300 hover:bg-plum-50 [overflow-wrap:anywhere]"
      >
        <Icon icon={Mail} size={16} className="shrink-0" />
        {agent.email}
      </a>
    </article>
  );
}
