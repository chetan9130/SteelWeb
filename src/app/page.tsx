"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  ShieldCheck, 
  Sliders, 
  Truck, 
  HeartHandshake,
  Calendar,
  Layers,
  FileCheck,
  Headphones,
  Wrench
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import BuildingCard from "@/components/BuildingCard";
import CategoryCard from "@/components/CategoryCard";
import VideoCard from "@/components/VideoCard";
import VideoModal from "@/components/VideoModal";
import FloorPlanUploadCard from "@/components/FloorPlanUploadCard";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { BUILDING_MODELS, CATEGORIES } from "@/data/models";
import { VIDEOS_DATA, VideoItem } from "@/data/videos";

export default function HomePage() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // The 4 featured models specifically highlighted in prompt.md
  const featuredModels = BUILDING_MODELS.slice(0, 4);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 3. HERO SECTION */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#17352A] pt-40 sm:pt-48 md:pt-52 pb-24 md:pb-32">
        {/* Background Architectural Cabin Photo with Multi-Layer Gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=2400&q=85"
            alt="Handcrafted Amish Built Cabin and Timber Home"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.65] contrast-[1.08] scale-100 transition-transform duration-1000"
          />
          {/* Deep cinematic overlay for contrast and readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#17352A]/90 via-black/60 to-[#17352A]/95" />
          <div className="absolute inset-0 bg-architectural-grid opacity-15 pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* Eyebrow Badge */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/95 text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] mb-6 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#B82025] animate-pulse"></span>
            <span>Authentic Heritage Craft • Built For Generations</span>
          </div> */}

          {/* Large Confident Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.05] font-display max-w-4xl drop-shadow-xl">
            BUILD A SPACE <br className="hidden sm:inline" />
            <span className="text-[#F7F4EC]">THAT FEELS LIKE HOME.</span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-white/90 max-w-2xl font-body leading-relaxed font-normal drop-shadow-md">
            Handcrafted Amish cabins, luxury barndominiums, tiny homes, and engineered clear-span steel buildings delivered nationwide with timeless durability.
          </p>

          {/* Trust Highlights Strip */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-white/80 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#B82025]" />
              Solid Timber & Steel
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#B82025]" />
              Licensed Wet-Stamped Plans
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#B82025]" />
              Nationwide Job Site Delivery
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            {/* Primary Red CTA */}
            <Link
              href="#categories"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#B82025] hover:bg-[#8F171C] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-sm transition-all duration-200 shadow-xl flex items-center justify-center gap-2 group hover:scale-[1.02]"
            >
              <span>Explore Our Buildings</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Secondary White CTA */}
            <Link
              href="/quote"
              className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-[#F7F4EC] text-[#1D2521] hover:text-[#B82025] border border-white/20 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02]"
            >
              <span>Get an Instant Quote</span>
            </Link>
          </div>

          {/* Secondary Action: ▶ Watch Video */}
          <div className="mt-6">
            <button
              onClick={() => setSelectedVideo(VIDEOS_DATA[0])}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/85 hover:text-white transition-colors group cursor-pointer"
            >
              <span className="w-7 h-7 rounded-full bg-white/20 border border-white/30 group-hover:bg-[#B82025] group-hover:border-[#B82025] flex items-center justify-center text-white transition-all group-hover:scale-110 shadow-sm">
                <Play className="w-3 h-3 ml-0.5 fill-current" />
              </span>
              <span>Watch Video Tour (2 Min)</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4. EXPLORE OUR BUILDINGS (5 Category Cards in 5-col / 4-col / 2-col) */}
      <section id="categories" className="py-20 sm:py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="EXPLORE OUR BUILDINGS"
            subtitle="Find the perfect building for your land, lifestyle and budget."
            align="center"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 mt-10">
            {CATEGORIES.map((cat) => (
              <CategoryCard
                key={cat.id}
                id={cat.id}
                title={cat.title}
                tagline={cat.tagline}
                image={cat.image}
                count={cat.count}
                href={cat.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. INSTANT QUOTE + FLOOR PLAN (Two-Column Premium CTA Section) */}
      <section className="py-16 sm:py-20 bg-[#F7F4EC] border-y border-[#E5E0D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* LEFT: Dark / Visual Section (#17352A) */}
            <div className="lg:col-span-6 bg-[#17352A] text-white p-8 sm:p-12 rounded-sm flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                {/* Badge: "NEW" */}
                <div className="inline-flex items-center px-3 py-1 bg-[#B82025] text-white text-[11px] font-extrabold uppercase tracking-widest rounded-xs">
                  NEW
                </div>

                <div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white font-display">
                    GET AN INSTANT QUOTE
                  </h2>
                  <p className="mt-3 text-sm text-white/80 leading-relaxed font-body">
                    Use our simple quote tool to get an estimated price for your building.
                  </p>
                </div>

                {/* Checklist */}
                <ul className="space-y-3 pt-2 text-sm sm:text-base font-semibold text-white/95">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#B82025] shrink-0" />
                    <span>Choose your building type</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#B82025] shrink-0" />
                    <span>Select size and options</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#B82025] shrink-0" />
                    <span>Get an estimated price</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#B82025] shrink-0" />
                    <span>Connect with our team</span>
                  </li>
                </ul>
              </div>

              {/* Red CTA Button */}
              <div className="pt-8 relative z-10">
                <Link
                  href="/quote"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#B82025] hover:bg-[#8F171C] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-sm transition-colors shadow-lg"
                >
                  <span>Get My Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Subtle background corner graphic */}
              <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#234A3A]/40 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* RIGHT: "HAVE A FLOOR PLAN?" Card */}
            <div className="lg:col-span-6 flex">
              <div className="w-full">
                <FloorPlanUploadCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US (Split Section: Image Left, Benefits Right) */}
      <section className="py-20 sm:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Large High-Quality Construction / Building Image */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-[#E5E0D4] shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
                  alt="Precision Craftsmanship and Steel Construction"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/95 border border-[#E5E0D4] backdrop-blur-md rounded-sm shadow-md">
                  <div className="flex items-center justify-between text-xs text-[#1D2521] font-bold uppercase tracking-wider mb-1">
                    <span>Engineering Quality Standard</span>
                    <span className="text-[#B82025]">ASTM Certified</span>
                  </div>
                  <p className="text-xs text-[#6B716D]">
                    Rigid commercial-grade steel structural components engineered for extreme weather resilience and lifetime durability.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Why Choose Us Content & 4 Benefits */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#B82025]">
                  <span className="w-2 h-2 rounded-full bg-[#B82025]"></span>
                  <span>WHY CHOOSE US</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#1D2521] leading-[1.08] mt-2 font-display">
                  BUILT FOR MORE THAN JUST TODAY.
                </h2>
                <p className="text-sm text-[#6B716D] mt-3 leading-relaxed font-body">
                  From residential cabin retreats to commercial clear-span workshops, every structure is built with unyielding attention to structural precision, energy efficiency, and enduring beauty.
                </p>
              </div>

              {/* 4 Benefits with 01-04 numerals & red icons */}
              <div className="space-y-3.5 pt-2">
                {[
                  {
                    num: "01",
                    title: "Superior Craftsmanship",
                    desc: "Handcrafted architectural timber accents backed by high-yield precision cold-formed and red-iron steel framing.",
                    icon: ShieldCheck,
                  },
                  {
                    num: "02",
                    title: "Customizable Options",
                    desc: "Tailor exterior siding, roof pitches, window placements, porches, and clear-span interiors to your exact lifestyle.",
                    icon: Sliders,
                  },
                  {
                    num: "03",
                    title: "Nationwide Delivery",
                    desc: "We coordinate dedicated flatbed transport directly to your homesite anywhere in the contiguous United States.",
                    icon: Truck,
                  },
                  {
                    num: "04",
                    title: "Family Owned & Operated",
                    desc: "Personalized service, transparent pricing, and dedicated engineering consultation for every customer project.",
                    icon: HeartHandshake,
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="p-4 sm:p-5 rounded-sm bg-[#F7F4EC] border border-[#E5E0D4] hover:border-[#B82025] transition-colors flex items-start gap-4"
                  >
                    <span className="text-2xl font-black font-display text-[#B82025] shrink-0">
                      {item.num}
                    </span>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <item.icon className="w-4 h-4 text-[#B82025]" />
                        <h3 className="text-sm sm:text-base font-bold uppercase tracking-wide text-[#1D2521]">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs text-[#6B716D] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Small CTA: [ Learn More → ] */}
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1D2521] hover:text-[#B82025] transition-colors group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 text-[#B82025] transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FEATURED BUILDINGS (4 Large Product Cards) */}
      <section className="py-20 sm:py-24 bg-[#F7F4EC] border-t border-[#E5E0D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="FEATURED BUILDINGS"
            subtitle="Explore our most popular architectural models designed for durability, comfort, and swift installation."
            ctaText="View All Buildings →"
            ctaHref="/buildings"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {featuredModels.map((model, idx) => (
              <BuildingCard key={model.id} model={model} priority={idx === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. HOW IT WORKS (Horizontal 4-Step Process) */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#E5E0D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Our Process"
            title="HOW IT WORKS"
            subtitle="From first inspiration to turnkey keys in hand, we make building simple and stress-free."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 text-left">
            {[
              {
                step: "01",
                title: "Choose",
                desc: "Select your building type and customize your options.",
                icon: Layers,
              },
              {
                step: "02",
                title: "Get Instant Quote",
                desc: "Use our quote tool or upload your floor plan.",
                icon: FileCheck,
              },
              {
                step: "03",
                title: "Talk to Our Team",
                desc: "We'll review your requirements and answer your questions.",
                icon: Headphones,
              },
              {
                step: "04",
                title: "Delivery & Setup",
                desc: "We deliver nationwide and provide setup guidance.",
                icon: Wrench,
              },
            ].map((s) => (
              <div
                key={s.step}
                className="bg-[#F7F4EC] border border-[#E5E0D4] p-6 sm:p-7 rounded-sm relative flex flex-col justify-between hover:border-[#17352A] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black font-display text-[#B82025]">
                      {s.step}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white border border-[#E5E0D4] flex items-center justify-center text-[#B82025] shadow-2xs">
                      <s.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-[#1D2521] font-display">
                    {s.title}
                  </h3>
                  <p className="text-xs text-[#6B716D] mt-2 leading-relaxed font-body">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. VIDEO SECTION (Dark Green Background #17352A) */}
      <section className="py-20 sm:py-24 bg-[#17352A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Visual Showcase"
            title="WATCH OUR BUILDINGS COME TO LIFE."
            subtitle="Step inside finished cabins, watch rigid-frame time-lapses, and hear from real owners across the country."
            align="left"
            ctaText="View All Videos →"
            ctaHref="/videos"
            light={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10">
            {VIDEOS_DATA.slice(0, 5).map((vid) => (
              <VideoCard
                key={vid.id}
                video={vid}
                onPlay={(v) => setSelectedVideo(v)}
                dark={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS */}
      <section id="testimonials" className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Customer Reviews"
            title="WHAT OUR CUSTOMERS SAY"
            subtitle="Hear how our steel buildings and architectural cabins exceed expectations for owners nationwide."
            align="center"
          />

          <div className="mt-12">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* 11. BLOG / RESOURCES (3 Article Cards) */}
      <section id="blog" className="py-20 sm:py-24 bg-[#F7F4EC] border-t border-[#E5E0D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Resources & Insights"
            title="FROM THE BLOG"
            subtitle="Expert advice on cabin construction, structural steel engineering, and property planning."
            ctaText="View All Posts →"
            ctaHref="/#blog"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[
              {
                id: "blog-1",
                category: "Cabin Guide",
                title: "5 Things to Consider Before Buying a Cabin",
                date: "October 12, 2026",
                image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
                snippet: "From soil bearing tests and snow load ratings to off-grid solar prep, here is what you need before placing your order.",
              },
              {
                id: "blog-2",
                category: "Engineering",
                title: "Steel Building vs. Traditional Construction",
                date: "September 28, 2026",
                image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
                snippet: "Why non-combustible steel framing offers 40% faster dry-in times and zero vulnerability to pests, warping, or rotting.",
              },
              {
                id: "blog-3",
                category: "Architecture",
                title: "How Custom Buildings Make a Difference",
                date: "September 15, 2026",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
                snippet: "How clear-span designs empower owners to create open cathedral ceilings and customized floor plan layouts.",
              },
            ].map((post) => (
              <div
                key={post.id}
                className="group bg-white border border-[#E5E0D4] rounded-sm overflow-hidden flex flex-col justify-between hover:border-[#17352A] transition-all duration-300 hover:shadow-xl"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F7F4EC]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-white/95 text-[#1D2521] rounded-xs shadow-xs">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-[#6B716D]">
                      <Calendar className="w-3.5 h-3.5 text-[#B82025]" />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-lg font-bold uppercase tracking-tight text-[#1D2521] group-hover:text-[#B82025] transition-colors font-display">
                      {post.title}
                    </h3>
                    <p className="text-xs text-[#6B716D] line-clamp-3 leading-relaxed mt-2">
                      {post.snippet}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B82025] group-hover:text-[#8F171C] transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. NEWSLETTER CTA (Full-Width Image Background Section with Dark Overlay) */}
      <section className="relative py-20 bg-[#17352A] overflow-hidden">
        {/* Full-width image background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=80"
            alt="Scenic mountain landscape"
            fill
            sizes="100vw"
            className="object-cover filter brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-[#17352A]/85 backdrop-blur-2xs" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white font-display">
            STAY IN THE LOOP
          </h2>
          <p className="text-sm sm:text-base text-white/85 max-w-xl mx-auto font-body">
            Get updates on new models, special offers and building tips.
          </p>

          {newsletterSubscribed ? (
            <div className="inline-flex items-center gap-2 p-3 bg-white/10 border border-white/20 text-white text-xs rounded-sm backdrop-blur-md">
              <CheckCircle2 className="w-4 h-4 text-[#B82025]" />
              <span>Thank you for subscribing to our building journal!</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto pt-2">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3.5 bg-white text-xs text-[#1D2521] placeholder-[#6B716D] focus:outline-none focus:ring-2 focus:ring-[#B82025] rounded-sm shadow-md"
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-[#B82025] hover:bg-[#8F171C] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors shrink-0 shadow-md flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Video Modal Player */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
}
