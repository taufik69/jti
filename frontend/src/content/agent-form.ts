import type { AgentField } from "@/lib/agent-schema";

export interface FieldConfig {
  name: AgentField;
  label: string;
  type?: "text" | "email" | "tel" | "url" | "date" | "textarea";
  required?: boolean;
  autoComplete?: string;
  hint?: string;
  /** Take the full row in the two-column grid. */
  wide?: boolean;
}

export interface FormStep {
  id: string;
  title: string;
  description: string;
  /** Fields grouped under optional sub-headings. */
  groups: { heading?: string; note?: string; fields: FieldConfig[] }[];
}

const referee = (n: 1 | 2, required: boolean): FieldConfig[] => [
  { name: `ref${n}College`, label: "College name", required },
  { name: `ref${n}Contact`, label: "Contact person", required },
  { name: `ref${n}Position`, label: "Position title", required },
  { name: `ref${n}Address`, label: "Postal address", required },
  { name: `ref${n}Email`, label: "Email address", type: "email" },
  { name: `ref${n}Mobile`, label: "Mobile", type: "tel", required },
  { name: `ref${n}Telephone`, label: "Telephone", type: "tel" },
];

/** The live form, split into steps. The code of conduct step is rendered separately. */
export const agentSteps: FormStep[] = [
  {
    id: "business",
    title: "Your business",
    description: "Registered details of your agency.",
    groups: [
      { fields: [
        { name: "businessName", label: "Registered business name", required: true, autoComplete: "organization", wide: true },
        { name: "director1", label: "Proprietor or director (1)", required: true },
        { name: "director2", label: "Proprietor or director (2)" },
        { name: "yearEstablished", label: "Year established", required: true, hint: "Four digits, e.g. 2015." },
      ] },
      { heading: "Postal address", fields: [
        { name: "street", label: "Street address", required: true, autoComplete: "street-address", wide: true },
        { name: "suburb", label: "Suburb or city", required: true, autoComplete: "address-level2" },
        { name: "postcode", label: "Postcode", required: true, autoComplete: "postal-code" },
        { name: "country", label: "Country", required: true, autoComplete: "country-name" },
      ] },
    ],
  },
  {
    id: "contact",
    title: "Contact details",
    description: "Who we should talk to about your application.",
    groups: [
      { fields: [
        { name: "contactName", label: "Principal contact name", required: true, autoComplete: "name", wide: true },
        { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
        { name: "mobile", label: "Mobile", type: "tel", required: true, autoComplete: "tel" },
        { name: "telephone", label: "Telephone", type: "tel" },
        { name: "fax", label: "Fax", type: "tel" },
        { name: "website", label: "Website", type: "url", autoComplete: "url", wide: true },
      ] },
    ],
  },
  {
    id: "assessment",
    title: "About your agency",
    description: "Seven questions that help us assess your application.",
    groups: [
      { fields: [
        { name: "services", label: "1. What services does your business provide?", type: "textarea", required: true, wide: true },
        { name: "association", label: "2. Are you a member of an agents association in your country or Australia? Provide details.", type: "textarea", required: true, wide: true },
        { name: "staff", label: "3. List your staff, including their positions and interactions with potential students.", type: "textarea", required: true, wide: true },
        { name: "providers", label: "4. Which Australian education providers do you currently represent? (maximum 5)", type: "textarea", required: true, wide: true },
        { name: "countries", label: "5. Which countries do you recruit students from?", type: "textarea", required: true, wide: true },
        { name: "studentsLastYear", label: "6. How many students did you send to Australia last year?", type: "textarea", required: true, wide: true },
        { name: "terminated", label: "7. Has your company ever had its agreement terminated by a Registered Training Organisation? If yes, provide details.", type: "textarea", required: true, wide: true },
      ] },
    ],
  },
  {
    id: "referees",
    title: "Referees",
    description: "Education providers in Australia you currently work with.",
    groups: [
      { heading: "Referee 1", note: "At least one referee is required.", fields: referee(1, true) },
      { heading: "Referee 2", fields: referee(2, false) },
    ],
  },
];

export const declarationFields: FieldConfig[] = [
  { name: "applicantName", label: "Applicant name", required: true, autoComplete: "name" },
  { name: "position", label: "Position in organisation", required: true, autoComplete: "organization-title" },
  { name: "date", label: "Date", type: "date", required: true },
];

/** Fields to validate before leaving each step; the last entry is the declaration step. */
export const stepFields: AgentField[][] = [
  ...agentSteps.map((step) => step.groups.flatMap((group) => group.fields.map((field) => field.name))),
  ["agreed", ...declarationFields.map((field) => field.name)],
];

export const stepTitles = [...agentSteps.map((step) => step.title), "Code of conduct"];
