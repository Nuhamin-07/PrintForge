import { getModels, getModelCount } from "@/lib/models";
import ModelsBrowser from "@/components/ModelsBrowser";
import { MODELS_PER_PAGE } from "@/lib/constants";
import { getQueryParams } from "@/lib/utils";
import { redirect } from "next/navigation";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; sort?: string; page?: string }>;
}) {
  const { query, sort, page } = getQueryParams(await searchParams);

  const models = await getModels({
    query: query,
    sort: sort || undefined,
    page,
    modelsPerPage: MODELS_PER_PAGE,
  });

  const modelCount = await getModelCount({ query: query });
  const totalPages = Math.max(1, Math.ceil(modelCount / MODELS_PER_PAGE));

  if (page < 1 || page > totalPages || sort === null) {
    redirect("/3d-models");
  }

  return (
    <ModelsBrowser
      search={query}
      models={models}
      totalPages={totalPages}
      currentPage={page}
    />
  );
}
