import ModelsGrid from "@/components/ModelsGrid";
import { getModels } from "@/lib/models";
import { getCategoryBySlug } from "@/lib/categories";

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ categoryName: string }>;
  searchParams: Promise<{ sort?: string }>;
}) {
  const { categoryName } = await params;
  const sort = (await searchParams)?.sort?.toLowerCase() || "";
  const models = await getModels({
    query: undefined,
    sort,
    categorySlug: categoryName,
  });
  const category = await getCategoryBySlug(categoryName);

  return <ModelsGrid title={category.name} models={models} />;
}
