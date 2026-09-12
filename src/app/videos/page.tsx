import { Suspense } from "react";
import VideosClient from "./VideosClient";

export const metadata = {
  title: "Cinematic Video Gallery & Building Tours | AMISH BUILT CABINS",
  description: "Watch in-depth walkthroughs of our barndominiums, time-lapses of rigid steel frame erection, luxury interior finishes, and customer project stories.",
};

export default function VideosPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#111315] pt-32 text-center text-[#73777A]">Loading videos...</div>}>
      <VideosClient />
    </Suspense>
  );
}
