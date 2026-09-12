"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, Award, Building, HardHat } from "lucide-react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: React.ElementType;
}

const STATS: StatItem[] = [
  {
    value: 15,
    suffix: "+",
    label: "Years Experience",
    sublabel: "Specialized in cabin, tiny home & barndominium engineering",
    icon: Award,
  },
  {
    value: 500,
    suffix: "+",
    label: "Engineered Builds",
    sublabel: "Completed residential, agricultural & commercial structures",
    icon: Building,
  },
  {
    value: 50,
    suffix: "+",
    label: "Architectural Plans",
    sublabel: "Pre-stamped architectural floor plans & custom configurations",
    icon: HardHat,
  },
  {
    value: 100,
    suffix: "%",
    label: "Structural Commitment",
    sublabel: "Commercial grade cold-formed and red iron steel backing",
    icon: Shield,
  },
];

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-[#F7F4EC] border-y border-[#E5E0D4] relative overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-sm bg-white border border-[#E5E0D4] hover:border-[#B82025] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#F7F4EC]">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B82025]">
                  0{idx + 1}
                </span>
                <stat.icon className="w-5 h-5 text-[#6B716D] group-hover:text-[#B82025] transition-colors" />
              </div>

              <div className="py-6">
                <div className="text-4xl sm:text-5xl font-black text-[#1D2521] font-display tracking-tight flex items-baseline">
                  <span>{isVisible ? stat.value : 0}</span>
                  <span className="text-[#B82025] ml-0.5">{stat.suffix}</span>
                </div>
                <div className="text-base font-bold uppercase tracking-wider text-[#1D2521] mt-2">
                  {stat.label}
                </div>
              </div>

              <p className="text-xs text-[#6B716D] leading-relaxed font-body">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
