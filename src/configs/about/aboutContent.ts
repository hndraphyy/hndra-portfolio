export interface Skill {
  name: string;
  icon: string;
}

export interface Experience {
  name: string;
  date: string;
  desc: Desc[];
}

export interface Desc {
  content: string;
}

export interface AboutContent {
  description: string;
  skills: Skill[];
  experiences: Experience[];
  goals: string;
}

export const aboutContent: AboutContent = {
  description: `
    Saya adalah seorang Frontend Developer dengan minat besar pada pengembangan
    antarmuka web modern. Saya sering menggunakan Next.js (dengan TypeScript/TSX)
    dan TailwindCSS sebagai stack utama untuk membangun website yang responsif,
    cepat, dan mudah dikembangkan. Saya juga menempuh pendidikan di SMKN 1 Kediri, 
    jurusan Teknik Komputer dan Jaringan (TKJ).
  `,
  skills: [
    { name: "HTML", icon: "/assets/images/svg/tech/html.svg" },
    { name: "CSS", icon: "/assets/images/svg/tech/css.svg" },
    { name: "JavaScript", icon: "/assets/images/svg/tech/js.svg" },
    { name: "React", icon: "/assets/images/svg/tech/react.svg" },
    { name: "TypeScript", icon: "/assets/images/svg/tech/ts.svg" },
    { name: "TailwindCSS", icon: "/assets/images/svg/tech/tailwind.svg" },
    { name: "SASS", icon: "/assets/images/svg/tech/sass.svg" },
    { name: "Next.js", icon: "/assets/images/svg/tech/next.svg" },
  ],
  experiences: [
    {
      name: "ORDO APPS",
      date: "Jul 2024 - Nov 2024",
      desc: [
        {
          content: `Mengonversi desain Figma menjadi halaman web yang bersih dan responsif menggunakan Laravel Blade dan SASS (SCSS) untuk landing page serta halaman dashboard admin.`,
        },
        {
          content: `Memperbaiki bug frontend berdasarkan feedback QA dan berkolaborasi dengan desainer serta developer backend untuk menyempurnakan UI/UX hingga siap produksi.`,
        },
      ],
    },
  ],
  goals: `
    Saya ingin terus mengasah kemampuan di frontend development,
    memperdalam animasi menggunakan Framer Motion, serta menambah wawasan di sisi
    backend agar dapat berkembang menjadi seorang Fullstack Developer.
  `,
};
