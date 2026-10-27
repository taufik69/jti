/** Themes are drawn from what each message talks about; a story can sit under several. */
export type StoryTheme = "teaching" | "support" | "careers" | "international";

export const storyThemes: { id: StoryTheme; label: string }[] = [
  { id: "teaching", label: "Trainers & teaching" },
  { id: "support", label: "Student support" },
  { id: "careers", label: "Placements & careers" },
  { id: "international", label: "International students" },
];

export interface Story {
  name: string;
  /** Attribution exactly as jti.edu.au/testimonials shows it. */
  role: string;
  /** A sentence lifted word for word from the message. */
  highlight: string;
  paragraphs: string[];
  themes: StoryTheme[];
  photo?: string;
}

/** Every message on jti.edu.au/testimonials, in the published order. Spelling typos fixed; wording unchanged. */
export const stories: Story[] = [
  {
    name: "Sukhjit Kaur",
    role: "Diploma of Nursing, Intake 3",
    highlight: "South Gippsland Hospital … is a best learning place where all the theory tasks can be learnt by practice brilliantly.",
    paragraphs: [
      "Hi this is Sukhjit Kaur, Diploma of Nursing student. I am writing this e-mail to thank all the wonderful staff I had throughout my studies especially my manager, Gethsy Jayaseelan who encouraged and guided me a lot throughout my journey to JTI. I am very grateful to have very experienced and acknowledged educators who teach me wonderfully and shared their knowledge and experience of nursing.",
      "I am feeling very satisfied after my last acute placement at South Gippsland Hospital where I got excellent feedback from all the staff and my educator Rebecca, has also confirmed my beliefs of being a good future nurse which means a lot to me. Thanks a lot for the lovely reward from my manager who always guided my learning and supported me a lot when I was struggling with my personal health issues.",
      "Thanks again all the wonderful staff including admin, IT, management, educators for all the support and guidance which I got throughout my study. Thanks a lot to Nyree especially who arranged a wonderful learning environment for me at South Gippsland Hospital which is a best learning place where all the theory tasks can be learnt by practice brilliantly. Thanks a lot to my very experienced educator Reena who taught me acute care beautifully by sharing her knowledge and experience.",
      "Thanks a lot Gethsy Jayaseelan for being my idol and inspiration to complete my Diploma of Nursing at JTI. Thanks a lot for the beautiful gift as reward from JTI. Good luck for your future JTI!",
    ],
    themes: ["teaching", "support", "careers"],
  },
  {
    name: "Kerry",
    role: "Diploma",
    highlight: "I especially liked how you always related the lessons to real-life examples.",
    paragraphs: [
      "I would like to thank everyone at JTI for being so helpful and obliging during my six months as a student there. You were all so fantastic from office staff to the trainers.",
      "To Warren and Sherrill Hall: I just wanted to take some time to express how much I enjoyed being in your classes. You were dedicated, always making sure that I (we) understood the material. Being able to count on you for extra help and clarification was really reassuring. I especially liked how you always related the lessons to real-life examples that would allow the material to make more logical sense to me and always give me something to relate the lessons to.",
      "Without you I would not have been able to succeed in obtaining my Certificates and for this I will always be grateful. Thank you all again! Your help in all areas, office and classroom has been very much appreciated.",
    ],
    themes: ["teaching", "support"],
  },
  {
    name: "Mary Anne",
    role: "JTI First Aid Trainer",
    highlight: "The lady survived!! … JTI training is saving lives.",
    paragraphs: [
      "Last week I had a student in my class. He was doing his CPR update. I actually remembered him because he was so outgoing and helpful. During the class he related how a person in his care had stopped breathing and how he began CPR until the ambulance arrived. The lady survived!! We all stopped and gave him a huge applause. What a wonderful story. JTI training is saving lives.",
    ],
    themes: ["careers"],
  },
  {
    name: "Heath Harper",
    role: "Student",
    highlight: "They have been exemplary in their course delivery and guidance.",
    paragraphs: [
      "Throughout my training since undertaking the Certificate IV in Leisure and Health, I have learned a great deal about the aged care industry, and in particular leisure and lifestyle, which is such an important component of the holistic approach to aged care. I have thoroughly enjoyed my experience studying this course at the Job Training Institute as they have been exemplary in their course delivery and guidance.",
    ],
    themes: ["teaching"],
  },
  {
    name: "Lynn Govo",
    role: "Student",
    highlight: "After about 3 months study with JTI I am lucky to get a job from my placement.",
    paragraphs: [
      "Dear Mandy and all JTI staff. After about 3 months study with JTI I am lucky to get a job from my placement. All I want to say to you is thank you for your time and effort. Thank You! Cheers",
    ],
    themes: ["careers"],
  },
  {
    name: "Vishal Makadia",
    role: "Student",
    highlight: "They have solved all the queries of mine which arose during my studies.",
    paragraphs: [
      "I must say that all the JTI staff members are very co-operative and ready to help anytime. They have solved all the queries of mine which arose during my studies. I am really thankful to all the staff members of JTI.",
    ],
    themes: ["support"],
  },
  {
    name: "Jimmy Nguyen",
    role: "Student",
    highlight: "Job Training Institute's Fast Track Program allowed me to do just that.",
    paragraphs: [
      "I really wanted to be finished fast with my CHC30208 Certificate III in Aged Care course. Job Training Institute's Fast Track Program allowed me to do just that. Thanks JTI",
    ],
    themes: ["careers"],
  },
  {
    name: "Lisa J",
    role: "Student",
    highlight: "The support and encouragement I have received from your team has helped me to grow in confidence.",
    paragraphs: [
      "As a mature aged student I was a little concerned that having been out of education for such a long time I would struggle with both learning and the technology. The support and encouragement I have received from your team has helped me to grow in confidence.",
      "Also whilst I still have part of the course to complete I have received two job offers as a result of my studies. Distance learning will enable me to complete my Cert III whilst beginning my new role. I would recommend Job Training Institute to anyone who is considering entering this very worthwhile sector.",
    ],
    themes: ["support", "careers"],
  },
  {
    name: "Christian Ohiaeri",
    role: "Student",
    highlight: "Your high level of professionalism, advice and feedback gave me the required motivation and confidence to forge ahead.",
    paragraphs: [
      "Dear all, I wish to use this medium to express my sincere appreciation for your support throughout the duration of my course (Certificate IV in Disability, which I concluded in June ’11) as a JTI online course. I have received my Certificate and am very much pleased with it. Unfortunately I was not opportuned to meet you physically and barely can identify you all.",
      "Your high level of professionalism, advice and feedback gave me the required motivation and confidence to forge ahead. The IT, the trainers, work-placement coordinator, accounts and a whole lot of others that in one way or the other contributed to my successful training at JTI. My sincere gratitude goes to Joyce. I appreciate her training methodology. She was key to me concluding this course in record time.",
      "Once again, I thank you as I enter into the second phase of applying what I have learnt in the field. I promise not to let you down and to project the image of the institution positively.",
    ],
    themes: ["support", "teaching"],
  },
  {
    name: "Paula Mejia Vesga",
    role: "Student",
    highlight: "The case studies that we have in our syllabus are real and gives me a good insight on how to deal with the real work life situation.",
    paragraphs: [
      "I am an occupational therapist by profession and studying Cert IV in Disability at JTI. I must say the case studies that we have in our syllabus are real and gives me a good insight on how to deal with the real work life situation. My trainer, Marie, is really nice and is always open to answer the questions. Her teaching technique is so good that makes the content easy to understand.",
      "The most important thing that impressed me about JTI is that it has a good mix of local and international students which forces me to speak in English. The support team at JTI is so friendly and approachable. They always come up with solutions to my problems. I am enjoying my time studying at JTI and it is a place where I can fulfil my future aspirations.",
    ],
    themes: ["teaching", "support", "international"],
    photo: "/images/students/paula.jpg",
  },
  {
    name: "Wendy Milner",
    role: "Student",
    highlight: "As an older student, deciding to have a career change, I have appreciated the wonderful support and assistance available to me throughout my online studying.",
    paragraphs: [
      "Raveena & Staff, as I come to the end of my course, I wanted to send a heartfelt THANK YOU, and compliment the wonderful team at JTI. As an older student, deciding to have a career change, I have appreciated the wonderful support and assistance available to me throughout my online studying. You should all be aware of the gratitude I have for you all. I hope that you share this email with your team and your management.",
    ],
    themes: ["support"],
  },
  {
    name: "Leezhel Benito",
    role: "Student",
    highlight: "My trainers are supporting me in everything that I need to turn my dreams of becoming a nurse.",
    paragraphs: [
      "I am impressed on how student support staff and faculty members welcomed me on the first day of the school. I am studying Diploma of Nursing and my teacher Reena Veigas worked really hard in applying different methods of learning for the benefit of the students. Trainers are readily available on site if students are experiencing difficulties. My trainers are supporting me in everything that I need to turn my dreams of becoming a nurse.",
    ],
    themes: ["teaching", "support"],
  },
  {
    name: "Sujata Bashyal",
    role: "Student",
    highlight: "Nursing is my dream profession and I have all the trust that JTI will help me achieve it.",
    paragraphs: [
      "Choosing JTI is my decision ever. JTI is so well recognised college in Melbourne Australia for future study. I am from Nepal and while searching colleges for my future studies I found JTI best option to follow my aspirations. Without the qualified and friendly trainers, we can’t excel in our studies and have good course progress. Our trainers help us in every possible way.",
      "It’s true that being overseas students, we have to face lots of problems relating to accommodation, locations and setting up accounts. JTI team has supported me very well and I am thankful for their services. Nursing is my dream profession and I have all the trust that JTI will help me achieve it.",
    ],
    themes: ["international", "support", "teaching"],
  },
  {
    name: "Sudip Kandel",
    role: "Student",
    highlight: "It was my dream to study in a foreign country and JTI helped me in turning my dream into reality.",
    paragraphs: [
      "I am enrolled in nursing qualification with Job Training Institute. The thing that impressed me about JTI is that it offers ample of courses in a multicultural and vibrant environment. The learning process is more practical and career oriented. The fee structure is affordable and regulations are easily adaptable here.",
      "Trainers and other management team cooperate well. The trainers are always available for guidance and the teaching is more practically oriented. Support team is quite friendly and cooperative. We can borrow books, equipment and other reading resources easily. The students are also given the option to pay their fees in instalments which makes it very easy for a student to tackle their finances.",
      "It was my dream to study in a foreign country and JTI helped me in turning my dream into reality.",
    ],
    themes: ["international", "teaching", "support"],
  },
  {
    name: "Jadwa Shawareb",
    role: "Student",
    highlight: "My dream is to open a private school for children who are having learning difficulties and are less fortunate.",
    paragraphs: [
      "I am studying Diploma of Early Childhood Education and Care. I chose JTI because I believe JTI can help me on the path to where I want to be in Australia and help me to get into workforce faster, upgrade my existing skills and prepare me for the further study.",
      "The truth is that I’m very grateful to my trainer, Nashmeen Qazi, to be always delivering us the best lessons and is always ready to help us with the questions in a very welcoming and warm manner. She will always create an atmosphere of joy and happiness in the classroom.",
      "English is my second language and sometimes I need help. JTI team has supported me by giving free English language class. My dream is to open a private school for children who are having learning difficulties and are less fortunate. I think I have stepped at the right place to achieve my dream.",
    ],
    themes: ["teaching", "support", "careers"],
    photo: "/images/students/jadwa.jpg",
  },
  {
    name: "Sostika Thapa",
    role: "Student",
    highlight: "JTI has a great role in developing my dreams into reality through providing us with quality education.",
    paragraphs: [
      "As I am from Nepal, I got to know about JTI through my friends. I decided to choose JTI as my provider because of its incredible reviews from the students studying here. Besides this JTI has friendly environment and most appealing thing about JTI is every staff member and co-worker is willing to listen to your needs.",
      "Our trainers are really helpful in every aspect like teaching theories, industry experience and also in counselling or advising students. JTI provides free English support to the students who are having language barriers and that is really an outstanding job done by the college. JTI team has helped newcomers a lot and had a chance to know the college area and the city as they took us on a tour. They are helping us in the study as well as in finding a good place for accommodation.",
      "Every student has a dream and so do I. JTI has a great role in developing my dreams into reality through providing us with quality education. I am grateful towards JTI.",
    ],
    themes: ["international", "support", "teaching"],
  },
];
