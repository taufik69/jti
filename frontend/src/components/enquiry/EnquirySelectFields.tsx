import { Controller, type Control, type FieldErrors } from "react-hook-form";
import { Dropdown } from "@/components/form/Dropdown";
import { Field } from "@/components/form/Field";
import { campusOptions, courseOptions, enquiryTypes } from "@/content/enquiry";
import type { EnquiryValues } from "@/lib/enquiry-schema";

interface EnquirySelectFieldsProps {
  control: Control<EnquiryValues>;
  errors: FieldErrors<EnquiryValues>;
}

const fields = [
  { name: "enquiryType", label: "Enquiry type", options: enquiryTypes, placeholder: "Choose a type", required: true },
  { name: "course", label: "Course", options: courseOptions, placeholder: "Choose a course", required: false },
  { name: "campus", label: "Campus", options: campusOptions, placeholder: "Choose a campus", required: true },
] as const;

export function EnquirySelectFields({ control, errors }: EnquirySelectFieldsProps) {
  return (
    <>
      {fields.map((field) => {
        const id = `enq-${field.name}`;
        const error = errors[field.name]?.message;
        return (
          <Field key={field.name} id={id} label={field.label} required={field.required} error={error}>
            <Controller
              control={control}
              name={field.name}
              render={({ field: input }) => (
                <Dropdown
                  id={id}
                  name={input.name}
                  options={[...field.options]}
                  placeholder={field.placeholder}
                  value={input.value ?? ""}
                  onValueChange={input.onChange}
                  onBlur={input.onBlur}
                  invalid={Boolean(error)}
                  describedBy={error ? `${id}-error` : undefined}
                />
              )}
            />
          </Field>
        );
      })}
    </>
  );
}
