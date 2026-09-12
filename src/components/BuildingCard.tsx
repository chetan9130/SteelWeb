import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Bed, Bath, Maximize2, Shield } from "lucide-react";
import { BuildingModel } from "@/data/models";
import { formatRupees } from "@/utils/currency";

interface BuildingCardProps {
  model: BuildingModel;
  priority?: boolean;
}

export default function BuildingCard({ model, priority = false }: BuildingCardProps) {
  const formattedPrice = formatRupees(model.startingPrice);
  const formattedSqFt = new Intl.NumberFormat("en-IN").format(model.sqft);

  return (
    <Link
      href={`/models/${model.slug}`}
      className="group flex flex-col bg-white border border-[#E5E0D4] hover:border-[#C8753D] rounded-sm overflow-hidden transition-all duration-300 hover:shadow-xl"
    >
      {/* Image Viewport */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F3EFE6]">
        <Image
          src={model.primaryImage}
          alt={model.name}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 opacity-70 group-hover:opacity-40 transition-opacity duration-300" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-white/95 backdrop-blur-md text-[#111315] border border-[#E5E0D4] rounded-xs shadow-xs">
            {model.category}
          </span>
          <span className="px-2.5 py-1 text-[11px] font-bold tracking-wider bg-[#C8753D] text-white rounded-xs shadow-md">
            From {formattedPrice}
          </span>
        </div>

        {/* Bottom Corner Floating Arrow */}
        <div className="absolute bottom-3 right-3 w-9 h-9 rounded-sm bg-white/95 border border-[#E5E0D4] flex items-center justify-center text-[#111315] group-hover:bg-[#C8753D] group-hover:border-[#C8753D] group-hover:text-white transition-all duration-300 shadow-md">
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8753D]">
            {model.series}
          </div>
          <h3 className="text-xl font-bold uppercase tracking-tight text-[#111315] group-hover:text-[#C8753D] transition-colors mt-1 font-display">
            {model.name}
          </h3>
          <p className="text-xs text-[#64748B] line-clamp-2 mt-2 leading-relaxed">
            {model.tagline}
          </p>
        </div>

        {/* Architectural Specs Bar */}
        <div className="pt-3 border-t border-[#EFE8DC] grid grid-cols-3 gap-2 text-center text-xs bg-[#FAF8F5] p-3 rounded-sm">
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-wider text-[#64748B]">Area</span>
            <span className="font-bold text-sm text-[#111315]">{formattedSqFt} <span className="text-[10px] text-[#64748B]">SQ FT</span></span>
          </div>

          <div className="flex flex-col items-center border-x border-[#E5E0D4]">
            <span className="text-[10px] uppercase tracking-wider text-[#64748B]">Bedrooms</span>
            <span className="font-bold text-sm text-[#111315]">
              {model.bedrooms > 0 ? `${model.bedrooms} Bed` : "Clear Span"}
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-wider text-[#64748B]">Bathrooms</span>
            <span className="font-bold text-sm text-[#111315]">
              {model.bathrooms > 0 ? `${model.bathrooms} Bath` : "N/A"}
            </span>
          </div>
        </div>

        {/* Action Bar */}
        <div className="pt-2 flex items-center justify-between text-xs text-[#111315] font-semibold group-hover:text-[#C8753D] transition-colors">
          <span className="flex items-center gap-1.5 text-[11px] text-[#64748B]">
            <Shield className="w-3.5 h-3.5 text-[#C8753D]" />
            {model.warranty.split(" ")[0]} Guarantee
          </span>
          <span className="inline-flex items-center gap-1 uppercase font-bold text-[10px] tracking-wider text-[#C8753D]">
            View Details
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
