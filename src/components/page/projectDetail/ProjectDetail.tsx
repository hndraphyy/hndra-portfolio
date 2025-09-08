"use client";

import Image from "next/image";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Container from "@/components/layout/Container";
import SplashOpen from "@/components/splash/SplashOpen";
import { useScrollParallax } from "@/lib/hooks/useScrollParallax";
import { LinkButton } from "@/components/ui/Button";

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
  const { ref, shapeY, motion } = useScrollParallax();

  return (
    <>
      <SplashOpen onFinish={() => {}} />

      {/* Hero Section */}
      <div ref={ref}>
        <div className="relative min-h-screen w-full">
          {/* desktop */}
          <motion.div
            style={{ y: shapeY }}
            className="absolute inset-0 hidden lg:block"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover object-center"
            />
          </motion.div>
          {/* mobile */}
          <div className="absolute inset-0 block lg:hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-black/60" />
          <SectionWrapper
            className="
          absolute inset-0 flex flex-col items-start justify-end 
          text-white mx-auto w-full max-w-screen-xl py-7 px-7 
          sm:px-16 md:px-20 lg:px-28 xl:px-20 big
          "
          >
            {/* desktop */}
            <motion.h1
              className="text-4xl font-bold md:text-6xl lg:text-7xl hidden lg:block"
              style={{ y: shapeY }}
            >
              {project.title}
            </motion.h1>
            {/* mobile */}
            <h1 className="text-4xl mb-20 sm:mb-6 font-bold md:text-6xl lg:text-7xl block lg:hidden">
              {project.title}
            </h1>
          </SectionWrapper>
        </div>
      </div>

      {/* Content Section */}
      <SectionWrapper className="relative flex overflow-hidden bg-background pt-16 text-white">
        <Container className="relative flex flex-col gap-8 md:gap-16">
          <p className="text-gray-400 text-base text-md sm:text-lg leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-col gap-3 lg:gap-5">
            <h2 className="text-white text-2xl leading-relaxed">
              Technologies
            </h2>
            <ul className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-white/10 px-4 py-1 text-md"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-4">
            {project.demoUrl && (
              <LinkButton href={project.demoUrl}>Go To Website</LinkButton>
            )}
            {project.repoUrl && (
              <LinkButton href={project.repoUrl}>View Code</LinkButton>
            )}
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
