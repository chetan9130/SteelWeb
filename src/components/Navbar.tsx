"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  Search, 
  ArrowRight,
  ChevronDown
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Buildings", href: "/buildings" },
    { label: "Cabins", href: "/buildings?category=Cabins" },
    { label: "Tiny Homes", href: "/buildings?category=Tiny+Homes" },
    { label: "Steel Buildings", href: "/buildings?category=Steel+Buildings" },
    { label: "Floor Plans", href: "/upload-floor-plan" },
    { label: "Videos", href: "/videos" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/#blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* 1. TOP UTILITY BAR (Dark Green Background #17352A) */}
        <div className="bg-[#17352A] text-white/90 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-[#234A3A]">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Left: Phone & Email */}
            <div className="flex items-center gap-3 sm:gap-5 flex-wrap">
              <a
                href="tel:9403438103"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                title="Direct Phone"
              >
                <Phone className="w-3.5 h-3.5 text-[#B82025]" />
                <span className="font-semibold tracking-wide">9403438103</span>
              </a>
              <span className="hidden md:inline-block text-white/30">•</span>
              <a
                href="tel:9403438103"
                className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors text-[11px]"
                title="Toll-Free Phone"
              >
                <span className="text-white/70">Toll-Free:</span>
                <span className="font-semibold tracking-wide">9403438103</span>
              </a>
              <span className="hidden sm:inline-block text-white/30">•</span>
              <a
                href="mailto:abc@gmail.com"
                className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#B82025]" />
                <span>abc@gmail.com</span>
              </a>
            </div>

            {/* Right: "Follow Us" & Social Icons */}
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-[11px] uppercase tracking-wider text-white/70 hidden xs:inline">
                Follow Us
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#B82025] flex items-center justify-center transition-colors text-white"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#B82025] flex items-center justify-center transition-colors text-white"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#B82025] flex items-center justify-center transition-colors text-white"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 2. MAIN NAVIGATION (Clean White Sticky Navbar) */}
        <div
          className={`bg-white transition-all duration-300 border-b ${
            isScrolled
              ? "py-3 shadow-md border-[#E5E0D4]"
              : "py-4 sm:py-5 border-[#E5E0D4]/80"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Left: Project Logo */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
              <div className="relative h-10 sm:h-12 w-auto flex items-center transition-transform group-hover:scale-105">
                <Image
                  src="/logo.jpeg"
                  alt="Amish Built Cabins"
                  width={140}
                  height={84}
                  className="h-9 sm:h-11 w-auto object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-xl font-black tracking-tight text-[#1D2521] uppercase font-display leading-tight">
                  AMISH BUILT<span className="text-[#B82025]">.</span>CABINS
                </span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[#6B716D] font-bold">
                  Buildings & Cabins
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors rounded-sm ${
                      isActive
                        ? "text-[#B82025] font-extrabold"
                        : "text-[#1D2521] hover:text-[#B82025] hover:bg-[#F7F4EC]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Search + "Get a Quote" Red Button */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Search Toggle */}
              <div className="relative">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  aria-label="Search buildings"
                  className="p-2 text-[#1D2521] hover:text-[#B82025] hover:bg-[#F7F4EC] rounded-sm transition-colors"
                >
                  <Search className="w-4 h-4" />
                </button>

                {searchOpen && (
                  <div className="absolute right-0 top-full mt-2 w-72 bg-white border border-[#E5E0D4] p-2 rounded-sm shadow-xl z-50">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (searchQuery.trim()) {
                          window.location.href = `/buildings?search=${encodeURIComponent(searchQuery.trim())}`;
                        }
                      }}
                      className="flex items-center gap-2"
                    >
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search models, cabins..."
                        className="w-full text-xs px-3 py-2 bg-[#F7F4EC] border border-[#E5E0D4] rounded-sm text-[#1D2521] focus:outline-none focus:border-[#B82025]"
                        autoFocus
                      />
                      <button
                        type="submit"
                        className="p-2 bg-[#B82025] hover:bg-[#8F171C] text-white rounded-sm"
                      >
                        <Search className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  </div>
                )}
              </div>

              {/* Red CTA Button */}
              <Link
                href="/quote"
                className="px-5 py-2.5 bg-[#B82025] hover:bg-[#8F171C] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors flex items-center gap-2 shadow-sm hover:shadow-md"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Actions: Get Quote + Hamburger */}
            <div className="flex xl:hidden items-center gap-2 sm:gap-3">
              <Link
                href="/quote"
                className="px-3 py-1.5 bg-[#B82025] hover:bg-[#8F171C] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors"
              >
                Get Quote
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#1D2521] hover:text-[#B82025] transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-28 px-6 pb-12 xl:hidden flex flex-col justify-between overflow-y-auto border-t border-[#E5E0D4] animate-in fade-in duration-200">
          <div className="space-y-3">
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6B716D] pb-2 border-b border-[#E5E0D4]">
              Menu
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-lg font-bold text-[#1D2521] hover:text-[#B82025] transition-colors py-1.5 font-display uppercase tracking-tight"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-[#E5E0D4] space-y-2.5">
            <a
              href="tel:9403438103"
              className="flex items-center justify-center gap-2 py-2.5 bg-[#F7F4EC] text-[#1D2521] rounded-sm text-xs font-bold uppercase tracking-wider"
            >
              <Phone className="w-4 h-4 text-[#B82025]" />
              9403438103
            </a>
            <a
              href="tel:9403438103"
              className="flex items-center justify-center gap-2 py-2 bg-[#F7F4EC] text-[#6B716D] rounded-sm text-[11px] font-semibold tracking-wider"
            >
              Toll-Free: 9403438103
            </a>
            <a
              href="mailto:abc@gmail.com"
              className="flex items-center justify-center gap-2 py-2 text-xs text-[#6B716D] hover:text-[#B82025]"
            >
              <Mail className="w-3.5 h-3.5 text-[#B82025]" />
              abc@gmail.com
            </a>
            <Link
              href="/quote"
              className="w-full py-3.5 bg-[#B82025] hover:bg-[#8F171C] text-white text-xs font-bold uppercase tracking-wider rounded-sm flex items-center justify-center gap-2"
            >
              <span>Get an Instant Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
