"use client";

import { useScrollParallax } from "@/lib/hooks/useScrollParallax";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Container from "@/components/layout/Container";

export default function HeroSection() {
  const { ref, shapeYall, filter, opacity, motion } = useScrollParallax();
  return (
    <SectionWrapper
      ref={ref}
      className="pt-16 flex bg-background relative overflow-hidden"
    >
      <Container className="flex flex-col gap-8 md:gap-16 lg:gap-20">
        <div className="text-center text-white">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4 leading-tight tracking-tight absolute -bottom-[14px] block md:hidden">
            Projects Me
          </h1>
          <motion.h1
            style={{ y: shapeYall, filter, opacity }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4 leading-tight tracking-tight hidden md:block absolute -bottom-[2px]"
          >
            Projects Me
          </motion.h1>
        </div>
      </Container>
    </SectionWrapper>
  );
}
