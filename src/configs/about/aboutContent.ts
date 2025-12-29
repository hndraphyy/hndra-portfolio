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
    antarmuka web modern. Saya terbiasa menggunakan Next.js dengan TypeScript (TSX)
    dan TailwindCSS sebagai stack utama untuk membangun website yang responsif,
    cepat, dan mudah dikembangkan. Selain itu, saya merupakan lulusan SMK Negeri 1 Kediri
    jurusan Teknik Komputer dan Jaringan (TKJ), yang membekali saya dengan dasar
    pemahaman teknologi dan sistem komputer.
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
      name: "ORDO APPS, Surabaya (Frontend Web)",
      date: "Jul 2024 – Nov 2024",
      desc: [
        {
          content: `Mengonversi desain Figma menjadi halaman web yang bersih dan responsif menggunakan Laravel Blade dan SASS (SCSS) untuk landing page serta dashboard admin.`,
        },
        {
          content: `Memperbaiki bug frontend berdasarkan feedback QA serta berkolaborasi dengan desainer dan developer backend untuk menyempurnakan tampilan dan pengalaman pengguna sebelum rilis ke produksi.`,
        },
      ],
    },
  ],
  goals: `
    Ke depan, saya ingin terus mengembangkan kemampuan di bidang frontend development,
    termasuk memperdalam animasi antarmuka menggunakan Framer Motion. Selain itu,
    saya juga tertarik mempelajari sisi backend secara bertahap agar dapat berkembang
    menjadi seorang Fullstack Developer.
  `,
};
