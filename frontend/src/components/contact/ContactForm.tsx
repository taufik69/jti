import { Reveal } from "@/components/motion/Reveal";
import { EnquiryForm } from "@/components/enquiry/EnquiryForm";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const topics = ["Courses, intakes and fees", "Student support", "Payments and accounts", "Training and curriculum", "Technical problems", "Compliments"];

/** The shared enquiry form, with a short guide to what it can be used for. */
export function ContactForm() {
  return (
    <section id="enquire" aria-labelledby="form-title" className="scroll-mt-24 bg-canvas py-16 md:py-24">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal from="left" className="lg:col-span-4">
          <SectionLabel>Student enquiry</SectionLabel>
          <h2 id="form-title" className="mt-5 text-h2 text-ink">Send us a message</h2>
          <p className="mt-4 max-w-[38ch]">Choose an enquiry type so your message reaches the right team.</p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {topics.map((topic) => (
              <li key={topic} className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-[0.875rem] text-body">{topic}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal from="right" delay={0.08} className="lg:col-span-8">
          <div className="rounded-card border border-line bg-paper p-6 shadow-float md:p-10">
            <p className="mb-8 text-[0.9375rem] text-muted">Fields marked * are required.</p>
            <EnquiryForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
