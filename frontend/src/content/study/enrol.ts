import type { StudyPage } from "./types";

/** Choosing JTI, applying, visas and health cover. */
export const enrolPages: StudyPage[] = [
  {
    slug: "why-choose-job-training-institute",
    title: "Why choose Job Training Institute?",
    group: "international",
    summary: "What distinguishes JTI from other training organisations.",
    sections: [
      {
        id: "quality",
        title: "Quality training and delivery",
        blocks: [
          { type: "p", text: "JTI has consistently upheld high-quality training and delivery and achieved the highest rating, “Demonstrated Consistently Compliant”, that a provider can receive from our regulator, the Australian Skills Quality Authority (ASQA)." },
          { type: "p", text: "As of 2017, JTI was rated by the Department of Education in Victoria as above the state average in all benchmarks set by the Victorian Government, including ratings for student experience and student outcomes." },
          { type: "facts", items: [{ label: "JTI students satisfied, 2017", value: "83.8%" }, { label: "Victorian average for all RTOs, 2017", value: "76.5%" }], note: "In 2017, JTI was 6.8% higher than the Victorian state average." },
        ],
      },
      {
        id: "diversity",
        title: "Multicultural diversity",
        blocks: [
          { type: "p", text: "At JTI we celebrate our multicultural diversity and embrace all cultures through social and community events throughout the year, such as Multicultural Day and Australia Day. Settling into a foreign country can sometimes be difficult, so our ability to relate to students and staff from all walks of life, and from a range of backgrounds, helps ease students into life at JTI. We believe that together, we achieve!" },
        ],
      },
      {
        id: "flexibility",
        title: "Flexibility",
        blocks: [
          { type: "p", text: "Through blended learning we offer flexibility to students, including face-to-face, online and self-study modes. For many of our mature students, this flexibility helps them balance work, study and family commitments." },
        ],
      },
      {
        id: "industry",
        title: "Industry partnerships",
        blocks: [
          { type: "p", text: "Because our training is industry relevant and specific, we maintain strong industry partnerships, which help our students secure work placements and clinical placements, as well as jobs on completion of their course. We hold Employer Days where students meet potential employers, and an annual Industry Luncheon keeps us up to date with industry trends and standards." },
        ],
      },
      {
        id: "community",
        title: "Community centric",
        blocks: [
          { type: "p", text: "JTI is part of the community and takes part in community engagement in our neighbourhoods. It is our responsibility to make sure students enrolled with us get good student support, so they can complete their courses and join the workforce. Our trainers and student support officers run support sessions to encourage students to keep going when things get tough." },
          { type: "links", items: [{ label: "Read more: What makes JTI different", href: "/what-makes-jti-different" }] },
        ],
      },
    ],
  },
  {
    slug: "jti-enrolment-process-for-international-students",
    title: "Enrolment process for international students",
    group: "international",
    summary: "How to apply to JTI as an international student, from your first enquiry to your first class.",
    sections: [
      {
        id: "steps",
        title: "Application step by step",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Student enquiry and application", text: "Via an agent, exhibition, email or phone." },
              { title: "International admissions issues an offer of a place" },
              { title: "Student acceptance", text: "Return signed documents, including your Statement of Purpose (SOP), and fees." },
              { title: "JTI issues your electronic Confirmation of Enrolment (eCoE)", text: "And arranges your health insurance (OSHC)." },
              { title: "Student finalises visa conditions", text: "Online application with the Department of Home Affairs." },
              { title: "Student makes travel and accommodation arrangements" },
              { title: "Student arrives in Australia" },
              { title: "International student orientation", text: "Registration and ID cards." },
              { title: "Student registers for an OSHC card", text: "And sets up a bank account, mobile phone and so on." },
              { title: "Orientation" },
              { title: "Classes begin!" },
            ],
          },
        ],
      },
      {
        id: "before-you-apply",
        title: "Before you apply",
        blocks: [
          { type: "p", text: "You can find information about JTI on our website, through an agent, or directly from Job Training Institute, including how to access information on JTI, our fee structure, refund policy and enrolment procedures." },
          { type: "p", text: "Before enrolling, you must read the following information on the JTI website or in the marketing materials sent to you:" },
          {
            type: "list",
            items: [
              "Requirements for acceptance into a course, including English levels, qualifications, work experience and course credit opportunities.",
              "Course content and duration, qualifications on offer, modes of study and assessment methods.",
              "Campus locations and a general description of facilities, equipment, and learning and library resources available to students.",
              "Grounds on which your enrolment may be deferred, suspended or cancelled.",
              "Indicative course-related fees, including the potential for fees to change.",
              "Information on accommodation options.",
              "Schooling obligations and options for school-aged dependants, including that school fees may be incurred.",
              "Documented procedures for assessing students' qualifications, experience and English language proficiency.",
              "A description of the [ESOS framework](/study/esos-framework) as provided by the Department of Education.",
            ],
          },
        ],
      },
      {
        id: "apply",
        title: "Applying",
        blocks: [
          { type: "p", text: "Complete the [Student Application for Enrolment Form](https://form.jotform.co/52666937240865) and gather the documents relevant to your application. These are sent to JTI for initial assessment. The form is not accepted without supporting documents. All international students must submit:" },
          {
            type: "list",
            items: [
              "An authorised copy of their visa (if applicable).",
              "A certified copy of evidence of English proficiency.",
              "Certified copies of school transcripts, birth certificate and passport.",
              "Any other supporting information, such as certified copies of previously attained qualifications.",
            ],
          },
          { type: "h3", text: "English proficiency" },
          { type: "p", text: "English proficiency must be evidenced by a recognised English language test score: IELTS 5.5 for all courses except Nursing, which requires IELTS 7 with a minimum score of 7 in each of the four components (listening, reading, writing and speaking), or equivalent." },
          { type: "list", items: ["If you are starting with ELICOS, JTI will perform an internal English placement test.", "If you cannot produce a satisfactory IELTS score and there are doubts about your English language skills in an academic environment, JTI will advise you to enrol in an ELICOS (English) course for an appropriate duration."] },
          { type: "h3", text: "Qualifications" },
          { type: "p", text: "JTI assesses your educational qualifications, obtained in Australia or overseas, for studying at certificate, diploma or higher level, and whether you meet the entry requirements for your chosen course. If your qualifications do not meet our admission requirements, other factors may be considered:" },
          { type: "list", items: ["Mature age", "Work experience", "Attitude and aptitude", "Previous academic results", "Attendance rate at your previous college", "Ability and skills to function in an academic environment", "Likelihood of succeeding in your academic endeavours"] },
          { type: "h3", text: "Certified copies" },
          { type: "p", text: "All documents submitted must be certified copies. Do not supply original documents with your application; if we need an original at any stage, we will ask for it." },
          { type: "p", text: "In Australia, a certified copy is a copy authorised as a true copy by a person before whom a Statutory Declaration may be made, such as a magistrate, Justice of the Peace, Commissioner for Declarations, Commissioner for Affidavits, solicitor, registered medical practitioner, bank manager, postal manager, or Australian Postal Corporation officer with 5 years' service. Outside Australia, in most countries, a Justice of the Peace or Public Notary can certify documents." },
        ],
      },
      {
        id: "offer",
        title: "Your offer and confirmation of enrolment",
        blocks: [
          { type: "p", text: "The JTI admissions team checks your documents for completeness using the international student enrolment checklist. The admissions officer prepares a Letter of Offer, which is sent to you with the student acceptance agreement to sign. The student acceptance agreement must at a minimum:" },
          {
            type: "list",
            items: [
              "Identify the course or courses in which you will be enrolled and any conditions on your enrolment.",
              "Provide an itemised list of course money payable by you.",
              "Provide information about refunds of course money.",
              "Set out the circumstances in which your personal information may be shared between JTI, the Australian Government and designated authorities and, if relevant, the Tuition Assurance Scheme. This includes personal and contact details, course enrolment details and changes, and any suspected breach of a student visa condition.",
              "Advise you of your obligation to tell JTI about a change of address while enrolled.",
            ],
          },
          { type: "p", text: "Once we receive your signed student acceptance agreement, signed Letter of Offer acknowledgement, tuition fee deposit and enrolment fee, your information is entered into PRISMS within 14 days. An electronic Confirmation of Enrolment (eCoE) is created and sent to you with a welcome letter explaining what to do when you arrive in Australia." },
        ],
      },
      {
        id: "arrival",
        title: "When you arrive",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "Contact JTI and speak to the International Team, who will take down your contact details and residential address in Australia.",
              "The Admissions team enters your details into the Student Management Database and creates your student file.",
              "The International Team tells you your induction date.",
              "You attend orientation day, receive a copy of the student handbook, and your student ID card is created.",
            ],
          },
          { type: "h3", text: "Orientation program" },
          {
            type: "list",
            items: [
              "Student stays in Australia", "Requirements to receive a qualification", "Certificates issued on successful completion of the course",
              "How skills and knowledge will be assessed", "Recognition of prior learning or recognition of current competency",
              "How to make a complaint if you are not satisfied with any part of the course", "How to get extra help with learning",
              "Course timetable and attendance", "Assessment processes and how to appeal an assessment outcome", "Course progress policy",
              "Student ID cards (photograph taken)", "Your obligations as a JTI student, including requirements for satisfactory course progress",
              "Visa requirements", "Overseas Student Health Cover", "Introduction to staff", "Evacuation procedure and meeting point",
              "Fees policy", "General questions", "Lunch",
            ],
          },
        ],
      },
    ],
  },
];
