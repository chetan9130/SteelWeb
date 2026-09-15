import { FileCheck, Clock } from "lucide-react";
import FloorPlanUploader from "@/components/FloorPlanUploader";

export const metadata = {
  title: "Upload Your Floor Plan | ModularHome.com",
  description: "Already have a blueprint or architectural drawing? Upload your plan for a complimentary modular home engineering breakdown and custom bid package.",
};

export default function UploadFloorPlanPage() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-28 text-[#1D2521]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#B82025] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#B82025]"></span>
            <span>Custom Engineering Intake</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#1D2521] font-display">
            HAVE A FLOOR PLAN?
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#6B716D] leading-relaxed font-body">
            Upload your floor plan and let our team provide a detailed custom quote. We accept hand sketches, architect PDFs, and CAD files.
          </p>
        </div>

        {/* Uploader Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          {/* Main Uploader (8 cols) */}
          <div className="lg:col-span-8">
            <FloorPlanUploader />
          </div>

          {/* Right Sidebar: Engineering Assurance (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#F7F4EC] border border-[#E5E0D4] rounded-sm p-6 space-y-5 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#1D2521]">
                The Engineering Process
              </h3>

              <div className="space-y-4 text-xs text-[#6B716D]">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-white border border-[#E5E0D4] text-[#B82025] font-bold flex items-center justify-center shrink-0 shadow-2xs">
                    1
                  </span>
                  <div>
                    <span className="font-bold text-[#1D2521] block">Intake & Load Line Audit</span>
                    <span>Our licensed engineers review span lengths, eave heights, and regional wind/snow specs.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-white border border-[#E5E0D4] text-[#B82025] font-bold flex items-center justify-center shrink-0 shadow-2xs">
                    2
                  </span>
                  <div>
                    <span className="font-bold text-[#1D2521] block">Steel Conversion Modeling</span>
                    <span>We translate timber or conventional plans into clear-span rigid steel framework.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-white border border-[#E5E0D4] text-[#B82025] font-bold flex items-center justify-center shrink-0 shadow-2xs">
                    3
                  </span>
                  <div>
                    <span className="font-bold text-[#1D2521] block">Stamped Bid Packet</span>
                    <span>You receive an itemized manufacturing bill of materials with certified price guarantee.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E0D4] space-y-2 text-[11px] text-[#6B716D]">
                <div className="flex items-center gap-2 text-[#1D2521] font-semibold">
                  <FileCheck className="w-4 h-4 text-[#B82025]" />
                  <span>Accepted: PDF, PNG, JPG, DWG, DXF</span>
                </div>
                <div className="flex items-center gap-2 text-[#1D2521] font-semibold">
                  <Clock className="w-4 h-4 text-[#B82025]" />
                  <span>Turnaround: 24–48 Business Hours</span>
                </div>
              </div>
            </div>

            <div className="bg-[#F7F4EC] border border-[#E5E0D4] p-5 rounded-sm text-xs text-[#6B716D] space-y-2 shadow-2xs">
              <span className="font-bold text-[#1D2521] block">Need help drafting from scratch?</span>
              <p>
                If you don't have drawings yet, you can also browse our{" "}
                <a href="/buildings" className="text-[#B82025] hover:underline font-bold">
                  pre-engineered architectural floor plans
                </a>{" "}
                which come complete with stamped structural calculations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
