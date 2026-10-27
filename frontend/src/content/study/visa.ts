import type { StudyPage } from "./types";

/** Visas, health cover and the ESOS framework. */
export const visaPages: StudyPage[] = [
  {
    slug: "arranging-visas",
    title: "Arranging visas",
    group: "international",
    summary: "To study in Australia you need both admission to an institution and a student visa from the Australian Government.",
    sections: [
      {
        id: "process",
        title: "How the process works",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Choose your course and institution" },
              { title: "Apply to the institution", text: "Submit your application with the required documents." },
              { title: "Receive a Letter of Offer", text: "If you meet the institution's requirements." },
              { title: "Accept the offer and pay the fees", text: "You then receive your electronic Confirmation of Enrolment (eCoE)." },
              { title: "Apply for your student visa" },
            ],
          },
          { type: "p", text: "This process can be complicated, so many applicants get help from an accredited agent. Education agents in your home country can help you apply to study in Australia." },
        ],
      },
      {
        id: "requirements",
        title: "What you will need",
        blocks: [
          { type: "p", text: "You will need a valid passport, your eCoE and other documents when you lodge your student visa. There are entry requirements to meet for both your institution application and your visa application, which can include:" },
          { type: "list", items: ["Academic requirements", "English language requirements", "Evidence of funds to support your study", "Overseas Student Health Cover"] },
          { type: "note", text: "Allow enough time between lodging your application and the start of your course. Processing can be lengthy depending on your country of origin." },
        ],
      },
      {
        id: "home-affairs",
        title: "Department of Home Affairs",
        blocks: [
          { type: "p", text: "The Department of Home Affairs (DHA) manages the entry and settlement of people in Australia. Visa options and requirements can change, so the DHA website is the best place for accurate, up-to-date information, including visas for different levels of study and for bringing family members (guardians, partners or children) with you." },
          { type: "p", text: "An education agent can also help with your visa application and course application, and answer other questions. The Department of Foreign Affairs and Trade (DFAT) lists Australian embassies, high commissions, consulates and representative offices around the world." },
          { type: "links", items: [{ label: "Department of Home Affairs", href: "https://www.homeaffairs.gov.au/" }, { label: "Department of Foreign Affairs and Trade", href: "https://www.dfat.gov.au/" }] },
          { type: "p", text: "Source: Study Australia website." },
        ],
      },
    ],
  },
  {
    slug: "overseas-student-health-cover-oshc-",
    title: "Overseas Student Health Cover (OSHC)",
    group: "international",
    summary: "Health insurance that is mandatory for international student visa holders.",
    sections: [
      {
        id: "what",
        title: "What OSHC covers",
        blocks: [
          { type: "p", text: "Overseas Student Health Cover (OSHC) is insurance that covers the costs of medical and hospital care international students may need while in Australia. It is mandatory for international student visa holders." },
          { type: "list", items: ["Medical and hospital care", "Emergency ambulance transport", "Most prescription drugs"] },
        ],
      },
      {
        id: "how",
        title: "How do I get OSHC?",
        blocks: [
          { type: "p", text: "Complete an application for OSHC, available from registered OSHC providers on their websites. Your local education adviser can lodge your OSHC form and payment when your enrolment is processed." },
          { type: "note", text: "We can help you apply for OSHC. Just let us know when you apply." },
        ],
      },
    ],
  },
  {
    slug: "esos-framework",
    title: "ESOS framework",
    group: "international",
    summary: "Your rights as an overseas student, your workplace rights, and the services that can help.",
    sections: [
      {
        id: "esos",
        title: "The ESOS framework",
        blocks: [
          { type: "links", items: [
            { label: "ESOS framework student fact sheet", href: "https://internationaleducation.gov.au/Regulatory-Information/Documents/esosstudentfactsheetv4%20-%20Final%20clean%20copy.pdf" },
            { label: "Fair Work fact sheet for international students", href: "https://www.fairwork.gov.au/how-we-will-help/templates-and-guides/fact-sheets/rights-and-obligations/international-students" },
            { label: "Student (subclass 500) visa", href: "https://www.homeaffairs.gov.au/trav/visa-1/500-" },
          ] },
          { type: "p", text: "The fact sheets explain the services overseas students can use for information about their employment rights and conditions, and how to resolve workplace issues, for example through the Fair Work Ombudsman." },
        ],
      },
      {
        id: "work",
        title: "Working in Australia",
        blocks: [
          { type: "h3", text: "Workplace rights" },
          { type: "p", text: "Pay rates and workplace conditions are set by Australian law. Everyone working in Australia, including people from overseas, has rights and protections at work that cannot be taken away by contracts or agreements." },
          { type: "p", text: "If you have questions about your pay and conditions, contact the [Fair Work Ombudsman](https://www.fairwork.gov.au) for free information, resources and advice, including information in 27 languages and [videos about working in Australia](https://www.youtube.com/fairworkgovau). Call 13 13 94 within Australia (Translating and Interpreting Service 13 14 50)." },
          { type: "h3", text: "National minimum wage" },
          { type: "p", text: "Some employees have different pay entitlements if they have a reduced work capacity because of disability, are under 21, or are an apprentice or trainee. Calculate your correct pay and entitlements with the Pay and Conditions Tool at [fairwork.gov.au/pay](https://www.fairwork.gov.au/pay)." },
          { type: "p", text: "More information on employment in Australia is at [homeaffairs.gov.au](https://www.homeaffairs.gov.au/) and [employment.gov.au](https://www.employment.gov.au/)." },
          { type: "h3", text: "Tax file number" },
          { type: "p", text: "To receive an income in Australia you must have a Tax File Number (TFN). Income includes wages or salary, government payments and investment income. Apply online at the [Australian Taxation Office](https://www.ato.gov.au/)." },
        ],
      },
      {
        id: "safety",
        title: "Safety and character",
        blocks: [
          { type: "h3", text: "Domestic and family violence, sexual assault and forced marriage" },
          { type: "p", text: "The Australian Government's family safety pack explains Australia's laws on domestic and family violence, sexual assault and forced marriage, with information on essential services and emergency contacts." },
          { type: "h3", text: "Character requirements" },
          { type: "p", text: "Entering or remaining in Australia is a privilege. You must obey the law and not engage in criminal activity. Your visa may be cancelled for a number of reasons, including a criminal record or behaving in a way that is a risk to somebody in the Australian community." },
          { type: "links", items: [
            { label: "Check your visa details in VEVO", href: "https://www.homeaffairs.gov.au/vevo" },
            { label: "Update your details in ImmiAccount", href: "https://www.homeaffairs.gov.au/immiaccount" },
            { label: "Understand your workplace rights", href: "https://www.homeaffairs.gov.au/workplace-rights" },
            { label: "Learn about family safety", href: "https://www.dss.gov.au/family-safety-pack" },
            { label: "More information: Department of Home Affairs", href: "https://www.homeaffairs.gov.au/" },
          ] },
        ],
      },
    ],
  },
];
