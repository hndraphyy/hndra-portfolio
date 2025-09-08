"use client";

import Image from "next/image";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Container from "@/components/layout/Container";
import SplashOpen from "@/components/splash/SplashOpen";

interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
}

interface ProjectDetailPageProps {
  project: Project;
}

export default function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  return (
    <>
      <SplashOpen onFinish={() => {}} />

      {/* Hero Section */}
      <div className="relative min-h-screen w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl lg:text-7xl">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <SectionWrapper className="relative flex overflow-hidden bg-background pt-16">
        <Container className="relative flex flex-col gap-8 md:gap-16 lg:gap-20">
          <p className="mb-8 text-center text-lg opacity-90 md:text-xl">
            {project.description}
          </p>

          <div className="mb-12">
            <h2 className="mb-4 text-center text-xl font-semibold md:text-2xl">
              Technologies
            </h2>
            <ul className="flex flex-wrap justify-center gap-3">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md bg-white/10 px-3 py-1 text-sm md:text-base"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-green px-5 py-3 font-medium text-black transition hover:bg-green/80"
              >
                Live Demo
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white/20 px-5 py-3 font-medium transition hover:bg-white/30"
              >
                View Code
              </a>
            )}
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}