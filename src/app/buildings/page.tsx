import { Suspense } from "react";
import ModelsCatalog from "../models/ModelsCatalog";

export const metadata = {
  title: "Commercial & Residential Buildings | AMISH BUILT CABINS",
  description: "Explore our full catalog of residential barndominiums, agricultural workshops, modern cabins, and pre-engineered steel building kits.",
};

export default function BuildingsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#111315] pt-32 text-center text-[#73777A]">Loading buildings...</div>}>
      <ModelsCatalog />
    </Suspense>
  );
}
