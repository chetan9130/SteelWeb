import { Suspense } from "react";
import ModelsCatalog from "../models/ModelsCatalog";

export const metadata = {
  title: "Commercial & Residential Homes | ModularHome.com",
  description: "Explore our full catalog of modular homes, prefabs, barndominiums, cabins, ADUs, and commercial building solutions.",
};

export default function BuildingsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#111315] pt-32 text-center text-[#73777A]">Loading buildings...</div>}>
      <ModelsCatalog />
    </Suspense>
  );
}
