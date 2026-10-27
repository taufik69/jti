import type { FieldErrors, UseFormRegister } from "react-hook-form";
import { Check } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { codeAgreement } from "@/content/agent-code";
import { declarationFields } from "@/content/agent-form";
import type { AgentValues } from "@/lib/agent-schema";
import { CodeOfConduct } from "./CodeOfConduct";
import { FormFields } from "./FormFields";

interface DeclarationStepProps {
  register: UseFormRegister<AgentValues>;
  errors: FieldErrors<AgentValues>;
}

/** Read the code, tick to agree, sign with name, position and date. */
export function DeclarationStep({ register, errors }: DeclarationStepProps) {
  const error = errors.agreed?.message;

  return (
    <div className="space-y-8">
      <CodeOfConduct />
      <div>
        <label className="flex cursor-pointer items-start gap-4 rounded-card border border-line bg-paper p-5 has-[:checked]:border-plum-700 has-[:checked]:bg-plum-50/50">
          <input
            id="agent-agreed"
            type="checkbox"
            className="peer sr-only"
            aria-invalid={Boolean(error) || undefined}
            aria-describedby={error ? "agent-agreed-error" : undefined}
            {...register("agreed")}
          />
          <span aria-hidden className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-md border-2 border-plum-300 text-transparent transition-colors peer-checked:border-plum-700 peer-checked:bg-plum-700 peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-gold-500 peer-focus-visible:ring-offset-2">
            <Icon icon={Check} size={16} />
          </span>
          <span className="text-ink">
            {codeAgreement} <span className="text-plum-700">*</span>
          </span>
        </label>
        {error && (
          <p id="agent-agreed-error" role="alert" className="mt-2 text-[0.875rem] text-error">
            {error}
          </p>
        )}
      </div>
      <fieldset className="space-y-5 border-t border-line pt-8">
        <legend className="text-[1.1875rem] font-medium text-ink">Declaration</legend>
        <FormFields fields={declarationFields} register={register} errors={errors} />
      </fieldset>
    </div>
  );
}
