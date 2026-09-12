"use client";

import Image from "next/image";
import { Play, Clock, Eye } from "lucide-react";
import { VideoItem } from "@/data/videos";

interface VideoCardProps {
  video: VideoItem;
  onPlay: (video: VideoItem) => void;
}

export default function VideoCard({ video, onPlay }: VideoCardProps) {
  return (
    <div
      onClick={() => onPlay(video)}
      className="group cursor-pointer flex flex-col bg-white border border-[#E5E0D4] hover:border-[#C8753D] rounded-sm overflow-hidden transition-all duration-300 shadow-xs hover:shadow-md"
    >
      {/* Thumbnail Viewport */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F3EFE6]">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-70 group-hover:opacity-40 transition-opacity" />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/95 border border-[#E5E0D4] text-[#111315] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#C8753D] group-hover:border-[#C8753D] group-hover:text-white shadow-xl">
            <Play className="w-5 h-5 ml-1 fill-current" />
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-white/95 backdrop-blur-md text-[#111315] border border-[#E5E0D4] rounded-xs shadow-xs">
            {video.category}
          </span>
        </div>

        <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold bg-white/95 text-[#111315] rounded-xs border border-[#E5E0D4] shadow-xs">
          <Clock className="w-3 h-3 text-[#C8753D]" />
          <span>{video.duration}</span>
        </div>
      </div>

      {/* Details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <h3 className="text-base font-bold uppercase tracking-tight text-[#111315] group-hover:text-[#C8753D] transition-colors line-clamp-2 font-display">
            {video.title}
          </h3>
          <p className="text-xs text-[#64748B] line-clamp-2 mt-2 leading-relaxed">
            {video.description}
          </p>
        </div>

        <div className="pt-3 border-t border-[#EFE8DC] flex items-center justify-between text-xs text-[#64748B]">
          <span className="flex items-center gap-1.5 font-medium">
            <Eye className="w-3.5 h-3.5 text-[#C8753D]" />
            {video.views}
          </span>
          <span>{video.date}</span>
        </div>
      </div>
    </div>
  );
}
