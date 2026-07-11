import { getModels, getModelCount } from "@/lib/models";
import { getCategoryBySlug } from "@/lib/categories";
import ModelsBrowser from "@/components/ModelsBrowser";
import { notFound } from "next/navigation";
import { MODELS_PER_PAGE } from "@/lib/constants";

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ categoryName: string }>;
  searchParams: Promise<{ sort?: string; query?: string; page?: string }>;
}) {
  const { categoryName } = await params;
  const sort = (await searchParams)?.sort?.toLowerCase() || "";
  const query = (await searchParams)?.query?.trim().toLowerCase() || "";
  const page = Number((await searchParams).page) || 1;

  const models = await getModels({
    query,
    sort,
    categorySlug: categoryName,
    page,
    MODELS_PER_PAGE,
  });
  const category = await getCategoryBySlug(categoryName);
  if (!category) {
    notFound();
  }

  const modelCount = await getModelCount({ query, categorySlug: categoryName });
  const totalPages = Math.ceil(modelCount / MODELS_PER_PAGE);

  return (
    <ModelsBrowser
      categoryName={category.name}
      models={models}
      search={query}
      totalPages={totalPages}
      currentPage={page}
    />
  );
}
