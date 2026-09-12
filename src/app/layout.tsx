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
  title: "AMISH BUILT CABINS | Premium Cabins, Tiny Homes, Barndominiums & Steel Buildings",
  description: "American construction, architectural cabins, luxury barndominiums, clear-span steel buildings and pre-engineered building kits built to last a lifetime.",
  keywords: [
    "Cabins",
    "Amish Built Cabins",
    "Modern Cabins",
    "Tiny Homes",
    "Barndominiums",
    "Steel Buildings",
    "Metal Buildings",
    "Building Kits",
    "Clear-Span Workshops",
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
    title: "AMISH BUILT CABINS | Premium Cabins & Architectural Steel Structures",
    description: "Build a space that feels like home. Premium cabins, tiny homes, steel buildings and custom building solutions designed for the way you live.",
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
