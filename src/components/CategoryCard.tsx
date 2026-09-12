import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  id: string;
  title: string;
  tagline: string;
  image: string;
  count?: number;
  href?: string;
}

export default function CategoryCard({ id, title, tagline, image, href }: CategoryCardProps) {
  const targetHref = href || `/models?category=${encodeURIComponent(id)}`;

  return (
    <div className="group relative bg-white border border-[#E5E0D4] rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#17352A]">
      {/* Large Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F7F4EC]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between text-left space-y-3 bg-white">
        <div>
          <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-tight text-[#1D2521] group-hover:text-[#B82025] transition-colors font-display">
            {title}
          </h3>
          <p className="text-xs text-[#6B716D] mt-1 line-clamp-2 leading-relaxed font-body">
            {tagline}
          </p>
        </div>

        {/* Red CTA Button */}
        <div className="pt-2">
          <Link
            href={targetHref}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B82025] group-hover:text-[#8F171C] transition-colors"
          >
            <span>View {title}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
