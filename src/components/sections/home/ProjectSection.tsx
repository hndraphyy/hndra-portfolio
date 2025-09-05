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
      <Container className="grid grid-cols-1 gap-9 md:gap-20 relative">
        <div className="relative">
          <h2 className="text-5xl md:text-6xl lg:text-9xl font-light text-white pb-5">
            {projectConfig.heading}
          </h2>

          <motion.div
            style={{ y: arrowY }}
            className="absolute right-0 -top-24 z-[1]"
          >
            <Image
              src="/assets/images/svg/arrow-down.svg"
              alt="Arrow Down"
              width={100}
              height={100}
              className="opacity-[0.1] w-[80px] md:w-[200px]"
            />
          </motion.div>
        </div>

        <div className="flex flex-col gap-8 md:gap-20 relative z-[2]">
          {projectConfig.projects.map((project, index) => (
            <Link
              href={project.link}
              key={index}
              className="w-full block group"
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
        </div>
      </Container>
    </SectionWrapper>
  );
}
