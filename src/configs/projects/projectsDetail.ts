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
    slug: "zotural",
    title: "Zotural",
    image: "/assets/images/homepage/project5.webp",
    description:
      "Zotural is a web-based dashboard application designed as a simulation of an internal corporate admin panel. It features a robust role-based access control (RBAC) system with two primary roles: Manager and Sales Agent. Managers can oversee global operations through a summary dashboard, manage employee data, products, and transactions, and view comprehensive business reports. Meanwhile, Sales Agents focus on operational tasks such as managing customer data, creating orders, and monitoring individual sales performance. This project was developed as a frontend-only application utilizing mock data.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Vite",
      "TailwindCSS",
    ],
    demoUrl: "https://zotu.vercel.app",
    repoUrl: "https://github.com/hndraphyy/ZOTURAL",
  },
  {
    slug: "eazy-cashier",
    title: "Eazy Cashier",
    image: "/assets/images/homepage/project1.webp",
    description:
      "A lightweight and intuitive point-of-sale system tailored for small to medium enterprises (SMEs) to streamline daily sales management. The application features a fast-checkout interface, comprehensive inventory management including stock updates, and organized transaction logging. Additionally, the system includes an invoice printing function to help business owners provide proof of purchase to customers while efficiently monitoring sales reports.",
    technologies: ["HTML", "CSS", "JavaScript", "Laravel", "SASS", "Elektron"],
    demoUrl: "",
    repoUrl: "",
  },
  {
    slug: "moviessis",
    title: "Moviessis",
    image: "/assets/images/homepage/project3.webp",
    description:
      "A movie discovery landing page built by integrating the TMDB API. Users can explore various movie categories, browse lists of popular titles, and search for specific films by title. The clean, poster-based interface emphasizes visual information, allowing users to find and discover their favorite movies quickly and effortlessly.",
    technologies: [
      "HTML",
      "CSS",
      "Next.js",
      "React.js",
      "TypeScript",
      "TailwindCSS",
      "TMDB API",
    ],
    demoUrl: "https://moviessis.vercel.app/",
    repoUrl: "https://github.com/hndraphyy/MOVIESSIS",
  },
  {
    slug: "ai-innovation-landing",
    title: "AI Innovation Landing",
    image: "/assets/images/homepage/project6.webp",
    description:
      "A modern landing page template designed as a clean and high-performance web example. Featuring a responsive and highly customizable layout, this template is ideal for company profiles, personal branding, or project showcases. Its organized code structure serves as a solid foundation for building more complex web applications.",
    technologies: ["HTML", "CSS", "Vue.js", "TypeScript", "UnoCSS"],
    demoUrl: "https://ai-innovation-landing.vercel.app",
    repoUrl: "https://github.com/hndraphyy/ai-innovation-landing",
  },
  {
    slug: "i-landing",
    title: "I-Landing",
    image: "/assets/images/homepage/project4.webp",
    description:
      "A contemporary landing page template showcasing clean design principles and responsive layouts. Built for versatility, it can be easily adapted for corporate profiles or personal portfolios. The modular structure ensures scalability and maintainability for further development.",
    technologies: [
      "HTML",
      "CSS",
      "Next.js",
      "React.js",
      "TypeScript",
      "TailwindCSS",
    ],
    demoUrl: "https://inisial-landing.netlify.app/",
    repoUrl: "https://github.com/hndraphyy/LANDING",
  },
  {
    slug: "klinin-laundry",
    title: "Klinin Laundry",
    image: "/assets/images/homepage/project2.webp",
    description:
      "A professional laundry service landing page designed to enhance online brand presence. The site provides detailed information about available services, price lists, business advantages, and contact details for easy booking. With its modern and responsive design, this page helps build customer trust and broadens the reach of laundry business promotions.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Vite",
      "TailwindCSS",
    ],
    demoUrl: "https://klinin-website.vercel.app/",
    repoUrl: "",
  },
];