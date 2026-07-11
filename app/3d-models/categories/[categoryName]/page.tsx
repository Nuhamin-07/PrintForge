import { getModels } from "@/lib/models";
import { getCategoryBySlug } from "@/lib/categories";
import ModelsBrowser from "@/components/ModelsBrowser";
import { notFound } from "next/navigation";

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
  if (!category) {
    notFound();
  }

  return <ModelsBrowser categoryName={category.name} models={models} />;
}
