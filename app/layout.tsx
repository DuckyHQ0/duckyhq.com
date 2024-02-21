import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Viewport } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://duckyhq.com"),
  title: "DuckyHQ",
  description: "Unique open source software for the world.",
  keywords: [
    "Software",
    "Open source",
    "JavaScript",
    "Rust",
    "Minecraft",
    "dukc",
    "HQLauncher",
    "MorphUI",
  ],
  authors: [{ name: "dukc", url: "https://dukc.dev" }],
  creator: "dukc",
  publisher: "dukc",
  openGraph: {
    title: "DuckyHQ",
    description: "Unique open source software for the world.",
    url: "https://duckyhq.com",
    siteName: "DuckyHQ",
    images: [
      {
        url: "/seoCover.png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.className}>
      <body className="bg-[#050505] text-white flex flex-col items-center w-screen gap-24 p-48 max-[630px]:px-[20px] overflow-x-hidden">
        <Nav />
        {children}
        <Footer />
        <div className="w-[45rem] h-[40rem] animate-spin-slow animate-colour-change opacity-40 rounded-full blur-[600px] absolute top-[40%] left-[47%] -z-50"></div>
      </body>
    </html>
  )};