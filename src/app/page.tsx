import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  ChevronDown, 
  Shield, 
  CheckCircle2, 
  Layers, 
  Compass, 
  Flame, 
  Wind, 
  Hammer,
  FileUp,
  Sparkles
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import BuildingCard from "@/components/BuildingCard";
import CategoryCard from "@/components/CategoryCard";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import { BUILDING_MODELS, CATEGORIES } from "@/data/models";

export default function HomePage() {
  const featuredModels = BUILDING_MODELS.slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5]">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#111315]">
        {/* Background Image with Clean Architectural Contrast Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
            alt="Vortex Architectural Barndominium"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.65] contrast-[1.15] scale-105"
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
          <div className="absolute inset-0 bg-architectural-grid opacity-15 pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center flex flex-col items-center">
          {/* Headline */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-tight text-white leading-[0.92] font-display max-w-5xl drop-shadow-lg">
            BUILD YOUR <br />
            <span className="text-[#D8C7A3]">VISION.</span>
          </h1>

          {/* Supporting text */}
          <p className="mt-6 sm:mt-8 text-base sm:text-xl md:text-2xl text-white/90 max-w-2xl font-body leading-relaxed font-normal drop-shadow-sm">
            Premium steel buildings, barndominiums, and custom building solutions designed around the way you live.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/models"
              className="w-full sm:w-auto px-8 py-4 bg-[#C8753D] hover:bg-[#BA642C] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-sm transition-all duration-200 shadow-xl hover:shadow-[0_0_25px_rgba(200,117,61,0.5)] flex items-center justify-center gap-2 group"
            >
              <span>Explore Buildings</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/quote"
              className="w-full sm:w-auto px-8 py-4 bg-white/90 hover:bg-white text-[#111315] hover:text-[#C8753D] border border-white/20 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-sm backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Get an Instant Quote</span>
            </Link>
          </div>

          {/* Specs Mini-ticker */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-left border-t border-white/20 pt-8 max-w-4xl w-full text-white">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#D8C7A3] font-semibold">Frame Standard</div>
              <div className="text-sm sm:text-base font-bold mt-0.5">Heavy Red Iron & Cold Formed</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-[#D8C7A3] font-semibold">Wind Certification</div>
              <div className="text-sm sm:text-base font-bold mt-0.5">Up to 165 MPH Rated</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-[#D8C7A3] font-semibold">Warranty Guarantee</div>
              <div className="text-sm sm:text-base font-bold mt-0.5">40 to 50 Years Limited</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-[#D8C7A3] font-semibold">Blueprint Stamping</div>
              <div className="text-sm sm:text-base font-bold mt-0.5">All 50 US States Stamped</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 pointer-events-none opacity-80">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#D8C7A3]">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 text-[#D8C7A3] animate-bounce" />
        </div>
      </section>

      {/* 2. STATS SECTION (WARM SANDSTONE BACKGROUND) */}
      <StatsSection />

      {/* 3. FEATURED BUILDINGS SECTION (LIGHT WARM OFF-WHITE) */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Architectural Portfolio"
            title="Find the Right Space For Your Next Chapter."
            subtitle="Explore pre-engineered, clear-span designs engineered with heavy steel rigid framing and custom residential finishes."
            ctaText="View All 10 Models"
            ctaHref="/models"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredModels.map((model, idx) => (
              <BuildingCard key={model.id} model={model} priority={idx === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY STEEL SECTION (SPLIT WARM/COOL ARCHITECTURAL LAYOUT) */}
      <section className="py-24 bg-[#F3EFE6] border-t border-[#E5E0D4] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Large Construction Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-[#E5E0D4] shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
                  alt="Clear Span Steel Frame Construction"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                {/* Floating Technical Spec Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/95 border border-[#E5E0D4] backdrop-blur-md rounded-sm shadow-md">
                  <div className="flex items-center justify-between text-xs text-[#111315] font-bold uppercase tracking-wider mb-1">
                    <span>Rigid Frame Tolerance</span>
                    <span className="text-[#C8753D]">ASTM A572 Grade 50</span>
                  </div>
                  <p className="text-xs text-[#64748B]">
                    Unobstructed spans of up to 100 feet without a single load-bearing interior column. Design any floor plan layout freely.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Technical Benefits Breakdown */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C8753D]">
                  <span className="w-2 h-2 rounded-full bg-[#C8753D]"></span>
                  <span>Engineering Superiority</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#111315] leading-[1.05] mt-2 font-display">
                  Built Different. <br />
                  <span className="text-[#C8753D]">Engineered For Life.</span>
                </h2>
                <p className="text-sm sm:text-base text-[#64748B] mt-4 leading-relaxed font-body">
                  Traditional stick framing is vulnerable to warping, rot, insect infestation, and fire. Vortex structural steel frames are precision pre-punched, non-combustible, and rated to withstand the harshest weather extremes.
                </p>
              </div>

              {/* Numbered Statistics & Points */}
              <div className="space-y-4">
                {[
                  {
                    num: "01",
                    title: "Engineered For Strength",
                    desc: "Structural red iron and high-yield cold formed members rated for 150+ MPH winds and up to 75 PSF alpine snow loads.",
                    icon: Wind,
                  },
                  {
                    num: "02",
                    title: "Designed For Flexibility",
                    desc: "100% clear-span structural design leaves your interior completely open. Move walls, add lofts, or change rooms at will.",
                    icon: Layers,
                  },
                  {
                    num: "03",
                    title: "Built To Last Decades",
                    desc: "Non-combustible Class A fire rated, zero termite vulnerability, and zero mold degradation backed by a 40-year warranty.",
                    icon: Flame,
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="p-5 rounded-sm bg-white border border-[#E5E0D4] hover:border-[#C8753D] shadow-xs hover:shadow-sm transition-colors flex items-start gap-4"
                  >
                    <span className="text-2xl font-bold font-display text-[#C8753D] shrink-0">
                      {item.num}
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold uppercase tracking-wide text-[#111315]">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#64748B] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111315] hover:text-[#C8753D] transition-colors group"
                >
                  <span>Learn More About Our Steel Specifications</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BUILDING CATEGORIES SECTION (LIGHT WARM) */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Structure Typologies"
            title="Explore Building Categories"
            subtitle="From sprawling modern ranch estates to heavy industrial shops and DIY bolt-together kits."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {CATEGORIES.map((cat) => (
              <CategoryCard
                key={cat.id}
                id={cat.id}
                title={cat.title}
                tagline={cat.tagline}
                image={cat.image}
                count={cat.count}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. UPLOAD FLOOR PLAN TEASER */}
      <section className="py-20 bg-[#F3EFE6] border-y border-[#E5E0D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 sm:p-12 bg-white border border-[#E5E0D4] rounded-sm shadow-md">
            <div className="max-w-xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C8753D]">
                <FileUp className="w-4 h-4" />
                <span>Custom Engineering</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#111315] font-display">
                Already Have A Floor Plan?
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-body">
                Upload your architectural sketches, blueprints, or preliminary layouts. Our structural engineers will convert them into pre-engineered steel frames with transparent pricing.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <Link
                href="/upload-floor-plan"
                className="px-8 py-4 bg-[#C8753D] hover:bg-[#BA642C] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors text-center shadow-md hover:shadow-lg"
              >
                Upload Your Floor Plan →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INSTANT QUOTE CTA SECTION */}
      <CTASection />
    </div>
  );
}
