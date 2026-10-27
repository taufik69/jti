import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { stepFields } from "@/content/agent-form";
import { agentSchema, type AgentValues } from "@/lib/agent-schema";
import { deliverAgentApplication } from "@/lib/deliver-agent-application";

export type AgentStatus = "editing" | "sent" | "error";

/** Step-by-step form: each Next validates only that step's fields, then scrolls the form back into view. */
export function useAgentForm(scrollToTop: () => void) {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<AgentStatus>("editing");
  const form = useForm<AgentValues>({
    resolver: zodResolver(agentSchema),
    mode: "onTouched",
    defaultValues: { date: new Date().toISOString().slice(0, 10) },
  });
  const last = stepFields.length - 1;

  const go = (next: number) => {
    setStep(next);
    scrollToTop();
  };

  const next = async () => {
    if (await form.trigger(stepFields[step], { shouldFocus: true })) go(step + 1);
  };

  const back = () => go(step - 1);

  const onSubmit = form.handleSubmit(async (values) => {
    const delivered = await deliverAgentApplication(values).catch(() => false);
    setStatus(delivered ? "sent" : "error");
    scrollToTop();
  });

  return { form, step, last, status, next, back, onSubmit };
}
