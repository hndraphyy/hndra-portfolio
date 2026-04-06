import type { Metadata } from "next";
import "../styles/global.css";
import LenisProvider from "@/components/providers/LenisProvider";
import Navbar from "@/components/navbar/Navbar";
// import { LinkButton } from "@/components/ui/Button";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: {
    default: "Hendra Aditya",
    template: "%s | Hendra Aditya",
  },
  description: "Portfolio Hendra Aditya",
  keywords: [
    "hendraaditya",
    "Hendra Aditya",
    "Hendra Aditya Pratama",
    "frontend developer",
    "web developer",
    "portfolio",
    "React",
    "Next.js",
    "Tailwind CSS",
  ],
  authors: [{ name: "Hendra Aditya", url: "https://hendraaditya.vercel.app" }],
  creator: "Hendra Aditya",
  metadataBase: new URL("https://hendraaditya.vercel.app"),
  openGraph: {
    title: "Hendra Aditya Portfolio",
    description: "projects",
    url: "https://hendraaditya.vercel.app",
    siteName: "Hendra Aditya Portfolio",
    images: [
      {
        url: "https://hendraaditya.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Hendra Aditya OpenGraph",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": 0,
      "max-image-preview": "large",
      "max-video-preview": 0,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-poppins">
      <body suppressHydrationWarning>
        <LenisProvider>
          <Navbar />
        </LenisProvider>
        {children}
        {/* <LinkButton className="!fixed bottom-0 right-0" href="/about">
          About Me
        </LinkButton> */}
        <Footer />
      </body>
    </html>
  );
}
