"use client";

import Image from "next/image";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Container from "@/components/layout/Container";
import { aboutContent } from "@/configs/about/aboutContent";

const AboutMeSection = () => {
  return (
    <SectionWrapper className="pt-16 flex bg-background relative overflow-hidden">
      <Container className="flex flex-col gap-8 md:gap-16 lg:gap-20">
        <div className="w-[225px] h-[8px] sm:w-[340px] md:w-[450px] lg:w-[600px] lg:h-[20px] bg-green absolute top-0"></div>

        <div className="space-y-10">
          <p className="text-gray-400 text-base text-md sm:text-lg leading-relaxed">
            {aboutContent.description}
          </p>

          <div>
            <h2 className="text-white text-2xl leading-relaxed mb-3">Skills</h2>
            <ul className="flex flex-wrap justify-start gap-6">
              {aboutContent.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex flex-col items-center gap-2 hover:scale-[1.08] duration-500"
                >
                  <Image
                    title={skill.name}
                    src={skill.icon}
                    alt={skill.name}
                    width={40}
                    height={40}
                    className="w-[60px]"
                  />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div></div>
            <div>
              <h3 className="text-white text-2xl leading-relaxed mb-3">
                Experience
              </h3>
            </div>
            {aboutContent.experiences.map((experience) => (
              <div key={experience.name} className="mb-6">
                <div className="text-green">
                  <p className="text-base sm:text-lg leading-relaxed font-semibold">
                    {experience.name}
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed font-semibold">
                    {experience.date}
                  </p>
                </div>

                <ul className="list-disc list-outside mt-2 pl-6 space-y-2 text-gray-400">
                  {experience.desc.map((d, i) => (
                    <li key={i}>
                      <span className=" text-base sm:text-md leading-relaxed">
                        {d.content}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-gray-400 text-base text-md sm:text-lg leading-relaxed">
            {aboutContent.goals}
          </p>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default AboutMeSection;
