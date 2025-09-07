"use client";

import SplashOpen from "@/components/splash/SplashOpen";
import HeroSection from "@/components/sections/about/HeroSection";
import AboutMeSection from "@/components/sections/about/AboutMeSection";

export default function About() {
  return (
    <>
      <SplashOpen onFinish={() => {}} />
      <HeroSection />
      <AboutMeSection />
    </>
  );
}
