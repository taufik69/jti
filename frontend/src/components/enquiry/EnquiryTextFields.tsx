import type { FieldErrors, UseFormRegister } from "react-hook-form";
import { Field } from "@/components/form/Field";
import { Input } from "@/components/form/Input";
import type { EnquiryValues } from "@/lib/enquiry-schema";

interface EnquiryTextFieldsProps {
  register: UseFormRegister<EnquiryValues>;
  errors: FieldErrors<EnquiryValues>;
}

const fields = [
  { name: "name", label: "Full name", type: "text", autoComplete: "name", required: true },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel", required: false },
  { name: "email", label: "Email", type: "email", autoComplete: "email", required: true },
] as const;

export function EnquiryTextFields({ register, errors }: EnquiryTextFieldsProps) {
  return (
    <>
      {fields.map((field) => {
        const id = `enq-${field.name}`;
        const error = errors[field.name]?.message;
        return (
          <Field key={field.name} id={id} label={field.label} required={field.required} error={error}>
            <Input
              id={id}
              type={field.type}
              autoComplete={field.autoComplete}
              invalid={Boolean(error)}
              aria-describedby={error ? `${id}-error` : undefined}
              {...register(field.name)}
            />
          </Field>
        );
      })}
    </>
  );
}
