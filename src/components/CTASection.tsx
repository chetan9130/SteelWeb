import Link from "next/link";
import { ArrowRight, Layers, Maximize, Sliders, DollarSign } from "lucide-react";

export default function CTASection() {
  const steps = [
    { num: "01", icon: Layers, title: "Model", desc: "Select architectural footprint" },
    { num: "02", icon: Maximize, title: "Size", desc: "Define precise square footage" },
    { num: "03", icon: Sliders, title: "Options", desc: "Porches, insulation & openings" },
    { num: "04", icon: DollarSign, title: "Estimate", desc: "Instant transparent price sheet" },
  ];

  return (
    <section className="py-24 bg-[#F3EFE6] relative overflow-hidden border-t border-[#E5E0D4]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#C8753D]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white border border-[#E5E0D4] rounded-sm p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
          {/* Subtle line decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 border-r-2 border-t-2 border-[#C8753D]/20 -mr-8 -mt-8 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C8753D]">
                <span className="w-2 h-2 rounded-full bg-[#C8753D]"></span>
                <span>Transparent Budgeting</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#111315] leading-[1.08] font-display">
                Know What Your <br />
                <span className="text-[#C8753D]">Build Could Cost.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-md font-body">
                Configure your preferred model, adjust square footage, select energy packages, and generate an immediate structural cost estimate in under 2 minutes.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  href="/quote"
                  className="px-8 py-4 bg-[#C8753D] hover:bg-[#BA642C] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-sm transition-all duration-200 shadow-md hover:shadow-[0_0_20px_rgba(200,117,61,0.35)] inline-flex items-center gap-3 group"
                >
                  <span>Start Your Quote</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/upload-floor-plan"
                  className="px-6 py-4 bg-[#FAF8F5] hover:bg-[#F3EFE6] text-[#111315] hover:text-[#C8753D] border border-[#E5E0D4] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-sm transition-colors"
                >
                  Have a Custom Plan?
                </Link>
              </div>
            </div>

            {/* Right: Step Progression Diagram */}
            <div className="lg:col-span-6">
              <div className="bg-[#FAF8F5] border border-[#E5E0D4] p-6 sm:p-8 rounded-sm shadow-xs">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#64748B] mb-6 flex items-center justify-between">
                  <span>Interactive Estimation Flow</span>
                  <span className="text-[#C8753D] font-bold">Instant Results</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative">
                  {steps.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col p-4 bg-white border border-[#E5E0D4] rounded-sm group hover:border-[#C8753D] transition-colors shadow-xs"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <step.icon className="w-4 h-4 text-[#C8753D]" />
                        <span className="text-[10px] font-mono text-[#64748B] font-bold">{step.num}</span>
                      </div>
                      <div className="text-sm font-bold uppercase tracking-wider text-[#111315] group-hover:text-[#C8753D] transition-colors">
                        {step.title}
                      </div>
                      <div className="text-[10px] text-[#64748B] mt-1 line-clamp-2">
                        {step.desc}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-[#E5E0D4] flex items-center justify-between text-xs text-[#64748B]">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    Updated for 2026 Material Pricing
                  </span>
                  <span className="text-[#111315] font-semibold">No Obligation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
