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
  const { register, control, formState } = form;
  const { errors, isSubmitting } = formState;

  if (status === "sent") return <EnquirySuccess email={sentTo} onReset={reset} />;

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-x-5 gap-y-6 sm:grid-cols-2">
      <EnquiryTextFields register={register} errors={errors} />
      <EnquirySelectFields control={control} errors={errors} />
      <div className="sm:col-span-2">
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
      <div className="flex flex-col gap-4 sm:col-span-2">
        {status === "error" && (
          <p role="alert" className="text-[0.9375rem] text-error">
            Your enquiry couldn't be sent. Try again, or call us on {site.phones.general.label}.
          </p>
        )}
        <Button type="submit" size="lg" withArrow disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Sending…" : "Send enquiry"}
        </Button>
      </div>
    </form>
  );
}
