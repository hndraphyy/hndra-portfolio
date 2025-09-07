"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import Container from "@/components/layout/Container";

const AboutMeSection = () => {
  return (
    <SectionWrapper className="pt-16 flex bg-background relative overflow-hidden">
      <Container className="flex flex-col gap-8 md:gap-16 lg:gap-20">
        <div className="text-center text-white">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            cupiditate recusandae atque sit vero cumque quisquam ipsa velit,
            blanditiis nesciunt excepturi distinctio ipsum maxime molestias
            fugiat veritatis pariatur! Autem, neque!
          </h1>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default AboutMeSection;
