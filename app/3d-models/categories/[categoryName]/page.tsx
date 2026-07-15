import { getModels, getModelCount } from "@/lib/models";
import { getCategoryBySlug } from "@/lib/categories";
import ModelsBrowser from "@/components/ModelsBrowser";
import { notFound } from "next/navigation";
import { MODELS_PER_PAGE } from "@/lib/constants";
import { getQueryParams } from "@/lib/utils";
import { redirect } from "next/navigation";

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ categoryName: string }>;
  searchParams: Promise<{ sort?: string; query?: string; page?: string }>;
}) {
  const { categoryName } = await params;
  const { query, sort, page } = getQueryParams(await searchParams);

  const models = await getModels({
    query,
    sort: sort || undefined,
    categorySlug: categoryName,
    page,
    modelsPerPage: MODELS_PER_PAGE,
  });
  const category = await getCategoryBySlug(categoryName);
  if (!category) {
    notFound();
  }

  const modelCount = await getModelCount({ query, categorySlug: categoryName });
  const totalPages = Math.max(1, Math.ceil(modelCount / MODELS_PER_PAGE));

  if (page < 1 || page > totalPages || sort === null) {
    redirect(`/3d-models/categories/${categoryName}`);
  }

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
