import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Layers, 
  HardHat, 
  Flame, 
  TreePine, 
  Building2, 
  CheckCircle2 
} from "lucide-react";
import StatsSection from "@/components/StatsSection";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "About Vortex Steel | Built On Better Ideas",
  description: "Learn about Vortex Steel's architectural heritage, manufacturing philosophy, rigid-frame engineering standards, and 15+ years of American building excellence.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-28 pb-28 text-[#111315]">
      {/* 1. HERO */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C8753D] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#C8753D]"></span>
              <span>Our Heritage & Craft</span>
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold uppercase tracking-tight text-[#111315] font-display leading-[0.92]">
              Built On <br />
              <span className="text-[#C8753D]">Better Ideas.</span>
            </h1>
            <p className="mt-6 text-base sm:text-xl text-[#64748B] leading-relaxed font-body">
              We started with a single conviction: rural and residential structures shouldn't have to choose between structural permanence and breathtaking architectural beauty.
            </p>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <StatsSection />

      {/* 3. COMPANY STORY & EDITORIAL SPLIT */}
      <section className="py-24 bg-[#F3EFE6] border-b border-[#E5E0D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C8753D]">
                <span>The Vortex Story</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#111315] font-display">
                Forged from Commercial Steel, Tailored for Modern Living
              </h2>
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed font-body">
                For decades, commercial aviation hangars and industrial logistics hubs relied on pre-engineered rigid steel frames because nothing else could span 100 feet without sagging, rotting, or bowing.
              </p>
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed font-body">
                Vortex took that same ASTM A572 Grade 50 heavy red-iron steel technology and reimagined it for residential barndominiums, mountain cabins, and live-work compounds. We eliminated boring utility facades and replaced them with Scandinavian proportions, dramatic standing-seam cladding, and floor-to-ceiling glass assemblies.
              </p>

              <div className="pt-2 flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-[#111315]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C8753D]" />
                  100% Recyclable American Steel
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C8753D]" />
                  Zero Wood Rot
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#E5E0D4] shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Vortex Modern Barndominium Finished Structure"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BUILDING PHILOSOPHY: 3 PILLARS */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Standard"
            title="The Vortex Engineering Philosophy"
            subtitle="How we guarantee structures that endure extreme environmental loads for half a century."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-sm bg-white border border-[#E5E0D4] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-sm bg-[#F3EFE6] border border-[#E5E0D4] flex items-center justify-center text-[#C8753D]">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide text-[#111315] font-display">
                Clear-Span Freedom
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                By bearing all gravity, seismic, and wind loads on heavy outer red-iron columns, our buildings require zero load-bearing walls inside. You have complete freedom to move bedrooms, open kitchens, or add loft levels anytime.
              </p>
            </div>

            <div className="p-8 rounded-sm bg-white border border-[#E5E0D4] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-sm bg-[#F3EFE6] border border-[#E5E0D4] flex items-center justify-center text-[#C8753D]">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide text-[#111315] font-display">
                Class A Fire Resistance
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                In high-risk wildfire zones across the Western US, traditional timber stick frames are becoming uninsurable. Non-combustible steel framing drastically reduces insurance premiums and protects family legacies.
              </p>
            </div>

            <div className="p-8 rounded-sm bg-white border border-[#E5E0D4] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-sm bg-[#F3EFE6] border border-[#E5E0D4] flex items-center justify-center text-[#C8753D]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide text-[#111315] font-display">
                50-State Stamped Seal
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Every structure leaves our computer-guided roll-forming plants with wet-stamped engineering calculations certified to your specific county’s building codes, snow loads, and wind exposure categories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CRAFTSMANSHIP SHOWCASE BANNER */}
      <section id="craftsmanship" className="py-20 bg-[#F3EFE6] border-y border-[#E5E0D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8753D]">
                Precision Manufacturing
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#111315] font-display">
                Laser-Cut Baseplates & CNC Pre-Punched Holes
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-body">
                On the job site, time is money. Our components are pre-welded, pre-cut, and pre-punched at the factory to millimeter tolerances. There is no field measuring or on-site welding required—components bolt together systematically like an industrial mechanical kit.
              </p>
              <div className="pt-2">
                <Link
                  href="/quote"
                  className="px-6 py-3.5 bg-[#C8753D] hover:bg-[#BA642C] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors inline-flex items-center gap-2 shadow-xs"
                >
                  <span>Build With Vortex Today</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-sm overflow-hidden border border-[#E5E0D4] shadow-xs">
                <Image
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
                  alt="Factory CNC Steel Frame"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-sm overflow-hidden border border-[#E5E0D4] shadow-xs">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80"
                  alt="Interior High Ceiling Barndominium"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
