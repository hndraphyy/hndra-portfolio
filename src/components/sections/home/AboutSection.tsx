"use client";

import Image from "next/image";
import { useMouseParallax } from "@/lib/hooks/useMouseParallax";
import { LinkButton } from "@/components/ui/Button";

import Container from "@/components/layout/Container";
import SectionWrapper from "@/components/layout/SectionWrapper";
import aboutConfig from "@/configs/home/about";

export default function AboutSection() {
  const { ref, offset } = useMouseParallax(10);
  return (
    <SectionWrapper className="flex min-h-screen bg-background relative overflow-hidden">
      <span className="text-white absolute -right-14 text-[100px] md:text-[250px] top-6 md:top-0 opacity-[0.02]">
        ABOUT
      </span>
      <Container className="grid grid-cols-1 gap-9 md:gap-20">
        <div className="md:flex justify-between items-center space-y-8">
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-light text-green pb-5">
              {aboutConfig.heading}
            </h2>
            <p className="text-gray-400 text-base text-md sm:text-lg leading-relaxed md:max-w-md lg:max-w-2xl">
              {aboutConfig.desc}
            </p>
          </div>
          <div className="relative">
            <LinkButton href="/about">About Me</LinkButton>
          </div>
        </div>
        <div
          className="h-96 w-full bg-cover bg-center bg-no-repeat relative flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: "url('/assets/images/homepage/bgAbout.webp')",
          }}
          ref={ref}
        >
          <div
            className="h-full w-auto flex items-end transition-transform duration-700 ease-out"
            style={{
              transform: `translate(${offset.x}px, ${offset.y}px)`,
            }}
          >
            <Image
              src="/assets/images/homepage/me.webp"
              alt="Hendra Aditya Pratama"
              width={780}
              height={200}
              className="h-full w-auto object-contain object-top pointer-events-none select-none rounded-t-full z-20"
              draggable={false}
              priority
            />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
