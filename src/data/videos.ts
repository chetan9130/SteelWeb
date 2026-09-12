export interface VideoItem {
  id: string;
  title: string;
  category: "Building Tours" | "Construction" | "Delivery" | "Interior" | "Customer Stories";
  duration: string;
  description: string;
  thumbnail: string;
  modelSlug?: string;
  views: string;
  date: string;
  videoUrl: string;
}

export const VIDEO_CATEGORIES = [
  "All",
  "Building Tours",
  "Construction",
  "Delivery",
  "Interior",
  "Customer Stories",
] as const;

export const VIDEOS_DATA: VideoItem[] = [
  {
    id: "vid-1",
    title: "The Homestead Cabin: Handcrafted Heritage & Steel Core Tour",
    category: "Building Tours",
    duration: "4:30",
    description: "Take an in-depth tour of The Homestead Cabin featuring vaulted timber ceilings and structural steel framework.",
    thumbnail: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    modelSlug: "the-homestead-cabin",
    views: "184K views",
    date: "2 weeks ago",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "vid-2",
    title: "48-Hour Clear-Span Rigid Frame Erection Time-Lapse",
    category: "Construction",
    duration: "6:15",
    description: "Watch our pre-engineered bolt-together structural steel frame stand up in just 2 days.",
    thumbnail: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    views: "92K views",
    date: "1 month ago",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "vid-3",
    title: "Nationwide Flatbed Logistics & Crane Jobsite Offload",
    category: "Delivery",
    duration: "3:45",
    description: "From our manufacturing facility directly to your property: see how safe delivery is guaranteed nationwide.",
    thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    views: "64K views",
    date: "3 weeks ago",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "vid-4",
    title: "Modern Cabin Luxury Interiors: Cedar, Glass & Polished Concrete",
    category: "Interior",
    duration: "5:20",
    description: "Tour custom wood-slat feature walls, open chef's kitchen, and panoramic picture windows.",
    thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    views: "210K views",
    date: "2 weeks ago",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "vid-5",
    title: "The Miller Family: Montana Mountain Homestead Story",
    category: "Customer Stories",
    duration: "8:50",
    description: "Hear firsthand from owners who built their forever ranch cabin on 40 acres in the Rockies.",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    views: "340K views",
    date: "1 month ago",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];
