import type { Metadata } from "next";
import "../styles/global.css";
import LenisProvider from "@/components/providers/LenisProvider";
import ScrollToTop from "@/components/utils/ScrollToTop";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: {
    default: "Hendra Aditya",
    template: "%s | Hendra Aditya",
  },
  description: "Portfolio Hendra Aditya",
  keywords: [
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
  twitter: {
    card: "summary_large_image",
    title: "Hendra Aditya Portfolio",
    description:
      "Kunjungi portofolio Hendra Aditya, seorang Web Developer berbasis Next.js.",
    images: ["https://hendraaditya.vercel.app/og.png"],
    creator: "",
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
        <ScrollToTop />
        <LenisProvider>
          <Navbar />
        </LenisProvider>
        {children}
        <Footer />
      </body>
    </html>
  );
}
