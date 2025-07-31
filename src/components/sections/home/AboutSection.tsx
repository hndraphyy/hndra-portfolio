"use client";

import Container from "@/components/layout/Container";
import SectionWrapper from "@/components/layout/SectionWrapper";

export default function AboutSection() {
  return (
    <SectionWrapper className="flex items-center justify-center min-h-screen bg-background relative overflow-hidden">
      <Container>
        <div className="text-white space-y-4">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="text-gray-400">
            I am a passionate frontend developer with a love for creating
            beautiful and functional web applications. My journey in web
            development has been driven by a desire to build user-friendly
            interfaces and enhance user experiences.
          </p>
          <p className="text-gray-400">
            With a strong foundation in HTML, CSS, and JavaScript, I enjoy
            exploring new technologies and frameworks to stay updated with the
            latest trends in the industry.
          </p>
        </div>
      </Container>
    </SectionWrapper>
  );
}
