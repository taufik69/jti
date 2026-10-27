import type { StudyPage } from "./types";

const beforeLeaving = [
  "Passport", "Student visa", "Make contact with JTI", "Arrange immunisations and medications with your doctor",
  "Apply for a credit card and/or arrange sufficient funds", "Confirm overseas access to your funds with your bank",
  "Make travel arrangements", "Arrange travel insurance", "Tell JTI your travel details",
  "Arrange transport from the airport to your accommodation (JTI can help with this)",
  "Pack the name and contact details of a JTI representative",
  "Pack enough currency for taxis, buses, phone calls etc. in an emergency",
  "Pack your important documents: passport, Letter of Offer, eCoE, certified copies of qualifications and certificates, travel insurance policy, ID cards, driver's licence, birth certificate (or copies)",
];

/** Getting ready to come to Melbourne, and the checklists for the first weeks. */
export const arrivalPages: StudyPage[] = [
  {
    slug: "preparing-to-arrive",
    title: "Preparing to arrive",
    group: "international",
    summary: "Travel, documents, customs and health: what to sort out before you fly to Melbourne.",
    sections: [
      {
        id: "travel",
        title: "Travelling to Melbourne",
        blocks: [
          { type: "p", text: "You will need to make your own travel arrangements to Australia. Try to arrive at least 1–2 weeks before Student Orientation week, to give yourself time to settle in, adjust to your new surroundings and get over jet lag." },
          { type: "p", text: "Students coming to Melbourne fly into Melbourne's Tullamarine International Airport, about 20 kilometres north of the city. The international and domestic terminals are in the same building; the international terminal is called T2." },
        ],
      },
      {
        id: "documents",
        title: "Documents",
        blocks: [
          { type: "p", text: "Prepare a folder of official documents to bring with you to Australia, including:" },
          {
            type: "list",
            items: [
              "Valid passport with student visa", "Letter of Offer from Job Training Institute", "Confirmation of Enrolment (eCoE) from Job Training Institute",
              "Receipts of payments (e.g. tuition fees, OSHC, bank statements)", "Insurance policies (travel insurance, OSHC)",
              "Certified copies of your academic transcripts and qualifications",
              "Other personal identification, e.g. birth certificate, ID card, driver's licence", "Medical records and/or prescriptions",
            ],
          },
          { type: "p", text: "If you are travelling with your family, include their documents as well." },
        ],
      },
      {
        id: "customs",
        title: "What to bring (and what not to bring)",
        blocks: [
          { type: "p", text: "Visitors are often surprised by how strict Australian Customs and Quarantine can be. Because Australia is an island continent, it has stayed free of many diseases and pests found elsewhere, and Customs and Quarantine work to keep it that way." },
          { type: "note", text: "If you're not sure whether your goods are prohibited, declare them on the Incoming Passenger Card you receive on the plane." },
          { type: "p", text: "We recommend visiting the [Department of Agriculture travel page](http://www.agriculture.gov.au/travelling) before you travel to read what you can't take into Australia, and let family and friends know what can't be mailed to Australia." },
          { type: "p", text: "The standard voltage in Australia is 240V. Plugs have three flat pins, one of which is an earth pin. You may need an adaptor or to have plugs changed when you arrive." },
        ],
      },
      {
        id: "health",
        title: "Health and medicine",
        blocks: [
          { type: "p", text: "Have medical, optical and dental check-ups before you leave home. Overseas Student Health Cover (OSHC) does not include dental and optical services, and these can be expensive in Australia. You may want to bring spare glasses or contact lenses." },
          { type: "p", text: "If you have a pre-existing medical condition or take medication, bring a letter or prescription from your doctor that uses the generic drug names. You must declare all prescription, alternative, herbal and traditional medicines and vitamin and mineral preparations to Customs. Keep all medicines in their original packaging." },
        ],
      },
      {
        id: "flight",
        title: "On your flight",
        blocks: [
          { type: "p", text: "Before landing, passengers are given an Incoming Passenger Card to fill in. This is a legal document." },
          { type: "note", text: "You must tick YES if you are carrying any food (any edible item), plant material including wooden souvenirs, or animal products." },
          { type: "p", text: "Don't be afraid to ask airline staff if you have questions. If you carry more than AU$10,000 in cash you must also declare it. We strongly recommend not carrying large sums of cash; arrange an electronic transfer into your Australian bank account once it is open." },
        ],
      },
      {
        id: "checklist",
        title: "Pre-arrival checklist",
        blocks: [
          { type: "p", text: "As soon as your student visa is approved, work through this checklist." },
          { type: "checklist", id: "pre-arrival", items: beforeLeaving },
          { type: "note", text: "Leave originals or copies of your documents safely with family in your home country in case of loss." },
        ],
      },
      {
        id: "links",
        title: "Useful links",
        blocks: [
          { type: "links", items: [
            { label: "Department of Home Affairs", href: "https://www.homeaffairs.gov.au/" },
            { label: "Department of Education", href: "https://www.education.gov.au/" },
            { label: "Study Melbourne", href: "https://www.studymelbourne.vic.gov.au/" },
            { label: "Commonwealth Ombudsman", href: "https://www.ombudsman.gov.au/" },
          ] },
        ],
      },
    ],
  },
  {
    slug: "before-leaving-home-checklist",
    title: "Before leaving home checklist",
    group: "international",
    summary: "Everything to have, or have done, before you leave for Australia. Tick items off as you go.",
    sections: [
      {
        id: "checklist",
        title: "Before you leave",
        blocks: [
          { type: "checklist", id: "pre-arrival", items: beforeLeaving },
          { type: "note", text: "Leave originals or copies of your documents safely with family in your home country in case of loss." },
          { type: "links", items: [{ label: "Read the full guide: Preparing to arrive", href: "/study/preparing-to-arrive" }] },
        ],
      },
    ],
  },
  {
    slug: "checklist-on-arrival",
    title: "Checklist on arrival",
    group: "international",
    summary: "Your first days in Melbourne. Tick items off as you go.",
    sections: [
      {
        id: "checklist",
        title: "Have you…",
        blocks: [
          {
            type: "checklist",
            id: "on-arrival",
            items: [
              "Contacted your family to let them know you have arrived safely?", "Finalised your long-term accommodation?", "Organised insurance?",
              "Opened a bank account?", "Obtained a tax file number?", "Ordered your OSHC membership card?",
              "Explored public transport options in your area?", "Found your local supermarket, doctor's surgery, chemist and shopping centre?",
              "Organised furniture and whitegoods for your home (if required)?", "Made arrangements for your children?",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "checklist-on-getting-started",
    title: "Checklist on getting started",
    group: "international",
    summary: "Your first weeks at JTI. Tick items off as you go.",
    sections: [
      {
        id: "checklist",
        title: "Have you…",
        blocks: [
          {
            type: "checklist",
            id: "getting-started",
            items: [
              "Completed your enrolment?", "Attended orientation?", "Updated your residential address with the International Student Coordinator (ISC)?",
              "Explored and familiarised yourself with the campus?", "Found a place of worship?", "Familiarised yourself with the emergency numbers?",
            ],
          },
        ],
      },
    ],
  },
];
