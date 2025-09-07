"use client";

import SplashOpen from "@/components/splash/SplashOpen";
import HeroSection from "@/components/sections/projects/HeroSection";
import ProjectsMeSection from "@/components/sections/projects/ProjectsMeSection";

export default function ProjectsPage() {
  return (
    <>
      <SplashOpen onFinish={() => {}} />
      <HeroSection />
      <ProjectsMeSection />
    </>
  );
}
