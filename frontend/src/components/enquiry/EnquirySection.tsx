import { Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/content/site";
import { EnquiryForm } from "./EnquiryForm";

const contacts = [
  { icon: Phone, label: site.phones.general.label, href: site.phones.general.href },
  { icon: Mail, label: "info@jti.edu.au", href: "mailto:info@jti.edu.au" },
];

export function EnquirySection() {
  return (
    <Section id="enquire" tone="cream" labelledBy="enquire-title">
      <Reveal className="mx-auto max-w-[60ch] text-center">
        <SectionLabel className="justify-center">Contact</SectionLabel>
        <h2 id="enquire-title" className="mt-5 text-h2">
          Get in touch with us
        </h2>
        <p className="mt-4">
          Leave your details and we will send you more information about studying at JTI.
        </p>
        <ul className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {contacts.map((contact) => (
            <li key={contact.href}>
              <a href={contact.href} className="inline-flex items-center gap-2 font-medium text-plum-700 hover:underline">
                <Icon icon={contact.icon} size={16} />
                {contact.label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal className="mx-auto mt-12 max-w-5xl rounded-media border border-line bg-paper p-6 md:p-10" delay={0.1}>
        <EnquiryForm />
      </Reveal>
    </Section>
  );
}
