"use client";

import Image from "next/image";
import Link from "next/link";

import Container from "@/components/layout/Container";
import SectionWrapper from "@/components/layout/SectionWrapper";
import projectConfigPage from "@/configs/projects/projectsList";

export default function ProjectsMeSection() {
  return (
    <SectionWrapper className="flex min-h-screen bg-background relative overflow-hidden">
      <Container className="mt-0 my-12">
        <div className="w-[275px] h-[10px] sm:w-[410px] md:w-[545px] lg:w-[730px] lg:h-[20px] bg-green absolute top-0"></div>
        <div className="flex flex-col gap-10 md:gap-16 lg:20 relative z-[2]">
          {/* desktop */}
          {projectConfigPage.projects.map((project, index) => (
            <Link
              href={project.link}
              key={index}
              className="w-full group hidden md:block relative overflow-hidden rounded-lg"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={600}
                className="w-full object-contain object-top pointer-events-none select-none transition-transform duration-500 group-hover:scale-105"
                draggable={false}
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-4xl font-semibold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 absolute bottom-12 left-12">
                  {project.title}
                </span>
              </div>
            </Link>
          ))}

          {/* mobile */}
          {projectConfigPage.projectsMobile.map((projectsMobile, index) => (
            <Link
              href={projectsMobile.link}
              key={index}
              className="w-full group block md:hidden relative overflow-hidden rounded-lg"
            >
              <Image
                src={projectsMobile.image}
                alt={projectsMobile.title}
                width={1200}
                height={600}
                className="w-full object-contain object-top pointer-events-none select-none transition-transform duration-500 group-hover:scale-105"
                draggable={false}
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-2xl font-semibold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 absolute bottom-5 left-5">
                  {projectsMobile.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
