import { site } from "@/content/site";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/brand/logo.svg`,
  foundingDate: String(site.founded),
  telephone: "+61 1300 144 584",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  identifier: [
    { "@type": "PropertyValue", propertyID: "RTO", value: site.rto },
    { "@type": "PropertyValue", propertyID: "CRICOS", value: site.cricos },
  ],
  sameAs: Object.values(site.social),
};
