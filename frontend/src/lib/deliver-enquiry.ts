import type { EnquiryValues } from "./enquiry-schema";

/**
 * Hands a validated enquiry to whoever answers it. The form already validates with
 * the zod schema, so this only needs to send.
 * TODO: post to a real endpoint (email service, CRM or a small API). Nothing is sent yet.
 */
export async function deliverEnquiry(values: EnquiryValues): Promise<boolean> {
  void values;
  return true;
}
