import { drive, pdf, type StudyPage } from "./types";

/** Policies shared by domestic and international students ("GENERAL" files on jti.edu.au). */
export const generalPolicies = [
  { label: "Academic Integrity, Plagiarism and Collusion Policy", href: pdf("JTI Academic_Integrity_Plagiarism_Collusion_Policy_GENERAL.pdf") },
  { label: "Access and Equity Policy", href: pdf("JTI Access_and_Equity_Policy_GENERAL.pdf") },
  { label: "Code of Conduct Policy", href: pdf("JTI Code_of_Conduct_Policy_GENERAL.pdf") },
  { label: "Complaints and Appeals Policy", href: pdf("JTI Complaints_Appeals_Policy_GENERAL.pdf") },
  { label: "Critical Incident Policy", href: pdf("JTI Critical_Incident_Policy_GENERAL.pdf") },
  { label: "Discrimination, Harassment and Bullying Policy", href: pdf("JTI Discrimination_Harassment_Bullying_Policy_GENERAL.pdf") },
  { label: "Information System and Cyber Security Policy", href: pdf("JTI Information_System_and_Cyber_Security_Policy_GENERAL.pdf") },
  { label: "Privacy, Confidentiality and Recordkeeping Policy", href: pdf("JTI Privacy_Confidentiality_Recordkeeping_Policy_GENERAL.pdf") },
  { label: "Reasonable Adjustment Policy and Procedure", href: pdf("JTI Reasonable_Adjustment_Policy_and_Procedure.pdf") },
  { label: "Student Safety and Wellbeing Policy", href: pdf("JTI Student_Safety_Wellbeing_Policy_GENERAL.pdf") },
  { label: "Recognition of Qualifications and Credit Transfer Policy", href: pdf("JTI_Recognition_of_Qualifications_and_Credit_Transfer_Policy.pdf") },
  { label: "Assessment Policy and Procedure", href: pdf("JTI_Assessment_Policy_QA.pdf") },
  { label: "Work Placement Policy and Procedures", href: pdf("JTI_Work_Placement_Policy_and_Procedures.pdf") },
  { label: "Student Communication Policy", href: pdf("JTI Student_Communication_Policy_GENERAL.pdf") },
  { label: "Training and Assessment Policy and Procedure", href: pdf("JTI_Training_and_Assessment_Policy_Procedure.pdf") },
];

export const domesticPages: StudyPage[] = [
  {
    slug: "domestic-forms",
    title: "All types of forms",
    group: "domestic",
    summary: "Forms, the student handbook, and the policies and procedures that apply to domestic students.",
    sections: [
      {
        id: "forms",
        title: "Domestic forms",
        blocks: [
          {
            type: "downloads",
            items: [
              { label: "Credit Transfer Form", href: drive("1xvBbYu7EhiWiWuAX4kHbJgymvSPZRO5Y") },
              { label: "Extension Form 2025", href: drive("1qYUJObgZxX8gHHgpZ_UrCTlGVGk1tG0u") },
              { label: "Suspension and Withdrawal Form", href: drive("1lMhCRDgQ-aE2YkPoytq8AI9Eaa4-G4Yc") },
              { label: "Student Internal Transfer Request Form", href: drive("1Oyg1LF5eInj5JHfASnxkkg6PzVjyCu7z") },
              { label: "Refund Request Form", href: drive("1uiRJzqDcsscrCF63YcU-gZTK4GSgoJzS") },
              { label: "Complaints and Appeals Application Form", href: drive("1yUPsWqxrSFM2Px91UZmaXNtTVC7-L_gn") },
            ],
          },
        ],
      },
      {
        id: "handbook",
        title: "Domestic student handbook",
        blocks: [{ type: "downloads", items: [{ label: "Domestic Student Handbook", href: pdf("Student-Handbook-(Domestic).pdf") }] }],
      },
      {
        id: "policies",
        title: "Policies and procedures",
        blocks: [
          {
            type: "downloads",
            items: [
              { label: "Domestic Enrolment on Non-Student Visa Policy", href: pdf("Domestic_Enrolment_on_Non_Student_Visa_Policy.pdf") },
              { label: "Course Progress and Intervention Policy", href: pdf("JTI Course_Progress_and_Intervention_Policy_DOMESTIC.pdf") },
              { label: "PTR and Enrolment Policy", href: pdf("JTI PTR_and_Enrolment_Policy_DOMESTIC.pdf") },
              { label: "Student Support Services Policy", href: pdf("JTI Student_Support_Services_Policy_DOMESTIC.pdf") },
              { label: "Tuition and Other Fees Policy", href: pdf("JTI_Tuition_and_Other_Fees_Policy_DOMESTIC.pdf") },
              { label: "Student Withdrawal Policy and Procedure", href: pdf("JTI_Student_Withdrawal_Policy_and_Procedure_Domestic_ASQA_2025.pdf") },
              ...generalPolicies,
            ],
          },
        ],
      },
    ],
  },
];
