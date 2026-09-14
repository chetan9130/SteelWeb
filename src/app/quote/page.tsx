import { ShieldCheck, Clock, Award } from "lucide-react";
import QuoteWizard from "@/components/QuoteWizard";

export const metadata = {
  title: "Instant Building Quote Calculator | AMISH BUILT CABINS",
  description: "Calculate custom estimates for your cabin, tiny home, barndominium, or clear-span steel building. Customize square footage and options for transparent pricing.",
};

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-28 text-[#1D2521]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#B82025] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#B82025]"></span>
            <span>Interactive Estimator</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#1D2521] font-display">
            Instant Building Quote
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#6B716D] leading-relaxed font-body">
            Configure your building type, fine-tune square footage, and select energy packages. Transparent structural pricing in under 2 minutes.
          </p>

          {/* Quick trust bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-[#1D2521]">
            <span className="flex items-center gap-2 bg-[#F7F4EC] border border-[#E5E0D4] px-3.5 py-1.5 rounded-full shadow-2xs font-semibold">
              <Clock className="w-3.5 h-3.5 text-[#B82025]" />
              Takes 2 Minutes
            </span>
            <span className="flex items-center gap-2 bg-[#F7F4EC] border border-[#E5E0D4] px-3.5 py-1.5 rounded-full shadow-2xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B82025]" />
              No Obligation Estimate
            </span>
            <span className="flex items-center gap-2 bg-[#F7F4EC] border border-[#E5E0D4] px-3.5 py-1.5 rounded-full shadow-2xs font-semibold">
              <Award className="w-3.5 h-3.5 text-[#B82025]" />
              2026 Material Index Locked
            </span>
          </div>
        </div>

        {/* Wizard Container */}
        <div className="max-w-5xl mx-auto">
          <QuoteWizard />
        </div>

        {/* Assistive footer callout */}
        <div className="mt-16 text-center text-xs text-[#6B716D]">
          Prefer to speak directly with an estimator? Call us at{" "}
          <a href="tel:9403438103" className="text-[#B82025] font-bold hover:underline">
            9403438103
          </a>{" "}
          or Toll-Free at{" "}
          <a href="tel:9403438103" className="text-[#B82025] font-bold hover:underline">
            9403438103
          </a>{" "}
          (Monday–Friday 7am–6pm).
        </div>
      </div>
    </div>
  );
}
