type Experience = {
  id: string;
  role: string;
  company: string;
  date: string;
  type: string;
  responsibilities: string[];
};

export const experiences: Experience[] = [
  {
    id: "01",
    role: "Senior Frontend Developer",
    company: "Omniswift Nigeria Limited",
    date: "May 2023 - Present",
    type: "Fulltime",
    responsibilities: [
      "Designed and developed highly interactive and user-friendly dashboards using React, TypeScript, and Power BI — boosting user task efficiency by 80%, cutting processing time, and improving engagement.",
      "Served as a core developer for the Nigerian Student Loan Application (SLAS), leading the design and development of the student dashboards.",
      "Independently built the corporate site, integrated REST API endpoints, and implemented the transparency module featuring a live map for tracking loan disbursements.",
      "Integrated Power BI and AI-driven analytics for advanced data visualization and decision support.",
      "Delivered backend-connected features emphasizing clean code, reusable architecture, and test coverage.",
      "Actively participated in team code reviews, ensuring quality and consistency across the codebase.",
    ],
  },
  {
    id: "02",
    role: "Software Developer",
    company: "Japa Global Talent, Nigeria",
    date: "January 2025 - Present",
    type: "Remote",
    responsibilities: [
      "Defined and executed the company’s long-term roadmap, aligning technical goals with business objectives.",
      "Led a cross-functional team of designers, engineers, and product managers to deliver a scalable learning and job-matching platform.",
      "Integrated AI-driven recommendation engines and analytics tools to enhance user engagement.",
      "Developed personalized learning paths and job recommendation algorithms, increasing user retention by 30% and job placements by 25%.",
      "Implemented robust cybersecurity protocols including encryption and multi-factor authentication.",
      "Oversaw full product lifecycle from validation to deployment — ensuring quality and performance optimization.",
    ],
  },
  {
    id: "03",
    role: "Frontend Developer Intern",
    company: "Automedsys LLC, Atlanta, USA",
    date: "March 2022 - September 2024",
    type: "Intern",
    responsibilities: [
      "Collaborated with senior developers to enhance UI/UX across client projects using React, Tailwind CSS, and Material UI.",
      "Customized webpack and package manager configurations for optimized builds.",
      "Created detailed user guides for API usage and deployment workflows.",
      "Contributed to payment API documentation and deployment via Vercel and Netlify.",
      "Gained practical experience in front-end build optimization, responsive design, and deployment best practices.",
    ],
  },
];
