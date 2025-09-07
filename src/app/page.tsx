import type { Metadata } from "next";
import HomePage from "@/components/page/HomePage";

export const metadata: Metadata = {
  title: "Home | Hendra Aditya",
};

export default function Home() {
  return <HomePage />;
}
