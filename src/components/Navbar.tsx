"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  Phone, 
  Calculator,
  Compass,
  FileUp,
  HelpCircle,
  Layers
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setMobileMenuOpen(false);
    setResourcesOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Buildings", href: "/models" },
    { label: "Models", href: "/models" },
    { label: "Videos", href: "/videos" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md py-3.5 border-b border-[#E5E0D4] shadow-sm"
            : "bg-[#FAF8F5]/90 backdrop-blur-xs py-5 border-b border-[#EFE8DC]/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-sm bg-[#111315] border border-[#C8753D] flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(200,117,61,0.3)]">
              <span className="font-bold text-[#C8753D] text-xl tracking-tighter">V</span>
              <span className="w-1.5 h-4 bg-white -ml-0.5 transform -skew-x-12"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wider text-[#111315] uppercase font-sans">
                VORTEX<span className="text-[#C8753D]">.</span>STEEL
              </span>
              <span className="text-[9px] tracking-[0.25em] text-[#64748B] uppercase -mt-1 font-semibold">
                Architectural Structures
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-semibold tracking-wide uppercase transition-colors duration-200 rounded-sm ${
                    isActive
                      ? "text-[#C8753D] bg-[#F3EFE6] font-bold"
                      : "text-[#1E293B]/80 hover:text-[#111315] hover:bg-[#F3EFE6]/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                onMouseEnter={() => setResourcesOpen(true)}
                className="flex items-center gap-1 px-3.5 py-2 text-sm font-semibold tracking-wide uppercase text-[#1E293B]/80 hover:text-[#111315] rounded-sm transition-colors"
              >
                <span>Resources</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${resourcesOpen ? "rotate-180 text-[#C8753D]" : ""}`} />
              </button>

              {resourcesOpen && (
                <div 
                  onMouseLeave={() => setResourcesOpen(false)}
                  className="absolute top-full right-0 mt-1 w-64 bg-white border border-[#E5E0D4] rounded-sm shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <Link
                    href="/upload-floor-plan"
                    className="flex items-start gap-3 p-2.5 rounded-sm hover:bg-[#FAF8F5] transition-colors group"
                  >
                    <div className="p-2 rounded bg-[#F3EFE6] text-[#C8753D] group-hover:bg-[#C8753D] group-hover:text-white transition-colors">
                      <FileUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#111315] group-hover:text-[#C8753D] transition-colors">Upload Floor Plan</div>
                      <div className="text-xs text-[#64748B]">Get engineering quotes on your custom plans</div>
                    </div>
                  </Link>

                  <Link
                    href="/quote"
                    className="flex items-start gap-3 p-2.5 rounded-sm hover:bg-[#FAF8F5] transition-colors group"
                  >
                    <div className="p-2 rounded bg-[#F3EFE6] text-[#C8753D] group-hover:bg-[#C8753D] group-hover:text-white transition-colors">
                      <Calculator className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#111315] group-hover:text-[#C8753D] transition-colors">Instant Quote Builder</div>
                      <div className="text-xs text-[#64748B]">Configure size, options & calculate costs</div>
                    </div>
                  </Link>

                  <Link
                    href="/about"
                    className="flex items-start gap-3 p-2.5 rounded-sm hover:bg-[#FAF8F5] transition-colors group"
                  >
                    <div className="p-2 rounded bg-[#F3EFE6] text-[#B8A37E] group-hover:bg-[#B8A37E] group-hover:text-white transition-colors">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#111315]">Why Steel Framing</div>
                      <div className="text-xs text-[#64748B]">Cold-formed engineering standards</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-5">
            <a
              href="tel:18005557833"
              className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#111315] hover:text-[#C8753D] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C8753D]" />
              <span>(800) 555-STEEL</span>
            </a>

            <Link
              href="/quote"
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#C8753D] hover:bg-[#BA642C] transition-all duration-200 rounded-sm shadow-md hover:shadow-[0_0_15px_rgba(200,117,61,0.35)] group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get a Quote
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              href="/quote"
              className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-[#C8753D] text-white rounded-sm"
            >
              Quote
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-sm text-[#111315] hover:bg-[#F3EFE6] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF8F5]/98 backdrop-blur-xl md:hidden pt-24 px-6 pb-12 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200">
          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B] pb-2 border-b border-[#E5E0D4]">
              Navigation
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-2xl font-bold tracking-tight text-[#111315] hover:text-[#C8753D] transition-colors py-2 font-display"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-[#E5E0D4] space-y-3">
              <Link
                href="/upload-floor-plan"
                className="flex items-center gap-3 text-lg font-semibold text-[#111315] hover:text-[#C8753D]"
              >
                <FileUp className="w-5 h-5 text-[#C8753D]" />
                Upload Floor Plan
              </Link>
              <Link
                href="/quote"
                className="flex items-center gap-3 text-lg font-semibold text-[#111315] hover:text-[#C8753D]"
              >
                <Calculator className="w-5 h-5 text-[#C8753D]" />
                Instant Quote Calculator
              </Link>
            </div>
          </div>

          <div className="pt-8 border-t border-[#E5E0D4] space-y-4">
            <a
              href="tel:18005557833"
              className="flex items-center justify-center gap-2 py-3 bg-white border border-[#E5E0D4] text-[#111315] rounded-sm text-sm font-semibold"
            >
              <Phone className="w-4 h-4 text-[#C8753D]" />
              (800) 555-STEEL
            </a>
            <Link
              href="/quote"
              className="w-full py-3.5 bg-[#C8753D] text-white rounded-sm text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              Start Instant Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
