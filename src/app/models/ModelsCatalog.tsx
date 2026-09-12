"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { 
  SlidersHorizontal, 
  Search, 
  X, 
  RotateCcw, 
  Building2, 
  Layers, 
  Bed, 
  DollarSign, 
  Maximize2 
} from "lucide-react";
import BuildingCard from "@/components/BuildingCard";
import SectionHeading from "@/components/SectionHeading";
import { BUILDING_MODELS, BuildingModel } from "@/data/models";

const CATEGORY_TABS = [
  "All",
  "Barndominiums",
  "Steel Buildings",
  "Cabins",
  "Building Kits",
];

export default function ModelsCatalog() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [bedroomFilter, setBedroomFilter] = useState<string>("all");
  const [maxPrice, setMaxPrice] = useState<number>(350000);
  const [minSqft, setMinSqft] = useState<number>(800);
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && CATEGORY_TABS.includes(cat)) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  // Filtering Logic
  const filteredModels = useMemo(() => {
    return BUILDING_MODELS.filter((model) => {
      // Category Filter
      if (selectedCategory !== "All" && model.category !== selectedCategory) {
        return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = model.name.toLowerCase().includes(query);
        const matchesSeries = model.series.toLowerCase().includes(query);
        const matchesTagline = model.tagline.toLowerCase().includes(query);
        if (!matchesName && !matchesSeries && !matchesTagline) {
          return false;
        }
      }

      // Bedrooms Filter
      if (bedroomFilter !== "all") {
        const requiredBeds = parseInt(bedroomFilter, 10);
        if (model.bedrooms < requiredBeds) {
          return false;
        }
      }

      // Max Price Filter
      if (model.startingPrice > maxPrice) {
        return false;
      }

      // Min Sqft Filter
      if (model.sqft < minSqft) {
        return false;
      }

      return true;
    });
  }, [selectedCategory, searchQuery, bedroomFilter, maxPrice, minSqft]);

  const handleResetFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
    setBedroomFilter("all");
    setMaxPrice(350000);
    setMinSqft(800);
  };

  const isFiltered =
    selectedCategory !== "All" ||
    searchQuery !== "" ||
    bedroomFilter !== "all" ||
    maxPrice < 350000 ||
    minSqft > 800;

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-28 pb-24 text-[#111315]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="py-8 border-b border-[#E5E0D4]">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C8753D] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#C8753D]"></span>
            <span>Architectural Catalog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#111315] font-display">
            Engineered Building Models
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#64748B] max-w-2xl font-body">
            Browse our pre-stamped barndominium floor plans, heavy industrial workshop frames, and off-grid alpine cabins. All models are 100% customizable.
          </p>

          {/* Category Tabs */}
          <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {CATEGORY_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedCategory(tab)}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm shrink-0 transition-all duration-200 ${
                  selectedCategory === tab
                    ? "bg-[#C8753D] text-white shadow-md"
                    : "bg-white text-[#111315] hover:bg-[#F3EFE6] border border-[#E5E0D4] shadow-2xs"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Search & Advanced Filters Bar */}
        <div className="py-6 border-b border-[#E5E0D4] bg-white px-4 sm:px-6 rounded-sm shadow-xs mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by model name or keyword..."
              className="w-full bg-[#FAF8F5] border border-[#E5E0D4] pl-10 pr-4 py-2.5 text-xs text-[#111315] placeholder-[#94A3B8] focus:outline-none focus:border-[#C8753D] rounded-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#111315]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Quick Filter Controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Bedrooms Dropdown */}
            <div className="flex items-center gap-2 bg-[#FAF8F5] border border-[#E5E0D4] px-3 py-1.5 rounded-sm">
              <span className="text-[11px] text-[#64748B] uppercase font-bold">Beds:</span>
              <select
                value={bedroomFilter}
                onChange={(e) => setBedroomFilter(e.target.value)}
                className="bg-transparent text-xs text-[#111315] focus:outline-none font-semibold cursor-pointer"
              >
                <option value="all">Any</option>
                <option value="1">1+ Beds</option>
                <option value="2">2+ Beds</option>
                <option value="3">3+ Beds</option>
                <option value="4">4+ Beds</option>
              </select>
            </div>

            {/* Min SQ FT Dropdown */}
            <div className="flex items-center gap-2 bg-[#FAF8F5] border border-[#E5E0D4] px-3 py-1.5 rounded-sm">
              <span className="text-[11px] text-[#64748B] uppercase font-bold">Min Size:</span>
              <select
                value={minSqft}
                onChange={(e) => setMinSqft(Number(e.target.value))}
                className="bg-transparent text-xs text-[#111315] focus:outline-none font-semibold cursor-pointer"
              >
                <option value={800}>800+ SQ FT</option>
                <option value={1500}>1,500+ SQ FT</option>
                <option value={2400}>2,400+ SQ FT</option>
                <option value={3500}>3,500+ SQ FT</option>
              </select>
            </div>

            {/* Max Price Filter */}
            <div className="flex items-center gap-2 bg-[#FAF8F5] border border-[#E5E0D4] px-3 py-1.5 rounded-sm">
              <span className="text-[11px] text-[#64748B] uppercase font-bold">Max Price:</span>
              <select
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="bg-transparent text-xs text-[#111315] focus:outline-none font-semibold cursor-pointer"
              >
                <option value={350000}>Under ₹3,50,000</option>
                <option value={250000}>Under ₹2,50,000</option>
                <option value={180000}>Under ₹1,80,000</option>
                <option value={120000}>Under ₹1,20,000</option>
              </select>
            </div>

            {/* Reset filters button */}
            {isFiltered && (
              <button
                onClick={handleResetFilters}
                className="flex items-center gap-1 px-3 py-2 text-xs font-bold text-[#C8753D] hover:bg-[#F3EFE6] bg-[#FAF8F5] border border-[#E5E0D4] rounded-sm transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Results Counter & Active Criteria */}
        <div className="py-4 flex items-center justify-between text-xs text-[#64748B]">
          <div>
            Showing <span className="text-[#111315] font-bold">{filteredModels.length}</span> of {BUILDING_MODELS.length} architectural models
          </div>
          {isFiltered && (
            <span className="text-[#C8753D] font-bold">
              Filtered results active
            </span>
          )}
        </div>

        {/* Product Grid */}
        {filteredModels.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-2">
            {filteredModels.map((model) => (
              <BuildingCard key={model.id} model={model} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20 bg-white border border-[#E5E0D4] rounded-sm p-8 space-y-4 shadow-sm">
            <Building2 className="w-12 h-12 text-[#94A3B8] mx-auto" />
            <h3 className="text-xl font-bold uppercase text-[#111315] font-display">
              No Architectural Models Match Your Criteria
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto">
              Try adjusting your maximum price, bedroom count, or category tabs to view our full collection of engineered plans.
            </p>
            <div className="pt-2">
              <button
                onClick={handleResetFilters}
                className="px-6 py-2.5 bg-[#C8753D] text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#BA642C] transition-colors shadow-xs"
              >
                Reset All Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
