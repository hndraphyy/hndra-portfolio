"use client";

import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionWrapper from "@/components/layout/SectionWrapper";

export default function AboutSection() {
  return (
    <SectionWrapper className="flex min-h-screen bg-background relative overflow-hidden">
      <span className="text-white absolute -right-14 text-[100px] md:text-[250px] top-6 md:top-0 opacity-[0.02]">
        ABOUT
      </span>
      <Container>
        <div className="md:flex justify-between items-center space-y-8">
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-light text-green pb-5">
              About Me
            </h2>
            <p className="text-gray-400 text-base text-md sm:text-lg leading-relaxed md:max-w-md lg:max-w-2xl">
              I&apos;m always eager to learn new technologies and push myself to
              build better, faster, and more usable websites. Whether it&apos;s
              a small feature or a full interface, I pay close attention to
              design, detail, and usability.
            </p>
          </div>
          <div className="relative">
            <Link
              href="/about"
              className="group relative inline-block overflow-hidden px-5 py-2 text-md md:text-xl font-light text-white bg-green"
            >
              <span className="relative z-10 group-hover:text-green transition-colors duration-700 ease-in-out">
                About Me
              </span>
              <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-[700ms] ease-in-out z-0"></span>
            </Link>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
