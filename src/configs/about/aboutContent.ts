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
    Frontend Developer yang berorientasi pada detail, dengan pengalaman profesional menyelesaikan 22+ task production-ready di 8+ proyek klien. Terbiasa membangun aplikasi web yang performant dan terstruktur menggunakan React.js, Next.js, dan Vue.js, dengan fokus pada penerjemahan desain high-fidelity Figma menjadi kode yang modular, scalable, dan mudah dirawat.

    Berpengalaman bekerja dalam lingkungan Agile, berkolaborasi dengan designer, backend engineer, dan QA untuk menghasilkan solusi web yang bersih, berkelanjutan, dan berfokus pada kebutuhan pengguna.
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
          content: `Menerjemahkan wireframe POS menjadi desain UI yang berfokus pada desktop, memastikan alur kasir yang jelas dan kemudahan penggunaan.`,
        },
        {
          content: `Memperbaiki dan melakukan slicing menggunakan Laravel Blade dan SCSS untuk mengimplementasikan CRUD produk, alur kasir, dan halaman transaksi.`,
        },
      ],
    },
    {
      name: "ORDOAPPS, Surabaya | Frontend Developer Intern",
      date: "Jul 2024 – Nov 2024",
      desc: [
        {
          content: `Implementasi UI dari Desain ke Produksi: Menerjemahkan desain Figma menjadi template Laravel Blade siap produksi untuk lebih dari 8+ brand, menyelesaikan lebih dari 22+ tugas pengembangan frontend termasuk komponen UI, penyesuaian tata letak, dan perbaikan bug.`,
        },
        {
          content: `Kolaborasi & Debugging Antar-Tim: Bekerja sama dengan pengembang frontend senior untuk mengidentifikasi dan menyelesaikan masalah UI, menyempurnakan komponen, dan mendukung penyelesaian proyek tepat waktu.`,
        },
        {
          content: `Kolaborasi & Debugging Antar-Tim: Bekerja sama dengan pengembang frontend senior untuk mengidentifikasi dan menyelesaikan masalah UI, menyempurnakan komponen, dan mendukung penyelesaian proyek tepat waktu.`,
        },
      ],
    },
  ],
  educations: [
    {
      name: "SMK Negeri 1 Kediri",
      date: "Jul 2022 – May 2025",
      desc: [
        {
          content: `Terbiasa menggunakan React.js, Next.js, TypeScript, dan Tailwind CSS yang dipelajari secara otodidak melalui eksplorasi mandiri dan pengembangan proyek. Memiliki pengalaman mengimplementasikan Laravel Blade dan SASS untuk pengembangan antarmuka web yang rapi dan scalable.`,
        },
        {
          content: `Memiliki pengetahuan dasar yang kuat dalam Jaringan Komputer, termasuk konfigurasi MikroTik, pemecahan masalah jaringan, dan pemeliharaan perangkat keras (kabel/crimping).`,
        },
        {
          content: `Menjabat sebagai Sekretaris di Organisasi Sie Kerohanian Islam (SKI), mengelola dokumentasi administrasi dan mengoordinasikan kegiatan organisasi.`,
        },
      ],
    },
  ],
  goals: `
    saya berkomitmen untuk terus mengasah kemampuan di bidang frontend development, dengan fokus pada pengembangan animasi antarmuka yang halus dan bermakna menggunakan Framer Motion guna meningkatkan kualitas pengalaman pengguna.

    Seiring dengan itu, saya juga secara bertahap memperluas pemahaman di sisi backend development, dengan tujuan membangun perspektif teknis yang lebih menyeluruh dan berkembang sebagai seorang Fullstack Developer yang adaptif dan berorientasi pada solusi.
  `,
};
