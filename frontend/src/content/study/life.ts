import { kycSections } from "./know-your-college";
import type { StudyPage } from "./types";

/** Australia, Melbourne and the campuses. Dated figures keep their year or carry a "check current" note. */
export const lifePages: StudyPage[] = [
  {
    slug: "a-bit-about-australia",
    title: "A bit about Australia",
    group: "international",
    summary: "A country, an island continent, and a land of contrasts and diversity.",
    sections: [
      {
        id: "country",
        title: "The country",
        blocks: [
          { type: "p", text: "Australia is both a country and an island continent. The Commonwealth of Australia comprises the mainland, the island of Tasmania and numerous smaller islands. It is the 6th largest country in the world by total area, lying between Asia and Oceania, with the Indian Ocean to the west and the Pacific Ocean to the east." },
          { type: "p", text: "Its nearest neighbours are Indonesia, East Timor and Papua New Guinea to the north; the Solomon Islands, Vanuatu and New Caledonia to the north-east; and New Zealand to the south-east." },
          { type: "p", text: "Australia is one of the most highly developed countries in the world and ranks highly in international measures of quality of life, health, education, economy, and the protection of civil liberties and political rights." },
          { type: "p", text: "It is a land of contrasts: from desert and bushland in the centre, to the northern tropics and temperate zones in the south. Australia's alpine regions and snowfields lie in the south-east, on the border between Victoria and New South Wales." },
        ],
      },
      {
        id: "people",
        title: "Facts about Australians you may not know",
        blocks: [
          { type: "facts", items: [
            { label: "Born in another country", value: "About 1 in 4" },
            { label: "One or both parents born overseas", value: "Roughly 1 in 4" },
            { label: "Speak a language other than English at home", value: "About 17%" },
            { label: "Ethnic groups represented", value: "100+" },
            { label: "Live in one of the eight major cities", value: "About 70%" },
            { label: "Live less than 80 km from the coast", value: "About 80%" },
          ], note: "Figures as published by JTI. Australia's society is tolerant, informal and broadly egalitarian." },
          { type: "links", items: [{ label: "More in the student handbook", href: "/study/pre-enrolment-guide-students-handbook" }] },
        ],
      },
    ],
  },
  {
    slug: "melbourne-victoria",
    title: "Melbourne, Victoria",
    group: "international",
    summary: "Victoria's capital, and the business, cultural and recreational hub of the state.",
    sections: [
      {
        id: "city",
        title: "The city",
        blocks: [
          { type: "p", text: "Melbourne is Victoria's capital city and the business, administrative, cultural and recreational hub of the state. Its people come from many cultures and all ages: young professionals, international students, young couples, and retirees enjoying everything the city has to offer." },
          { type: "p", text: "Melbourne has been voted one of the world's most liveable cities for a number of years, and we're sure you're going to love living here. It is known for its blend of Victorian and contemporary architecture, beautiful beaches, parks and gardens, and its multicultural society, and was ranked in the top 5 university cities in the Global University Cities Index (2007). You will enjoy clean fresh air and open spaces, in a friendly and safe environment." },
        ],
      },
      {
        id: "culture",
        title: "Culture, sport and food",
        blocks: [
          { type: "p", text: "Recognised as Australia's cultural and sporting capital, Melbourne is home to some of the country's most significant cultural and sporting institutions. From soccer to cricket and golf to rugby and tennis, the world's sporting stage is on your doorstep." },
          { type: "p", text: "Broadway musicals, plays, live music, comedy and theatre mean there's never a dull night." },
          { type: "p", text: "Melbourne's population of around 4.3 million includes people from over 140 countries, and residents are welcoming and accepting of different cultures and customs. You are sure to make lifelong friends through your studies at Job Training Institute. The city's mix of cultures shows in over 2,300 restaurants, cafes, bars and pubs, and food and wine festivals throughout the year." },
          { type: "links", items: [{ label: "Living in Melbourne as a JTI student: Know your college", href: "/study/know-your-college" }] },
        ],
      },
    ],
  },
  {
    slug: "know-your-college",
    title: "Know your college",
    group: "international",
    summary: "A welcome from our CEO, life in Melbourne, our campuses, and the support available to you.",
    sections: [
      {
        id: "welcome",
        title: "A message from our CEO",
        blocks: [
          {
            type: "quote",
            paragraphs: [
              "Dear Student, we are pleased to have you among us. During your transition to life in our institution and in Australia, we look forward to working with you. All of us here are delighted that you have chosen to study with us. We wish you every success in fulfilling your academic goals, and as you learn more about yourself and the world around you.",
              "If you need assistance settling into JTI and Australia, we are all here to help. Please ask as many questions as possible, and do not hesitate to contact any member of JTI staff. JTI's motto is “Lifting you to the next level”, and to accomplish this we must be aware of any struggles or challenges you might be experiencing.",
              "Looking forward to getting to know you better over the course of the year. Wishing you all the best!",
            ],
            name: "Lovleen Chawla",
            role: "Chief Executive Officer and Principal Executive Officer",
            email: "contact@jti.edu.au",
          },
        ],
      },
      ...kycSections,
    ],
  },
];

