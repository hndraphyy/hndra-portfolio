"use client";

import { socialLinks } from "@/configs/socialLinks";
import Link from "next/link";

import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";

const Footer = () => {
  return (
    <SectionWrapper className="flex bg-green relative overflow-hidden" id="contact">
      <Container className="flex flex-col gap-6">
        <div>
          <Link href="/" className="text-3xl lg:text-5xl font-light text-black">
            Hndra
          </Link>
        </div>
        <div className="flex justify-between flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-3">
          <p className="text-9xl font-normal color-white opacity-[0.6] -ml-[6px]">
            LET&apos;S TALK
          </p>
          <p className="flex gap-5 lg:gap-8">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <Link key={label} href={href} target="_blank" aria-label={label}>
                <Icon className="hover:text-white duration-300 transition w-10 h-10 lg:w-12 lg:h-12" />
              </Link>
            ))}
          </p>
        </div>
        <p className="text-2xl lg:text-4xl font-light text-black">
          Kediri, Indonesia
        </p>
      </Container>
    </SectionWrapper>
  );
};

export default Footer;
