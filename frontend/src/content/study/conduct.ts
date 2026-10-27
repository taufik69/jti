import type { StudyPage } from "./types";

export const conductPage: StudyPage = {
  slug: "student-code-of-conduct",
  title: "Student code of conduct",
  group: "international",
  summary: "Our commitments to you, what we expect of you, and what happens if those expectations are not met.",
  sections: [
    {
      id: "practice",
      title: "Our code of practice",
      blocks: [
        { type: "p", text: "As a Registered Training Organisation, Job Training Institute (JTI) is committed to training and assessment that complies with the VET Quality Framework and all relevant legislation, leading to nationally recognised qualifications. All staff recognise the rights of our clients and students in line with our code of practice, which formalises JTI's commitment to:" },
        {
          type: "list",
          items: [
            "Respecting and protecting your rights", "Providing correct information, advice and support", "Providing the most suitable course and pathway",
            "Optimising learning outcomes", "Promoting principles of access and equity", "Regular evaluation of training and assessment delivery",
            "Industry engagement to ensure relevance and national recognition of our qualifications", "Assessing learners' current skills and needs before enrolment",
          ],
        },
      ],
    },
    {
      id: "expectations",
      title: "What JTI expects of students",
      blocks: [
        { type: "p", text: "As members of an academic environment, students are expected to:" },
        {
          type: "list",
          items: [
            "Treat all others with respect and courtesy.",
            "Treat others equitably irrespective of gender, sexual orientation, race, disability, medical condition, cultural background, religion, marital status, age or political conviction.",
            "Respect the opinions and views of others.",
            "Avoid any conduct that might reasonably be perceived as sexual, racial or gender-based harassment, or otherwise intimidating.",
            "Attend classes, maintain consistent levels of study, and submit assessments on time.",
            "Heed and use academic performance feedback from teaching staff.",
            "Familiarise themselves with, and abide by, JTI's policies and procedures.",
            "Maintain high standards and a professional approach to their study program.",
            "Pay attention to personal and general hygiene.",
            "Refrain from littering, use rubbish bins, and leave washrooms and other facilities as they found them.",
            "Not attend class under the influence of alcohol or any other substance.",
          ],
        },
      ],
    },
    {
      id: "your-rights",
      title: "What students can expect",
      blocks: [
        {
          type: "list",
          items: [
            "To be treated with courtesy and respect.",
            "To be treated equitably irrespective of gender, sexual orientation, race, disability, medical condition, cultural background, religion, marital status, age or political conviction.",
            "To freely communicate and voice alternative points of view in rational debate.",
            "To learn in an environment free from sexual, racial, gender-based or other forms of harassment.",
            "To rely on the protection of personal information.",
            "To access personal records, subject to the provisions of the Freedom of Information Act 1992.",
            "To receive timely and accurate information about courses, enrolment and all administrative matters.",
            "That assessment within courses will be equitably and appropriately implemented.",
            "That facilities and equipment are safe and comply with occupational health and safety guidelines.",
          ],
        },
      ],
    },
    {
      id: "classroom",
      title: "Classroom behaviour",
      blocks: [
        { type: "p", text: "All JTI students are expected to follow these rules while enrolled at the College:" },
        {
          type: "list",
          items: [
            "Show mutual respect for College staff and fellow students.", "Turn off all mobile devices during classes and examinations.", "Do not eat or drink in classrooms.",
            "Prepare for each class by doing the required reading and completing any necessary tutorial or laboratory work.",
            "Attend all classes except when prevented by illness or exceptional circumstances. This is a courtesy to fellow students and trainers, and in the interest of your own progress.",
            "Arrive at classes on time; arriving late is disrespectful to trainers and fellow students.", "Work to the best of your ability.", "Participate actively in learning activities.",
            "Avoid all forms of academic misconduct.", "Give constructive feedback when evaluating courses and trainers/assessors.",
            "Refrain from activities that might negatively affect other members of the JTI community.", "Be aware of your responsibilities within your courses and program of study.",
            "Follow any other rules of classroom behaviour set by, or negotiated with, your trainer/assessor.",
          ],
        },
      ],
    },
    {
      id: "discipline",
      title: "Conduct and discipline",
      blocks: [
        { type: "p", text: "JTI expects students in all courses to behave in a professional and dignified manner towards fellow students and trainers. Students found guilty of the following will be given a written notice of expulsion, and fees will not be refunded:" },
        {
          type: "list",
          items: [
            "Cheating in class tests or examinations", "Intimidating other students", "Being disrespectful to staff and other students",
            "Being rude to a trainer, any other member of staff or a guest trainer", "Causing disruption in a class", "Misconduct deemed unsuitable or unprofessional", "Any other inappropriate behaviour",
          ],
        },
        { type: "note", text: "Malicious damage to equipment and/or stealing materials or products will result in instant dismissal." },
        { type: "p", text: "If the matter is not resolved, the Course Manager reserves the right to discharge the student from JTI. In these circumstances a student may have the right of audience, or a right to appeal to the CEO, which must be requested in writing within seven (7) days of suspension or expulsion. See the Complaints and Appeals Policy." },
      ],
    },
  ],
};
