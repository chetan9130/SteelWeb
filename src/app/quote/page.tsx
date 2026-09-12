import { ShieldCheck, Clock, Award, Phone } from "lucide-react";
import QuoteWizard from "@/components/QuoteWizard";

export const metadata = {
  title: "Instant Building Quote Calculator | VORTEX STEEL",
  description: "Calculate custom estimates for your barndominium, steel building, or modern cabin. Customize square footage, options, and receive immediate pricing in Indian Rupees.",
};

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-28 pb-28 text-[#111315]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C8753D] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#C8753D]"></span>
            <span>Interactive Estimator</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#111315] font-display">
            Instant Building Quote
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#64748B] leading-relaxed font-body">
            Configure your model, fine-tune square footage, and select energy packages. Transparent structural pricing in under 2 minutes.
          </p>

          {/* Quick trust bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-[#111315]">
            <span className="flex items-center gap-2 bg-white border border-[#E5E0D4] px-3.5 py-1.5 rounded-full shadow-2xs font-semibold">
              <Clock className="w-3.5 h-3.5 text-[#C8753D]" />
              Takes 2 Minutes
            </span>
            <span className="flex items-center gap-2 bg-white border border-[#E5E0D4] px-3.5 py-1.5 rounded-full shadow-2xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C8753D]" />
              No Obligation Estimate
            </span>
            <span className="flex items-center gap-2 bg-white border border-[#E5E0D4] px-3.5 py-1.5 rounded-full shadow-2xs font-semibold">
              <Award className="w-3.5 h-3.5 text-[#C8753D]" />
              2026 Material Index Locked
            </span>
          </div>
        </div>

        {/* Wizard Container */}
        <div className="max-w-5xl mx-auto">
          <QuoteWizard />
        </div>

        {/* Assistive footer callout */}
        <div className="mt-16 text-center text-xs text-[#64748B]">
          Prefer to speak directly with an engineering estimator? Call us toll-free at{" "}
          <a href="tel:18005557833" className="text-[#C8753D] font-bold hover:underline">
            (800) 555-STEEL
          </a>{" "}
          (Monday–Friday 7am–6pm CST).
        </div>
      </div>
    </div>
  );
}
