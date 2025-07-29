"use client";

import Image from "next/image";

import Container from "@/components/layout/Container";
import SectionWrapper from "@/components/layout/SectionWrapper";

export default function HeroSection() {
  return (
    <SectionWrapper className="flex items-center justify-center min-h-screen bg-background relative">
      <Container>
        <div className="text-white pb-14 md:pb-0">
          <p className="text-end font-light text-gray-400 text-xl md:text-xl lg:text-4xl">
            Frontend Developer
          </p>

          <div className="py-2 pb-4 md:py-6">
            <Image
              src="/assets/images/nameHero.png"
              alt="Hendra Aditya Pratama"
              width={1600}
              height={400}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
          {/* <h1 className="font-bold leading-none py-2 pb-4 md:pb-2 md:py-4 text-star text-[70px] sm:text-[94px] md:text-[120px] lg:text-[140px] xl:text-[150px]">
            <span className="text-green">Hendra</span> Aditya Pratama
          </h1> */}

          <p className="font-light text-gray-400 text-end ml-auto text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            Hi, I&apos;m Hendra Aditya Pratama. A frontend developer passionate
            about crafting responsive and clean user interfaces, based in
            Kediri, Indonesia.
          </p>
        </div>
      </Container>
    </SectionWrapper>
  );
}
