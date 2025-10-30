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

export interface Project {
  title: string;
  description: string;
  year: string;
  projectType: string;
  stacks: typeof techStacks;
  image: string;
  link:string;
}

export const projects: Project[] = [
  {
    title: "Nelfund - Nigeria",
    description:
      "A software that enables government grant tertiary students loans around the country.",
    year: "2024",
    projectType: "Web Application",
    stacks: techStacks,
    image: "/assets/logos/NELFUND-logo.webp",
    link: '/projects/1'
  },
  {
    title: "Indomie Cafe - Lagos",
    description:
      "A digital platform for ordering meals and managing customer experience at Indomie Café.",
    year: "2024",
    projectType: "Web Platform",
    stacks: IndomieCafeStacks,
    image: "/assets/logos/indomie-cafe.svg",
    link: '/projects/2'

  },
  {
    title: "CEO Diplomats - Global",
    description:
      "A platform where selected diplomats can register to participate in diplomatic events across the globe.",
    year: "2023",
    projectType: "Mobile Application",
    stacks: ceoDiplomats,
    image: "/assets/ceo-black-removebg-preview.png",
    link: '/projects/3'

  },
];
