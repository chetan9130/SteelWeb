import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Bed, Bath, Maximize2, Shield } from "lucide-react";
import { BuildingModel } from "@/data/models";
import { formatPrice } from "@/utils/currency";

interface BuildingCardProps {
  model: BuildingModel;
  priority?: boolean;
}

export default function BuildingCard({ model, priority = false }: BuildingCardProps) {
  const formattedPrice = formatPrice(model.startingPrice);
  const formattedSqFt = new Intl.NumberFormat("en-US").format(model.sqft);

  return (
    <div className="group flex flex-col bg-white border border-[#E5E0D4] hover:border-[#17352A] rounded-sm overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* Image Viewport */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F7F4EC]">
        <Image
          src={model.primaryImage || model.image || ""}
          alt={model.name}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-white/95 backdrop-blur-md text-[#1D2521] border border-[#E5E0D4] rounded-xs shadow-xs">
            {model.category}
          </span>
          <span className="px-2.5 py-1 text-[11px] font-bold tracking-wider bg-[#B82025] text-white rounded-xs shadow-md">
            From {formattedPrice}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-white">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B82025]">
            {model.series}
          </div>
          <h3 className="text-xl font-bold uppercase tracking-tight text-[#1D2521] group-hover:text-[#B82025] transition-colors mt-1 font-display">
            {model.name}
          </h3>
          <p className="text-xs text-[#6B716D] line-clamp-2 mt-2 leading-relaxed font-body">
            {model.tagline}
          </p>
        </div>

        {/* Architectural Specs Bar */}
        <div className="pt-3 border-t border-[#F7F4EC] grid grid-cols-3 gap-2 text-center text-xs bg-[#F7F4EC] p-3 rounded-sm">
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-wider text-[#6B716D]">Area</span>
            <span className="font-bold text-sm text-[#1D2521]">{formattedSqFt} <span className="text-[10px] text-[#6B716D]">SQ FT</span></span>
          </div>

          <div className="flex flex-col items-center border-x border-[#E5E0D4]">
            <span className="text-[10px] uppercase tracking-wider text-[#6B716D]">Bedrooms</span>
            <span className="font-bold text-sm text-[#1D2521]">
              {model.bedrooms > 0 ? `${model.bedrooms} Bed` : "Clear Span"}
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-wider text-[#6B716D]">Bathrooms</span>
            <span className="font-bold text-sm text-[#1D2521]">
              {model.bathrooms > 0 ? `${model.bathrooms} Bath` : "N/A"}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Link
            href={`/buildings/${model.slug}`}
            className="w-full py-2.5 px-4 bg-[#B82025] hover:bg-[#8F171C] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2 group-hover:shadow-md"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
