"use client";

import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { useScrollParallax } from "@/lib/hooks/useScrollParallax";

export default function HeroSection() {
  const { ref, textX, imageX, shapeY, motion } = useScrollParallax();

  return (
    <SectionWrapper
      ref={ref}
      className="flex items-center justify-center min-h-screen bg-background relative overflow-hidden"
    >
      <motion.div
        style={{ y: shapeY }}
        className="absolute top-[70px] left-[-100px] md:left-[inherit] md:right-[-100px] w-[140px] md:w-[180px] h-[140px] md:h-[330px] bg-green rounded-l-full blur-[90px] opacity-70 pointer-events-none z-0 animate-glow"
      />
      <motion.div
        style={{ y: shapeY }}
        className="absolute bottom-[50px] left-[-100px] w-[180px] md:w-[180px] h-[270px] md:h-[370px] bg-white rounded-r-full blur-[90px] opacity-70 pointer-events-none z-0 animate-glow"
      />

      <motion.div
        style={{ y: shapeY }}
        className="absolute bottom-[-100px] left-[50px] w-[280px] md:w-[400px] h-[230px] md:h-[220px] bg-green rounded-t-full blur-[90px] opacity-70 pointer-events-none z-0 animate-glow"
      />

      <Container>
        <div className="text-white pb-[3rem] md:pb-0 space-y-4">
          <motion.p
            style={{ x: textX }}
            className="text-end font-light text-gray-400 text-2xl md:text-xl lg:text-4xl"
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
