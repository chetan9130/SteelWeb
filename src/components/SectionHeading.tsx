import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  ctaText,
  ctaHref,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 ${
        align === "center" ? "text-center max-w-3xl mx-auto" : "flex flex-col md:flex-row md:items-end justify-between gap-6"
      } ${className}`}
    >
      <div className={align === "center" ? "" : "max-w-2xl"}>
        {eyebrow && (
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C8753D] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#C8753D]"></span>
            <span>{eyebrow}</span>
          </div>
        )}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#111315] leading-[1.1] font-display">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed font-body">
            {subtitle}
          </p>
        )}
      </div>

      {ctaText && ctaHref && (
        <div className={align === "center" ? "mt-6" : "shrink-0"}>
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111315] hover:text-[#C8753D] transition-colors group"
          >
            <span>{ctaText}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </div>
  );
}
