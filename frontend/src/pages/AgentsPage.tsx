import { AgentDirectory } from "@/components/agents/AgentDirectory";
import { AgentsHero } from "@/components/agents/AgentsHero";
import { JoinPanel } from "@/components/agents/JoinPanel";

/** /list-agents: JTI's international education agents. */
export function AgentsPage() {
  return (
    <div className="[&_p]:text-left [&_p]:hyphens-manual">
      <title>List of JTI agents · Job Training Institute</title>
      <meta name="description" content="International education agents who represent Job Training Institute." />
      <AgentsHero
        label="List of JTI agents"
        title="Our international education agents"
        intro={<p>These agencies represent Job Training Institute and can help international students choose a course, apply and prepare for study in Melbourne. Contact them directly using the details below.</p>}
        aside={<JoinPanel />}
      />
      <AgentDirectory />
    </div>
  );
}
