import { useRef } from "react";
import { scrollBehavior } from "@/lib/motion-preference";
import { agentSteps, stepTitles } from "@/content/agent-form";
import { assessmentIntro } from "@/content/agent-code";
import { AgentSuccess } from "./AgentSuccess";
import { DeclarationStep } from "./DeclarationStep";
import { FormNav } from "./FormNav";
import { FormStepPanel } from "./FormStepPanel";
import { FormStepper } from "./FormStepper";
import { useAgentForm } from "./useAgentForm";

/** Five-step agent application; every step stays mounted so typed answers survive Back. */
export function AgentApplicationForm() {
  const top = useRef<HTMLDivElement>(null);
  const scrollToTop = () => top.current?.scrollIntoView({ behavior: scrollBehavior(), block: "start" });
  const { form, step, last, status, next, back, onSubmit } = useAgentForm(scrollToTop);
  const { register, formState } = form;

  return (
    <div ref={top} className="scroll-mt-28 rounded-card border border-line bg-paper p-6 shadow-float md:p-10">
      {status === "sent" ? (
        <AgentSuccess />
      ) : (
        <form onSubmit={onSubmit} noValidate className="space-y-8">
          <FormStepper titles={stepTitles} current={step} />
          <div>
            <h2 className="text-h2 text-ink">{stepTitles[step]}</h2>
            <p className="mt-2 text-muted">{agentSteps[step]?.description ?? "Read the code, agree to it, and sign your application."}</p>
          </div>
          {agentSteps.map((s, i) => (
            <div key={s.id} hidden={i !== step}>
              <FormStepPanel step={s} register={register} errors={formState.errors} lead={s.id === "assessment" ? assessmentIntro : undefined} />
            </div>
          ))}
          <div hidden={step !== last}>
            <DeclarationStep register={register} errors={formState.errors} />
          </div>
          {status === "error" && (
            <p role="alert" className="rounded-card bg-error-50 px-5 py-4 text-error">We couldn't send your application. Please try again, or email info@jti.edu.au.</p>
          )}
          <FormNav step={step} last={last} submitting={formState.isSubmitting} onBack={back} onNext={next} />
        </form>
      )}
    </div>
  );
}
