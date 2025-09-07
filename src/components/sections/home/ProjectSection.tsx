"use client";

import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/layout/Container";
import SectionWrapper from "@/components/layout/SectionWrapper";
import projectConfig from "@/configs/home/projects";
import { useScrollParallax } from "@/lib/hooks/useScrollParallax";

export default function ProjectsSection() {
  const { ref, motion } = useScrollParallax();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const arrowY = useTransform(scrollYProgress, [0, 1], [0, 450]);

  return (
    <SectionWrapper
      ref={ref}
      className="flex min-h-screen bg-background relative overflow-hidden"
    >
      <Container className="flex flex-col gap-8 md:gap-16 lg:gap-20">
        <div className="relative">
          <h2 className="text-5xl md:text-6xl lg:text-9xl font-light text-white pt-4">
            {projectConfig.heading}
          </h2>

          <motion.div
            style={{ y: arrowY }}
            className="absolute right-0 -top-9 md:-top-24 z-[1]"
          >
            <Image
              src="/assets/images/svg/arrow-down.svg"
              alt="Arrow Down"
              width={100}
              height={100}
              className="opacity-[0.1] w-[70px] md:w-[200px]"
            />
          </motion.div>
        </div>

        <div className="flex flex-col gap-8 md:gap-16 lg:20 relative z-[2]">
          {/* desktop */}
          {projectConfig.projects.map((project, index) => (
            <Link
              href={project.link}
              key={index}
              className="w-full group hidden md:block"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={600}
                className="w-full object-contain object-top pointer-events-none select-none"
                draggable={false}
                priority
              />
            </Link>
          ))}
          {/* mobile */}
          {projectConfig.projectsMobile.map((projectsMobile, index) => (
            <Link
              href={projectsMobile.link}
              key={index}
              className="w-full group block md:hidden"
            >
              <Image
                src={projectsMobile.image}
                alt={projectsMobile.title}
                width={1200}
                height={600}
                className="w-full object-contain object-top pointer-events-none select-none"
                draggable={false}
                priority
              />
            </Link>
          ))}
          <div className="flex justify-end">
            <Link
              href="/projects"
              className="text-5xl md:text-6xl lg:text-8xl font-light hover:-skew-x-12 text-green underline duration-500 custom-hover"
            >
              Projects
            </Link>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
