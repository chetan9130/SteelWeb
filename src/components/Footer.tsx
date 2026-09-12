"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Clock 
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#F3EFE6] text-[#111315] border-t border-[#E5E0D4] relative overflow-hidden">
      {/* Subtle top copper line */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#C8753D]/50 to-transparent"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#E5E0D4]">
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 group inline-block">
              <div className="w-10 h-10 rounded-sm bg-[#111315] border border-[#C8753D] flex items-center justify-center">
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

            <p className="text-sm text-[#64748B] leading-relaxed max-w-sm">
              Engineered steel buildings, modern barndominiums, and architectural building kits manufactured to commercial rigid-frame tolerances. Built for structural permanence and designed for modern life.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#111315] font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#C8753D]" />
              <span>50-State Engineering Seal & Stamped Blueprints</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-sm bg-white border border-[#E5E0D4] flex items-center justify-center text-[#64748B] hover:text-[#C8753D] hover:border-[#C8753D] transition-colors shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-sm bg-white border border-[#E5E0D4] flex items-center justify-center text-[#64748B] hover:text-[#C8753D] hover:border-[#C8753D] transition-colors shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-sm bg-white border border-[#E5E0D4] flex items-center justify-center text-[#64748B] hover:text-[#C8753D] hover:border-[#C8753D] transition-colors shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-sm bg-white border border-[#E5E0D4] flex items-center justify-center text-[#64748B] hover:text-[#C8753D] hover:border-[#C8753D] transition-colors shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8753D]">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/models" className="text-[#64748B] hover:text-[#111315] transition-colors font-medium">
                  All Models
                </Link>
              </li>
              <li>
                <Link href="/models?category=Barndominiums" className="text-[#64748B] hover:text-[#111315] transition-colors font-medium">
                  Barndominiums
                </Link>
              </li>
              <li>
                <Link href="/models?category=Steel+Buildings" className="text-[#64748B] hover:text-[#111315] transition-colors font-medium">
                  Steel Workshops
                </Link>
              </li>
              <li>
                <Link href="/models?category=Cabins" className="text-[#64748B] hover:text-[#111315] transition-colors font-medium">
                  Modern Cabins
                </Link>
              </li>
              <li>
                <Link href="/models?category=Building+Kits" className="text-[#64748B] hover:text-[#111315] transition-colors font-medium">
                  DIY Building Kits
                </Link>
              </li>
              <li>
                <Link href="/videos" className="text-[#64748B] hover:text-[#111315] transition-colors font-medium">
                  Project Video Tours
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources & Tools (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8753D]">
              Resources
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/quote" className="text-[#C8753D] hover:underline font-bold transition-colors flex items-center gap-1.5">
                  Instant Quote Wizard
                </Link>
              </li>
              <li>
                <Link href="/upload-floor-plan" className="text-[#64748B] hover:text-[#111315] transition-colors font-medium">
                  Upload Floor Plan
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#64748B] hover:text-[#111315] transition-colors font-medium">
                  Why Structural Steel
                </Link>
              </li>
              <li>
                <Link href="/about#craftsmanship" className="text-[#64748B] hover:text-[#111315] transition-colors font-medium">
                  Factory Engineering
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#64748B] hover:text-[#111315] transition-colors font-medium">
                  General Inquiries & FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Direct Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8753D]">
              Architectural Dispatch
            </h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Receive monthly build journals, new barndominium floor plan releases, and regional cost studies.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-white border border-[#C8753D] text-[#111315] text-xs rounded-sm shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#C8753D] shrink-0" />
                <span>Thank you. You are subscribed to our design dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-white border border-[#E5E0D4] px-3.5 py-2.5 text-xs text-[#111315] placeholder-[#94A3B8] focus:outline-none focus:border-[#C8753D] rounded-sm w-full shadow-xs"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#C8753D] hover:bg-[#BA642C] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors shrink-0 shadow-xs"
                >
                  Join
                </button>
              </form>
            )}

            <div className="pt-2 space-y-2 text-xs text-[#64748B]">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#C8753D] shrink-0" />
                <span>Headquarters: 4800 Ironwood Parkway, Austin, TX 78701</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#C8753D] shrink-0" />
                <span>Direct: (800) 555-STEEL / (512) 890-4400</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-3.5 h-3.5 text-[#C8753D] shrink-0" />
                <span>Manufacturing: Mon–Fri, 7am – 6pm CST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>© 2026 Vortex Steel & Timber Structures, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-[#111315] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-[#111315] transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-[#111315] transition-colors">
              Warranty Document
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
