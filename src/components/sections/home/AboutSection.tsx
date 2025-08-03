"use client";

import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionWrapper from "@/components/layout/SectionWrapper";

export default function AboutSection() {
  return (
    <SectionWrapper className="flex min-h-screen bg-background relative overflow-hidden">
      <span className="text-white absolute -right-14 text-[250px] top-0 opacity-[0.02]">
        ABOUT
      </span>
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-8xl font-light text-green pb-3">About Me</h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-3xl">
              I&apos;m always eager to lern new ttechnologies and push myself to
              build better, faster, and more usable websites. Whether it&apos;s
              small feature or a full interface, Ipay close attention to design,
              detail, and usability
            </p>
          </div>
          <div className="relative">
            <Link
              href="/about"
              className="bg-green font-light text-xl px-5 py-2"
            >
              About Us
            </Link>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
