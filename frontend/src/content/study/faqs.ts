import type { StudyPage } from "./types";

export const faqPage: StudyPage = {
  slug: "faqs",
  title: "Frequently asked questions",
  group: "international",
  summary: "Answers to common questions from international students about applying, studying and further study.",
  sections: [
    {
      id: "applying",
      title: "Applying",
      blocks: [
        {
          type: "faq",
          items: [
            { q: "How can I check the progress or status of my application?", a: ["You can check the status of your enrolment application at any time by contacting JTI directly or your local JTI representative, depending on where you made your original application."] },
            { q: "Are standardised tests required for international student admission?", a: ["Yes. International students need an English proficiency test such as IELTS, PTE or equivalent, and must also meet the entry requirements of each course.", "If JTI teaching staff have concerns about your English when you begin, they will give you a Language, Literacy and Numeracy (LLN) test. If the results are not satisfactory you will be referred to an English language class to reach the necessary level, which will delay your start date."] },
            { q: "What are the admissions office hours?", a: ["Campus office hours are 09:00–17:00 Australian Eastern Standard Time."] },
            { q: "Who is my local admissions representative?", a: ["Please see [JTI's agent list](/list-agents)."] },
            { q: "Do I need a passport before I start the application process?", a: ["Yes. You need a valid passport, or to have applied for one, before applying for a visa. This reduces possible delays once your student visa application is approved."] },
            { q: "What help does JTI offer while I apply for a student visa?", a: ["JTI issues a Letter of Offer to students who meet our entry requirements. If you accept, we issue a Confirmation of Enrolment (CoE) after receiving your first instalment of tuition fees. You need this CoE to apply for your student visa. We can also help with your compulsory Overseas Student Health Cover (OSHC)."] },
          ],
        },
      ],
    },
    {
      id: "money",
      title: "Fees, scholarships and money",
      blocks: [
        {
          type: "faq",
          items: [
            { q: "What scholarships are available through JTI?", a: ["See our [Scholarships page](/study/scholarships) for details and how to apply."] },
            { q: "Do international students get financial aid, and how do I apply?", a: ["Most international students are self-funded. Financial aid may be available from your home country's government, and you should make your own enquiries about this.", "The Australian Government has offered the Endeavour Vocational Education and Training (VET) Scholarship for students enrolling in Diploma courses."] },
            { q: "Will applying for financial aid hurt or delay my chances of admission?", a: ["Financial aid from your home country's government, or an Australian scholarship, will not hurt your visa application or chances of admission. However, applying for financial aid may delay enrolment, as you will need to secure funding before applying."] },
            { q: "How can I support myself financially while studying at JTI?", a: ["As part of your student visa application, you must show you have the funds to cover tuition fees and living costs for the full duration of your course in Australia.", "International students have the right to work under the conditions of their student visa, but should not rely on this income to fund their studies or living expenses. Check current work limits with the [Department of Home Affairs](https://www.homeaffairs.gov.au/)."] },
          ],
        },
      ],
    },
    {
      id: "studying",
      title: "Studying and further study",
      blocks: [
        {
          type: "faq",
          items: [
            { q: "How do I transfer to another institution?", a: ["Students must stay at least six months with the institution where they first enrolled for their principal course. Complete a Transfer Request Form at JTI stating the reasons for the transfer; JTI considers each request on its merits.", "Academic credit transfer, if any, is at the discretion of the institution you are moving to. Some credit transfer is usual but not guaranteed, and applications are considered case by case by the enrolling institution."] },
            { q: "What is the education pathway if I want to keep studying in Australia?", a: ["JTI qualifications are recognised nationally. Graduates from Diploma or Advanced Diploma courses may go on to higher education (degree courses). JTI partners with Federation University, and we recommend our students apply for degree courses there; you can also choose other universities.", "You will need to extend your visa to continue studying, which can be done in Australia. Graduates of JTI Diploma courses normally receive one year's academic credit towards a Bachelor degree, subject to the university's academic and English entry requirements."] },
            { q: "Which degrees would I be eligible for?", a: ["Graduates of JTI Diploma courses may apply to an Australian or overseas university for an undergraduate (Bachelor) degree.", "Diploma of Community Services: Community Services or Social Work. Diploma of Early Childhood: Education or Early Childhood. Diploma of Business or Advanced Diploma of Leadership and Management: Commerce, Business, Accounting and others. Ask JTI Student Support for help."] },
            { q: "Is the Diploma of Nursing recognised in my country?", a: ["The JTI Diploma of Nursing is accredited by the Australian Nursing and Midwifery Accreditation Council (ANMAC). Graduates are eligible to apply for registration with the Australian Health Practitioner Regulation Agency (AHPRA).", "The qualification may be recognised by the equivalent nursing body in your home country, but you will need to check their registration requirements."] },
            { q: "What support will JTI give me if I want to go to university or apply for a work permit?", a: ["JTI helps graduates of our Diploma courses choose pathways into further education, such as a Bachelor of Nursing, Social Work, Education or Business. Advice and guidance are available from JTI's International Department."] },
          ],
        },
      ],
    },
  ],
};
