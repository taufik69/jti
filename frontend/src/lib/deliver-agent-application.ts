import type { AgentValues } from "./agent-schema";

/**
 * Hands a validated agent application to JTI's international team.
 * TODO: post to a real endpoint (email service, CRM or a small API). Nothing is sent yet.
 */
export async function deliverAgentApplication(values: AgentValues): Promise<boolean> {
  void values;
  return true;
}
