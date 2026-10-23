import { Field } from "@/components/form/Field";
import { Input } from "@/components/form/Input";
import { Dropdown } from "@/components/form/Dropdown";
import { Textarea } from "@/components/form/Textarea";

const campuses = [
  { value: "dandenong", label: "Dandenong" },
  { value: "online", label: "Online" },
  { value: "city", label: "City" },
];

export function FormShowcase() {
  return (
    <div className="grid gap-6 rounded-card border border-line bg-paper p-6 md:grid-cols-2 md:p-8">
      <Field id="sg-name" label="Full name" required>
        <Input id="sg-name" placeholder="Priya Sharma" autoComplete="name" />
      </Field>
      <Field id="sg-email" label="Email" required error="Enter an email address like name@example.com">
        <Input id="sg-email" type="email" defaultValue="priya@" invalid aria-describedby="sg-email-error" />
      </Field>
      <Field id="sg-phone" label="Phone" hint="Include country code if outside Australia">
        <Input id="sg-phone" type="tel" aria-describedby="sg-phone-hint" />
      </Field>
      <Field id="sg-campus" label="Campus" required>
        <Dropdown id="sg-campus" placeholder="Choose a campus" options={campuses} />
      </Field>
      <div className="md:col-span-2">
        <Field id="sg-message" label="Message">
          <Textarea id="sg-message" placeholder="Tell us which course you're interested in" />
        </Field>
      </div>
    </div>
  );
}
