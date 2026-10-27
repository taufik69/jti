import { Button } from "@/components/ui/Button";
import { agents } from "@/content/agents";

/** Hero aside on the agent list: the count, and the route to becoming one. */
export function JoinPanel() {
  return (
    <div className="rounded-card bg-plum-950 p-8 text-white/75 md:p-10">
      <p className="text-label text-gold-400">Education agents</p>
      <p className="mt-4 flex items-baseline gap-3">
        <span className="text-display leading-none text-white tabular-nums">{agents.length}</span>
        <span className="text-white/70">authorised international agents</span>
      </p>
      <div className="mt-8 border-t border-white/15 pt-6">
        <p className="text-h3 text-white">Recruit students for JTI</p>
        <p className="mt-2">Apply to join our agent network. The application takes five short steps.</p>
        <Button href="/agent-application" size="lg" withArrow className="mt-6">
          Apply to become an agent
        </Button>
      </div>
    </div>
  );
}
