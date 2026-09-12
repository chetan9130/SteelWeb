import Link from "next/link";
import { ArrowRight, Building2, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#FAF8F5] px-4 py-32 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full bg-white border border-[#C8753D]/40 text-[#C8753D] shadow-sm flex items-center justify-center mx-auto">
          <Building2 className="w-8 h-8" />
        </div>

        <div>
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#C8753D]">
            404 Error • Structure Not Found
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#111315] mt-2 font-display">
            Off The Blueprint
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-[#5C5850] leading-relaxed">
            The architectural model or page you are looking for does not exist or has been relocated to another building series.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 bg-[#C8753D] hover:bg-[#B3632E] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/models"
            className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-[#F3EFE6] text-[#111315] border border-[#E5E0D4] text-xs font-bold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Explore Models</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
