interface Skill {
  name: string;
  icon: string;
}

interface Experience {
  name: string;
  date: string;
  desc: Desc[];
}

interface Education {
  name: string;
  date: string;
  desc: Desc[];
}

interface Desc {
  content: string;
}

export interface AboutContent {
  description: string;
  skills: Skill[];
  experiences: Experience[];
  educations: Education[];
  goals: string;
}

export const aboutContent: AboutContent = {
  description: `
    Detail-oriented Frontend Developer specialized in building scalable, pixel-perfect interfaces using Next.js, TypeScript, and React. I have a proven track record of delivering 10+ web projects and completing over 60+ development tasks across multiple production environments.

    Experienced in working within Agile workflows, collaborating closely with designers, backend engineers, and QA teams to translate complex high-fidelity Figma designs into clean, modular, and maintainable code that prioritizes user experience and performance.
  `,
  skills: [
    { name: "HTML", icon: "/assets/images/svg/tech/html.svg" },
    { name: "CSS", icon: "/assets/images/svg/tech/css.svg" },
    { name: "JavaScript", icon: "/assets/images/svg/tech/js.svg" },
    { name: "TypeScript", icon: "/assets/images/svg/tech/ts.svg" },
    { name: "React", icon: "/assets/images/svg/tech/react.svg" },
    { name: "Vue.js", icon: "/assets/images/svg/tech/vue.svg" },
    { name: "SASS", icon: "/assets/images/svg/tech/sass.svg" },
    { name: "TailwindCSS", icon: "/assets/images/svg/tech/tailwind.svg" },
    { name: "UnoCSS", icon: "/assets/images/svg/tech/unocss.svg" },
    { name: "Next.js", icon: "/assets/images/svg/tech/next.svg" },
  ],
  experiences: [
    {
      name: "KOVATEKNO, Kediri | Frontend Developer",
      date: "May 2025 – Dec 2025",
      desc: [
        {
          content: `End-to-End UI Development: Delivered 5+ web projects and executed 30+ frontend tasks, successfully translating complex Figma designs into responsive, high-performance landing pages and multi-role dashboards using Next.js and TypeScript.`,
        },
        {
          content: `Scalable Component Architecture: Engineered highly reusable and modular UI components for a complex wholesale Point-of-Sale (POS) system, significantly improving code maintainability.`,
        },
        {
          content: `Cross-Functional Collaboration: Partnered seamlessly with backend developers and QA teams to ensure accurate API integration and iterate on interfaces based on rigorous testing feedback.`,
        },
      ],
    },
    {
      name: "ORDOAPPS, Surabaya | Frontend Developer Intern",
      date: "Jul 2024 – Nov 2024",
      desc: [
        {
          content: `Production-Ready UI Implementation: Translated Figma designs into production-ready Laravel Blade templates for 8+ projects, completing 22+ development tasks including UI components, layout updates, and bug fixes.`,
        },
        {
          content: `Debugging & Optimization: Collaborated with senior developers to identify and resolve UI issues, refined components, and ensured consistent usability based on QA feedback.`,
        },
      ],
    },
  ],
  educations: [
    {
      name: "SMK Negeri 1 Kediri | Computer and Network Engineering",
      date: "Jul 2022 – May 2025",
      desc: [
        {
          content: `Self-taught expertise in modern frontend technologies including React.js, Next.js, TypeScript, and Tailwind CSS through independent project development.`,
        },
        {
          content: `Strong foundational knowledge in Computer Networking, including MikroTik configuration, network troubleshooting, and hardware maintenance.`,
        },
        {
          content: `Served as Secretary in the Islamic Spiritual Organization (SKI), managing administrative documentation and coordinating organizational activities.`,
        },
      ],
    },
  ],
  goals: `
    I am committed to continuously refining my frontend development skills, with a specific focus on creating smooth and meaningful interface animations using Framer Motion to elevate user experience.

    Parallel to this, I am gradually expanding my expertise into backend development, aiming to build a more holistic technical perspective and evolve into an adaptive, solution-oriented Fullstack Developer.
  `,
};
