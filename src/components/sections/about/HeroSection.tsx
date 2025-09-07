"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import Container from "@/components/layout/Container";

export default function HeroSection() {
  return (
    <SectionWrapper className="pt-16 flex bg-background relative overflow-hidden">
       <Container className="flex flex-col gap-8 md:gap-16 lg:gap-20">
        <div className="text-center px-6 sm:px-10 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight tracking-tight">
            About
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-400">
            Hendra
          </p>
        </div>
      </Container>
    </SectionWrapper>
  );
}
