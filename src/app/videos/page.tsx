import { Suspense } from "react";
import VideosClient from "./VideosClient";

export const metadata = {
  title: "Video Gallery & Home Tours | ModularHome.com",
  description: "Watch in-depth walkthroughs of our modular homes, prefabs, barndominiums, cabins, and customer project stories.",
};

export default function VideosPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#111315] pt-32 text-center text-[#73777A]">Loading videos...</div>}>
      <VideosClient />
    </Suspense>
  );
}
