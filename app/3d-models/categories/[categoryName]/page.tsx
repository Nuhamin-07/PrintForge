import ModelsGrid from "@/app/components/ModelsGrid";
import { getCategoryBySlug } from "@/lib/categories";
import { getModels } from "@/lib/models";
import type { CategoryPageProps } from "@/app/types";

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryName } = await params;
  const category = getCategoryBySlug(categoryName);
  const models = await getModels({ category: categoryName });

  return <ModelsGrid title={category.displayName} models={models} />;
}
