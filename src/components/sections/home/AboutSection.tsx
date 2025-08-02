"use client";

import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionWrapper from "@/components/layout/SectionWrapper";

export default function AboutSection() {
  return (
    <SectionWrapper className="flex min-h-screen bg-background relative">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-8xl font-light text-green pb-3">About Me</h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-3xl">
              I’m a frontend developer who enjoys turning ideas into responsive,
              user-friendly interfaces. My focus is on writing clean,
              maintainable code and crafting smooth web experiences that feel
              effortless.
            </p>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-3xl">
              I love learning new technologies and constantly pushing myself to
              build better, faster, and more accessible websites. From small
              projects to full interfaces, I care deeply about design, detail,
              and usability.
            </p>
          </div>
          <div className="relative">
            <Link href="/about" className="bg-green font-light text-5xl">
              About Us
            </Link>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
