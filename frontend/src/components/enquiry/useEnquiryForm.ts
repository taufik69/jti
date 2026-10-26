import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { deliverEnquiry } from "@/lib/deliver-enquiry";
import { enquirySchema, type EnquiryValues } from "@/lib/enquiry-schema";

export type EnquiryStatus = "idle" | "sent" | "error";

export function useEnquiryForm() {
  const [status, setStatus] = useState<EnquiryStatus>("idle");
  const [sentTo, setSentTo] = useState("");
  const form = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema),
    mode: "onTouched",
    defaultValues: { name: "", email: "", phone: "", enquiryType: "", course: "", message: "" },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setStatus("idle");
    const delivered = await deliverEnquiry(values).catch(() => false);

    if (!delivered) {
      setStatus("error");
      return;
    }
    setSentTo(values.email);
    setStatus("sent");
    form.reset();
  });

  return { form, status, sentTo, onSubmit, reset: () => setStatus("idle") };
}
