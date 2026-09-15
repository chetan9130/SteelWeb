"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Play, 
  Award, 
  Sliders, 
  Truck, 
  ShieldCheck,
  UploadCloud,
  Check,
  Star,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock
} from "lucide-react";
import CategoryCard from "@/components/CategoryCard";
import BuildingCard from "@/components/BuildingCard";
import VideoModal from "@/components/VideoModal";
import { CATEGORIES, BUILDING_MODELS } from "@/data/models";
import { VIDEOS_DATA, VideoItem } from "@/data/videos";

export default function HomePage() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [homepageVideos, setHomepageVideos] = useState<VideoItem[]>(VIDEOS_DATA as unknown as VideoItem[]);

  useEffect(() => {
    async function loadHomepageVideos() {
      try {
        const res = await fetch("/api/videos");
        const data = await res.json();
        if (data.success && Array.isArray(data.videos) && data.videos.length > 0) {
          setHomepageVideos(data.videos as unknown as VideoItem[]);
        }
      } catch (err) {
        // keep fallback
      }
    }
    loadHomepageVideos();
  }, []);
  
  // Floor Plan Upload Dropzone State
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Testimonials Carousel Index for Mobile
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      id: "t-1",
      name: "James R.",
      location: "Kentucky",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      quote: "Amazing quality and great people to work with. Our cabin is everything we hoped for!",
    },
    {
      id: "t-2",
      name: "Sarah M.",
      location: "Tennessee",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      quote: "The process was easy and the building is beautiful. Highly recommend!",
    },
    {
      id: "t-3",
      name: "Mark T.",
      location: "Ohio",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      quote: "Solid craftsmanship and excellent service. We love our barndominium!",
    },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (uploadedFile) {
      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 5000);
    }
  };

  const featuredFloorPlans = BUILDING_MODELS.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 2. HERO SECTION */}
      <section className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden bg-[#17352A] pt-28 pb-12 sm:pt-32 sm:pb-16">
        {/* Log Cabin Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85"
            alt="Amish Built Cabins"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.78] contrast-[1.05]"
          />
          {/* Subtle vignette & left gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent w-full md:w-[75%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
        </div>

        {/* Hero Overlay Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-left">
            {/* Small Eyebrow */}
            <div className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/90 mb-3 bg-[#17352A]/80 px-3 py-1 rounded-xs backdrop-blur-xs border border-white/10">
              AMISH BUILT CABINS
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.05] font-display drop-shadow-lg">
              AMISH BUILT CABINS
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white/95 mt-2 font-display">
              Quality Buildings for a Better Tomorrow
            </h2>

            {/* Subtitle */}
            <p className="mt-3 text-base sm:text-lg font-semibold text-[#F7F4EC] tracking-wide">
              Cabins. Barndominiums. A Simpler Way of Life.
            </p>

            {/* Supporting Description */}
            <p className="mt-3 text-xs sm:text-sm text-white/85 leading-relaxed font-body max-w-xl">
              Handcrafted with integrity, built to last. From cozy cabins to spacious barndominiums, we deliver quality buildings for your land, your lifestyle, and your future.
            </p>

            {/* Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                href="/quote"
                className="px-6 py-3 bg-[#B82025] hover:bg-[#8F171C] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xs transition-all duration-200 flex items-center gap-2 shadow-lg hover:scale-[1.02]"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#categories"
                className="px-6 py-3 bg-white/15 hover:bg-white/25 text-white border border-white/40 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xs transition-all duration-200 backdrop-blur-xs"
              >
                Explore Buildings
              </Link>
            </div>
          </div>

          {/* Watch Our Story Overlay Badge (Bottom Right of Hero) */}
          <div className="hidden md:flex absolute bottom-4 right-6 lg:right-8 items-center">
            <button
              onClick={() => setSelectedVideo(VIDEOS_DATA[0])}
              className="bg-black/60 hover:bg-black/80 text-white p-3 rounded-xs border border-white/20 backdrop-blur-md flex items-center gap-3 transition-all hover:scale-105 cursor-pointer shadow-xl"
            >
              <div className="w-10 h-10 rounded-full bg-[#B82025] flex items-center justify-center text-white shrink-0">
                <Play className="w-4 h-4 ml-0.5 fill-current" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white">Watch Our Story</div>
                <div className="text-[10px] text-white/70">See the Amish Built Difference</div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* 3. BENEFITS STRIP */}
      <section className="bg-[#17352A] text-white py-4 sm:py-5 border-y border-[#234A3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {/* Benefit 1 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 p-2">
              <div className="w-9 h-9 rounded-full bg-[#B82025] flex items-center justify-center text-white shrink-0 shadow-sm">
                <Award className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-white font-display">
                Amish Craftsmanship
              </span>
            </div>

            {/* Benefit 2 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 p-2 border-l border-white/10 sm:border-l-0">
              <div className="w-9 h-9 rounded-full bg-[#B82025] flex items-center justify-center text-white shrink-0 shadow-sm">
                <Sliders className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-white font-display">
                Custom Options
              </span>
            </div>

            {/* Benefit 3 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 p-2 border-t sm:border-t-0 border-white/10">
              <div className="w-9 h-9 rounded-full bg-[#B82025] flex items-center justify-center text-white shrink-0 shadow-sm">
                <Truck className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-white font-display">
                Nationwide Delivery
              </span>
            </div>

            {/* Benefit 4 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 p-2 border-t sm:border-t-0 border-l border-white/10 sm:border-l-0">
              <div className="w-9 h-9 rounded-full bg-[#B82025] flex items-center justify-center text-white shrink-0 shadow-sm">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-white font-display">
                Built to Last
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXPLORE OUR BUILDINGS (Category Cards) */}
      <section id="categories" className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#B82025]">
              OUR BUILDING SOLUTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#17352A] mt-1 font-display">
              Explore Our Buildings
            </h2>
            <p className="text-xs sm:text-sm text-[#6B716D] mt-2 leading-relaxed">
              From small cabins to large custom structures, we offer a wide range of buildings to fit your needs.
            </p>
          </div>

          {/* Responsive Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {CATEGORIES.map((cat) => (
              <CategoryCard
                key={cat.id}
                id={cat.id}
                title={cat.title}
                tagline={cat.tagline}
                image={cat.image}
                href={cat.href}
                cta={cat.cta}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. INSTANT QUOTE + UPLOAD FLOOR PLAN (Two-column layout) */}
      <section className="py-12 sm:py-16 bg-[#F7F4EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Left Column: Instant Quote */}
            <div className="relative rounded-xs overflow-hidden bg-[#17352A] text-white p-8 sm:p-10 flex flex-col justify-between min-h-[340px] shadow-sm">
              {/* Background Interior Cabin Photo */}
              <div className="absolute inset-0 z-0 opacity-25">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Cabin Interior"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative z-10 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white font-display">
                  Instant Quote
                </h3>
                <p className="text-sm font-semibold text-[#F7F4EC]">
                  Get an estimated price in minutes.
                </p>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-md">
                  Select your building, choose options, and get a customized estimate — fast and easy.
                </p>
              </div>

              <div className="relative z-10 pt-8">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#B82025] hover:bg-[#8F171C] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xs transition-colors shadow-md"
                >
                  <span>Start Your Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Upload Your Floor Plan */}
            <div className="bg-white border border-[#E5E0D4] rounded-xs p-8 sm:p-10 flex flex-col justify-between shadow-sm relative overflow-hidden">
              {/* Decorative Blueprint Grid Background */}
              <div className="absolute inset-0 bg-architectural-grid opacity-30 pointer-events-none" />

              <div className="relative z-10 space-y-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17352A] font-display">
                  Upload Your Floor Plan
                </h3>
                <p className="text-xs sm:text-sm text-[#6B716D] leading-relaxed">
                  Have a custom design? Upload your floor plan and our team will provide a quote.
                </p>

                {/* Dropzone Area */}
                <form onSubmit={handleUploadSubmit} className="pt-3">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    className="hidden"
                  />

                  <div
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-xs p-6 text-center cursor-pointer transition-colors ${
                      dragActive
                        ? "border-[#B82025] bg-[#F7F4EC]"
                        : uploadedFile
                        ? "border-[#17352A] bg-[#F7F4EC]/50"
                        : "border-[#E5E0D4] hover:border-[#17352A] bg-[#F7F4EC]/30"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-[#17352A]/10 text-[#17352A] mx-auto flex items-center justify-center mb-2">
                      <UploadCloud className="w-5 h-5 text-[#B82025]" />
                    </div>

                    {uploadedFile ? (
                      <div className="space-y-1">
                        <p className="text-xs font-bold text-[#17352A]">{uploadedFile.name}</p>
                        <p className="text-[11px] text-[#6B716D]">
                          {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB • Ready to send
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <p className="text-xs font-bold text-[#17352A]">
                          Tap to upload your file
                        </p>
                        <p className="text-[11px] text-[#6B716D]">
                          (PDF, JPG, PNG)
                        </p>
                      </div>
                    )}
                  </div>

                  {uploadSuccess && (
                    <div className="mt-3 p-2.5 bg-green-50 border border-green-200 text-green-800 text-xs rounded-xs flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600 shrink-0" />
                      <span>Floor plan uploaded successfully! Our team will review and send your quote.</span>
                    </div>
                  )}

                  <div className="pt-5">
                    <button
                      type="submit"
                      className="w-full py-3 bg-[#B82025] hover:bg-[#8F171C] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <span>Upload & Request Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FEATURED FLOOR PLANS FOR SALE */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#B82025]">
                POPULAR DESIGNS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17352A] mt-1 font-display">
                Featured Floor Plans for Sale
              </h2>
            </div>
            <Link
              href="/upload-floor-plan"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B82025] hover:text-[#8F171C] transition-colors shrink-0"
            >
              <span>View All Floor Plans</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 4-Column Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredFloorPlans.map((model) => (
              <BuildingCard key={model.id} model={model} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. VIDEO SECTION */}
      <section className="py-12 sm:py-16 bg-[#17352A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#B82025]">
                VIDEOS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-display">
                See Our Buildings in Action
              </h2>
              <p className="text-xs sm:text-sm text-white/70 mt-1">
                Take a closer look at our cabins, barndominiums, and building projects.
              </p>
            </div>
            <Link
              href="/videos"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-[#B82025] transition-colors shrink-0"
            >
              <span>View All Videos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 4 Video Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {homepageVideos.slice(0, 4).map((vid) => (
              <div
                key={vid.id}
                onClick={() => setSelectedVideo(vid)}
                className="group cursor-pointer bg-[#234A3A] border border-[#234A3A] hover:border-[#B82025] rounded-xs overflow-hidden transition-all duration-300 flex flex-col shadow-sm"
              >
                {/* Thumbnail Viewport */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                  <Image
                    src={vid.thumbnail}
                    alt={vid.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

                  {/* Play Button Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#B82025] text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                      <Play className="w-5 h-5 ml-0.5 fill-current" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-2.5 right-2.5 bg-black/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-xs flex items-center gap-1 backdrop-blur-xs">
                    <Clock className="w-3 h-3 text-[#B82025]" />
                    <span>{vid.duration}</span>
                  </div>
                </div>

                {/* Card Title */}
                <div className="p-4 flex-1 flex items-center">
                  <h3 className="text-sm font-bold text-white group-hover:text-[#B82025] transition-colors line-clamp-2 font-display">
                    {vid.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE US (THE AMISH DIFFERENCE) */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#B82025]">
                  THE AMISH DIFFERENCE
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#17352A] mt-1 font-display">
                  Why Choose Amish Built Cabins?
                </h2>
                <p className="text-xs sm:text-sm text-[#6B716D] mt-2 leading-relaxed">
                  We&apos;re committed to quality, value, and service — from our family to yours.
                </p>
              </div>

              {/* 4 Feature Columns / Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                {/* Feature 1 */}
                <div className="space-y-1.5 p-4 bg-[#F7F4EC] rounded-xs border border-[#E5E0D4]">
                  <div className="w-8 h-8 rounded-full bg-[#B82025] text-white flex items-center justify-center">
                    <Award className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#17352A] font-display">
                    High-Quality Craftsmanship
                  </h4>
                  <p className="text-xs text-[#6B716D]">
                    Built with care and attention to detail.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="space-y-1.5 p-4 bg-[#F7F4EC] rounded-xs border border-[#E5E0D4]">
                  <div className="w-8 h-8 rounded-full bg-[#B82025] text-white flex items-center justify-center">
                    <Sliders className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#17352A] font-display">
                    Customizable Options
                  </h4>
                  <p className="text-xs text-[#6B716D]">
                    Design a building that fits your needs.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="space-y-1.5 p-4 bg-[#F7F4EC] rounded-xs border border-[#E5E0D4]">
                  <div className="w-8 h-8 rounded-full bg-[#B82025] text-white flex items-center justify-center">
                    <Truck className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#17352A] font-display">
                    Nationwide Delivery
                  </h4>
                  <p className="text-xs text-[#6B716D]">
                    We deliver across the country.
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="space-y-1.5 p-4 bg-[#F7F4EC] rounded-xs border border-[#E5E0D4]">
                  <div className="w-8 h-8 rounded-full bg-[#B82025] text-white flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#17352A] font-display">
                    Built with Integrity
                  </h4>
                  <p className="text-xs text-[#6B716D]">
                    Traditional values. Modern solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Large Cabin Image */}
            <div className="relative aspect-[4/3] rounded-xs overflow-hidden shadow-lg border border-[#E5E0D4]">
              <Image
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
                alt="Amish Built Cabin Craftsmanship"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS (REAL STORIES) */}
      <section className="py-12 sm:py-16 bg-[#F7F4EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#B82025]">
              REAL STORIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17352A] mt-1 font-display">
              What Our Customers Say
            </h2>
            <p className="text-xs sm:text-sm text-[#6B716D] mt-1">
              Don&apos;t just take our word for it — hear from our happy customers.
            </p>
          </div>

          {/* Desktop 3 Cards Grid */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white p-6 rounded-xs border border-[#E5E0D4] shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-[#B82025]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#1D2521] italic leading-relaxed font-body">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 mt-4 border-t border-[#F7F4EC]">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 border border-[#E5E0D4]">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#17352A] font-display">{t.name}</h4>
                    <p className="text-[11px] text-[#6B716D]">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Testimonial Carousel */}
          <div className="md:hidden">
            <div className="bg-white p-6 rounded-xs border border-[#E5E0D4] shadow-xs space-y-4">
              <div className="flex items-center gap-1 text-[#B82025]">
                {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-[#1D2521] italic leading-relaxed font-body">
                &ldquo;{testimonials[testimonialIndex].quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-3 border-t border-[#F7F4EC]">
                <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0">
                  <Image src={testimonials[testimonialIndex].avatar} alt={testimonials[testimonialIndex].name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#17352A] font-display">{testimonials[testimonialIndex].name}</h4>
                  <p className="text-[11px] text-[#6B716D]">{testimonials[testimonialIndex].location}</p>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                onClick={() => setTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="w-8 h-8 rounded-full bg-white border border-[#E5E0D4] flex items-center justify-center text-[#17352A]"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-1.5">
                {testimonials.map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-2 h-2 rounded-full ${idx === testimonialIndex ? "bg-[#B82025]" : "bg-[#E5E0D4]"}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="w-8 h-8 rounded-full bg-white border border-[#E5E0D4] flex items-center justify-center text-[#17352A]"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 10. READY TO BUILD CTA BANNER */}
      <section className="relative py-12 sm:py-16 bg-[#17352A] text-white overflow-hidden">
        {/* Background Scenic Landscape */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=2000&q=80"
            alt="Scenic Cabin"
            fill
            className="object-cover filter brightness-[0.35]"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-4 text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display">
                Ready to Build Your Dream?
              </h2>
              <p className="text-xs sm:text-sm text-white/85 max-w-lg leading-relaxed font-body">
                Get a quote today or contact our team. We&apos;re here to help you every step of the way.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/quote"
                  className="px-6 py-3 bg-[#B82025] hover:bg-[#8F171C] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xs transition-colors shadow-md flex items-center gap-1.5"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xs transition-colors backdrop-blur-xs"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right Side Contact Info Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#B82025] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-white/70">Call Us Today</div>
                  <a href="tel:9403438103" className="text-sm font-bold text-white hover:underline">94034 38103</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#B82025] text-white flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-white/70">Email Us</div>
                  <a href="mailto:abc@gmail.com" className="text-sm font-bold text-white hover:underline">abc@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#B82025] text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-white/70">Visit Our Showroom</div>
                  <div className="text-sm font-bold text-white">3450 S Highway 127, Liberty, KY 42539</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal Player */}
      {selectedVideo && (
        <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
      )}
    </div>
  );
}
