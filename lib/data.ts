export const techStacks = [
  {
    name: "Next.js",
    logo: "/assets/logos/icons8-react-js-50.png",
    border: "border-[#000000]/20 bg-[#ffffff]",
  },
  {
    name: "TypeScript",
    logo: "/assets/logos/icons8-typescript-50.png",
    border: "border-[#3178C6]/30 bg-[#f0f6ff]",
  },
  {
    name: "Tailwind CSS",
    logo: "/assets/logos/icons8-tailwind-css-48.png",
    border: "border-[#38BDF8]/30 bg-[#ecfeff]",
  },
  {
    name: "Node Js",
    logo: "/assets/logos/icons8-nodejs-48.png",
    border: "border-[#68A063]/20 bg-[#f3fff4]",
  },
];

export const IndomieCafeStacks = [
  {
    name: "Wordpress",
    logo: "/assets/logos/icons8-wordpress-64.png",
    border: "border-[#000000]/20 bg-[#ffffff]",
  },
];

export const ceoDiplomats = [
  {
    name: "Next.js",
    logo: "/assets/logos/icons8-react-js-50.png",
    border: "border-[#000000]/20 bg-[#ffffff]",
  },
  {
    name: "TypeScript",
    logo: "/assets/logos/icons8-typescript-50.png",
    border: "border-[#3178C6]/30 bg-[#f0f6ff]",
  },
  {
    name: "Tailwind CSS",
    logo: "/assets/logos/icons8-tailwind-css-48.png",
    border: "border-[#38BDF8]/30 bg-[#ecfeff]",
  },
  {
    name: "Node Js",
    logo: "/assets/logos/icons8-nodejs-48.png",
    border: "border-[#68A063]/20 bg-[#f3fff4]",
  },
  {
    name: "React Native",
    logo: "/assets/logos/icons8-react-js-50.png",
    border: "border-[#000000]/20 bg-[#ffffff]",
  },
  {
    name: "Firebase",
    logo: "/assets/logos/icons8-firebase-48.png",
    border: "border-[#FACC15]/30 bg-[#FEFCE8]",
  },
];

interface Team {
  name: string;
  role: string;
}
export interface Project {
  title: string;
  description: string;
  year: string;
  projectType: string;
  stacks: typeof techStacks;
  image: string;
  link: string;
  caseStudies: string[];
  team: Team[];
  caseStudyDescription?: string;
  websiteLink?: string;
}

export const projects: Project[] = [
  {
    title: "Nelfund - Nigeria",
    description:
      "A national platform enabling government-backed tertiary student loans across Nigeria.",
    websiteLink: "https://nelf.gov.ng/",
    caseStudyDescription: `
  Access to higher education in Nigeria has long been hindered by the inabilit of many students to afford tuition and living costs. Traditional loan systems were inefficient, opaque, and largely inaccessible — especially for students from lower-income families. Before NELFUND, there was no unified digital system to manage loan applications, disbursements, or repayments. Government agencies depended heavily on manual paperwork, causing long delays, errors, and a lack of transparency. Students had little visibility into their application status, while administrators struggled to monitor and process thousands of requests efficiently.

  The NELFUND Student Loan Application System (SLAS) was created to solve these challenges by fully digitizing the student loan process — from application to repayment. As part of the development team, I worked on designing and implementing a responsive and interactive web platform that simplified the entire process for students and administrators alike. The platform allowed students to easily apply for loans, upload verification documents, and track approval progress in real time. For administrators, it provided secure access to manage applications, verify eligibility, and disburse funds through automated workflows.

  A major highlight of the project was the development of a live, data-driven dashboard integrated with Power BI. This dashboard provided real-time analytics and transparency into fund allocation and disbursement patterns — enabling policymakers and auditors to make informed decisions and ensure accountability.

  The goal was to reduce processing time by 80%, improve user experience, and create a transparent system for both applicants and administrators. The platform also included scalability provisions to accommodate future modules such as grants, bursaries, and vocational support programs.

  The key user personas included:
  - Students — applying for and tracking their loans.
  - Administrators — validating and approving applications.
  - Policymakers — monitoring nationwide loan statistics and performance.
  - Developers — maintaining APIs and ensuring platform security.

  The result was a modern, efficient, and transparent platform that revolutionized Nigeria’s student loan process. NELFUND transformed what was once a fragmented manual system into a digital ecosystem that empowers both students and the government to achieve educational inclusivity and financial transparency at scale.
  `,
    year: "2024",
    projectType: "Web Application",
    stacks: [
      {
        name: "Next.js",
        logo: "/assets/logos/icons8-react-js-50.png",
        border: "border-[#000000]/20 bg-[#ffffff]",
      },
      {
        name: "TypeScript",
        logo: "/assets/logos/icons8-typescript-50.png",
        border: "border-[#3178C6]/30 bg-[#f0f6ff]",
      },
      {
        name: "Tailwind CSS",
        logo: "/assets/logos/icons8-tailwind-css-48.png",
        border: "border-[#38BDF8]/30 bg-[#ecfeff]",
      },
    ],
    image: "/assets/logos/NELFUND-logo.webp",
    caseStudies: [
      "/assets/nelfund/nel1.png",
      "/assets/nelfund/nel2.png",
      "/assets/nelfund/nelfund.png",
    ],
    team: [
      { name: "Emediong Idemeto", role: "Frontend Developer" },
      { name: "Omniswift Nigeria", role: "Agency Partner" },
    ],
    link: "/projects/nelfund-nigeria",
  },

  {
    title: "Indomie Cafe - Lagos",
    description:
      "An immersive digital ordering experience for Indomie Café — simplifying meal customization and ordering.",
    year: "2024",
    websiteLink: "https://indomiecafe.ng/",
    projectType: "Web Platform",
    caseStudyDescription: `Indomie Café is a first-of-its-kind quick-service restaurant concept by Indomie Nigeria, designed to bring the iconic instant noodle brand to life through a modern dining and digital experience. The project aimed to merge the convenience of digital ordering with the fun, customizable nature of Indomie meals, enabling customers to explore different recipes and place orders seamlessly from their devices or in-store kiosks.

The platform was built to address operational inefficiencies and enhance customer engagement. Before this, meal orders at the café relied heavily on manual entry, leading to delays and inconsistent experiences. The digital solution introduced an intuitive menu system, real-time kitchen updates, and a smooth checkout process — reducing wait times and improving order accuracy.

Our goal was to create an experience that felt both playful and premium, aligning with Indomie’s youthful brand while ensuring high performance and responsiveness across devices. The UI emphasized vibrant visuals and motion interactions, reflecting the café’s energetic atmosphere.

The primary user personas included walk-in customers, repeat diners, and marketing teams tracking performance metrics. By integrating analytics and optimizing for mobile, the platform empowered both users and administrators — making Indomie Café not just a place to eat, but a digital-first brand experience.`,

    stacks: [
      {
        name: "React.js",
        logo: "/assets/logos/icons8-react-js-50.png",
        border: "border-[#61DBFB]/30 bg-[#e6faff]",
      },
      {
        name: "TypeScript",
        logo: "/assets/logos/icons8-typescript-50.png",
        border: "border-[#3178C6]/30 bg-[#f0f6ff]",
      },
      {
        name: "Firebase",
        logo: "/assets/logos/icons8-firebase-48.png",
        border: "border-[#FFA611]/30 bg-[#fff8eb]",
      },
    ],
    image: "/assets/logos/indomie-cafe.svg",
    caseStudies: [
      "/assets/indomiecafe/cafe1.png",
      "/assets/indomiecafe/cafe2.png",
      "/assets/indomiecafe/cafe3.png",
    ],
    team: [
      { name: "Emediong Idemeto", role: "Frontend Developer" },
      { name: "Indomie Cafe Nigeria", role: "Client" },
    ],
    link: "/projects/indomie-cafe-lagos",
  },
  {
    title: "CEO Diplomats - Global",
    description:
      "A networking app that connects global business leaders and diplomats to collaborate and engage through verified events.",
    year: "2023",
    projectType: "Mobile Application",
    caseStudyDescription: `CEO Diplomats is a global diplomatic engagement platform designed to connect, register, and manage diplomats and global leaders participating in international events and collaborations. The platform serves as a digital hub for verified diplomatic representatives, streamlining the process of registration, verification, and event coordination across multiple regions.

Before the platform’s creation, event organizers relied on spreadsheets, emails, and paper-based systems to handle participant data — a process prone to security risks, duplication, and inefficiency. CEO Diplomats was developed to eliminate these challenges by offering a secure, automated, and user-friendly registration experience that ensured authenticity and transparency.

The project’s primary goal was to foster trust, simplify communication, and promote collaboration among global diplomats. A major focus was data integrity and compliance, ensuring user verification followed global standards while maintaining ease of access and usability. The interface was intentionally designed to reflect professionalism, with a refined aesthetic that communicates credibility and prestige.

Key user personas included government officials, diplomats, event coordinators, and organization administrators. Each role had tailored access levels and dashboards to manage their specific tasks efficiently. The result was a unified digital ecosystem where global diplomacy could thrive securely and efficiently — bringing structure and clarity to a space that once depended on manual, fragmented processes.`,

    stacks: [
      {
        name: "React Native",
        logo: "/assets/logos/icons8-react-js-50.png",
        border: "border-[#61DBFB]/30 bg-[#e6faff]",
      },
      {
        name: "Expo",
        logo: "/assets/logos/icons8-expo-60.png",
        border: "border-[#000000]/20 bg-[#ffffff]",
      },
      {
        name: "Firebase",
        logo: "/assets/logos/icons8-firebase-48.png",
        border: "border-[#FFA611]/30 bg-[#fff8eb]",
      },
    ],
    image: "/assets/logos/ceo-black-removebg-preview.png",
    caseStudies: [
      "/assets/diplomats/ceo1.png",
      "/assets/diplomats/ceo2.png",
      "/assets/diplomats/ceo3.png",
    ],
    team: [
      { name: "Emediong Idemeto", role: "Frontend Developer" },
      { name: "CEO Diplomats Inc.", role: "Client" },
    ],
    link: "/projects/ceo-diplomats-global",
  },
  {
    title: "OfferPrep - Lagos, Nigeria",
    description:
      "A career coaching platform designed to prepare job seekers for interviews and land their dream jobs through personalized mentorship.",
    year: "2026",
    websiteLink: "https://www.offerprep.net/",
    projectType: "Web App & Booking",
    caseStudyDescription: `OfferPrep is a career-focused platform dedicated to bridging the gap between job seekers and their career aspirations. The core objective of the platform is to equip candidates with the confidence, practical skills, and insider insights necessary to excel in competitive interviews. Whether for students, recent graduates, or seasoned professionals, OfferPrep provides a structured environment for growth and preparation.

The platform was built to streamline the process of connecting candidates with expert coaches. Before its launch, many job seekers lacked access to quality mock interviews and personalized feedback, often feeling underprepared for real-world hiring scenarios. OfferPrep solved this by offering a seamless booking system for coaching sessions, mock interviews, and tailored feedback rounds.

As the developer, I focused on creating a high-performance, responsive web application that manages bookings and provides a smooth user experience. The integration of scheduling tools and a clean, professional interface ensures that both the seekers and the mentors can collaborate efficiently.

Key features include:
- Personalized Coaching Sessions — connecting users with industry experts.
- Mock Interview Booking — simulating real interview environments.
- Responsive Design — ensuring accessibility across all devices.
- Feedback Loops — structured post-interview evaluations to improve performance.

The result is a powerful tool that empowers individuals to take control of their career journey, transforming anxiety into confidence and applications into offers.`,
    stacks: [
      {
        name: "Next.js",
        logo: "/assets/logos/icons8-react-js-50.png",
        border: "border-[#000000]/20 bg-[#ffffff]",
      },
      {
        name: "TypeScript",
        logo: "/assets/logos/icons8-typescript-50.png",
        border: "border-[#3178C6]/30 bg-[#f0f6ff]",
      },
      {
        name: "Tailwind CSS",
        logo: "/assets/logos/icons8-tailwind-css-48.png",
        border: "border-[#38BDF8]/30 bg-[#ecfeff]",
      },
    ],
    image:
      "https://ijjdkudpyglndoarpqti.supabase.co/storage/v1/object/public/logo/1769551801724-WhatsApp_Image_2026-01-27_at_23.00.02.jpeg",
    caseStudies: [],
    team: [
      { name: "Emediong Idemeto", role: "Frontend Developer" },
      { name: "OfferPrep Team", role: "Client" },
    ],
    link: "/projects/offerprep",
  },
];

export interface ServiceProps {
  title: string;
  description: string;
  roles: string[];
}

export interface WorkExperienceProps {
  id: number;
  index: number;
  title_role: string;
  company: string;
  date_started: string;
  date_ended: string;
  job_responsibility: string[];
  job_type: string;
  location: string;
}

export type TestimonialProps = {
  id: number;
  name: string;
  role: string;
  testimonial: string;
};
