import { projectsDetail } from "@/configs/projects/projectsDetail";

const projectConfigPage = {
  heading: "Projects",
  projects: projectsDetail.map((p) => ({
    title: p.title,
    image: p.image,
    link: `/projects/${p.slug}`,
  })),
  projectsMobile: [
    {
      title: "Zotural",
      image: "/assets/images/homepage/project5-mobile.webp",
      link: "/projects/zotural",
    },
    {
      title: "Eazy Cashier",
      image: "/assets/images/homepage/project1-mobile.webp",
      link: "/projects/eazy-cashier",
    },
    {
      title: "Moviessis",
      image: "/assets/images/homepage/project3-mobile.webp",
      link: "/projects/moviessis",
    },
    {
      title: "AI Innovation Landing",
      image: "/assets/images/homepage/project6-mobile.webp",
      link: "/projects/ai-innovation-landing",
    },
    {
      title: "I-Landing",
      image: "/assets/images/homepage/project4-mobile.webp",
      link: "/projects/i-landing",
    },
    {
      title: "Klinin Laundry",
      image: "/assets/images/homepage/project2-mobile.webp",
      link: "/projects/klinin-laundry",
    },
  ],
};

export default projectConfigPage;
