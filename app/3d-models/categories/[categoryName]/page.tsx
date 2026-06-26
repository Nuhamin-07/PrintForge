import ModelsGrid from "@/components/ModelsGrid";
import { getModelsByCategorySlug } from "@/lib/models";
import { getCategoryBySlug } from "@/lib/categories";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categoryName: string }>;
}) {
  const { categoryName } = await params;
  const models = await getModelsByCategorySlug(categoryName);
  const category = await getCategoryBySlug(categoryName);

  return <ModelsGrid title={category.name} models={models} />;
}
