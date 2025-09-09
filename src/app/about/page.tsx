import type { Metadata } from "next";
import AboutPage from "@/components/page/AboutPage";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return <AboutPage />;
}
