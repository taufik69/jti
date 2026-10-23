import type { FieldErrors, UseFormRegister } from "react-hook-form";
import { Field } from "@/components/form/Field";
import { Select } from "@/components/form/Select";
import { campusOptions, courseOptions, enquiryTypes } from "@/content/enquiry";
import type { EnquiryValues } from "@/lib/enquiry-schema";

interface EnquirySelectFieldsProps {
  register: UseFormRegister<EnquiryValues>;
  errors: FieldErrors<EnquiryValues>;
}

const fields = [
  { name: "enquiryType", label: "Enquiry type", options: enquiryTypes, placeholder: "Choose a type", required: true },
  { name: "course", label: "Course", options: courseOptions, placeholder: "Choose a course", required: false },
  { name: "campus", label: "Campus", options: campusOptions, placeholder: "Choose a campus", required: true },
] as const;

export function EnquirySelectFields({ register, errors }: EnquirySelectFieldsProps) {
  return (
    <>
      {fields.map((field) => {
        const id = `enq-${field.name}`;
        const error = errors[field.name]?.message;
        return (
          <Field key={field.name} id={id} label={field.label} required={field.required} error={error}>
            <Select
              id={id}
              options={[...field.options]}
              placeholder={field.placeholder}
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
