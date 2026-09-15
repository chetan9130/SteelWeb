import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIBuildAssistant from "@/components/AIBuildAssistant";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amish Built Cabins | Quality Buildings for a Better Tomorrow",
  description: "Handcrafted with integrity, built to last. From cozy cabins to spacious barndominiums, we deliver quality buildings for your land, your lifestyle, and your future.",
  keywords: [
    "Amish Built Cabins",
    "Cabins",
    "Barndominiums",
    "Sheds & Other Buildings",
    "Lofted Cabins",
    "Floor Plans",
    "Modular Cabins",
    "Handcrafted Cabins"
  ],
  icons: {
    icon: [
      { url: "/icon.png" },
      { url: "/logo.jpeg" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Amish Built Cabins | Quality Buildings for a Better Tomorrow",
    description: "Cabins, Barndominiums. A Simpler Way of Life. Handcrafted with integrity, built to last.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${manrope.variable} ${inter.variable} light scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-white text-[#1D2521] antialiased selection:bg-[#B82025] selection:text-white">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <AIBuildAssistant />
      </body>
    </html>
  );
}
