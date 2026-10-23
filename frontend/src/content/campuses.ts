export interface Campus {
  name: string;
  role?: string;
  address: string[];
  phone: { label: string; href: string };
  mapHref: string;
}

function mapLink(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

/** Addresses as listed on jti.edu.au/contact-us. */
export const campuses: Campus[] = [
  {
    name: "City",
    role: "Head office",
    address: ["Level 4, 259 Collins Street", "Melbourne VIC 3000"],
    phone: { label: "(03) 9055 5007", href: "tel:0390555007" },
    mapHref: mapLink("259 Collins Street, Melbourne VIC 3000"),
  },
  {
    name: "Dandenong",
    address: ["Level 6, 106 Foster Street", "Dandenong VIC 3175"],
    phone: { label: "(03) 9212 3535", href: "tel:0392123535" },
    mapHref: mapLink("106 Foster Street, Dandenong VIC 3175"),
  },
];
