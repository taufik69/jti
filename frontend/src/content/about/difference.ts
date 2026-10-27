/** Copy from jti.edu.au/what-makes-jti-different. Figures keep the year JTI published them for. */
export const differenceIntro =
  "Five things shape how we teach and support students, from the standard of our training to the community around our campuses.";

export const differenceThemes = [
  { id: "quality", title: "Quality training and delivery" },
  { id: "diversity", title: "Multicultural diversity" },
  { id: "flexibility", title: "Flexible learning" },
  { id: "industry", title: "Industry partnerships" },
  { id: "community", title: "Community-centred support" },
] as const;

export type ThemeId = (typeof differenceThemes)[number]["id"];

export const quality = {
  text: [
    "JTI has consistently upheld high-quality training and delivery and holds “Demonstrated Consistently Compliant”, the highest rating a provider can receive from our regulator, the Australian Skills Quality Authority (ASQA).",
    "As of 2017, JTI was rated by the Department of Education for Victoria as above the state average in all benchmarks set by the Victorian Government, including student experience and student outcomes.",
  ],
  satisfaction: { year: 2020, jti: 82.35, state: 77.8 },
};

export const diversity = {
  text: "We celebrate our multicultural diversity and embrace all cultures through social and community events throughout the year. Settling into a new country can be difficult, so our ability to relate to students and staff from all walks of life, and from a range of backgrounds, helps ease students into life at JTI.",
  events: ["Multicultural Day", "Australia Day"],
  motto: "Together, we achieve!",
};

export const flexibility = {
  text: "Through blended learning we offer flexibility to students. For many of our mature students, this lets them balance work, study and family commitments.",
  modes: [
    { title: "Face-to-face", text: "Classes on campus with your trainer and classmates." },
    { title: "Online", text: "Live virtual classes via Zoom." },
    { title: "Self-study", text: "Work through your course at your own pace." },
  ],
};

export const industry = {
  text: "Because our training is industry relevant and specific, we maintain strong industry partnerships.",
  items: [
    { title: "Work and clinical placements", text: "Partners help our students secure work placements and clinical placements." },
    { title: "Jobs on completion", text: "The same partnerships help students into jobs when they finish their course." },
    { title: "Employer Days", text: "Students meet and talk with potential employers while they study." },
    { title: "Annual Industry Luncheon", text: "Keeps us up to date with industry trends and standards." },
  ],
};

export const community = {
  text: [
    "JTI is part of the community, and we take part in community engagement in our neighbourhood.",
    "One of our campuses is in a lower socio-economic area, and it is our responsibility to make sure students enrolled with us get good support, so they can complete their courses and join the workforce.",
    "Our trainers and student support officers run support sessions to encourage students to keep going when things get tough.",
  ],
};
