import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionWrapper from "@/components/layout/SectionWrapper";
import projectConfig from "@/configs/home/projects";

export default function ProjectsSection() {
  return (
    <SectionWrapper className="flex min-h-screen bg-background relative overflow-hidden">
      <Container className="grid grid-cols-1 gap-9 md:gap-20">
        <div>
          <h2 className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[160px] font-light text-white">
            {projectConfig.heading}
          </h2>
        </div>

        {projectConfig.projects.map((project, index) => (
          <Link href={project.link} key={index} className="w-full block group">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={600}
              className="w-full object-contain object-top pointer-events-none select-none transition-transform duration-300 group-hover:scale-[1.01]"
              draggable={false}
              priority
            />
          </Link>
        ))}
      </Container>
    </SectionWrapper>
  );
}
