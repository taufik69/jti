import { CampusSection } from "@/components/contact/CampusSection";
import { ContactForm } from "@/components/contact/ContactForm";
import { QuickContact } from "@/components/contact/QuickContact";
import { PageHero } from "@/components/page/PageHero";

/** /contact-us: quick contacts, the enquiry form, and both campuses with maps. */
export function ContactPage() {
  return (
    <div className="[&_p]:text-left [&_p]:hyphens-manual">
      <title>Contact us · Job Training Institute</title>
      <meta name="description" content="Call, email or visit Job Training Institute at our Melbourne City or Dandenong campus, or send us an enquiry." />
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact us" }]}
        label="Contact us"
        title="We're here to help"
        intro={<p>Questions about courses, enrolment, fees or student support? Call, email or send us a message and the right team will get back to you.</p>}
        aside={<QuickContact />}
      />
      <ContactForm />
      <CampusSection />
    </div>
  );
}
