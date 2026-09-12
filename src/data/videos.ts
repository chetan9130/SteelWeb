export interface VideoItem {
  id: string;
  title: string;
  category: "Building Tours" | "Construction" | "Interiors" | "Customer Projects";
  duration: string;
  description: string;
  thumbnail: string;
  modelSlug?: string;
  views: string;
  date: string;
  videoUrl: string; // Simulated MP4 / YouTube embed
}

export const VIDEO_CATEGORIES = [
  "All",
  "Building Tours",
  "Construction",
  "Interiors",
  "Customer Projects",
] as const;

export const VIDEOS_DATA: VideoItem[] = [
  {
    id: "vid-1",
    title: "The Hawthorne 2,400 SQ FT Barndominium Full Architectural Tour",
    category: "Building Tours",
    duration: "6:45",
    description: "Take an in-depth walkthrough of our flagship Modern Series barndominium featuring 18-foot vaulted ceilings and Scandinavian finishes.",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    modelSlug: "the-hawthorne",
    views: "184K views",
    date: "2 weeks ago",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "vid-2",
    title: "Erecting a 60x100 Red Iron Clear-Span Steel Frame in 48 Hours",
    category: "Construction",
    duration: "8:20",
    description: "Time-lapse and engineering breakdown showing how bolt-together pre-engineered steel frames go from anchor bolts to standing structure.",
    thumbnail: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    views: "92K views",
    date: "1 month ago",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "vid-3",
    title: "Luxury Barndominium Interior Design: Black Steel, Oak & Concrete",
    category: "Interiors",
    duration: "5:15",
    description: "Explore the custom interior carpentry, polished aggregate concrete radiant floors, and blackened steel kitchen finishes.",
    thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    views: "245K views",
    date: "3 weeks ago",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "vid-4",
    title: "The Montana Blackwood: Customer Build Story & Workshop Life",
    category: "Customer Projects",
    duration: "9:40",
    description: "Hear from the Miller family about building their 3,200 sq ft dream home with an integrated RV workshop in Big Sky, Montana.",
    thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    modelSlug: "the-blackwood-ranch",
    views: "310K views",
    date: "2 months ago",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "vid-5",
    title: "Alpine Gable Cabin: Heavy Snow Load Engineering at 8,500 Feet",
    category: "Building Tours",
    duration: "4:50",
    description: "Designed for extreme elements: watch how the 10:12 pitch steep steel roof sheds alpine snow loads without structural compromise.",
    thumbnail: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
    modelSlug: "the-alpine-gable-cabin",
    views: "74K views",
    date: "1 month ago",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "vid-6",
    title: "Why Cold-Formed Steel Beats Traditional Stick Framing Every Time",
    category: "Construction",
    duration: "7:10",
    description: "An engineer's side-by-side comparison of termite vulnerability, rot, fire resistance, dimensional stability, and framing speed.",
    thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    views: "420K views",
    date: "3 months ago",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "vid-7",
    title: "Inside The Ridgeway Estate: Modern Luxury Barndominium Masterpiece",
    category: "Building Tours",
    duration: "11:05",
    description: "A complete room-by-room tour of 4,800 sq ft of architectural steel architecture, custom king-post trusses, and glass breezeways.",
    thumbnail: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    modelSlug: "the-ridgeway-estate",
    views: "512K views",
    date: "4 months ago",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "vid-8",
    title: "Off-Grid Cabin Build: Foundation to Dry-In in Just 7 Days",
    category: "Customer Projects",
    duration: "12:30",
    description: "A remote build on an off-grid 20-acre parcel in Idaho using our pre-engineered Summit Ridge steel kit.",
    thumbnail: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
    modelSlug: "the-summit-ridge-cabin",
    views: "190K views",
    date: "2 months ago",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];
