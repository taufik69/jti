import { z } from "zod";

const required = (label: string) => z.string().trim().min(1, `Enter ${label}.`);
const optional = z.string().trim();
const answer = z.string().trim().min(3, "Please answer this question.").max(2000, "Keep your answer under 2000 characters.");
const phone = z.string().trim().regex(/^\+?[\d\s()-]{6,}$/, "Enter a phone number with at least 6 digits.");
const optionalPhone = phone.or(z.literal(""));
const optionalEmail = z.email("Enter an email address like name@example.com.").or(z.literal(""));

/** Fields mirror jti.edu.au/agent-application; required ones are those marked * there. */
export const agentSchema = z.object({
  businessName: required("your registered business name"),
  director1: required("a proprietor or director"),
  director2: optional,
  yearEstablished: z.string().trim().regex(/^(19|20)\d{2}$/, "Enter a four-digit year, e.g. 2015."),
  street: required("a street address"),
  suburb: required("a suburb or city"),
  postcode: required("a postcode"),
  country: required("a country"),
  contactName: required("the principal contact's name"),
  telephone: optionalPhone,
  mobile: phone,
  email: z.email("Enter an email address like name@example.com."),
  fax: optional,
  website: optional,
  services: answer,
  association: answer,
  staff: answer,
  providers: answer,
  countries: answer,
  studentsLastYear: answer,
  terminated: answer,
  ref1College: required("the college name"),
  ref1Contact: required("a contact person"),
  ref1Position: required("their position title"),
  ref1Address: required("a postal address"),
  ref1Email: optionalEmail,
  ref1Mobile: phone,
  ref1Telephone: optionalPhone,
  ref2College: optional,
  ref2Contact: optional,
  ref2Position: optional,
  ref2Address: optional,
  ref2Email: optionalEmail,
  ref2Mobile: optionalPhone,
  ref2Telephone: optionalPhone,
  agreed: z.literal(true, "You need to agree to the Code of Conduct to apply."),
  applicantName: required("your name"),
  date: required("today's date"),
  position: required("your position in the organisation"),
});

export type AgentValues = z.infer<typeof agentSchema>;
export type AgentField = keyof AgentValues;
