import { campuses } from "../campuses";
import type { StudySection } from "./types";

const [city, dandenong] = campuses;

/** Know Your College after the CEO welcome. Campus addresses come from the contact page, the current source. */
export const kycSections: StudySection[] = [
  {
    id: "melbourne",
    title: "Life in Melbourne",
    blocks: [
      { type: "p", text: "Melbourne is the capital of Victoria and Australia's second largest city. It has been ranked the world's most liveable city by the Economist Intelligence Unit, and international students often vote it one of the world's best study destinations." },
      { type: "p", text: "Melbourne is perhaps Australia's most multicultural city: people from over 140 countries call it home. JTI's Dandenong campus is in one of Melbourne's most culturally diverse regions, so you are sure to find a little bit of home nearby." },
      { type: "p", text: "The city has a strong café culture and is known as the food and wine capital of Australia. Its central laneways hide food outlets and shops, and its blend of 19th-century and contemporary architecture, beaches, parks and gardens make it a city where curiosity is always rewarded." },
      { type: "p", text: "Australia is often called “sport mad”, nowhere more than Melbourne. The Melbourne Cricket Ground (MCG) is the spiritual home of Aussie Rules (AFL) football, and there's always a wide choice of musicals, concerts, plays, live music, comedy and theatre." },
    ],
  },
  {
    id: "transport",
    title: "Getting around Melbourne",
    blocks: [
      { type: "p", text: "Trains, trams and buses are an easy way to reach the city's attractions, sporting venues and shopping precincts, and to get to and from class. All public transport uses a single prepaid smart card called [myki](https://www.ptv.vic.gov.au/tickets/myki). Services run from early morning until very late at night." },
      { type: "p", text: "Melbourne has the largest tram network in the world, and its trams are iconic cultural assets." },
      { type: "p", text: "Melbourne (Tullamarine) International Airport is about 20 km from the city centre. A [SkyBus](https://www.skybus.com.au/) service runs between the airport and the city every 10–15 minutes, much cheaper than a taxi. The SkyBus city terminus is at [Southern Cross Station](https://southerncrossstation.com.au/), with train connections across Melbourne." },
    ],
  },
  {
    id: "costs",
    title: "Cost of living",
    blocks: [
      { type: "p", text: "Living costs depend on the accommodation you choose and your lifestyle. Groceries, utilities, dining out and entertainment cost about the same across Melbourne, but accommodation in and around the city centre costs more than in outer suburbs, while travel costs rise the further out you live." },
      { type: "note", text: "Student visa applicants must show they can cover living expenses. Check the current required amount on the [Department of Home Affairs website](https://www.homeaffairs.gov.au/)." },
      { type: "p", text: "Expect start-up and ongoing costs such as a rental bond and rent, furniture, electricity and gas, internet, phone, groceries and transport. A computer or laptop is advisable for your studies." },
      {
        type: "table",
        caption: "Approximate costs as published by JTI. Prices change, so treat these as a guide.",
        head: ["Item", "Approximate cost"],
        rows: [
          ["Rental accommodation (per week)", "$150 – $400+"], ["Groceries (per week)", "$70 – $100+"], ["Utilities: power, gas (per month)", "$50 – $80"],
          ["Cinema ticket", "$14 – $19"], ["myki public transport (per week)", "$30 – $43"], ["Phone and internet (per month)", "$50+"],
          ["Restaurant meal", "$20+"], ["Fast food meal", "$8 – $12"], ["Clothes, entertainment", "$50+"],
        ],
      },
    ],
  },
  {
    id: "climate",
    title: "Melbourne's climate",
    blocks: [
      { type: "p", text: "Melbourne has a relatively mild climate with distinct seasons, although you may get all four in one day! Students from tropical countries may find winter cool (it never snows in the city), and northern-hemisphere students will find summer warm to hot, though extremes are rare. Summer heat is dry, with far less humidity than other parts of Australia." },
      {
        type: "table",
        head: ["Months", "Season", "Average min °C", "Average max °C"],
        rows: [["Dec – Feb", "Summer", "22", "28"], ["Mar – May", "Autumn", "12", "20"], ["Jun – Aug", "Winter", "7", "17"], ["Sep – Oct", "Spring", "15", "23"]],
      },
      { type: "p", text: "Seasons are the reverse of the northern hemisphere. The summer holidays (December and January) coincide with Christmas; classes stop around the beginning of December and resume in late January or early February." },
    ],
  },
  {
    id: "events",
    title: "What's on in Melbourne",
    blocks: [
      { type: "p", text: "Free events, community events, cultural festivals, music, art, markets, theatre, talks, sport, food and drink: these sites list what's happening in Melbourne." },
      { type: "links", items: [{ label: "What's On Melbourne", href: "https://whatson.melbourne.vic.gov.au/" }, { label: "Study Melbourne", href: "https://www.studymelbourne.vic.gov.au/" }] },
    ],
  },
  {
    id: "campuses",
    title: "Our campuses",
    blocks: [
      {
        type: "cards",
        items: [
          { title: `${city.name} campus (${city.role?.toLowerCase()})`, text: "In the heart of Melbourne's CBD, near Flinders Street Station and the State Library of Victoria. Spacious classrooms with projectors, high-speed internet, and a resource centre with computers, books and access to online resources.", meta: [city.address.join(", "), city.phone.label] },
          { title: `${dandenong.name} campus`, text: "In Melbourne's south-east, a very culturally diverse area reflected in our student cohort. Modern classrooms with audio-visual equipment, professional practice training labs, a resource library, free internet, computers, and a kitchen with complimentary tea and coffee.", meta: [dandenong.address.join(", "), dandenong.phone.label] },
        ],
      },
    ],
  },
  {
    id: "support",
    title: "Orientation and support",
    blocks: [
      { type: "h3", text: "Orientation (mandatory)" },
      { type: "p", text: "Every student must attend orientation day at the start of their studies. You'll receive an orientation kit with the Melbourne train network, a student key contact card, an OSHC brochure, information about [Fair Work](https://www.fairwork.gov.au/) and the [JTI Student Handbook](/study/pre-enrolment-guide-students-handbook), and help applying for your Unique Student Identifier (USI)." },
      { type: "p", text: "A campus tour shows you classrooms, student areas, administration, the library, computer room, fire and emergency exits, evacuation points and restricted areas. An optional city tour shows you nearby train stations, banks, the post office, supermarkets, the council library and places to eat." },
      { type: "h3", text: "Practical help" },
      { type: "list", items: [
        "Setting up a bank account, and applying for your [tax file number](https://www.ato.gov.au/Individuals/Tax-file-number/), USI and [myki](https://www.ptv.vic.gov.au/tickets/myki) card.",
        "Payment plans and direct debits with easy instalments, to help you pay fees on time without unnecessary financial strain.",
        "Medical emergencies: our staff will go with you to the hospital or doctor. On campus, JTI's emergency process is activated immediately.",
        "Borrow a laptop while on campus. Contact Student Support at your campus, email [its@jti.edu.au](mailto:its@jti.edu.au) or [studentsupport@jti.edu.au](mailto:studentsupport@jti.edu.au).",
        "Directions to free legal advice if you need it.",
      ] },
      { type: "h3", text: "Counselling" },
      { type: "p", text: "JTI offers free counselling with a qualified counsellor; book an appointment through Student Support. They can also help you book other free services:" },
      { type: "links", items: [
        { label: "Melbourne Counselling Service · (03) 9653 3250", href: "http://melbournecounsellingservice.org.au/" },
        { label: "The Salvation Army · 13 72 58", href: "https://www.salvationarmy.org.au/" },
        { label: "Beyond Blue · 1300 22 4636", href: "https://www.beyondblue.org.au/" },
        { label: "Lifeline (24/7 crisis support) · 13 11 14", href: "https://www.lifeline.org.au/" },
      ] },
    ],
  },
];
