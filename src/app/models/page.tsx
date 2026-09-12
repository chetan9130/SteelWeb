import { Suspense } from "react";
import ModelsCatalog from "./ModelsCatalog";

export const metadata = {
  title: "Architectural Models & Building Catalog | VORTEX STEEL",
  description: "Browse our complete catalog of pre-engineered barndominiums, steel buildings, modern cabins, and commercial building kits with transparent pricing and customizable specs.",
};

export default function ModelsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#111315] pt-32 text-center text-[#73777A]">Loading catalog...</div>}>
      <ModelsCatalog />
    </Suspense>
  );
}
