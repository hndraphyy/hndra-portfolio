"use client";

import SplashScreen from "../components/splash/SplashScreen";
import HeroSection from "@/components/sections/home/HeroSection";
import AboutSection from "@/components/sections/home/AboutSection";

export default function Home() {
  return (
    <>
      <SplashScreen onFinish={() => {}} />

      <HeroSection />
      <AboutSection />
    </>
  );
}
