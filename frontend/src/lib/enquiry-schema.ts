import { z } from "zod";

export const campusValues = ["dandenong", "online", "city", "not-sure"] as const;

/** Shared by the form (client) and /api/enquiry (server). */
export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Enter your full name."),
  email: z.email("Enter an email address like name@example.com."),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[\d\s()-]{8,}$/, "Enter a phone number with at least 8 digits.")
    .or(z.literal("")),
  enquiryType: z.string().min(1, "Choose an enquiry type."),
  course: z.string(),
  campus: z.enum(campusValues, "Choose a campus."),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more, at least 10 characters.")
    .max(2000, "Keep your message under 2000 characters."),
});

export type EnquiryValues = z.infer<typeof enquirySchema>;

