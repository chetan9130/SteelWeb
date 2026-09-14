import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIBuildAssistant from "@/components/AIBuildAssistant";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amish Built Cabins, LLC | Handcrafted Cabins & Modular Housing Solutions",
  description: "Building a Better Way to Live — One Amish-Built Cabin at a Time. AmishBuiltCabins.com specializes in handcrafted Amish-built cabins, modular homes, barndominiums, and custom housing solutions delivered nationwide.",
  keywords: [
    "Amish Built Cabins, LLC",
    "AmishBuiltCabins.com",
    "Amish-Built Cabins",
    "Modular Cabins",
    "Turnkey Cabins",
    "Rustic Cabins",
    "Modular Homes",
    "Prefab Homes",
    "Tiny Homes",
    "Barndominiums",
    "Steel Homes",
    "House Kits",
    "House Plans",
    "Backyard Studios ADU",
    "Scottsburg Indiana"
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
    title: "Amish Built Cabins, LLC | Building a Better Way to Live",
    description: "Specializing in Amish-built and modular housing solutions, combining traditional craftsmanship with modern comfort and design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${spaceGrotesk.variable} ${inter.variable} light scroll-smooth`}>
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
