"use client";

import { Field } from "@/components/form/Field";
import { Textarea } from "@/components/form/Textarea";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";
import { EnquirySelectFields } from "./EnquirySelectFields";
import { EnquirySuccess } from "./EnquirySuccess";
import { EnquiryTextFields } from "./EnquiryTextFields";
import { useEnquiryForm } from "./useEnquiryForm";

export function EnquiryForm() {
  const { form, status, sentTo, onSubmit, reset } = useEnquiryForm();
  const { register, formState } = form;
  const { errors, isSubmitting } = formState;

  if (status === "sent") return <EnquirySuccess email={sentTo} onReset={reset} />;

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-x-5 gap-y-6 md:grid-cols-3">
      <EnquiryTextFields register={register} errors={errors} />
      <EnquirySelectFields register={register} errors={errors} />
      <div className="md:col-span-3">
        <Field id="enq-message" label="Message" required error={errors.message?.message}>
          <Textarea
            id="enq-message"
            invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "enq-message-error" : undefined}
            placeholder="Tell us which course you're interested in and when you'd like to start."
            {...register("message")}
          />
        </Field>
      </div>
      <div className="flex flex-col items-center gap-4 md:col-span-3">
        {status === "error" && (
          <p role="alert" className="text-[0.9375rem] text-error">
            Your enquiry couldn't be sent. Try again, or call us on {site.phones.general.label}.
          </p>
        )}
        <Button type="submit" size="lg" disabled={isSubmitting} className="min-w-48">
          {isSubmitting ? "Sending…" : "Send enquiry"}
        </Button>
      </div>
    </form>
  );
}
