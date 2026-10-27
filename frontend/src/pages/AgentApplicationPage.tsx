import { AgentApplicationForm } from "@/components/agent-form/AgentApplicationForm";
import { AgentsHero } from "@/components/agents/AgentsHero";
import { ApplyChecklist } from "@/components/agents/ApplyChecklist";
import { Container } from "@/components/ui/Container";

/** /agent-application: the education agent application, as a five-step form. */
export function AgentApplicationPage() {
  return (
    <div className="[&_p]:text-left [&_p]:hyphens-manual">
      <title>Education agent application · Job Training Institute</title>
      <meta name="description" content="Apply to become an education agent for Job Training Institute." />
      <AgentsHero
        label="Agent application"
        title="Become a JTI education agent"
        intro={<p>Tell us about your agency, your team and the providers you work with. Please also provide a copy of your business profile and associated documentation.</p>}
        aside={<ApplyChecklist />}
      />
      <section aria-label="Application form" className="bg-canvas py-12 md:py-20">
        <Container className="max-w-4xl">
          <AgentApplicationForm />
        </Container>
      </section>
    </div>
  );
}
