import type { FieldErrors, UseFormRegister } from "react-hook-form";
import { Field } from "@/components/form/Field";
import { Input } from "@/components/form/Input";
import { Textarea } from "@/components/form/Textarea";
import type { FieldConfig } from "@/content/agent-form";
import type { AgentValues } from "@/lib/agent-schema";
import { cn } from "@/lib/cn";

interface FormFieldsProps {
  fields: FieldConfig[];
  register: UseFormRegister<AgentValues>;
  errors: FieldErrors<AgentValues>;
}

/** Renders a list of field configs into the two-column form grid. */
export function FormFields({ fields, register, errors }: FormFieldsProps) {
  return (
    <div className="grid gap-x-6 gap-y-5 md:grid-cols-2">
      {fields.map((field) => {
        const id = `agent-${field.name}`;
        const error = errors[field.name]?.message;
        const describedBy = [error && `${id}-error`, field.hint && `${id}-hint`].filter(Boolean).join(" ") || undefined;
        const shared = { id, invalid: Boolean(error), "aria-describedby": describedBy, "aria-required": field.required || undefined, ...register(field.name) };
        return (
          <div key={field.name} className={cn(field.wide && "md:col-span-2")}>
            <Field id={id} label={field.label} required={field.required} hint={field.hint} error={error}>
              {field.type === "textarea" ? (
                <Textarea rows={3} {...shared} />
              ) : (
                <Input type={field.type ?? "text"} autoComplete={field.autoComplete} {...shared} />
              )}
            </Field>
          </div>
        );
      })}
    </div>
  );
}
