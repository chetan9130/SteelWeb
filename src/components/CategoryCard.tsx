import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface CategoryCardProps {
  id: string;
  title: string;
  tagline: string;
  image: string;
  count: number;
}

export default function CategoryCard({ id, title, tagline, image, count }: CategoryCardProps) {
  return (
    <Link
      href={`/models?category=${encodeURIComponent(id)}`}
      className="group relative h-[380px] sm:h-[440px] rounded-sm overflow-hidden flex flex-col justify-end p-6 sm:p-8 border border-[#E5E0D4] hover:border-[#C8753D] transition-all duration-500 shadow-md hover:shadow-xl"
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-85 group-hover:brightness-95"
      />

      {/* Atmospheric Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
      <div className="absolute inset-0 bg-[#C8753D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Top Floating Badge */}
      <div className="absolute top-6 left-6 flex items-center justify-between w-[calc(100%-3rem)]">
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] px-2.5 py-1 bg-white/90 backdrop-blur-md border border-[#E5E0D4] text-[#111315] rounded-xs shadow-xs">
          {count} Models Available
        </span>
        <div className="w-10 h-10 rounded-full bg-white/90 border border-[#E5E0D4] group-hover:border-[#C8753D] group-hover:bg-[#C8753D] text-[#111315] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-md">
          <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-2 transform transition-transform duration-300 group-hover:-translate-y-1">
        <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white group-hover:text-[#F3EFE6] transition-colors font-display">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-white/80 group-hover:text-white leading-relaxed max-w-md transition-colors font-body">
          {tagline}
        </p>
        <div className="pt-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C8753D] group-hover:text-[#D8C7A3]">
          <span>Explore Series</span>
          <span className="w-4 h-px bg-[#C8753D]"></span>
        </div>
      </div>
    </Link>
  );
}
