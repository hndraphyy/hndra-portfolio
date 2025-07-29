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
            className="py-2 pb-4 md:py-6 select-none"
            style={{ x: imageX }}
          >
            <Image
              src="/assets/images/nameHero.png"
              alt="Hendra Aditya Pratama"
              width={1600}
              height={400}
              className="w-full h-auto object-contain pointer-events-none"
              draggable={false}
              priority
            />
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
