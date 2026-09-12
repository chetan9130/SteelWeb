import { notFound } from "next/navigation";
import { BUILDING_MODELS } from "@/data/models";
import ModelDetailClient from "@/app/models/[slug]/ModelDetailClient";

export function generateStaticParams() {
  return BUILDING_MODELS.map((m) => ({
    slug: m.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const model = BUILDING_MODELS.find((m) => m.slug === slug);
  if (!model) return { title: "Building Not Found | VORTEX STEEL" };

  return {
    title: `${model.name} (${model.sqft} SQ FT) | VORTEX STEEL`,
    description: model.description,
  };
}

export default async function BuildingSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const model = BUILDING_MODELS.find((m) => m.slug === slug);

  if (!model) {
    notFound();
  }

  const relatedModels = BUILDING_MODELS.filter(
    (m) => m.id !== model.id && (m.category === model.category || m.series === model.series)
  ).slice(0, 3);

  return <ModelDetailClient model={model} relatedModels={relatedModels} />;
}
