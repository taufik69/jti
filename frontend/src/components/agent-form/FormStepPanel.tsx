import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { FormStep } from "@/content/agent-form";
import type { AgentValues } from "@/lib/agent-schema";
import { FormFields } from "./FormFields";

interface FormStepPanelProps {
  step: FormStep;
  register: UseFormRegister<AgentValues>;
  errors: FieldErrors<AgentValues>;
  /** Text shown above the fields, e.g. the assessment intro. */
  lead?: string;
}

/** One step: its groups of fields under hairline-separated sub-headings. */
export function FormStepPanel({ step, register, errors, lead }: FormStepPanelProps) {
  return (
    <div className="space-y-10">
      {lead && <p className="rounded-card bg-plum-50/60 px-5 py-4 text-[0.9375rem]">{lead}</p>}
      {step.groups.map((group, i) => (
        <fieldset key={group.heading ?? i} className="space-y-5 border-line [&:not(:first-child)]:border-t [&:not(:first-child)]:pt-8">
          {group.heading && <legend className="sr-only">{group.heading}</legend>}
          {group.heading && (
            <div aria-hidden>
              <p className="text-[1.1875rem] font-medium text-ink">{group.heading}</p>
              {group.note && <p className="mt-1 text-[0.875rem] text-muted">{group.note}</p>}
            </div>
          )}
          <FormFields fields={group.fields} register={register} errors={errors} />
        </fieldset>
      ))}
    </div>
  );
}
