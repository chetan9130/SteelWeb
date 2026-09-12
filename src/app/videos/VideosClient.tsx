"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Clock, Eye } from "lucide-react";
import { VIDEOS_DATA, VIDEO_CATEGORIES, VideoItem } from "@/data/videos";
import VideoCard from "@/components/VideoCard";
import VideoModal from "@/components/VideoModal";

export default function VideosClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const filteredVideos = VIDEOS_DATA.filter((v) =>
    selectedCategory === "All" ? true : v.category === selectedCategory
  );

  const featuredVideo = VIDEOS_DATA[0];

  return (
    <div className="min-h-screen bg-white pt-28 pb-28 text-[#1D2521]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#B82025] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#B82025]"></span>
            <span>Cinematic Film Gallery</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#1D2521] font-display leading-[0.95]">
            See Our Buildings <br />
            <span className="text-[#B82025]">Come To Life.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#6B716D] leading-relaxed font-body">
            Watch complete architectural walkthroughs, steel frame erection time-lapses, luxury interior detailing, and genuine homeowner build stories.
          </p>

          {/* Category Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {VIDEO_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#B82025] text-white shadow-md"
                    : "bg-[#F7F4EC] text-[#1D2521] hover:bg-[#17352A] hover:text-white border border-[#E5E0D4] shadow-xs"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Video Spotlight */}
        {selectedCategory === "All" && featuredVideo && (
          <div className="mb-16">
            <div
              onClick={() => setActiveVideo(featuredVideo)}
              className="group cursor-pointer relative aspect-[21/9] w-full rounded-sm overflow-hidden bg-black border border-[#E5E0D4] hover:border-[#B82025] transition-all duration-300 shadow-xl"
            >
              <Image
                src={featuredVideo.thumbnail}
                alt={featuredVideo.title}
                fill
                priority
                sizes="100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-85 group-hover:brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

              {/* Play Badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-[#B82025] text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-[#8F171C] transition-all duration-300 shadow-2xl">
                  <Play className="w-8 h-8 ml-1 fill-current" />
                </div>
              </div>

              {/* Bottom Info Banner */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="max-w-2xl space-y-2">
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-[#B82025] text-white rounded-xs">
                    Featured Tour • {featuredVideo.category}
                  </span>
                  <h2 className="text-xl sm:text-3xl font-black uppercase text-white font-display">
                    {featuredVideo.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-white/85 hidden sm:block">
                    {featuredVideo.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-white shrink-0 bg-black/60 px-4 py-2 rounded-xs border border-white/20">
                  <span>{featuredVideo.duration}</span>
                  <span>•</span>
                  <span>{featuredVideo.views}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredVideos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onPlay={(v) => setActiveVideo(v)}
            />
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </div>
  );
}
