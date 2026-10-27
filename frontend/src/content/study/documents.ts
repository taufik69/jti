import { generalPolicies } from "./domestic";
import { drive, pdf, type StudyPage } from "./types";

/** Scholarships, forms, the handbook and policies for international students. */
export const documentPages: StudyPage[] = [
  {
    slug: "scholarships",
    title: "Scholarships",
    group: "international",
    summary: "JTI's International Student Scholarship Program rewards outstanding achievement and supports students facing hardship.",
    sections: [
      {
        id: "jti",
        title: "JTI International Student Scholarship Program (Diploma level)",
        blocks: [
          { type: "p", text: "To reward outstanding academic achievement and/or recognise the less fortunate in society, JTI offers its international students the opportunity to apply for scholarships. Scholarships provide tuition fee waivers to a level decided by the Scholarship Team, who manage selection and allocation of funds in liaison with the CEO. Funds are disbursed directly to JTI on behalf of the recipient." },
          { type: "facts", items: [{ label: "Successful continuing students receive", value: "20% off tuition, Terms 1 and 2" }, { label: "Applications close", value: "COB, last Friday of each term" }], note: "In some cases JTI will consider full scholarships, depending on a student's individual circumstances." },
          { type: "downloads", items: [{ label: "Scholarship Application Form", href: pdf("Scholarship-Application-Form.pdf") }] },
        ],
      },
      {
        id: "apply",
        title: "How to apply",
        blocks: [
          { type: "steps", items: [
            { title: "Check you meet the eligibility and assessment criteria" },
            { title: "Complete the scholarship application form", text: "Include a report supporting your application and any other supporting or specified documents." },
            { title: "Submit your application by the deadline", text: "Close of business on the last Friday of each term." },
          ] },
          { type: "p", text: "All applicants must hold a current Confirmation of Enrolment (CoE) for a JTI course running in the term or semester they are applying for." },
        ],
      },
      {
        id: "criteria",
        title: "Assessment criteria",
        blocks: [
          { type: "h3", text: "Continuing students" },
          { type: "p", text: "Evidence that in the previous term you have:" },
          { type: "list", items: ["Submitted all assessments by the set deadlines", "Received a Competent result on the first attempt in all units scheduled during the previous term", "Maintained satisfactory weekly attendance throughout the term", "Participated in a positive and diligent manner in all aspects of the course"] },
          { type: "h3", text: "New students (not currently enrolled with JTI)" },
          { type: "p", text: "Attach evidence of:" },
          { type: "list", items: [
            "An excellent academic record, such as Year 12 or equivalent certificates, or VET or tertiary qualifications obtained in Australia or overseas, and/or",
            "Demonstrated dedication to academic studies, and/or a passion for study that shows your genuine intention to persevere with the course, and/or",
            "Inability to meet your financial obligations due to circumstances beyond your control, and/or",
            "A statement addressing why you should be awarded a scholarship, why your chosen course is the best choice for you, and anything else that supports your application.",
          ] },
        ],
      },
    ],
  },
  {
    slug: "international-forms",
    title: "International forms",
    group: "international",
    summary: "Forms for international students, and how complaints and appeals are handled.",
    sections: [
      {
        id: "forms",
        title: "Forms",
        blocks: [
          { type: "downloads", items: [
            { label: "Complaints and Appeals Application Form", href: drive("1Vp6DBC7jX-2HmvuWPNiknjCUQggxRnPR") },
            { label: "Credit Transfer Form", href: drive("1ovq_73GrDDOQs5zhbZeDn1dfbNZ9ckJp") },
            { label: "CRICOS Course Variation Form", href: drive("11vbtHDYVRs8_48oXQ4cTNt8CmaQcUguw") },
            { label: "Deferral, Suspension and Cancellation Form", href: drive("14_BBpSvEivNBXNaS7w87e4MU4Sn6hXnv") },
            { label: "Extension Form 2025", href: drive("1zTpgcmlbi2UFtt4dL4_mWOsOjYhpXb89") },
            { label: "Leave Request Form", href: drive("17pwOks8Fwoe8NCw5hGCRSEuG8ryWPLae") },
            { label: "Request for Refund", href: drive("12BZ7LdRh3WDHJrfYCysmmoxAPMQYrg0m") },
          ] },
        ],
      },
      {
        id: "complaints",
        title: "Complaints and appeals",
        blocks: [
          { type: "p", text: "Job Training Institute Pty Ltd (JTI) implements a transparent complaints and appeals policy so learners and clients understand their rights and JTI's responsibilities under the VET Standards. The policy:" },
          { type: "list", items: [
            "Ensures the principles of natural justice and procedural fairness are adopted at every stage of the complaint and appeal process",
            "Is publicly available",
            "Sets out the procedure for making a complaint or requesting an appeal",
            "Ensures complaints and appeal requests are acknowledged in writing and finalised as soon as practicable",
            "Provides for review by an appropriate party independent of JTI and the complainant or appellant, at their request, if the process fails to resolve the complaint or appeal",
          ] },
        ],
      },
    ],
  },
  {
    slug: "pre-enrolment-guide-students-handbook",
    title: "Pre-enrolment guide and student handbook",
    group: "international",
    summary: "Everything you need to know before enrolling and while you study, in one document.",
    sections: [
      { id: "download", title: "Download the handbook", blocks: [{ type: "downloads", items: [{ label: "Pre-Enrolment Guide & International Student Handbook", href: pdf("International-Student-Handbook.pdf") }] }] },
    ],
  },
  {
    slug: "international-students-policies-and-procedures",
    title: "International policies and procedures",
    group: "international",
    summary: "Forms, policies and procedures that apply to international (CRICOS) students.",
    sections: [
      {
        id: "forms",
        title: "Forms",
        blocks: [
          { type: "downloads", items: [
            { label: "Credit Transfer Form", href: pdf("Credit Transfer Form.pdf") },
            { label: "Leave Request Form", href: pdf("Leave Request Form.pdf") },
            { label: "Deferral, Suspension and Cancellation Form", href: pdf("Deferral, Suspension and Cancellation Form CRICOS.pdf") },
            { label: "Course Variation Form", href: pdf("CRICOS Course Variation Form.pdf") },
            { label: "Refund Request Form", href: pdf("Request for Refund (CRICOS).pdf") },
            { label: "Extension Form", href: pdf("Extension form 2025 CRICOS.pdf") },
            { label: "Complaints and Appeals Application Form", href: pdf("Complaints and Appeals Application Form CRICOS.pdf") },
          ] },
        ],
      },
      {
        id: "policies",
        title: "Policies and procedures",
        blocks: [
          { type: "downloads", items: [
            { label: "Course Transfer Policy", href: pdf("JTI Course_Transfer_Policy_CRICOS.pdf") },
            { label: "Course Progress and Intervention Policy and Procedure", href: pdf("JTI CRICOS_Course_Progress_and_Intervention_Policy_and_Procedure.pdf") },
            { label: "Enrolment Policy", href: pdf("JTI Enrolment_Policy_CRICOS.pdf") },
            { label: "Fees, Charges and Refund Policy", href: pdf("JTI Fees_Charges_and_Refund_Policy_CRICOS.pdf") },
            { label: "Student Support Services Policy", href: pdf("JTI Student_Support_Services_Policy_CRICOS.pdf") },
            { label: "Deferment, Suspension and Cancellation Policy", href: pdf("JTI_Deferment_Suspension_and_Cancellation_Policy_CRICOS.pdf") },
            ...generalPolicies,
          ] },
        ],
      },
    ],
  },
];
