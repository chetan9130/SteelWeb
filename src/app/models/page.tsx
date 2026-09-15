import { Suspense } from "react";
import ModelsCatalog from "./ModelsCatalog";

export const metadata = {
  title: "Floor Plans & Home Catalog | ModularHome.com",
  description: "Browse our complete catalog of modular homes, prefabs, barndominiums, cabins, ADUs, and custom floor plans with transparent pricing and customizable specs.",
};

export default function ModelsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#111315] pt-32 text-center text-[#73777A]">Loading catalog...</div>}>
      <ModelsCatalog />
    </Suspense>
  );
}
