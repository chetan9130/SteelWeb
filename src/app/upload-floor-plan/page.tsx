import { FileCheck, Shield, Award, Clock } from "lucide-react";
import FloorPlanUploader from "@/components/FloorPlanUploader";

export const metadata = {
  title: "Upload Your Floor Plan | VORTEX STEEL",
  description: "Already have a blueprint or architectural drawing? Upload your plan for a complimentary steel frame engineering breakdown and bid package.",
};

export default function UploadFloorPlanPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-28 pb-28 text-[#111315]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C8753D] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#C8753D]"></span>
            <span>Custom Engineering Intake</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#111315] font-display">
            Already Have A Plan?
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#64748B] leading-relaxed font-body">
            Upload your floor plan and let our structural engineering team help bring your vision to life. We accept hand sketches, architect PDFs, and CAD files.
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
            <div className="bg-white border border-[#E5E0D4] rounded-sm p-6 space-y-5 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#111315]">
                The Engineering Process
              </h3>

              <div className="space-y-4 text-xs text-[#64748B]">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#F3EFE6] border border-[#E5E0D4] text-[#C8753D] font-bold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <div>
                    <span className="font-bold text-[#111315] block">Intake & Load Line Audit</span>
                    <span>Our licensed engineers review span lengths, eave heights, and local wind/snow specs.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#F3EFE6] border border-[#E5E0D4] text-[#C8753D] font-bold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <div>
                    <span className="font-bold text-[#111315] block">Steel Conversion Modeling</span>
                    <span>We translate timber or conventional plans into clear-span rigid steel framework.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#F3EFE6] border border-[#E5E0D4] text-[#C8753D] font-bold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <div>
                    <span className="font-bold text-[#111315] block">Stamped Bid Packet</span>
                    <span>You receive an itemized manufacturing bill of materials with certified price guarantee.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E0D4] space-y-2 text-[11px] text-[#64748B]">
                <div className="flex items-center gap-2 text-[#111315] font-semibold">
                  <FileCheck className="w-4 h-4 text-[#C8753D]" />
                  <span>Accepted: PDF, PNG, JPG, DWG, DXF</span>
                </div>
                <div className="flex items-center gap-2 text-[#111315] font-semibold">
                  <Clock className="w-4 h-4 text-[#C8753D]" />
                  <span>Turnaround: 24–48 Business Hours</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#E5E0D4] p-5 rounded-sm text-xs text-[#64748B] space-y-2 shadow-xs">
              <span className="font-bold text-[#111315] block">Need help drafting from scratch?</span>
              <p>
                If you don't have drawings yet, you can also browse our{" "}
                <a href="/models" className="text-[#C8753D] hover:underline font-bold">
                  10 pre-engineered architectural floor plans
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
