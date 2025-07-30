"use client";

import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { useScrollParallax } from "@/lib/hooks/useScrollParallax";

export default function HeroSection() {
  const { ref, textX, imageX, motion } = useScrollParallax();

  return (
    <SectionWrapper
      ref={ref}
      className="flex items-center justify-center min-h-screen bg-background relative overflow-hidden"
    >
      <Container>
        <div className="text-white pb-14 md:pb-0 space-y-4">
          <motion.p
            style={{ x: textX }}
            className="text-end font-light text-gray-400 text-xl md:text-xl lg:text-4xl"
          >
            Frontend Developer
          </motion.p>

          <motion.div
            onContextMenu={(e) => e.preventDefault()}
            className="pb-3 md:py-4 select-none"
            style={{ x: imageX }}
          >
            {/* desktop */}
            <div className="w-full md:block hidden">
              <Image
                src="/assets/images/svg/nameHero.svg"
                alt="Hendra Aditya Pratama"
                width={1920}
                height={300}
                className="w-full h-auto object-contain pointer-events-none select-none"
                draggable={false}
                priority
              />
            </div>

            {/* mobile */}
            <div className="w-full md:hidden block">
              <Image
                src="/assets/images/svg/nameHeroMobile.svg"
                alt="Hendra Aditya Pratama"
                width={1080}
                height={200}
                className="w-full h-auto object-contain pointer-events-none select-none"
                draggable={false}
                priority
              />
            </div>
          </motion.div>

          <motion.p
            style={{ x: textX }}
            className="font-light text-gray-400 text-end ml-auto text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
          >
            Hi, I&apos;m Hendra Aditya Pratama. A frontend developer passionate
            about crafting responsive and clean user interfaces, based in
            Kediri, Indonesia.
          </motion.p>
        </div>
      </Container>
    </SectionWrapper>
  );
}
