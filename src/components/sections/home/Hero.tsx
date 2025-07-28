"use client";

import { Mail, ArrowRight } from "lucide-react";

import Container from "@/components/layout/Container";
import SectionWrapper from "@/components/layout/SectionWrapper";

export default function HeroSection() {
  return (
    <SectionWrapper className="flex items-center justify-center h-screen bg-background relative overflow-hidden">
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-gradient-to-br from-green to-cyan-400 rounded-full blur-3xl opacity-40 animate-pulse-slow pointer-events-none z-0" />
      <div className="absolute bottom-[100px] left-[100px] w-[330px] h-[400px] bg-gradient-to-br from-green to-cyan-400 rounded-full blur-3xl opacity-40 animate-pulse-slow pointer-events-none z-0" />
      <Container>
        <div className="flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-light text-white">
              Frontend Developer
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight pt-3 pb-6">
              Hendra Aditya Pratama
            </h1>
            <p className="text-sm sm:text-md md:text-xl font-light text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              rerum aliquid laboriosam eius officia numquam sunt, ullam
              molestiae exercitationem dignissimos.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 animate-fadeInDelay">
              <button className="group bg-green text-background font-semibold px-6 py-3 rounded-xl border border-green flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:bg-green/80 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-2">
                <Mail className="w-5 h-5" />
                Get in Touch
              </button>

              <button className="group text-white border border-white px-6 py-3 rounded-xl flex items-center gap-2 transition-all duration-300 hover:bg-white/10 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
