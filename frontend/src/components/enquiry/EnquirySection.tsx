import { lazy, Suspense } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { WhenVisible } from "@/components/ui/WhenVisible";
import { EnquiryContacts } from "./EnquiryContacts";

/** zod, react-hook-form and Radix Select only load when the form is about to be seen. */
const EnquiryForm = lazy(() => import("./EnquiryForm").then((m) => ({ default: m.EnquiryForm })));
const formHeight = "34rem";

export function EnquirySection() {
  return (
    <Section id="enquire" tone="paper" labelledBy="enquire-title">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5" from="left">
          <SectionLabel>Contact</SectionLabel>
          <h2 id="enquire-title" className="mt-5 text-h2">
            Get in touch with us
          </h2>
          <p className="mt-4 max-w-[44ch] text-body-lg">
            Leave your details and our admissions team will send you more information about
            studying at JTI.
          </p>
          <EnquiryContacts />
        </Reveal>
        <Reveal className="lg:col-span-7" delay={0.1} from="right">
          <div className="rounded-media border border-line bg-paper p-6 shadow-float md:p-10">
            <h3 className="text-h3">Send an enquiry</h3>
            <p className="mt-2 text-[0.9375rem] text-muted">Fields marked * are required.</p>
            <div className="mt-8">
              <WhenVisible minHeight={formHeight}>
                <Suspense fallback={<div aria-hidden style={{ minHeight: formHeight }} />}>
                  <EnquiryForm />
                </Suspense>
              </WhenVisible>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
