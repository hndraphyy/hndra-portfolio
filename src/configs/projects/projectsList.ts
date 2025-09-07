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
      title: "Eazy Cashier",
      image: "/assets/images/homepage/project1-mobile.webp",
      link: "/projects/eazy-cashier",
    },
    {
      title: "Klinin Laundry",
      image: "/assets/images/homepage/project2-mobile.webp",
      link: "/projects/klinin-laundry",
    },
    {
      title: "Moviessis",
      image: "/assets/images/homepage/project3-mobile.webp",
      link: "/projects/moviessis",
    },
    {
      title: "I-Landing",
      image: "/assets/images/homepage/project4-mobile.webp",
      link: "/projects/i-landing",
    },
  ],
};

export default projectConfigPage;
