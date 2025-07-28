"use client";

import SplashScreen from "../components/splash/SplashScreen";
import HeroSection from "@/components/sections/home/Hero";
import AboutSection from "@/components/sections/home/About";

export default function RootPage() {
  return (
    <>
      <SplashScreen onFinish={() => {}} />

      <HeroSection />
      <AboutSection />
    </>
  );
}
