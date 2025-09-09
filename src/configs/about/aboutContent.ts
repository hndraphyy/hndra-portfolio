export interface Skill {
  name: string;
  icon: string;
}

export interface AboutContent {
  description: string;
  skills: Skill[];
  goals: string;
}

export const aboutContent: AboutContent = {
  description: `
    Saya seorang Frontend Developer yang berfokus pada membangun web modern
    menggunakan React, Next.js, dan Tailwind CSS. 
    Memiliki pengalaman membuat UI yang responsif, animasi halus, dan integrasi API.
  `,
  skills: [
    {
      name: "HTML",
      icon: "/assets/images/svg/tech/html.svg",
    },
    {
      name: "CSS",
      icon: "/assets/images/svg/tech/css.svg",
    },
    {
      name: "JavaScript",
      icon: "/assets/images/svg/tech/js.svg",
    },
    {
      name: "Next.js",
      icon: "/assets/images/svg/tech/next.svg",
    },
    {
      name: "React",
      icon: "/assets/images/svg/tech/react.svg",
    },
    {
      name: "TypeScript",
      icon: "/assets/images/svg/tech/ts.svg",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/images/svg/tech/tailwind.svg",
    },
    {
      name: "SASS",
      icon: "/assets/images/svg/tech/sass.svg",
    },
  ],
  goals: `
    Fokus saya adalah terus berkembang di dunia frontend, memperdalam animasi
    dengan Framer Motion, dan menambah pengalaman di sisi backend agar bisa 
    menjadi Fullstack Developer.
  `,
};
