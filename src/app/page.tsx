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
  Wrench,
  Phone,
  Mail,
  MapPin
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
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-[#17352A] pt-24 sm:pt-28 md:pt-32 pb-14 md:pb-16">
        {/* Background Architectural Photo with Project Deep Green Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-modern-home.jpg"
            alt="Modern Luxury Modular & Prefab Home"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center] sm:object-center filter brightness-[0.85] contrast-[1.08]"
          />
          {/* Left-to-right deep brand green overlay (#17352A / #0F241C) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#17352A] via-[#17352A]/90 to-transparent w-full md:w-[72%] lg:w-[60%]" />
          {/* Top & bottom subtle atmospheric vignettes */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#17352A]/80 via-transparent to-[#17352A]/90 pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl lg:max-w-3xl text-left flex flex-col items-start">
            
            {/* Eyebrow Tagline matching brand theme */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#F7F4EC] text-[11px] font-bold uppercase tracking-[0.22em] mb-5 backdrop-blur-md shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#B82025] animate-pulse"></span>
              <span>Amish Built Cabins, LLC • Handcrafted Heritage</span>
            </div>

            {/* Main Headline (Project Palette: Pure White + Heritage Cream / Crimson) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black uppercase tracking-tight text-white leading-[0.98] drop-shadow-2xl font-display">
              <span>HANDCRAFTED CABINS.</span>
              <span className="block text-[#F7F4EC] mt-1 sm:mt-1.5">BUILT FOR GENERATIONS.</span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-white/90 max-w-xl font-normal leading-relaxed drop-shadow-md font-body">
              Authentic Amish-crafted cabins, modular homes, and custom barndominiums—combining traditional American woodworking with modern comfort, precision engineering, and nationwide delivery.
            </p>

            {/* 3 Value Pillars Strip */}
            <div className="mt-8 sm:mt-10 flex items-stretch gap-4 sm:gap-7 md:gap-9">
              {/* Pillar 1: Authentic Craftsmanship */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2.5 max-w-[125px] sm:max-w-[150px]">
                <div className="w-10 h-10 rounded-sm bg-white/10 border border-white/20 flex items-center justify-center text-[#F7F4EC] shadow-xs">
                  <svg className="w-6 h-6 stroke-current" viewBox="0 0 36 36" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 15.5L18 4l14 11.5V31H4V15.5z" />
                    <path d="M18 12l-4.5 5.5h2.5l-3.5 5.5h11l-3.5-5.5H22z" />
                    <line x1="18" y1="23" x2="18" y2="27" />
                  </svg>
                </div>
                <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white leading-tight">
                  Authentic Amish<br />Craftsmanship
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="w-[1px] bg-white/25 self-stretch my-1" />

              {/* Pillar 2: Modular Efficiency */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2.5 max-w-[125px] sm:max-w-[150px]">
                <div className="w-10 h-10 rounded-sm bg-white/10 border border-white/20 flex items-center justify-center text-[#F7F4EC] shadow-xs">
                  <svg className="w-6 h-6 stroke-current" viewBox="0 0 36 36" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="18" r="13" />
                    <polyline points="18 11 18 18 23 18" />
                    <line x1="18" y1="6" x2="18" y2="8" />
                    <line x1="30" y1="18" x2="28" y2="18" />
                    <line x1="18" y1="30" x2="18" y2="28" />
                    <line x1="6" y1="18" x2="8" y2="18" />
                  </svg>
                </div>
                <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white leading-tight">
                  Efficient Modular<br />Construction
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="w-[1px] bg-white/25 self-stretch my-1" />

              {/* Pillar 3: Transparent Pricing & Support */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2.5 max-w-[125px] sm:max-w-[150px]">
                <div className="w-10 h-10 rounded-sm bg-white/10 border border-white/20 flex items-center justify-center text-[#F7F4EC] shadow-xs">
                  <svg className="w-6 h-6 stroke-current" viewBox="0 0 36 36" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 5s9 3.5 11 5.5v9c0 8-11 12.5-11 12.5S7 27.5 7 19.5v-9c2-2 11-5.5 11-5.5z" />
                    <polyline points="13 18 17 22 23 15" />
                  </svg>
                </div>
                <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white leading-tight">
                  Transparent Pricing<br />& Support
                </div>
              </div>
            </div>

            {/* Interactive CTAs using Project Brand Colors (#B82025 & #FFFFFF) */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="#categories"
                className="px-7 py-3.5 bg-[#B82025] hover:bg-[#8F171C] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-sm transition-all duration-200 shadow-xl flex items-center gap-2 group hover:scale-[1.02]"
              >
                <span>Explore Models</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/quote"
                className="px-7 py-3.5 bg-white hover:bg-[#F7F4EC] text-[#1D2521] hover:text-[#B82025] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-sm transition-all duration-200 flex items-center gap-2 shadow-lg hover:scale-[1.02]"
              >
                <span>Get An Instant Quote</span>
              </Link>
              <button
                onClick={() => setSelectedVideo(VIDEOS_DATA[0])}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/90 hover:text-white transition-colors group cursor-pointer ml-1"
              >
                <span className="w-8 h-8 rounded-full bg-white/15 border border-white/30 group-hover:bg-[#B82025] group-hover:border-[#B82025] flex items-center justify-center text-white transition-all group-hover:scale-110 shadow-sm">
                  <Play className="w-3.5 h-3.5 ml-0.5 fill-current" />
                </span>
                <span className="hidden sm:inline">Watch Tour</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* BRAND POSITIONING BANNER */}
      <section className="bg-[#17352A] text-white py-6 border-y border-[#234A3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C89446] font-bold">
              Amish Built Cabins, LLC • Scottsburg, Indiana
            </span>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white font-display">
              &ldquo;Building a Better Way to Live — One Amish-Built Cabin at a Time.&rdquo;
            </h2>
            <p className="text-xs text-white/80">
              Combining traditional craftsmanship with modern modular comfort across the United States.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:8125954033"
              className="px-5 py-2.5 bg-[#C89446] hover:bg-[#B38038] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors shadow-sm flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(812) 595-4033</span>
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors border border-white/25"
            >
              Support & Inquiries
            </Link>
          </div>
        </div>
      </section>

      {/* 4. EXPLORE OUR BUILDINGS & MAIN PRODUCTS / SERVICES */}
      <section id="categories" className="py-20 sm:py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Main Products & Services"
            title="EXPLORE OUR BUILDINGS & HOUSING SOLUTIONS"
            subtitle="AmishBuiltCabins.com specializes in handcrafted Amish-built, modular, and prefabricated housing solutions delivered nationwide."
            align="center"
          />

          {/* Top 5 Primary Visual Categories */}
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

          {/* 12 Official Products & Services Grid */}
          <div className="mt-14 pt-12 border-t border-[#E5E0D4] text-left">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="text-2xl font-extrabold uppercase tracking-tight text-[#1D2521] font-display">
                Comprehensive Building Catalog & Solutions
              </h3>
              <p className="text-xs sm:text-sm text-[#6B716D] mt-2">
                Handcrafted in partnership with Amish, Mennonite, and trusted builder communities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {[
                { title: "Amish-Built Cabins", desc: "Handcrafted cabins designed with traditional Amish craftsmanship and modern functionality." },
                { title: "Modular Cabins", desc: "Factory-built modular cabins designed for efficient construction, transportation and installation." },
                { title: "Turnkey Cabins", desc: "Move-in-ready cabin solutions with completed interior and exterior components." },
                { title: "Rustic Cabins", desc: "Traditional cabin designs featuring rustic materials, covered porches and classic cabin aesthetics." },
                { title: "Modular Homes", desc: "Modern modular housing solutions that can be customized according to customer requirements." },
                { title: "Prefab Homes", desc: "Prefabricated housing systems designed to simplify and accelerate the construction process." },
                { title: "Tiny Homes", desc: "Compact residential spaces designed for efficient and comfortable living." },
                { title: "Barndominiums", desc: "Customizable residential structures combining living spaces with large utility or workshop areas." },
                { title: "Steel Homes", desc: "Durable steel-frame residential structures with modern designs and customizable layouts." },
                { title: "House Kits", desc: "Panelized and prefabricated home kits containing structural components required for construction." },
                { title: "House Plans", desc: "Residential floor plans and home designs ranging from compact homes to larger family residences." },
                { title: "Backyard Studios / ADUs", desc: "Flexible spaces suitable for guest houses, home offices, rental units, studios, workshops, and additional living space." },
              ].map((service, index) => (
                <div
                  key={index}
                  className="p-5 bg-[#F7F4EC] border border-[#E5E0D4] rounded-sm hover:border-[#B82025] transition-colors space-y-2 group"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#B82025] group-hover:scale-125 transition-transform" />
                    <h4 className="text-sm font-bold uppercase tracking-tight text-[#1D2521] font-display">
                      {service.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#6B716D] leading-relaxed pl-4">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
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

      {/* 8. HOW THE PROCESS WORKS (9-Step Customer Journey) */}
      <section id="process" className="py-20 sm:py-24 bg-white border-b border-[#E5E0D4] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Customer Journey"
            title="HOW THE PROCESS WORKS"
            subtitle="From first inspiration to turnkey keys in hand, we make your cabin and modular home journey seamless and transparent."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-12 text-left">
            {[
              { num: "01", title: "Browse Designs", desc: "Explore our diverse portfolio of handcrafted Amish cabins, modular homes, and barndominiums online." },
              { num: "02", title: "Choose Your Model", desc: "Select the architectural layout, footprint, and bedroom/bathroom count that fits your lifestyle." },
              { num: "03", title: "Discuss Customization", desc: "Collaborate with our team to customize finishes, interior floor plans, porches, and architectural features." },
              { num: "04", title: "Request Pricing", desc: "Receive transparent, itemized pricing and comprehensive specifications for your chosen package." },
              { num: "05", title: "Prepare Your Site", desc: "Get your property ready with foundation, site grading, utility hookups, and required local permits." },
              { num: "06", title: "Manufacturing / Construction", desc: "Your cabin or modular home is built with precision by experienced Amish, Mennonite, and trusted craftspeople." },
              { num: "07", title: "Delivery", desc: "Coordinated transport delivers your completed cabin or modular components safely to your job site." },
              { num: "08", title: "Installation", desc: "Our installation support team ensures proper anchoring, leveling, and structural assembly." },
              { num: "09", title: "Final Completion", desc: "Final walkthrough, finish trim, and handover—ready for you to move in and enjoy for generations." },
            ].map((s) => (
              <div
                key={s.num}
                className="bg-[#F7F4EC] border border-[#E5E0D4] p-6 rounded-sm relative flex flex-col justify-between hover:border-[#B82025] transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black font-display text-[#B82025]">
                      {s.num}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#6B716D] bg-white px-2.5 py-0.5 border border-[#E5E0D4] rounded-xs">
                      Step {s.num}
                    </span>
                  </div>
                  <h3 className="text-base font-bold uppercase tracking-tight text-[#1D2521] font-display group-hover:text-[#B82025] transition-colors">
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

      {/* 8B. CUSTOMIZATION OPTIONS SECTION */}
      <section id="customization" className="py-20 sm:py-24 bg-[#F7F4EC] border-b border-[#E5E0D4] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Tailored To Your Lifestyle"
            title="CUSTOMIZE YOUR DESIGN"
            subtitle="Customers can customize available designs depending on the selected model. Build exactly what you envision."
            align="left"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 mt-10">
            {[
              { title: "Floor Plans", desc: "Adjust interior walls, master suites, cathedral lofts, and room dimensions." },
              { title: "Layouts", desc: "Open-concept living or traditional floor plans tailored to your property orientation." },
              { title: "Exterior Finishes", desc: "Board-and-batten, authentic timber siding, rustic logs, or steel siding." },
              { title: "Interior Finishes", desc: "Hand-finished tongue-and-groove pine, modern sheetrock, or timber accents." },
              { title: "Flooring", desc: "Luxury vinyl plank, solid hardwood, durable laminate, or finished concrete." },
              { title: "Kitchen", desc: "Solid wood cabinetry, quartz or granite countertops, island bars, and sink options." },
              { title: "Bathroom", desc: "Custom vanities, walk-in tile showers, premium fixtures, and soaker tubs." },
              { title: "Windows", desc: "Double-pane insulated glass, architectural black grids, and picture view windows." },
              { title: "Doors", desc: "Craftsman solid wood entries, insulated fiberglass, and panoramic sliding patio doors." },
              { title: "Roofing", desc: "Commercial standing-seam metal roofs or architectural 30-year shingles." },
              { title: "Colors", desc: "Extensive selection of exterior stains, paints, trim, and roof accent colors." },
              { title: "Additional Upgrades", desc: "Covered wrap-around porches, solar hookup packages, spray foam insulation, and HVAC." },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-5 bg-white border border-[#E5E0D4] rounded-sm space-y-1.5 shadow-2xs hover:border-[#B82025] transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-[#B82025] mb-2" />
                <h4 className="text-sm font-bold uppercase tracking-tight text-[#1D2521] font-display">
                  {item.title}
                </h4>
                <p className="text-xs text-[#6B716D] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8C. SITE PREPARATION (Informational Guide) */}
      <section id="site-prep" className="py-20 sm:py-24 bg-white border-b border-[#E5E0D4] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#B82025]">
                <span>Property Readiness Guide</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#1D2521] font-display">
                Site Preparation Requirements
              </h2>
              <p className="text-sm text-[#6B716D] leading-relaxed">
                Before your new cabin or modular home is delivered, you may need to prepare your property. Proper site prep guarantees structural integrity, smooth transport delivery, and swift utility hookups.
              </p>

              {/* Callout Box */}
              <div className="p-4 bg-[#F7F4EC] border-l-4 border-[#B82025] rounded-r-sm text-xs text-[#1D2521] font-medium leading-relaxed">
                <strong>Please Note:</strong> Exact site preparation requirements depend on your property location, local soil bearing conditions, and the selected building model.
              </div>

              {/* Checklist Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { title: "Foundation", desc: "Engineered concrete slab, crawlspace stem walls, or concrete pier runner systems." },
                  { title: "Land Preparation", desc: "Tree removal, site clearing, leveling, and adequate water drainage grading." },
                  { title: "Utility Connections", desc: "Electrical service, municipal water or private well, and city sewer or septic." },
                  { title: "Site Access", desc: "Clear roadway access, overhead power line clearance, and trailer turn-around space." },
                  { title: "Permits & Zoning", desc: "Local building permits, setback compliance, and county zoning approvals." },
                  { title: "Delivery Coordination", desc: "Direct route planning and scheduled delivery window with our transport team." },
                ].map((req, i) => (
                  <div key={i} className="p-3.5 bg-[#F7F4EC] border border-[#E5E0D4] rounded-sm space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#1D2521]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B82025] shrink-0" />
                      <span>{req.title}</span>
                    </div>
                    <p className="text-[11px] text-[#6B716D] pl-5 leading-normal">
                      {req.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card: Consultation Support */}
            <div className="lg:col-span-5">
              <div className="p-8 bg-[#17352A] text-white rounded-sm space-y-5 shadow-xl">
                <div className="text-xs uppercase font-bold tracking-widest text-[#C89446]">
                  Customer Support Consultation
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white font-display">
                  Questions About Site Prep or Pricing?
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Our project specialists in Scottsburg, Indiana are available to guide you through foundation specs, floor plans, zoning questions, and instant pricing quotes.
                </p>

                <div className="space-y-3 pt-3 border-t border-white/15 text-xs">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#C89446] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">Amish Built Cabins, LLC</span>
                      <span className="text-white/80">677 S. Cardinal Lane, Scottsburg, Indiana 47170</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#C89446] shrink-0" />
                    <div className="space-x-2">
                      <a href="tel:8125954033" className="font-bold text-white hover:text-[#C89446] underline decoration-white/40">
                        (812) 595-4033
                      </a>
                      <span className="text-white/40">|</span>
                      <a href="tel:18005131675" className="text-white/80 hover:text-white">
                        Toll-Free: 1-800-513-1675 ext. 1
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#C89446] shrink-0" />
                    <a href="mailto:amishbuiltbuildings@gmail.com" className="text-white hover:text-[#C89446] underline decoration-white/40 break-all">
                      amishbuiltbuildings@gmail.com
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  <a
                    href="tel:8125954033"
                    className="px-4 py-2.5 bg-[#C89446] hover:bg-[#B38038] text-white text-xs font-bold uppercase tracking-wider rounded-sm text-center transition-colors"
                  >
                    Call Us
                  </a>
                  <a
                    href="mailto:amishbuiltbuildings@gmail.com"
                    className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 text-xs font-bold uppercase tracking-wider rounded-sm text-center transition-colors"
                  >
                    Email Us
                  </a>
                  <Link
                    href="/quote"
                    className="px-4 py-2.5 bg-[#B82025] hover:bg-[#8F171C] text-white text-xs font-bold uppercase tracking-wider rounded-sm text-center transition-colors"
                  >
                    Request a Quote
                  </Link>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=677+S+Cardinal+Lane,+Scottsburg,+IN+47170"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 text-xs font-bold uppercase tracking-wider rounded-sm text-center transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
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
