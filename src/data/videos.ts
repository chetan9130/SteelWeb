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
    title: "Beautiful Cabin Tour",
    category: "Building Tours",
    duration: "5:12",
    description: "Take a closer look at our handcrafted log cabin designs and custom timber finishes.",
    thumbnail: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    modelSlug: "the-oakridge",
    views: "184K views",
    date: "2 weeks ago",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "vid-2",
    title: "Barndominium Build Process",
    category: "Construction",
    duration: "6:24",
    description: "Watch our step-by-step construction process from site preparation to final walkthrough.",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    views: "92K views",
    date: "1 month ago",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "vid-3",
    title: "Customer Story",
    category: "Customer Stories",
    duration: "6:15",
    description: "Hear from real homeowners about their experience building with ModularHome.com.",
    thumbnail: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
    views: "64K views",
    date: "3 weeks ago",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "vid-4",
    title: "Inside a Lofted Cabin",
    category: "Interior",
    duration: "4:27",
    description: "Explore the interior layout, loft space, and custom woodwork inside our lofted cabins.",
    thumbnail: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
    views: "210K views",
    date: "2 weeks ago",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];
