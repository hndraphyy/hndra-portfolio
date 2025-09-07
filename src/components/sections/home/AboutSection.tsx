"use client";

import Image from "next/image";
import { useMouseParallax } from "@/lib/hooks/useMouseParallax";
import { Mail, Download } from "lucide-react";

import Container from "@/components/layout/Container";
import SectionWrapper from "@/components/layout/SectionWrapper";
import aboutConfig from "@/configs/home/about";
import { LinkButton } from "@/components/ui/Button";

export default function AboutSection() {
  const { ref, offset } = useMouseParallax(10);
  return (
    <SectionWrapper className="pt-16 flex bg-background relative overflow-hidden">
      <span className="text-white absolute -right-14 text-[100px] md:text-[250px] top-6 md:top-0 opacity-[0.02]">
        ABOUT
      </span>
      <Container className="flex flex-col gap-8 md:gap-16 lg:gap-20">
        <div className="md:flex justify-between items-center">
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-light text-green pb-5">
              {aboutConfig.heading}
            </h2>
            <p className="text-gray-400 text-base text-md sm:text-lg leading-relaxed md:max-w-md lg:max-w-2xl">
              {aboutConfig.desc}
            </p>
          </div>
          <div className="relative mt-8">
            <LinkButton href="/about">About Me</LinkButton>
          </div>
        </div>
        <div
          className="h-96 w-full bg-cover bg-grayCustom bg-center bg-no-repeat relative flex items-center justify-center overflow-hidden"
          ref={ref}
        >
          {/* left */}
          <Image
            src="/assets/images/svg/tech/html.svg"
            alt="Arrow Down"
            width={80}
            height={80}
            className="absolute top-10 left-10 hover:scale-[1.08] duration-500"
          />
          <Image
            src="/assets/images/svg/tech/tailwind.svg"
            alt="Arrow Down"
            width={80}
            height={80}
            className="absolute top-[80px] left-[280px] hover:scale-[1.08] duration-500"
          />
          <Image
            src="/assets/images/svg/tech/ts.svg"
            alt="Arrow Down"
            width={80}
            height={80}
            className="absolute bottom-[100px] left-[60px] hover:scale-[1.08] duration-500"
          />
          <Image
            src="/assets/images/svg/tech/sass.svg"
            alt="Arrow Down"
            width={80}
            height={80}
            className="absolute bottom-[30px] left-[230px] hover:scale-[1.08] duration-500"
          />
          {/* right */}
          <Image
            src="/assets/images/svg/tech/css.svg"
            alt="Arrow Down"
            width={80}
            height={80}
            className="absolute top-10 right-10 hover:scale-[1.08] duration-500"
          />
          <Image
            src="/assets/images/svg/tech/js.svg"
            alt="Arrow Down"
            width={80}
            height={80}
            className="absolute top-[100px] right-[250px] hover:scale-[1.08] duration-500"
          />
          <Image
            src="/assets/images/svg/tech/react.svg"
            alt="Arrow Down"
            width={80}
            height={80}
            className="absolute bottom-[70px] right-[70px] hover:scale-[1.08] duration-500"
          />
          <Image
            src="/assets/images/svg/tech/next.svg"
            alt="Arrow Down"
            width={80}
            height={80}
            className="absolute bottom-[30px] right-[230px] hover:scale-[1.08] duration-500"
          />

          <div
            className="h-full w-auto flex justify-center items-end transition-transform duration-700 ease-out"
            style={{
              transform: `translate(${offset.x}px, ${offset.y}px)`,
            }}
          >
            <Image
              src="/assets/images/homepage/me.webp"
              alt="Hendra Aditya Pratama"
              width={780}
              height={200}
              className="md:h-full w-[80%] md:w-auto object-contain object-top pointer-events-none select-none rounded-t-full z-20"
              draggable={false}
              priority
            />
          </div>
        </div>
        <div className="md:flex justify-between gap-5">
          <p className="text-gray-400 text-base text-md sm:text-lg leading-relaxed md:max-w-md lg:max-w-2xl">
            {aboutConfig.textCTA}
          </p>
          <div className="mt-8 md:mt-0">
            <div className="flex gap-2">
              <a
                href="/assets/pdf/Hendra_Aditya_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="group relative inline-block px-5 py-2 text-md md:text-xl font-light text-white bg-transparent border-[1px] overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-700 ease-in-out group-hover:text-green">
                  <Download size={18} />
                  Resume
                </span>
                <span className="absolute inset-0 z-0 bg-white -translate-x-full transition-transform duration-[700ms] ease-in-out group-hover:translate-x-0"></span>
              </a>

              <LinkButton href="mailto:hendraaditya1913@gmail.com">
                <span className="flex items-center gap-2">
                  <Mail size={18} />
                  Contact
                </span>
              </LinkButton>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
