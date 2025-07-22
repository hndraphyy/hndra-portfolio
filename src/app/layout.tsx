import type { Metadata } from "next";
import "../styles/global.css";

export const metadata: Metadata = {
  title: {
    default: "Home | Hendra Aditya",
    template: "%s | Hendra Aditya",
  },
  description:
    "Portofolio resmi Hendra Aditya, seorang Frontend Web Developer yang menggunakan Next.js, React, dan Tailwind CSS.",
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
  authors: [{ name: "Hendra Aditya", url: "https://domainkamu.vercel.app" }],
  creator: "Hendra Aditya",
  metadataBase: new URL("https://domainkamu.vercel.app"),
  openGraph: {
    title: "Hendra Aditya Portfolio",
    description:
      "Lihat karya dan proyek-proyek Hendra Aditya, Frontend Web Developer profesional.",
    url: "https://domainkamu.vercel.app",
    siteName: "Hendra Aditya Portfolio",
    images: [
      {
        url: "https://domainkamu.vercel.app/og.png",
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
    images: ["https://domainkamu.vercel.app/og.png"],
    creator: "@kamuJikaAdaTwitter",
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
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
