export interface ProjectDetail {
  slug: string;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
}

export const projectsDetail: ProjectDetail[] = [
  {
    slug: "eazy-cashier",
    title: "Eazy Cashier",
    image: "/assets/images/homepage/project1.webp",
    description: "Sistem kasir sederhana untuk UMKM.",
    technologies: ["Next.js", "Tailwind", "Supabase"],
    demoUrl: "https://klinin-website.vercel.app/",
  },
  {
    slug: "klinin-laundry",
    title: "Klinin Laundry",
    image: "/assets/images/homepage/project2.webp",
    description: "Aplikasi manajemen laundry berbasis web.",
    technologies: ["Vue", "Pinia", "Sass"],
    demoUrl: "https://klinin-website.vercel.app/",
  },
  {
    slug: "moviessis",
    title: "Moviessis",
    image: "/assets/images/homepage/project3.webp",
    description: "Platform pencarian film menggunakan TMDB API.",
    technologies: ["Next.js", "Framer Motion", "TMDB API"],
    demoUrl: "https://moviessis.vercel.app/",
  },
  {
    slug: "i-landing",
    title: "I-Landing",
    image: "/assets/images/homepage/project4.webp",
    description: "Template landing page modern dengan animasi.",
    technologies: ["React", "Tailwind", "GSAP"],
    demoUrl: "https://inisial-landing.netlify.app/",
  },
];
