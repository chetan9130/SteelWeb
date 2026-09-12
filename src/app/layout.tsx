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
  title: "VORTEX STEEL | Architectural Barndominiums, Steel Buildings & Kits",
  description: "Manufacturer and architectural engineer of luxury barndominiums, custom clear-span steel buildings, modern cabins, and pre-engineered building kits.",
  keywords: [
    "Barndominiums",
    "Steel Buildings",
    "Metal Buildings",
    "Building Kits",
    "Modern Barn Homes",
    "Clear-Span Steel Workshops",
    "Engineered Cabins",
  ],
  openGraph: {
    title: "VORTEX STEEL | Architectural Steel Structures",
    description: "Build something worth living in. Engineered steel buildings and modern barndominiums designed around the way you live.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} light scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#111315] antialiased selection:bg-[#C8753D] selection:text-white">
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
